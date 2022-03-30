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