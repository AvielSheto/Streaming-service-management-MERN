const express = require('express');
const router = express.Router();

const { getMovies, getMovie, createMovie, deleteMovie, updateMovie } = require('../controllers/moviesControllers');

router.get('/', getMovies);
router.get('/:id', getMovie);
router.post('/', createMovie);
router.delete('/:id',deleteMovie);
router.put('/:id',updateMovie);

module.exports = router