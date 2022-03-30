const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const passport = require('passport');

router.post('/submit/:id', passport.checkAuthentication, reviewController.submitReview);

module.exports = router;