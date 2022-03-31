const express = require('express');
const router = express.Router();
const assignController = require('../controllers/assignController');
const passport = require('passport');

router.get('/',passport.checkAuthentication, assignController.assignPage);
router.get('/allPR',passport.checkAuthentication, assignController.allPR);
router.post('/addPR',passport.checkAuthentication, assignController.addReview);
router.get('/addPRAdmin', passport.checkAuthentication, assignController.addPRAdmin);
router.post('/prbyAdmin', passport.checkAuthentication, assignController.prbyAdmin);

module.exports =router;