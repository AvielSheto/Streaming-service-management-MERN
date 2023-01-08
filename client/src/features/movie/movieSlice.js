import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieService from "./movieService";

const initialState = {
    movies: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Get movies
export const getMovies = createAsyncThunk('movie/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await movieService.getMovies(token);
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Create new movie
export const createMovie = createAsyncThunk('movie/create', async (movieData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await movieService.createMovie(movieData, token)
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
});

// Update movie
export const updateMovie = createAsyncThunk('movie/update', async (movieData, thunkAPI) => {
    try {
        const id = movieData.id;
        const obj = movieData.obj;
        const token = thunkAPI.getState().auth.user.token;
        return await movieService.updateMovie(id, obj, token);
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

// Delete Movie
export const deleteMovie = createAsyncThunk('movie/delete', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await movieService.deleteMovie(id, token);
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message)
    }
});

// Movie slice 
export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        reset: (state) => {
            state.movies = []
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        builder
            // Get movies
            .addCase(getMovies.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.isLoading = false
                // state.isSuccess = true
                state.movies = action.payload
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

            // Create movie
            .addCase(createMovie.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createMovie.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.movies.push(action.payload)
            })
            .addCase(createMovie.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

            // Update movie
            .addCase(updateMovie.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateMovie.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.movies.map((movie) => {
                    if (movie._id === action.payload.id) {
                        movie = action.payload
                    }
                })
            })
            .addCase(updateMovie.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

            // Delete movie
            .addCase(deleteMovie.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteMovie.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.movies = state.movies.filter((movie) => movie._id !== action.payload.id)
            })
            .addCase(deleteMovie.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
});

export const { reset } = movieSlice.actions
export default movieSlice.reducer