const express       = require('express');
const app           = express();

const cors          = require('cors');
const helmet        = require('helmet');
const passport      = require('passport');
const passportJwt   = require('passport-jwt');

const authRouter            = require('./authentication/api/routes');
const lessonRouter          = require('./lesson/api/routes');
const userRouter            = require('./user/api/routes');
const achievementRouter     = require('./achievements/api/routes');

require('./authentication/auth');

// Use cors
app.use(cors());

// Use helmet
app.use(helmet());

// Parse request body
app.use(express.json());

// Routes
app.use('/auth', authRouter);
app.use('/lessons', passport.authenticate('jwt', {session: false}), lessonRouter);
app.use('/users', passport.authenticate('jwt', {session: false}), userRouter);


const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`);
    console.log('Press Ctrl+C to quit.');
});
