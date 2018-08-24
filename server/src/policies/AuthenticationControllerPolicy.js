const Joi = require('joi');
exports.registerValidation =  function(req,res,next){
    const schema = {
      email:Joi.string().email(),
      password:Joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$'))
    };
    const {error,value} =  Joi.validate(req.body,schema);

    if(error){
        switch (error.details[0].context.key) {
            case 'email':
                res.status(400).send({
                   error:'Please Enter A Valid Email Address.'
                });
                break;

            case 'password':
                res.status(400).send({
                   error:'Please Enter A Valid Password'
                });
                break;

            default:
                res.status(400).send({
                    error:'Error Parsing Input Fields' + error.message
                });
                break;

        }
    }else{
        next();
    }


};
