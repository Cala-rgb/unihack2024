const handler = require('./db_handler.js');
const parkingSchema = require('./models/parking.js');
const biketrackSchema = require('./models/biketrack.js');
const userReportSchema = require('./models/user_report.js');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const { spawn } = require('child_process');
const fs = require('fs');
const client = require('https');
const Axios = require('axios')

app = express();
app.use(bodyParser.json());

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'uploads/');
    },
    filename: function (req, file, callback) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      callback(null, uniqueSuffix + path.extname(file.originalname));
    }
  });
  
  async function downloadImage(url, filepath) {
    console.log(url);
    const response = await Axios({
        url,
        method: 'GET',
        responseType: 'stream'
    });
    return new Promise((resolve, reject) => {
        response.data.pipe(fs.createWriteStream(filepath))
            .on('error', reject)
            .once('close', () => resolve(filepath)); 
    });
}

  app.post('/api/download/frame', (req, res) => {
    url = req.query.url
    lat = req.query.lat
    long = req.query.long
    downloadImage(url, 'downloads/image.jpg').then((filepath) => {
        const pythonProcess = spawn('python3', ['../ai/exemple.py', filepath]);
        all_data = "";
        pythonProcess.stdout.on('data', (data) => {
            all_data += data;
        });
        pythonProcess.stderr.on('data', (data) => {
            console.error(`Python error: ${data}`);
        });
        pythonProcess.on('close', (code) => {
            if (code === 0) {
                res.send({
                    message: 'Image uploaded and analyzed successfully',
                    analysis: all_data,
                });
            } else {
                res.status(500).send({ message: 'Image upload succeeded, but analysis failed' });
            }
        }
        );
    }
    );
});

  const upload = multer({ storage: storage });
  
  //TODO: AICI BAGAT UN UPLOAD LA BAZA DE DATE CARE FACE CEVA CU POZA ASTA PE CARE AM PRIMIT-O
  app.post('/api/upload/frame', upload.single('image'), (req, res) => {
      if (!req.file) {
        return res.status(400).send({ message: 'No file uploaded' });
      }
    
      const imagePath = path.join(__dirname, 'uploads', req.file.filename);
    
      const pythonProcess = spawn('python3', ['../ai/exemple.py', imagePath]);
    
      all_data = "";
  
      pythonProcess.stdout.on('data', (data) => {
        all_data += data;
      });
    
      pythonProcess.stderr.on('data', (data) => {
        console.error(`Python error: ${data}`);
      });
    
      pythonProcess.on('close', (code) => {
        if (code === 0) {
          res.send({
            message: 'Image uploaded and analyzed successfully',
            file: req.file,
            analysis: all_data,
          });
        } else {
          res.status(500).send({ message: 'Image upload succeeded, but analysis failed' });
        }
      });
  });

app.get('/api/parkingSpaces', async (req, res) => {
    const longitude = req.query.longitude;
    const latitude = req.query.latitude;
    const radius = req.query.radius;
    const result = await handler.getParkingSpaces(longitude, latitude, radius);
    if (result.length === 0) {
        res.status(404).send("No parking spaces found");
    }
    res.status(200).send(result);
});

app.get('/api/parkingSpacesByZone', async (req, res) => {
    const zone = req.query.zone;
    const result = await handler.getParkingSpacesByZone(zone);
    if (result.length === 0) {
        res.status(404).send("No parking spaces found");
    }
    res.status(200).send(result);
});

app.get('/api/parkingSpacesAll', async (req, res) => {
    const result = await handler.getParkingSpacesAll();
    if (result.length === 0) {
        res.status(404).send("No parking spaces found");
    }
    res.status(200).send(result);
});

app.get('/api/bikeTracks', async (req, res) =>{
    const result = await handler.getAllBikeTracks();
    if(result.length == 0){
        res.status(404).send("No bike tracks were found");
    }
    res.status(200).send(result);
});

app.post('/api/userReport', async (req, res) => {
    const longitude = req.query.longitude;
    const latitude = req.query.latitude;
    const free_spaces = req.query.free_space;
    const user_id = req.query.user_id;
    await handler.sendUserReport({
        user_id: user_id,
        latitude: latitude,
        longitude: longitude,
        free_spaces: free_spaces
    });
    res.status(200).send("User report received");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
