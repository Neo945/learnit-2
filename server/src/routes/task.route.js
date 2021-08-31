const router = require('express').Router();
const view = require('../controllers/meet.controller');
// const isa = require('../middlewares/authCheck.middleware');

router.get('/get', view.getMeet);

module.exports = router;
