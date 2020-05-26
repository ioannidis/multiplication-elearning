const express   = require('express');

const router                = express.Router();
const achievementService    = require('../services/achievement-service');


router.get('/', async (req, res, next) => {
    try {
        const achievements = await achievementService.find({});

        if (!achievements)
            return res.status(404).json({error: {status: 404, message: 'Not found'}});
        return res.json({achievements});

    } catch (err) {
        return res.status(500).json({error: err});
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const achievement = await achievementService.findOne({id: req.params.id});

        if (!achievement)
            return res.status(404).json({error: {status: 404, message: 'Not found'}});
        return res.json({achievement});

    } catch (err) {
        return res.status(500).json({error: err});
    }
});



module.exports = router;
