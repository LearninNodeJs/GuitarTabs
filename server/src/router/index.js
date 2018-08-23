const express = require('express');

const router = express.Router();


router.post('/register',(req,res)=>{
   res.status(201).json({
       message:`Hello ${req.body.email} !,Your User was registered `
   })
});


module.exports = router;