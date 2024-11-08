import mongoose from 'mongoose';

const { Schema } = mongoose;

const parkingSchema = new Schema({
    name: {type: String, default: "unnamed"},
    poly_points: {type: [{latitude: Number, longitude: Number}], required: true},
    zone: {type: String, default: "None"},
    price: {type: Number, default: 0},
    free_spaces: {type: Number, default: 0},
    total_spaces: {type: Number, required: true},
});

module.exports = parkingSchema;