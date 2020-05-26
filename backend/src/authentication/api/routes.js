const express   = require('express');

const router    = express.Router();
const jwt       = require('jsonwebtoken');
const passport  = require('passport');

const userService   = require('../services/auth-service');
const secretKey     = process.env.secretKey || 'kr8EJUH19mN';


router.post('/register', async (req, res, next) => {
    userService.save(req.body);
    return res.sendStatus(200);
})

router.post('/login', (req, res, next) => {

    // Passport acts as middleware
    passport.authenticate('local', {session: false}, (err, user, info) => {

        if (err || !user) {
            return res.status(400).json({
                message: 'Something went wrong while authenticating',
                user   : user
            });
        }

        req.login(user, {session: false}, err => {
            if (err) {
                res.send(err);
            }

            data = {
                message: 'User has been successfully signed in.',
                token: jwt.sign({user}, secretKey, {expiresIn: '1h'})
            };

            return res.status(200).json(data);
        })
    })(req, res, next);
});

module.exports = router;
