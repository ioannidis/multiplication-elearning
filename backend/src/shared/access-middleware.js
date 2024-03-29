const jwt = require('jsonwebtoken');

const hasAccess = (roles) => {
    return (req, res, next) => {
        const principal = jwt.decode(req.headers['authorization'].slice(7)).principal;

        if (req.username === 'me' || req.username === principal.username) {
            req.username = principal.username;
            next();
        } else if (!roles.includes(principal.role)) {
            return res.status(403).json({error: {status: 403, message: 'Access forbidden'}});
        } else {
            next();
        }

    }
}

module.exports = {
    hasAccess
}
