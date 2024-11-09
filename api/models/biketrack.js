const mongoose = require('mongoose');
const { Schema } = mongoose;

const biketrackSchema = new Schema({
    name: {type: String, default: "unnamed"},
    geometry: {
        type: {
            type: String,
            enum: ['LineString'],
            required: true,
            default: "LineString"
        },
        coordinates: {
            type: [[Number]],
            required: true
        }
    },
});

module.exports = biketrackSchema;