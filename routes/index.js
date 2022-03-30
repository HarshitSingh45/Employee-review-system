const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const passport = require('passport');

router.get('/',passport.checkAuthentication, homeController.home);
router.use('/users', require('./users')); 
router.use('/employees', require('./employees'));
router.use('/assign', require('./assign'));
router.use('/review', require('./review'));

module.exports = router;