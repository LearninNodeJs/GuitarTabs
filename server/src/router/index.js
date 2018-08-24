const express = require('express');
const AuthenticationController = require('../controller/AuthenticationController');
const router = express.Router();
const AuthenticationPolicy = require('../policies/AuthenticationControllerPolicy');


router.post('/register',AuthenticationPolicy.registerValidation,AuthenticationController.register);


module.exports = router;