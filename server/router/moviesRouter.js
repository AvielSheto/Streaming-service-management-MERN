const express = require('express');
const router = express.Router();
const { getMovies } = require('../controllers/moviesControllers')

router.get('/', getMovies)

module.exports = router