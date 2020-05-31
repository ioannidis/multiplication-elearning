const jwt = require('jsonwebtoken');

const hasRole = (roles) => {
    return (req, res, next) => {
        const principal = jwt.decode(req.headers['authorization'].slice(7)).principal;

        if (!roles.includes(principal.role)) {
            res.status(403).json({error: {status: 403, message: 'Access forbidden'}});
        }
        else
            next();
    }
}

module.exports = {
    hasRole
}
