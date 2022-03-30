const mongoose =require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    pendingReview: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Reviews'
        },
    ],
    pendingFeedback: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Reviews'
        },
    ]

},{
    timestamps: true
});

const Employees = mongoose.model('Employees', employeeSchema);
module.exports = Employees;