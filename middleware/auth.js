const jwt = require("jsonwebtoken")
module.exports = (req, res, next) => {
    //  check token in req.header
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ msg: 'User not authorised ' });
    try {
        const decoded = jwt.verify(token, process.env.JSON_URI);
        req.user_id = decoded.data.id;
    } catch (err) {
        console.error(err);
        res.status(401).json({ msg: 'Token is invalid' });
    }
    next();
}