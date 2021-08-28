const jwt = require('jsonwebtoken');
const { Member } = require('../models/user');

async function UserAuthentication(req, res, next) {
    if (req.cookies.jwt) {
        jwt.verify(req.cookies.jwt, process.env.SECRET_KEY, (err, id) => {
            if (err) {
                console.log(err);
                req.user = null;
                next();
            } else {
                Member.findOne({ user: id.id })
                    .populate('user')
                    .then((user) => {
                        console.log(user);
                        const u = { ...user };
                        u.user.password = null;
                        req.user = u;
                        next();
                    })
                    .catch((erro) => console.log(erro));
            }
        });
    } else {
        next();
    }
}
module.exports = UserAuthentication;
