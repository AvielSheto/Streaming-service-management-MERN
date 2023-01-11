const asyncHandler = require('express-async-handler');
const Subscription = require('../models/subscriptionModel');

// @desc    Get subscriptions
// @route   GET /subscriptions
// @access  Privet
const getSubscriptions = asyncHandler(async (req, res) => {
    const subscriptions = await Subscription.find({});
    if (!subscriptions) {
        res.status(400);
        throw new Error('Subscriptions not found');
    }
    res.status(200).json(subscriptions)
});

// @desc    Get subscription by id
// @route   GET /subscriptions
// @access  Privet
const getSubscription = asyncHandler(async (req, res) => {
    const subscription = await Subscription.findOne({ memberId });
    if (!subscription) {
        res.status(400);
        throw new Error('Subscription not found');
    }
    res.status(200).json(subscription);
});

// @desc    Create subscription
// @route   POST /subscriptions
// @access  Privet
const createSubscription = asyncHandler(async (req, res) => {
    // Create subscription
    const subscription = new Subscription(obj);
    if (subscription) {
        res.status(201).json(subscription)
    } else {
        res.status(400)
        throw new Error('Invalid movie data');
    }
});

module.exports = { getSubscriptions, getSubscription, createSubscription };