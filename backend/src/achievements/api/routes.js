const express   = require('express');

const router                = express.Router();
const achievementService    = require('../services/achievement-service');
const accessMiddleware      = require('../../shared/access-middleware');


router.get('/', [accessMiddleware.hasAccess(['teacher'])], async (req, res, next) => {
    try {
        const achievements = await achievementService.find({username: req.username});

        if (!achievements)
            return res.status(404).json({error: {status: 404, message: 'Not found'}});
        return res.json({achievements});

    } catch (err) {
        return res.status(500).json({error: err});
    }
});

router.post('/', [accessMiddleware.hasAccess(['teacher'])], async (req, res, next) => {
    try {
        const achievements = await achievementService.findOne({username: req.username});

        if (!achievements) {
            await achievementService.save({
                username: req.username,
                lessons: {
                    [req.body.lessonId]: req.body
                }
            });
        } else if (!achievements.lessons[req.body.lessonId] || achievements.lessons[req.body.lessonId].percentage < req.body.percentage) {
            await achievementService.findOneAndUpdate({username: req.username}, req.body);
        }
        return res.status(200).json({});

    } catch (err) {
        return res.status(500).json({error: err});
    }
})


module.exports = router;

// {
//     "_id" : ObjectId("5eea23efedbb8d0c114e6676"),
//     "username" : "klanos",
//     "lessons" : {
//     "5eccfcaef889be419e7d3a35" : {
//         "lessonId" : "5eccfcaef889be419e7d3a35",
//             "percentage" : 33
//     }
// },
//     "__v" : 0
// }
