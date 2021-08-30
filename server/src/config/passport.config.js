const passport = require('passport');
const bcrypt = require('bcrypt');
const GoogleStratagy = require('passport-google-oauth20');
const env = require('./config');
const { User } = require('../models/user');

passport.serializeUser((user, done) => {
    console.log('s', user);
    done(null, user._id);
});
passport.deserializeUser(async (id, done) => {
    console.log('d', await User.findById(id));
    done(null, await User.findById(id));
});

passport.use(
    new GoogleStratagy(
        {
            clientID: env.CLIENT_ID,
            clientSecret: env.CLIENT_SECRET,
            callbackURL: 'http://localhost:4000/api/user/google/redirect',
            proxy: true,
        },
        async (access, refresh, email, done) => {
            const user = await User.findOne({ email: email.emails[0].value });
            if (user) {
                console.log('Current user ', user);
                done(null, user);
            } else {
                const nu = await User.create({
                    username: email.displayName,
                    email: email.emails[0].value,
                    password: await bcrypt.genSalt(),
                    isVarified: true,
                });
                done(null, nu);
            }
        }
    )
);
module.exports = passport;
