const router = require('express').Router();

router.use('/user', require('./routes/user.route'));

module.exports = router;
