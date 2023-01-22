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
    const { memberId, movie } = req.body;
    if (!memberId || !movie) {
        res.status(400)
        throw new Error('Please add all filed')
    };

    const subscription = await Subscription.create({
        memberId,
        movie
    });

    if (subscription) {
        res.status(201).json({
            _id: subscription.id,
            memberId: subscription.memberId,
            movie: subscription.movie
        })
    } else {
        res.status(400)
        throw new Error('Invalid subscription data');
    }
});

module.exports = { getSubscriptions, getSubscription, createSubscription };