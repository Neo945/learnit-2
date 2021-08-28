const router = require('express').Router();
const view = require('../controllers/user.controller');
const isa = require('../middlewares/authCheck.middleware');
const passport = require('../config/passport.config');

router.post('/add', view.register);
router.post('/save', view.addInfo);
router.post('/login', view.login);
router.get('/logout', isa, view.logout);

router.get(
    '/google',
    passport.authenticate('google', {
        scope: ['profile', 'email'],
    })
);
router.get('/google/redirect', passport.authenticate('google'), view.googleOauthRedirect);

module.exports = router;
