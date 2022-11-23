import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import editUserService from './editUserService';

const initialState = {
    userEdit: {},
    isEditError: false,
    isEditSuccess: false,
    isEditLoading: false,
    editMessage: '',
}

// Get user 
export const getUser = createAsyncThunk('user/getUser', async (id, thunkAPI) => {
    try {
        return await editUserService.getUser(id);
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

export const editUserSlice = createSlice({
    name: 'userEdit',
    initialState,
    reducers: {
        reset: (state) => {
            state.userEdit = {};
            state.isEditLoading = false;
            state.isEditSuccess = false;
            state.isEditError = false;
            state.editMessage = '';
        },
    },
    extraReducers: (builder) => {
        builder
            // Get user
            .addCase(getUser.pending, (state) => {
                state.isEditLoading = true;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.isEditLoading = false;
                state.isEditSuccess = true;
                state.userEdit = (action.payload);
            })
            .addCase(getUser.rejected, (state, action) => {
                state.isEditLoading = false;
                state.isEditError = true;
                state.editMessage = action.payload;
            })
    },
})

export const { reset } = editUserSlice.actions
export default editUserSlice.reducer