const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400);
        throw new Error('Please add all field');
    };

    // check if user exists
    const user = await User.findOne({ username });
    if (!user) {
        res.status(400);
        throw new Error('User is not exists');
    };

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create User 
    const updateUser = await User.findByIdAndUpdate(user._id, { user, password: hashedPassword });
    res.status(200).json(updateUser);

    if (user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            token: generateToken(user._id)
        })
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

// @desc    Create user
// @route   POST /api/users/create
// @access  Public
const createUser = asyncHandler(async (req, res) => {
    const { username } = req.body
    const userExists = await User.findOne({ username });
    if (userExists) {
        res.status(400);
        throw new Error('User is already exists');
    }
    // Create User 
    const user = await User.create({
        username
    })
    if (user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            token: generateToken(user._id)
        })
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            username: user.username,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials');
    }
});

// @desc    Get users data
// @route   GET /api/users
// @access  Public
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.status(200).json(users);
});

// @desc    Get user data
// @route   GET /api/user
// @access  Public
const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(400);
        throw new Error('User not found');
    }
    res.status(200).json(user);
});

// @desc    Update user
// @route   PUT /api/users
// @access  Public
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(400);
        throw new Error('User not found');
    }
    user.username = req.body.userName;
    const updated = await User.findByIdAndUpdate(req.params.id, user);
    res.status(200).json(updated);
});

// @desc    Delete user
// @route   DELETE /api/users
// @access  Public
const deleteUser = asyncHandler(async(req, res)=>{
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(user);
});

// Generate jwt 
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

module.exports = { registerUser, loginUser, getUsers, getUser, createUser, updateUser, deleteUser };