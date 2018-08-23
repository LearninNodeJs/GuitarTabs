exports.register = function(req,res){
  res.status(201).json({
      message:`Hello ${req.body.email}! Your User Was Registered`
  })
};