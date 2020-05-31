const express   = require('express');

const router            = express.Router();
const lessonService     = require('../services/lesson-service');
const roleMiddleware = require('../../shared/has-role-middleware')


router.get('/', async (req, res, next) => {
    try {
        const lessons = await lessonService.find();

        if (!lessons)
            return res.status(404).json({error: {status: 404, message: 'Not found'}});
        return res.json({lessons});

    } catch (err) {
        return res.status(500).json({error: err});
    }
})

router.get('/:url', async (req, res, next) => {
    try {
        const lesson = await lessonService.findOne({url: req.params.url});

        if (!lesson)
            return res.status(404).json({error: {status: 404, message: 'Not found'}});
        return res.json({lesson});

    } catch (err) {
        return res.status(500).json({error: err});
    }
})

router.put('/:url', [roleMiddleware.hasRole('teacher')], async (req, res, next) => {
    try {
        const lesson = await lessonService.findOneAndUpdate({url: req.params.url}, req.body);

        if (!lesson)
            return res.status(404).json({error: {status: 404, message: 'Not found'}});
        return res.json({lesson});

    } catch (err) {
        return res.status(500).json({error: err});
    }
})


module.exports = router;
