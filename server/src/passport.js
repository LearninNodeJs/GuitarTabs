const passport = require('server/src/passport');
const {User} = require('./model/index');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
require('dotenv').config();

passport.use(
    new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.SECRET
    },async function (jwtPayload,done) {
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
            return done(new Error(),false)
        }
    })
);

module.exports = null;