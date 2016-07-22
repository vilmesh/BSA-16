const router = require('express').Router();
const ctrl = require('./controller');

router.get('/', ctrl.sockets);
router.get('/ajax', ctrl.ajax);
router.get('/messages', ctrl.getHistory);
router.post('/messages', ctrl.postNewMessage);

module.exports = router;