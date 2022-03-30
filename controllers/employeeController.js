const Employees = require('../models/employee');
const Reviews = require('../models/reviews');

module.exports.allEmp = async(req, res) => {
    try{
        let employees = await Employees.find({isAdmin: false});
        return res.json({
            data: {
                employees: employees
            },
            message: 'Successfully retrieved all employees'
        });
    }catch(err){
        console.log('Error in finding all employees');
        return res.redirect('back');
    }
}
module.exports.destroyEmp = async(req,res) => {
    await Employees.findByIdAndDelete(req.params.id);
    return res.json({
        data: {
            empId: req.params.id
        }
    })

}
module.exports.makeAdmin = async(req,res) => {
    let emp = await Employees.findById(req.params.id);
    emp.isAdmin = true;
    emp.save();
    console.log(emp);
    return res.json({
        data: {
            empId: req.params.id
        }
    })

}

module.exports.empDetails = async(req, res) => {
    if(req.user.isAdmin){
        let emp = await Employees.findById(req.params.id);
        return res.render('empDetails',{
            emp
        })
    }else{
        return res.redirect('back');
    } 
}
module.exports.updateEmpDetails = async(req, res) => {
    try{
        if(req.user.isAdmin){
            let emp = await Employees.findById(req.params.id);
            emp.name = req.body.name;
            emp.email = req.body.email;
            emp.save();
            return res.render('empDetails',{
                emp
            })
        }else{
            return res.redirect('back');
        } 
    }catch(err){
        console.log('Error in updating employee details');
        return res.redirect('back');
    }
}

module.exports.addEmp = (req, res) => {
    return res.render('addEmp');
}

module.exports.createEmp = async(req, res) => {
    let emp = Employees.create(req.body);
    console.log(emp);
    return res.redirect('/');
}