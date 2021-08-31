const express = require('express');
const cors = require('cors');
const path = require('path');
const cp = require('cookie-parser');
const cs = require('cookie-session');
const passport = require('./config/passport.config');
// const passport = require('passport');

const app = express();

app.use(cp());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'public')));
if (process.env.NODE_ENV === 'development') app.use(require('morgan')('dev'));

app.use(
    cs({
        keys: require('./config/config').SECRET_KEY,
        resave: true,
        saveUninitialized: false,
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(require('./middlewares/UserAuth.middleware'));
app.use('/api', require('./router'));

module.exports = app;
