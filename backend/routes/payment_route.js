var express = require('express');
var router = express.Router();
let Payment = require('../controllers/PaymentController');

router.all('/payment/create', async(req, res) => {
    try {
        let data = req.body;
        await Payment.create(data);
        return  true;
    } catch (error) {
        return res.status(500).json({ error: true, message: error.message });
    }
});

router.all('/payment/update', async(req, res) => {
    try {
        let data = req.body;
        await Payment.update(data);
        return  true;
    } catch (error) {
        return res.status(500).json({ error: true, message: error.message });
    }
});


module.exports = router