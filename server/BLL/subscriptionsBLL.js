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
    } catch (e) {
        throw `Error: ${e}`;
    }
};


module.exports = {
    getSubscriptions,
    createSubscription
};