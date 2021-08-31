const router = require('express').Router();
const view = require('../controllers/task.controller');
// const isa = require('../middlewares/authCheck.middleware');

router.post('/classroom', view.getTask);
router.get('/user', view.getUserTask);
router.get('/rem', view.getRemainingTask);
router.post('/create', view.createTask);
router.post('/create/res', view.createResponse);

module.exports = router;
