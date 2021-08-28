const { errorHandler } = require('../utils/modelErrorHandler');
const { User, Member } = require('../models/user');

module.exports = {
    addInfo: async (req, res) => {
        errorHandler(req, res, async () => {
            const user = await Member.create({ ...req.body, user: req.user._id });
            res.status(201).json({ message: 'success', user: user });
        });
    },
    register: (req, res) => {
        errorHandler(req, res, async () => {
            const nu = await User.create({ ...req.body });
            // const user = await Member.create({ ...req.body, user: nu._id });
            res.status(201).json({ message: 'success', user: nu });
        });
    },
    login: (req, res) => {
        errorHandler(req, res, async () => {
            const { pass, email } = req.body;
            const token = await User.login(email, pass);
            if (token) {
                res.cookie('jwt', token, {
                    maxAge: 3 * 24 * 3600 * 1000,
                });
                console.log(req.headers);
                res.json({ mesage: 'Success' });
            } else {
                res.clearCookie('jwt');
                res.json({ mesage: 'User not found' });
            }
        });
    },
    logout: (req, res) => {
        errorHandler(req, res, () => {
            req.logout();
            res.clearCookie('jwt');
            res.json({ mesage: 'Logged out successfully' });
        });
    },
    googleOauthRedirect: (req, res) => {
        res.redirect('http://localhost:3000/');
    },
};
