const bcrypt        = require('bcrypt');
const passport      = require('passport');
const passportJWT   = require("passport-jwt");

const ExtractJWT    = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy   = passportJWT.Strategy;

const authService   = require('./services/auth-service');

passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
    async (username, password, cb) => {

         try {
            const payload = await authService.findOne({username: username});
            const user = payload.user;

            if (!user || bcrypt.compareSync(user.password, password)) {
                return cb(null, false, {message: 'Incorrect username or password.'});
            }

            return cb(null, user, {message: 'Logged In Successfully'});
        } catch (err) {
            cb(err);
        }
    }

));

const secretKey = process.env.secretKey || 'kr8EJUH19mN';
passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : secretKey
    },
    (jwtPayload, cb) => {

    return cb(null, jwtPayload);
    }
));
