const express = require('express');
const router = express.Router();

const { getMovies, getMovie, createMovie, updateMovie, deleteMovie } = require('../controllers/moviesControllers');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getMovies);
router.get('/:id', protect, getMovie);
router.post('/', protect, createMovie);
router.put('/:id', protect, updateMovie);
router.delete('/:id', protect, deleteMovie);

module.exports = router;
