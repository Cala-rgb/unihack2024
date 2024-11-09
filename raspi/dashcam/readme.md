# API Usage

The API consists of several endpoints:

## Recording Control

- **Start Recording**:  
  `GET /start`  
  Starts recording to a rotating sequence of video files.

- **Stop Recording**:  
  `GET /stop`  
  Stops the recording and saves the current video file.

## Frame Saving

- **Start Saving Frames**:  
  `GET /save-frames/start`  
  Starts saving frames every 2 seconds to a specified directory.

- **Stop Saving Frames**:  
  `GET /save-frames/stop`  
  Stops saving frames.

## Download Files

- **Download Specific Video**:  
  `GET /download/<video_id>`  
  Replace `<video_id>` with `1`, `2`, `3`, or `4` to download the respective video file (REC1.mp4 to REC4.mp4).

- **Download Most Recent Frame and Reset**:  
  `GET /download-latest-frame`  
  Downloads the most recent saved frame, clears all saved frames, and resets the frame index.

# Web Interface Guide

- **Start/Stop Recording**:  
  Start and stop recording to a rotating sequence of video files.

- **Start/Stop Frame Saving**:  
  Save frames every 2 seconds to a specified directory.

- **Download Videos**:  
  Download any of the last four recorded videos.

- **Download Latest Frame and Reset**:  
  Download the most recent saved frame, clear all saved frames, and reset the index.
