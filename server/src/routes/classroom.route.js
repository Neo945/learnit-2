const router = require('express').Router();
const view = require('../controllers/classroom.controller');
// const isa = require('../middlewares/authCheck.middleware');

router.post('/create', view.createClassroom);
router.post('/add/user', view.addUserInClassroom);
router.post('/remove/user', view.removeUserInClassroom);
router.get('/get', view.getClassroom);
router.get('/teacher/get', view.getTeacherClassroom);

module.exports = router;
