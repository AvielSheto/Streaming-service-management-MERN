const asyncHandler = require ('express-async-handler')
const Member = require('../models/memberModel')

// const { name, genres, image, premiered } = req.body

const getMembers = asyncHandler(async (req, res) => {
    const members = await Member.find({})
    res.status(200).json(members)
})

module.exports = { getMembers }