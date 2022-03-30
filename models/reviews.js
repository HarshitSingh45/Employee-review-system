const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    friendly: {
        type: Number,
    },
    cooperative: {
        type: Number,
    },
    responsible: {
        type: Number,
    },
    reviewOf: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employees'
    },
    reviewBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employees'
    },
    isReviewed: {
        type: Boolean
    }
});

const Reviews = mongoose.model('Reviews', reviewSchema);
module.exports = Reviews;