const express = require('express');
const cors = require('cors');
const path = require('path');
require('./config/passport.config');
const cp = require('cookie-parser');
const cs = require('cookie-session');
const passport = require('passport');

const app = express();

app.use(
    cs({
        maxAge: 24 * 60 * 60 * 1000,
        keys: require('./config/config').SECRET_KEY,
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cp());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
if (process.env.NODE_ENV === 'development') app.use(require('morgan')('dev'));
app.use(require('./middlewares/UserAuth.middleware'));
app.use('/api', require('./router'));

app.use('/static', express.static(path.join(__dirname, 'public')));

module.exports = app;
