const router = require('express').Router();
const view = require('../controllers/classroom.controller');
// const isa = require('../middlewares/authCheck.middleware');

router.get('/get', view.getClassroom);

module.exports = router;
