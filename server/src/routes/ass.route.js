const router = require('express').Router();
const view = require('../controllers/assignment.controller');

router.get('/rem', view.getRemainingAssignment);
module.exports = router;
