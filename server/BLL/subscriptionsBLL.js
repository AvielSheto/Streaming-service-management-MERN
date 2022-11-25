const Subscription = require('../models/subscriptionModel');

// Get subscriptions
const getSubscriptions = async () => {
    try {
        return Subscription.find({})
    } catch (error) {
        throw `Error: ${error}`;
    }
};

// Get subscription by id
const getSubscription = async (id) => {
    try {
        return Subscription.findOne({ id });
    } catch (e) {
        throw `Error: ${e}`;
    }
}

// Create subscription
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
    getSubscription,
    createSubscription,
};