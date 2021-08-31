const router = require('express').Router();
const view = require('../controllers/assignment.controller');

router.get('/rem', view.getRemainingAssignment);
router.get('/sub', view.getSubmittedAssignment);

module.exports = router;
