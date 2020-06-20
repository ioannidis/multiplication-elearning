const express   = require('express');

const router        = express.Router();
const jwt           = require('jsonwebtoken');
const passport      = require('passport');
const nodemailer    = require('nodemailer');
const uuid          = require('uuid');

const userService               = require('../services/auth-service');
const passwordResetService      = require('../services/password-reset-service');
const secretKey                 = process.env.secretKey || 'kr8EJUH19mN';


router.post('/signup', async (req, res, next) => {
    await userService.save(req.body);
    return res.status(200).json({});
})

router.post('/passwordreset', async (req, res, next) => {

    const transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "53ded0fa773e92",
            pass: "d9c7cc18061330"
        }
    });

    const v4 = uuid.v4()

    // Save token in db
    await passwordResetService.save({email: req.body.email, token: v4});

    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Multiplication eLearning 👻" <info@mltelearning.com>', // sender address
        to: req.body.email,
        subject: "Multiplication eLearning - Password reset", // Subject line
        // text: "Hello world?", // plain text body
        html: `<h2>Multiplication eLearning - Password reset</h2>
                <br><p>Click the following link to reset your password: </p>
                <a href='http://localhost:4200/auth/passwordreset/${v4}' >http://localhost:4200/auth/passwordreset/${v4}</a>`, // html body
    });

    // Send response
    return res.status(200).json({});
});

router.post('/passwordreset/:token', async (req, res, next) => {
    const passwordReset = await passwordResetService.findOne({token: req.params.token});

    if (!passwordReset.isActive)
        return res.status(400).json({message: "Invalid token"});

    const user = await userService.findOne({email: passwordReset.email});
    user.password = req.body.password;

    await userService.findOneAndUpdate(user);
    await passwordResetService.updateOne({token: passwordReset.token}, {isActive: false})

    return res.status(200).json({});
});

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
