const asyncHandler = require('express-async-handler');
const Movie = require('../models/movieModel');

// @desc    Get all Movies
// @route   GET /api/movies
// @access  Public
const getMovies = asyncHandler(async (req, res) => {
    const movies = await Movie.find({});
    res.status(200).json(movies);
});

// @desc    Get Movie
// @route    /api/movies/id
// @access  Public
const getMovie = asyncHandler(async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
        res.status(400);
        throw new Error('Movie not found');
    }
    res.status(200).json(movie);
});

// @desc    Create Movie
// @route   POSt /api/movies
// @access  Public
const createMovie = asyncHandler(async (req, res) => {
    const { name, genres, image, premiered } = req.body;
    if (!name || !genres || !image || !premiered) {
        res.status(400);
        throw new Error('Please add all field');
    }

    // Check if movie exists
    const movieExists = await Movie.findOne({ name });
    if (movieExists) {
        res.status(400);
        throw new Error('Movie is already exists');
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
        throw new Error('Invalid movie data');
    }
});

// @desc    Update movie
// @route   PUT /api/movies/:id
// @access  Public
const updateMovie = asyncHandler(async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
        res.status(400);
        throw new Error('Movie id not found');
    }
    const updateMovie = await Movie.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(updateMovie);
});

// @desc    Delete movie
// @route   Delete /api/movies/:id
// @access  Public
const deleteMovie = asyncHandler(async (req, res) => {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
        res.status(400);
        throw new Error('Movie not fond');
    }

    await movie.remove();
    res.status(200).json({ id: req.params.id });
});



module.exports = { getMovies, getMovie, createMovie, deleteMovie, updateMovie };