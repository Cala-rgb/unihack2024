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
    length: {type: Number, default: 0},
    quality: {type: Number, default: 0},
    totalScore: {type: Number, default: 0},
});

biketrackSchema.index({ geometry: "2dsphere" });
module.exports = biketrackSchema;