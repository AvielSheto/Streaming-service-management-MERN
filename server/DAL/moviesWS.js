const axios = require('axios');

const getMovies = async () => {
    return axios.get('https://api.tvmaze.com/shows')
}

module.exports = { getMovies }