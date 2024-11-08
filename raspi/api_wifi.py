from flask import Flask, send_file

app = Flask(__name__)

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

if __name__ == '__main__':
    app.run(host='0.0.0.0.', port=5000, debug = True) 