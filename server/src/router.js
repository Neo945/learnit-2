const router = require('express').Router();

router.use('/music', require('./routes/user.route'));

module.exports = router;
