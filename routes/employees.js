const express = require('express');
const passport = require('passport');
const router = express.Router();
const empController = require('../controllers/employeeController');

router.get('/getAll', passport.checkAuthentication, empController.allEmp);
router.get('/destroy/:id', passport.checkAuthentication, empController.destroyEmp);

module.exports = router;