const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    } 
    try{
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({message: "Не авторизован"});
        }
        const decoded = jwt.decode(token, process.env.SECRET_KEY)
        req.user = decoded;
        next()
    } catch(e) {
        res.statys(401).json({message : "Не авторизован"})
    }
}