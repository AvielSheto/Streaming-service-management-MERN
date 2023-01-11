const axios = require('axios');

const getMovies = () => {
    return axios.get('https://api.tvmaze.com/shows')
}

module.exports = { getMovies };