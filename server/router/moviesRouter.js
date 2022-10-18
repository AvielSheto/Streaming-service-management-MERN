const express = require('express');
const router = express.Router();
const moviesBLL = require('../BLL/moviesBLL');

router.get('/', async (res, req)=>{
    try {
        const movies = await moviesBLL.getMovies()
        res.status(200).json(movies);
    }catch(e){
        res.status(500).json(e);
    }
});

module.exports = router