const Employees = require("../models/employee");
const Reviews = require('../models/reviews');

module.exports.assignPage = async(req, res) => {
    let employees = await Employees.find({isAdmin: false});
    return res.render('assignPR',{
        employees
    });
}
module.exports.allPR = async(req, res) => {
    let reviews = await Reviews.find({}).populate('reviewOf').populate('reviewBy');
    return res.render('allPR',{
        reviews
    });
}
module.exports.addReview = async(req, res) => {
    let review = await Reviews.create({
        reviewOf: req.body.reviewOf,
        reviewBy: req.body.reviewBy,
        isReviewed: false
    });
    return res.redirect('/assign/allPR');
}