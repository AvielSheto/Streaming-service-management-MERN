const asyncHandler = require('express-async-handler');
const Member = require('../models/memberModel');

// @desc    Get all Members
// @route   GET /api/members
// @access  Public
const getMembers = asyncHandler(async (req, res) => {
    const members = await Member.find({});
    res.status(200).json(members);
});

// @desc    Get member
// @route   GET /api/members/id
// @access  Public
const getMember = asyncHandler(async (req, res) => {
    const memberId = req.params.id
    const member = await Member.find({ memberId });
    if (!member) {
        res.status(400);
        throw new Error('Member not found');
    }
    res.status(200).json(member);
});

// @desc    Create member
// @route   POST /api/Members
// @access  Public
const createMember = asyncHandler(async (req, res) => {
    const { name, email, city } = req.body;
    if (!name || !email || !city) {
        res.status(400);
        throw new Error('Please add all field');
    }

    // Check if member exists
    const memberExists = await Member.findOne({ email });
    if (memberExists) {
        res.status(400);
        throw new Error('Email is already in used');
    }
    // Create member
    const member = await Member.create({
        name,
        email,
        city,
    });
    if (member) {
        res.status(201).json({
            _id: member.id,
            name: member.name,
            email: member.email,
            city: member.city,
        })
    } else {
        res.status(400);
        throw new Error('Invalid member data');
    }
});

// @desc    Update member
// @route   PUT /api/members/:id
// @access  Public
const updateMember = asyncHandler(async (req, res) => {
    const member = await Member.findById(req.params.id);
    if (!member) {
        res.status(400);
        throw new Error('Member id not found');
    }
    const updateMember = await Member.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(updateMember);
});

// @desc    Delete member
// @route   DELETE /api/members/:id
// @access  Public
const deleteMember = asyncHandler(async (req, res) => {
    const member = await Member.findById(req.params.id);

    if (!member) {
        res.status(400);
        throw new Error('Member not fond');
    }

    await member.remove();
    res.status(200).json({ id: req.params.id });
});

module.exports = { getMembers, getMember, createMember, updateMember, deleteMember };