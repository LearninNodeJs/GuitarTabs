const {User} = require('../model');

exports.register = async function(req,res){
    try{
        const user = await User.create(req.body)
        res.status(400).json({
            message:'User Created Successfully',
            user
        })
    }catch (e) {
        console.log(e.message);
        res.status(500).json({
            error:e.message
        })
    }
};