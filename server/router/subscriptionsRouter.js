const express = require('express');
const router = express.Router();

const SubscriptionsBLL = require('../BLL/subscriptionsBLL');

router.get('/', async (req,res)=>{
    try{
        const subscriptions = await SubscriptionsBLL.getSubscriptions();
        res.status(200).json(subscriptions);
    }catch(e){
        res.status(500).json(e)
    }
})

router.post('/', async (req, res)=>{
    try{
        const subscription = req.body;
        const status = await SubscriptionsBLL.createSubscriptions(subscription);
        res.status(200),json(status)
    }catch(e){
        res.status(500).json(e)
    }
})

module.exports = router;