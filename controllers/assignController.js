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
    if(req.body.reviewOf == req.body.reviewBy){
        console.log('An employee cannot review his own performance review, Try using different employee')
        return res.redirect('back');
    }
    let review = await Reviews.create({
        reviewOf: req.body.reviewOf,
        reviewBy: req.body.reviewBy,
        isReviewed: false
    });
    return res.redirect('/assign/allPR');
}
module.exports.addPRAdmin = async(req, res) => {
    let employees = await Employees.find({isAdmin: false});
    return res.render('addPRAdmin', {
        employees
    })
}

module.exports.prbyAdmin = async(req, res) => {
    let review = Reviews.create({
        reviewOf: req.body.reviewOf,
        reviewBy: req.user._id,
        friendly: req.body.friendly,
        cooperative: req.body.cooperative,
        responsible: req.body.responsible,
        isReviewed: true
    });
    return res.redirect('/assign/allPR');
}