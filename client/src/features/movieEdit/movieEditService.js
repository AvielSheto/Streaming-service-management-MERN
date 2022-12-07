import axios from 'axios'
const API_URL = 'http://localhost:5000/api/movies/'

// Get Movie
const getMovie = async (movieId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.get(API_URL + movieId, config);
    return response.data
}

const movieEditService = {
    getMovie,
}

export default movieEditService