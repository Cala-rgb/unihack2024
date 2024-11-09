const handler = require('./db_handler.js');
const parkingSchema = require('./models/parking.js');
const biketrackSchema = require('./models/biketrack.js');
const express = require('express');
const bodyParser = require('body-parser');

app = express();
app.use(bodyParser.json());

app.get('api/get/parkingSpaces', async (req, res) => {
    const longitude = req.query.longitude;
    const latitude = req.query.latitude;
    const radius = req.query.radius;
    const result = await handler.getParkingSpaces(longitude, latitude, radius);
    if (result.length === 0) {
        res.status(404).send("No parking spaces found");
    }
    res.status(200).send(result);
});

app.post('api/post/userReport', async (req, res) => {
    const userReport = req.body;
    await handler.sendUserReport(userReport);
    res.status(200).send("User report received");
});

