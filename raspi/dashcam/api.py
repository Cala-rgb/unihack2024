import time
import subprocess
import threading
from flask import Flask, send_file, jsonify, render_template_string
from gpiozero import Button, LED
import glob
import os

app = Flask(__name__)

# Global variables
recording_process = None
frame_saving_process = None
is_recording = False
is_saving_frames = False
file_index = 1

# Paths for the video files in a rotating sequence (REC1.mp4 to REC4.mp4)
file_paths = [
    "/home/bogdan/REC1.mp4",
    "/home/bogdan/REC2.mp4",
    "/home/bogdan/REC3.mp4",
    "/home/bogdan/REC4.mp4"
]

frame_folder = "/home/bogdan/frames"  # Directory where frames are saved

# HTML template for the main interface
html_template = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashcam</title>
</head>
<body>
    <h1>Dashcam Control</h1>

    <!-- Redirect Buttons -->
    <button onclick="window.location.href='/start'">Start Recording</button>
    <button onclick="window.location.href='/stop'">Stop Recording</button>
    
    <hr>

    <!-- Frame Saving Buttons -->
    <button onclick="window.location.href='/save-frames/start'">Start Saving Frames</button>
    <button onclick="window.location.href='/save-frames/stop'">Stop Saving Frames</button>

    <hr>

    <!-- Download Buttons -->
    <h2>Download Videos</h2>
    <button onclick="window.location.href='/download/1'">Download 1</button>
    <button onclick="window.location.href='/download/2'">Download 2</button>
    <button onclick="window.location.href='/download/3'">Download 3</button>
    <button onclick="window.location.href='/download/4'">Download 4</button>

    <hr>

    <!-- Download and Reset Frames Button -->
    <h2>Download Most Recent Frame and Reset</h2>
    <button onclick="window.location.href='/download-latest-frame'">Download Latest Frame and Reset</button>
</body>
</html>
"""

# Function to start recording
def start_recording():
    global recording_process, is_recording, file_index

    current_path = file_paths[(file_index - 1) % 4]
    file_index = (file_index % 4) + 1  # Update index for the next file

    # Start ffmpeg process to record video
    recording_process = subprocess.Popen([
        'ffmpeg', '-y', '-f', 'v4l2', '-framerate', '30', '-video_size', '1280x720',
        '-i', '/dev/video0',
        '-c:v', 'libx264', '-preset', 'veryfast', '-r', '30', '-t', '00:20:00',
        '-movflags', 'faststart', current_path
    ])
    recording_process.wait()

# Function to start saving frames every 2 seconds
def start_saving_frames():
    global frame_saving_process, is_saving_frames

    if not is_saving_frames:
        is_saving_frames = True
        frame_saving_process = subprocess.Popen([
            'ffmpeg', '-y', '-f', 'v4l2', '-i', '/dev/video2',
            '-vf', 'fps=1/2', '-vsync', 'vfr', f'{frame_folder}/frame_%03d.png'
        ])
        return jsonify({"status": "Frame saving started"}), 200
    else:
        return jsonify({"status": "Frame saving is already active"}), 400

# Function to stop saving frames
def stop_saving_frames():
    global frame_saving_process, is_saving_frames

    if is_saving_frames:
        is_saving_frames = False
        frame_saving_process.terminate()
        frame_saving_process.wait()
        frame_saving_process = None
        return jsonify({"status": "Frame saving stopped"}), 200
    else:
        return jsonify({"status": "No active frame saving to stop"}), 400

# Route to download the most recent frame, delete all frames, and reset index
@app.route('/download-latest-frame', methods=['GET'])
def download_latest_frame():
    # Get the most recent frame file
    frames = glob.glob(f"{frame_folder}/frame_*.png")
    if not frames:
        return jsonify({"status": "No frames found"}), 404

    latest_frame = max(frames, key=os.path.getctime)

    # Send the latest frame as a download
    response = send_file(latest_frame, as_attachment=True)

    # Delete all frames in the folder
    for frame in frames:
        os.remove(frame)

    return response

@app.route('/start', methods=['GET'])
def start():
    global is_recording
    if is_recording:
        return jsonify({"status": "Recording already in progress"}), 400

    is_recording = True
    threading.Thread(target=start_recording).start()
    return jsonify({"status": "Recording started"}), 200

@app.route('/stop', methods=['GET'])
def stop():
    global recording_process, is_recording
    if not is_recording:
        return jsonify({"status": "No active recording to stop"}), 400

    is_recording = False
    if recording_process:
        recording_process.terminate()
        recording_process.wait()
        recording_process = None
    last_file_index = (file_index - 1) if file_index > 1 else 4
    last_file_name = f"REC{last_file_index}.mp4"
    return jsonify({"status": f"Recording stopped and saved as {last_file_name}"}), 200

@app.route('/save-frames/start', methods=['GET'])
def save_frames_start():
    return start_saving_frames()

@app.route('/save-frames/stop', methods=['GET'])
def save_frames_stop():
    return stop_saving_frames()

@app.route('/download/<length>', methods=['GET'])
def downloadFile(length):
    if(length == "1"):
        path = "/home/bogdan/REC1.mp4"
    elif(length == "2"):
        path = "/home/bogdan/REC2.mp4"
    elif(length == "3"):
        path = "/home/bogdan/REC3.mp4"
    else:
        path = "/home/bogdan/REC4.mp4"

    return send_file(path, as_attachment=True)

@app.route('/', methods=['GET'])
def index():
    return render_template_string(html_template)

if __name__ == '__main__':
    try:
        app.run(host='0.0.0.0', port=5000, debug=True)
    except Exception as e:
        print(f"Error running Flask app: {e}")
