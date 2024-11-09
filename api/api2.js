const express = require('express');
const multer = require('multer');
const path = require('path');
const { spawn } = require('child_process');

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'uploads/');
  },
  filename: function (req, file, callback) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    callback(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

//TODO: AICI BAGAT UN UPLOAD LA BAZA DE DATE CARE FACE CEVA CU POZA ASTA PE CARE AM PRIMIT-O
app.post('/api2/upload/frame', upload.single('image'), (req, res) => {
    if (!req.file) {
      return res.status(400).send({ message: 'No file uploaded' });
    }
  
    const imagePath = path.join(__dirname, 'uploads', req.file.filename);
  
    const pythonProcess = spawn('python3', ['../ai/exemple.py', imagePath]);
  
    pythonProcess.stdout.on('data', (data) => {
      console.log(`Python output: ${data}`);
    });
  
    pythonProcess.stderr.on('data', (data) => {
      console.error(`Python error: ${data}`);
    });
  
    pythonProcess.on('close', (code) => {
      if (code === 0) {
        res.send({
          message: 'Image uploaded and analyzed successfully',
          file: req.file,
          analysis: 'Analysis completed'
        });
      } else {
        res.status(500).send({ message: 'Image upload succeeded, but analysis failed' });
      }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
