import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import memberEditService from './memberEditService'

const initialState = {
    memberEdit: {},
    isMovieEditError: false,
    isMovieEditSuccess: false,
    isMovieEditLoading: false,
    idEditMessage: '',
}

// Get movie
export const getMember = createAsyncThunk('movie/getMovie', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await memberEditService.getMember(id, token);
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
export const memberEditSlice = createSlice({
    name: 'member',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            // Get member
            .addCase(getMember.pending, (state) => {
                state.isMovieEditLoading = true
            })
            .addCase(getMember.fulfilled, (state, action) => {
                state.isMovieEditLoading = false
                state.isMovieEditSuccess = true
                state.memberEdit = (action.payload)
            })
            .addCase(getMember.rejected, (state, action) => {
                state.isMovieEditLoading = false
                state.isMovieEditError = true
                state.idEditMessage = action.payload
            })
    }
})

export const { reset } = memberEditSlice.actions
export default memberEditSlice.reducer