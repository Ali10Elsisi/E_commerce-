const { verify } = require('jsonwebtoken');
let jwt = require('jsonwebtoken');
let User = require('../models/User')
let auth = async function(req, res, next) {
    try {
        let token = req.header('authorization').replace('Bearer ', '');
        let decoded = jwt.verify(token, 'thisismysecretkey');
        let user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
        if (!user) {
            throw new Error()
        }
        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        res.status(401).send({ error: 'please authenticate' })

    }
}
module.exports = auth