const asyncHandler = require('express-async-handler')
const Movie = require('../models/movieModel')

// @desc    Get all Movies
// @route   GET /api/movies
// @access  Public
const getMovies = asyncHandler(async (req, res) => {
    const movies = await Movie.find({});
    res.status(200).json(movies)
})

// @desc    Get all Movies
// @route   GET /api/movies
// @access  Public
const createMovie = asyncHandler(async (req, res) => {
    const { name, genres, image, premiered } = req.bode
    if (!name || !genres || !image || !premiered) {
        res.status(400)
        throw new Error('please add all field')
    }

    // Check if movie exists
    const movieExists = await Movie.findOne({ name })
    if (movieExists) {
        res.status(400)
        throw new Error('movie is already exists')
    }
    // Create movie
    const movie = await Movie.create({
        name,
        genres,
        image,
        premiered
    });
    if (movie) {
        res.status(201).json({
            _id: movie.id,
            name: movie.name,
        })
    } else {
        res.status(400)
        throw new Error('INvalid movie data')
    }

})

module.exports = { getMovies, createMovie }