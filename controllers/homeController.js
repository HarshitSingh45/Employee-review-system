const Reviews = require('../models/reviews');

module.exports.home = async (req, res) => {
    if(req.user.isAdmin){
        return res.render('homeAdmin');
    }else{
        let reviews = await Reviews.find({reviewBy: req.user._id, isReviewed: false}).populate('reviewOf').populate('reviewBy');
        return res.render('homeEmployee',{
            reviews
        });
    }
}