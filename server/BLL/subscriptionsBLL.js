const Subscription = require('../models/subscriptionModel');

const getSubscriptions = async () => {
    try {
        return Subscription.find({})
    } catch (error) {
        throw `Error: ${error}`;
    }
};

const createSubscription = async (obj) => {
    try {
        const subscription = new Subscription(obj);
        await subscription.save();
        return 'Created';
    } catch (error) {
        throw `Error: ${error}`;
    }
};


module.exports = {
    getSubscriptions,
    createSubscription
};