const mongoose = require('mongoose');
const { Schema } = mongoose;

const biketrackSchema = new Schema({
    name: {type: String, default: "unnamed"},
    line_points: {type: [{latitude: Number, longitude: Number}], required: true},
});

module.exports = biketrackSchema;