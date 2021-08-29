const bcrypt = require('bcrypt');
const { errorHandler } = require('../utils/modelErrorHandler');
const { User, Member } = require('../models/user');
const transport = require('../config/mailer.config');

module.exports = {
    addInfo: async (req, res) => {
        errorHandler(
            req,
            res,
            async () => {
                const user = await Member.create({ ...req.body, user: req.user._id });
                res.status(201).json({ message: 'success', user: user });
            },
            403
        );
    },
    register: (req, res) => {
        errorHandler(
            req,
            res,
            async () => {
                const nu = await User.create({ ...req.body });
                // const user = await Member.create({ ...req.body, user: nu._id });
                res.status(201).json({ message: 'success', user: nu });
            },
            403
        );
    },
    login: (req, res) => {
        errorHandler(
            req,
            res,
            async () => {
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
            },
            403
        );
    },
    logout: (req, res) => {
        errorHandler(
            req,
            res,
            () => {
                req.logout();
                res.clearCookie('jwt');
                res.json({ mesage: 'Logged out successfully' });
            },
            403
        );
    },
    googleOauthRedirect: (req, res) => {
        res.redirect('http://localhost:3000/dashboard');
    },
    sendVerifcationEmail: (req, res) => {
        errorHandler(
            req,
            res,
            async () => {
                const { email } = req.body;
                const user = await User.findOne({ email });
                if (user) {
                    const token = await bcrypt.hash(user._id, await bcrypt.genSalt());
                    const url = `http://localhost:3000/verify/${token}`;
                    const message = `<h1>Please verify your email</h1>
                    <p>Click on the link below to verify your email</p>
                    <a href="${url}">${url}</a>`;
                    transport(email, 'Learnit Verification', message);
                    res.json({ message: 'success' });
                } else {
                    res.json({ message: 'User not found' });
                }
            },
            403
        );
    },
    verify: async (req, res) => {
        errorHandler(
            req,
            res,
            async () => {
                const { token } = req.params;
                if (await bcrypt.compare(token, req.user._id)) {
                    await User.findByIdAndUpdate(req.user._id, { isVarified: true });
                    res.json({ message: 'success' });
                } else {
                    res.json({ message: 'Not varified' });
                }
            },
            403
        );
    },
};
