const express = require('express');
const router = express.Router();

const { getMovies, getMovie, createMovie, updateMovie, deleteMovie } = require('../controllers/moviesControllers');

router.get('/', getMovies);
router.get('/:id', getMovie);
router.post('/', createMovie);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

module.exports = router;
