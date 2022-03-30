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