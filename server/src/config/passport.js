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
            const user = await User.findOne({
                where:{
                    id:jwtPayload.id
                }
            });
            if(!user){
                return done(new Error(),false);
            }
            return done(null,user);
        }catch (e) {
            console.log(e.message);
        }
    })
);




module.exports = null;