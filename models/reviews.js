const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    friendly: {
        type: Number,
        required: true
    },
    cooperative: {
        type: Number,
        required: true
    },
    responsible: {
        type: Number,
        required: true
    },
    reviewOf: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employees'
    },
    reviewBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employees'
    },
    feedback: {
        type: String
    }
});

const Reviews = mongoose.model('Reviews', reviewSchema);
module.exports = Reviews;