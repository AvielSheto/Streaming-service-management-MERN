import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userService from './userService'

const initialState = {
    users: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Get users 
export const getUsers = createAsyncThunk('s/getUsers', async (id, thunkAPI) => {
    try {
        return await userService.getUsers();
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

// Update user
export const updateUser = createAsyncThunk('user/update', async (obj, thunkAPI) => {
    try {
        return userService.updateUser(obj);
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

// Delete user 
export const deleteUser = createAsyncThunk('user/delete', async (id, thunkAPI)=>{
    try {
        return userService.deleteUser(id)
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


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        reset: (state) => {
            state.users = []
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
        },
    },
    extraReducers: (builder) => {
        builder

            // Get users
            .addCase(getUsers.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.users = action.payload
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

             // Update user
             .addCase(updateUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.users.map((user) => {
                    if (user.id === action.payload.id) {
                        user = action.payload
                    }
                })
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })

            // Delete user
            .addCase(deleteUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.users = state.users.filter((user) => user.id !== action.payload._id)
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    },
})

export const { reset } = userSlice.actions;
export default userSlice.reducer;
