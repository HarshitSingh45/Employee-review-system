const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Employees = require('../models/employee');

passport.use(new LocalStrategy({
    usernameField: 'email'
},
function(email, password, done){
    Employees.findOne({email: email}, function(err, employee){
        if(err) {return done(err);}
        if(!employee || employee.password != password){ return done(null, false);}
        return done(null, employee);
    })
}))

passport.serializeUser(function(employee, done){
    return done(null, employee.id);
})

passport.deserializeUser(function(id, done){
    Employees.findById(id, function(err, employee){
        if(err){ return done(err);}
        return done(null, employee);
    })
})

passport.checkAuthentication = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/users/signin');
}

passport.isAuthenticatedUser = function(req, res, next){
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
}

module.exports = passport;