const movieWS = require('../DAL/moviesWS');
const Movie = require('../models/movieModel');

const getMovies = async () => {
    let { data: movies } = await movieWS.getMovies();
    Movie.collection.drop();
    movies = movies.map((movie) => {
        const show = new Movie({
            name: movie.name,
            genres: movie.genres,
            image: movie.image.medium,
            premiered: movie.premiered
        })
        show.save();
    });
};

module.exports = {getMovies};


