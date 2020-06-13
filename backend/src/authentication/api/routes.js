const express   = require('express');

const router    = express.Router();
const jwt       = require('jsonwebtoken');
const passport  = require('passport');

const userService   = require('../services/auth-service');
const secretKey     = process.env.secretKey || 'kr8EJUH19mN';


router.post('/signup', async (req, res, next) => {
    await userService.save(req.body);
    return res.status(200).json({});
})

router.post('/login', (req, res, next) => {

    // Passport acts as middleware
    passport.authenticate('local', {session: false}, (err, user, info) => {

        if (err || !user) {
            return res.status(400).json({
                message: 'Something went wrong while authenticating'
            });
        }

        req.login(user, {session: false}, err => {
            if (err) {
                res.send(err);
            }

            const principal = {
                _id: user._id,
                username: user.username,
                role: user.role,
                firstName: user.firstname,
                enabled: user.enabled
            }

            data = {
                message: 'User has been successfully signed in.',
                token: jwt.sign({principal}, secretKey, {expiresIn: '12h'})
            };

            return res.status(200).json(data);
        })
    })(req, res, next);
});

module.exports = router;
