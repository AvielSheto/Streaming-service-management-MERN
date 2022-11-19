import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import editUserService from './editUserService';

const initialState = {
    isEditError: false,
    isEditSuccess: false,
    isEditLoading: false,
    editMessage: '',
}

// Update user
export const updateUser = createAsyncThunk('user/update', async (obj, thunkAPI) => {
    try {
        return editUserService.updateUser(obj);
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const editUserSlice = createSlice({
    name: 'userEdit',
    initialState,
    reducers: {
        reset: (state) => {
            state.isEditLoading = false;
            state.isEditSuccess = false;
            state.isEditError = false;
            state.editMessage = '';
        },
    },
    extraReducers: (builder) => {
        builder
            // Update movie
            .addCase(updateUser.pending, (state) => {
                state.isEditLoading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.isEditLoading = false;
                state.isEditSuccess = true;
                state.editUser = action.payload;

            })
            .addCase(updateUser.rejected, (state, action) => {
                state.isEditLoading = false;
                state.isEditError = true;
                state.editMessage = action.payload;
            })
    },
})

export const { reset } = editUserSlice.actions
export default editUserSlice.reducer