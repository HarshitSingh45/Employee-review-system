const express = require('express');
const passport = require('passport');
const router = express.Router();
const empController = require('../controllers/employeeController');

router.get('/getAll', passport.checkAuthentication, empController.allEmp);
router.get('/destroy/:id', passport.checkAuthentication, empController.destroyEmp);
router.get('/makeAdmin/:id', passport.checkAuthentication, empController.makeAdmin);
router.get('/view/:id', passport.checkAuthentication, empController.empDetails);
router.post('/update/:id', passport.checkAuthentication, empController.updateEmpDetails);
router.get('/addEmp', passport.checkAuthentication, empController.addEmp);
router.post('/create', passport.checkAuthentication, empController.createEmp);


module.exports = router;