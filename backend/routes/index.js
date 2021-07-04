const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('It works!');
});

router.use('/', require('./registration_route'));
router.use('/', require('./event_route'));
router.use('/', require('./activity_route'));
router.use('/', require('./subscribe_route'));
router.use('/', require('./team_route'));
router.use('/', require('./payment_route'));

module.exports = router;