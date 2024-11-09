const mongoose = require('mongoose');

const userReportSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    free_spaces: {
        type: Number,
        default: 0
    },
});