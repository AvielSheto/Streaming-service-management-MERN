const asyncHandler = require('express-async-handler')
const Movie = require('../models/movieModel')

const getMovies = asyncHandler(async (req, res) => {
    const movies = await Movie.find({});
    res.status(200).json(movies)
})

module.exports = { getMovies }