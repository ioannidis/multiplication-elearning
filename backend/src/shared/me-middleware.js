const jwt = require('jsonwebtoken');

const me = () => {
    return (req, res, next) => {
        const principal = jwt.decode(req.headers['authorization'].slice(7)).principal;

        if (principal.username !== req.params.username) {
            res.status(403).json({error: {status: 403, message: 'Access forbidden'}});
        }
        else {
            req.me.username = principal.username;
            next();
        }
    }
}

module.exports = {
    me
}
