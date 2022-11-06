import axios from 'axios'
const API_URL = 'http://localhost:5000/api/movies/'

const createMovie = async (movieData) => {
    const response = await axios.post(API_URL, movieData);
    return response.data;
}

const deleteMovie = async (movieId)=>{
    const response = await axios.delete(API_URL + movieId)
    return response.data
}

const movieService = {
    createMovie,
    deleteMovie
};

export default movieService;