const mongoose = require('mongoose');
const { Schema } = mongoose;

const parkingSchema = new Schema({
    name: { type: String, default: "unnamed" },
    geometry: {
        type: {
            type: String, 
            enum: ['Polygon'],
            required: true,
            default: "Polygon"
        },
        coordinates: {
            type: [[[Number]]],
            required: true
        }
    },
    zone: { type: String, default: "None" },
    price: { type: Number, default: 0 },
    free_spaces: { type: Number, default: 0 },
    total_spaces: { type: Number, required: true },
});

parkingSchema.index({ geometry: "2dsphere" });

module.exports = mongoose.model('Parking', parkingSchema);
