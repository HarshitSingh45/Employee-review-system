const Employees = require('../models/employee');

module.exports.signup = (req, res) => {
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    return res.render('signup');
}

module.exports.signin = (req, res) => {
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    return res.render('signin');
}

module.exports.createUser = (req, res) => {
    if(req.body.password != req.body.cpassword){
        return res.redirect('back');
    }

    Employees.findOne({email: req.body.email}, (err, employee) => {
        if(err){ console.log('Error in finding the user'); return }
        if(employee){
            return res.redirect('signin');
        }else{
            Employees.create(req.body, (err, employee) => {
                if(err){ console.log('Error in creating the employee'); return}
                return res.render('signin');
            })
        }
    })
}

module.exports.createSession = (req, res) => {
    console.log(req.user.isAdmin);
    if(req.user.isAdmin){
        return res.redirect('/');
    }else{
        return res.redirect('/');
    }
}

module.exports.destroySession = (req, res) => {
    req.logOut();
    return res.redirect('/');
}