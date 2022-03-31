const Reviews = require('../models/reviews');
module.exports.submitReview = async(req, res) => {
    let review = await Reviews.findById(req.params.id);
    review.friendly = req.body.friendly;
    review.cooperative = req.body.cooperative;
    review.responsible = req.body.responsible;
    review.isReviewed = true;
    review.save();
    return res.redirect('/');
}

module.exports.updatePage = async(req, res) => {
    let review = await Reviews.findById(req.params.id).populate('reviewOf');
    return res.render('updatePR', {
        review
    });
}
module.exports.update = async(req, res) => {
    let review = await Reviews.findById(req.params.id);
    review.friendly = req.body.friendly;
    review.cooperative = req.body.cooperative;
    review.responsible = req.body.responsible;
    review.reviewBy = req.user._id;
    review.save();
    return res.redirect('/assign/allPR');
}