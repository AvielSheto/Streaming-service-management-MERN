import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import memberService from "./memberService";

const initialState = {
    members: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Get members
export const getMembers = createAsyncThunk('member/getAll', async (_, thunkAPI) => {
    try {
        return await memberService.getMembers();
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

// Create new member
export const createMember = createAsyncThunk('member/create', async (member, thunkAPI) => {
    try {
        // const token = thunkAPI.getState().auth.user.token
        return await memberService.createMember(member)
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

// Update member
export const updateMember = createAsyncThunk('member/update', async (memberData, thunkAPI) => {
    try {
        const id = memberData.id;
        const obj = memberData.obj;
        return await memberService.updateMember(id, obj)
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

// Delete member
export const deleteMember = createAsyncThunk('member/delete', async (id, thunkAPI) => {
    try {
        return await memberService.deleteMember(id)
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

// Member slice 
export const memberSlice = createSlice({
    name: 'member',
    initialState,
    reducers: {
        reset: (state) => {
            state.members = []
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        builder
            // Get members
            .addCase(getMembers.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getMembers.fulfilled, (state, action) => {
                state.isLoading = false
                // state.isSuccess = true
                state.members = action.payload
            })
            .addCase(getMembers.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

            // Create member
            .addCase(createMember.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createMember.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.members.push(action.payload)
            })
            .addCase(createMember.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

             // Update member
             .addCase(updateMember.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateMember.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.members.map((member) => {
                    if (member._id === action.payload.id) {
                        member = action.payload
                    }
                })
            })
            .addCase(updateMember.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

            // Delete member
            .addCase(deleteMember.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteMember.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.members = state.members.filter((member) => member._id !== action.payload.id)
            })
            .addCase(deleteMember.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = memberSlice.actions
export default memberSlice.reducer