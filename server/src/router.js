const router = require('express').Router();

router.use('/user', require('./routes/user.route'));
// router.use('/meet', require('./routes/meet.route'));
router.use('/classroom', require('./routes/classroom.route'));
router.use('/ass', require('./routes/assignment.route'));
router.use('/task', require('./routes/task.route'));

module.exports = router;
