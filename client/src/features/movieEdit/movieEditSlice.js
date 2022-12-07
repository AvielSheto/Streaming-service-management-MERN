import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieEditService from "./movieEditService";

const initialState = {
    movieEdit: {},
    isMovieEditError: false,
    isMovieEditSuccess: false,
    isMovieEditLoading: false,
    message: '',
}

// Get movie
export const getMovie = createAsyncThunk('movie/getMovie', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token; 
        return await movieEditService.getMovie(id, token);
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

// Movie slice 
export const movieEditSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            // Get movie
            .addCase(getMovie.pending, (state) => {
                state.isMovieEditLoading = true
            })
            .addCase(getMovie.fulfilled, (state, action) => {
                state.isMovieEditLoading = false
                state.isMovieEditSuccess = true
                state.movieEdit = (action.payload)
            })
            .addCase(getMovie.rejected, (state, action) => {
                state.isMovieEditLoading = false
                state.isMovieEditError = true
                state.message = action.payload
            })
    }
})

export const { reset } = movieEditSlice.actions
export default movieEditSlice.reducer