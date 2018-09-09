const passport = require('passport');
const {User} = require('../model');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('./config');

passport.use(
    new JwtStrategy({
        _jwtFromRequest :ExtractJwt.fromAuthHeaderAsBearerToken(),
        _secretOrKeyProvider:config.authentication.jwtSecret
    },async function(jwtPayload,done){
        try{

        }catch (e) {
            console.log(e.message);
        }
    })
)




module.exports = null;