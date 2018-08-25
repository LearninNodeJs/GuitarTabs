const {User} = require('../model');


exports.register = async function(req,res){
    try{
        const user = await User.create(req.body);
        res.status(201).json({
            message:'User Created Successfully',
            user
        })
    }catch (e) {
        console.log(e.message);
        res.status(409).json({
            error:'Email Address is Already in use, Please Try another email'
        })
    }
};

exports.login = async function(req,res){
    try{
        const {email,password} = req.body;
        const user = await User.findOne({
           where:{
               email:email
           }
        });
        if(!user){
            return  res.status(403).json({
                error:'Provided Information was Incorrect'
            })
        }
        const isPasswordValid = password === user.password;
        if(!isPasswordValid){
            return res.status(403).json({
                error:'Provided Information is not Correct'
            });
        }

        res.status(201).json({
            message:'Authentication was Successful',
            user
        });

    }catch (e) {
        res.status(500).json({
            error:e.message
        })
    }
};