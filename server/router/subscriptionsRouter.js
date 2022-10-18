const express = require('express');
const router = express.Router();

const subscriptionsBLL = require('../BLL/subscriptionsBLL');

// GET
router.get('/', async (req, res) => {
    try {
        const subscriptions = await subscriptionsBLL.getSubscriptions();
        res.status(200).json(subscriptions);
    } catch (e) {
        res.status(500).json(e)
    }
})

// POST
router.post('/', async (req, res) => {
    try {
        const subscription = req.body;
        const status = await subscriptionsBLL.createSubscription(subscription);
        res.status(200).json(status)
    } catch (e) {
        res.status(500).json(e)
    }
});


module.exports = router;