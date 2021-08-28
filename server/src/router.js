const router = require('express').Router();

router.use('/user', require('./routes/user.route'));
router.use('/ass', require('./routes/ass.route'));

module.exports = router;
