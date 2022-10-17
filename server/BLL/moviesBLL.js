const movieWS = require('../DAL/moviesWS');
const Move = require('../models/moveModel');

const getMovies = async () => {
    let { data: movies } = await movieWS.getMovies();
    movies = movies.map((move) => {
        const show = new Move({
            id: move.id,
            name: move.name,
            genres: move.genres,
            image: move.utl,
            premiered: move.premiered
        })
        show.save();
    });
};
getMovies()

module.exports = {getMovies};


