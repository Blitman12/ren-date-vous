const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.MY_SECRET
const expiration = '2h'

module.exports = {
    signToken: function ({ email, username, _id }) {
        const payload = { email, username, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration })
    },
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim()
        }

        if (!token || token === "") {
            return req
        }

        try {
            // decode and attach user data to request object
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        return req;
    }
}