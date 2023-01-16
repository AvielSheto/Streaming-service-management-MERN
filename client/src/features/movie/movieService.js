import axios from 'axios';
const API_URL = "https://netflix-server.onrender.com"+"/api/movies/";

// Get movies
const getMovies = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.get(API_URL, config)
    return response.data
}

// Create movie
const createMovie = async (movieData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.post(API_URL, movieData, config);
    return response.data;
}

// Update movie 
const updateMovie = async (id, obj, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.put(API_URL + id, obj, config);
    return response.data;
}

// Delete Movie
const deleteMovie = async (movieId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.delete(API_URL + movieId, config);
    return response.data
}

const movieService = {
    getMovies,
    createMovie,
    updateMovie,
    deleteMovie,
};

export default movieService;