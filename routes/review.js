const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const passport = require('passport');

router.post('/submit/:id', passport.checkAuthentication, reviewController.submitReview);
router.get('/updatePage/:id', passport.checkAuthentication, reviewController.updatePage);
router.post('/update/:id', passport.checkAuthentication, reviewController.update);

module.exports = router;