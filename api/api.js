const handler = require('./db_handler.js');
const parkingSchema = require('./models/parking.js');
const biketrackSchema = require('./models/biketrack.js');
const express = require('express');
const bodyParser = require('body-parser');

app = express();
app.use(bodyParser.json());

app.get('/api/get/parkingSpaces', async (req, res) => {
    const longitude = req.query.longitude;
    const latitude = req.query.latitude;
    const radius = req.query.radius;
    const result = await handler.getParkingSpaces(longitude, latitude, radius);
    if (result.length === 0) {
        res.status(404).send("No parking spaces found");
    }
    res.status(200).send(result);
});

app.get('/api/get/parkingSpacesByZone', async (req, res) => {
    const zone = req.query.zone;
    const result = await handler.getParkingSpacesByZone(zone);
    if (result.length === 0) {
        res.status(404).send("No parking spaces found");
    }
    res.status(200).send(result);
});

app.get('/api/get/parkingSpacesAll', async (req, res) => {
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

app.post('/api/post/userReport', async (req, res) => {
    const userReport = req.body;
    await handler.sendUserReport(userReport);
    res.status(200).send("User report received");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
