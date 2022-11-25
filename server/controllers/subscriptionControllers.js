const asyncHandler = require('express-async-handler');
const Subscription = require('../models/subscriptionModel');

// @desc    Get all subscriptions
// @route   GET /subscriptions
// @access  Public
const getSubscriptions = asyncHandler(async (req, res) => {
    const subscriptions = await Subscription.find({});
    res.status(200).json(subscriptions);
});

// @desc    Create member
// @route   POST /api/Members
// @access  Public
const createMember = asyncHandler(async (req, res) => {
    const { memberId, movie } = req.body;
    if (!movie) {
        res.status(400);
        throw new Error('Please add movie');
    }

    // Check if member exists
    // const subscriptionExists = await Member.findOne({ email });
    // if (subscriptionExists) {
    //     res.status(400);
    //     throw new Error('Email is already in used');
    // }

    // Create member
    const subscription = await Subscription.create({
        memberId,
        movie,
    });
    if (subscription) {
        res.status(201).json({
            _id: subscription.id,
            memberId: subscription.memberId,
            movie: subscription.movie,
        })
    } else {
        res.status(400);
        throw new Error('Invalid member data');
    }
});

module.exports = { getSubscriptions, createMember }
