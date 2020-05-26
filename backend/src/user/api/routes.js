const express   = require('express');

const router            = express.Router();
const userService     = require('../services/user-service');


router.get('/', async (req, res, next) => {
    try {
        const users = await userService.find({});

        if (!users)
            return res.status(404).json({error: {status: 404, message: 'Not found'}});
        return res.json({users});

    } catch (err) {
        return res.status(500).json({error: err});
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const user = await userService.findOne({id: req.params.id});

        if (!user)
            return res.status(404).json({error: {status: 404, message: 'Not found'}});
        return res.json({user});

    } catch (err) {
        return res.status(500).json({error: err});
    }
});



module.exports = router;
