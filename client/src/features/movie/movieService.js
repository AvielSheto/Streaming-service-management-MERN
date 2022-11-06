import axios from 'axios'
const API_URL = 'http://localhost:5000/api/movies/'

// Get movies
const getMovies = async ()=>{
    const response = await axios.get(API_URL)
    return response.data
}

// Create movie
const createMovie = async (movieData) => {
    const response = await axios.post(API_URL, movieData);
    return response.data;
}

// Delete Movie
const deleteMovie = async (movieId)=>{
    const response = await axios.delete(API_URL + movieId)
    return response.data
}

const movieService = {
    createMovie,
    deleteMovie,
    getMovies
};

export default movieService;