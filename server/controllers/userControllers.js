const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const registerUser = asyncHandler(async (req, res) => {
    const { userName, pass } = req.body
    if (!userName || !pass) {
        res.status(400)
        throw new Error('Please add all field');
    }
    res.json({ message: 'Register User '  })
})

const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: 'Login User' })
})

const getMe = asyncHandler(async (req, res) => {
    res.json({ message: 'User data display' })
})

module.exports = { registerUser, loginUser, getMe }