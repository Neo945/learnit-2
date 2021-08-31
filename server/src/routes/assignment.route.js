const router = require('express').Router();
const view = require('../controllers/assignment.controller');

router.get('/user/rem/', view.getRemainingAssignment);
router.get('/user/sub/', view.getSubmittedAssignment);
router.post('/classroom/get/', view.getAssignment);
router.get('/teacher/get/', view.getTeacherAssignment);
router.post('/submit', view.getResponse);
router.post('/create', view.createAssignment);

module.exports = router;
