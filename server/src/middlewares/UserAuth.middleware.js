const jwt = require('jsonwebtoken');
const { User } = require('../models/user');

async function UserAuthentication(req, res, next) {
    if (req.cookies.jwt) {
        jwt.verify(req.cookies.jwt, process.env.SECRET_KEY, (err, id) => {
            if (err) {
                req.user = null;
                next();
            } else if (!req.user) {
                User.findById(id.id)
                    .then((user) => {
                        console.log(user);
                        const u = { ...user._doc };
                        u.password = null;
                        req.user = u;
                        next();
                    })
                    .catch((erro) => {
                        console.log(erro);
                        next();
                    });
            } else {
                next();
            }
        });
    } else {
        next();
    }
}
module.exports = UserAuthentication;
