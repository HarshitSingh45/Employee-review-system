module.exports.home = (req, res) => {
    if(req.user.isAdmin){
        return res.render('homeAdmin');
    }else{
        return res.render('homeEmployee');
    }
}