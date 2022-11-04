import axios from 'axios'
const API_URL = 'http://localhost:5000/api/movies/'

const createMovie = async (movieData) => {
    const response = await axios.post(API_URL, movieData);
    return response.data;
}

const movieService = {
    createMovie
};

export default movieService;