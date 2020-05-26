const express   = require('express');

const router            = express.Router();
const lessonService     = require('../services/lesson-service');


router.get('/:id', async (req, res, next) => {
    try {
        const lesson = await lessonService.findOne({id: req.params.id});

        if (!lesson)
            return res.status(404).json({error: {status: 404, message: 'Not found'}});
        return res.json({lesson});

    } catch (err) {
        return res.status(500).json({error: err});
    }
})



module.exports = router;
