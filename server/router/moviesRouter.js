const express = require('express');
const router = express.Router();

const { getMovies, createMovie, deleteMovie } = require('../controllers/moviesControllers')

router.get('/', getMovies)
router.post('/', createMovie)
router.delete('/:id',deleteMovie)

module.exports = router