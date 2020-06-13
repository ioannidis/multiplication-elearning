const express   = require('express');
const jwt       = require('jsonwebtoken');

const router            = express.Router();
const achievementRouter = require('../../achievements/api/routes')
const userService       = require('../services/user-service');
const roleMiddleware = require('../../shared/has-role-middleware');


router.get('/me', async (req, res, next) => {
    try {
        const tokenPayload = jwt.decode(req.headers['authorization'].slice(7)).principal;
        const user = await userService.findOne({username: tokenPayload.username});

        if (!user)
            return res.status(404).json({error: {status: 404, message: 'Not found'}});
        user.password = '****'
        return res.json({user});

    } catch (err) {
        return res.status(500).json({error: err});
    }
})


router.get('/', [roleMiddleware.hasRole(['teacher'])], async (req, res, next) => {
    try {
        const users = await userService.find({});

        if (!users)
            return res.status(404).json({error: {status: 404, message: 'Not found'}});
        return res.json({users});

    } catch (err) {
        return res.status(500).json({error: err});
    }
});

router.get('/:username', [roleMiddleware.hasRole(['teacher'])], async (req, res, next) => {
    try {
        const user = await userService.findOne({username: req.params.username});

        if (!user)
            return res.status(404).json({error: {status: 404, message: 'Not found'}});
        return res.json({user});

    } catch (err) {
        return res.status(500).json({error: err});
    }
});

router.use('/:username/achievements', (req, res, next) => {req.username = req.params.username; next();}, achievementRouter)

module.exports = router;
