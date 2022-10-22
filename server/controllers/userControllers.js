const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const registerUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        res.status(400)
        throw new Error('Please add all field');
    }

    // check if user exists
    const userExists = await User.findOne({ username })
    if (userExists) {
        res.status(400)
        throw new Error('User is already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create User 
    const user = await User.create({
        username,
        password: hashedPassword
    })
    if (user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('INvalid user data')
    }
})

const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            username: user.username,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('INvalid credentials')
    }
})

const getMe = asyncHandler(async (req, res) => {
    res.json({ message: 'User data display' })
})

// Generate jwt 
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}


module.exports = { registerUser, loginUser, getMe }