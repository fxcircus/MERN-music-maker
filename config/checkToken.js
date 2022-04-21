const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    // Check if the token is sent in the authorization header OR a query param
    let token = req.get('Authorization') || req.query.token
    if (token) {
        token = token.replace('Bearer ', '')
        //  Check if the token is valid or expired
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
            req.user = err ? null : decoded.user
            req.exp = err ? null : new Date(decoded.exp * 1000)
        })
        return next()
    } else {
        req.usr = null
        return next()
    }
}