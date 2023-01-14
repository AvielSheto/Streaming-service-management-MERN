import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import subscriptionService from "./subscriptionService";

const initialState = {
    subscriptions: [],
    isSubscriptionError: false,
    isSubscriptionSuccess: false,
    isSubscriptionLoading: false,
    subscriptionMessage: '',
}

// Get subscriptions
export const getSubscriptions = createAsyncThunk('subscriptions/getAll', async (_, thunkAPI) => {
    try {
        return await subscriptionService.getSubscriptions();
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

// // Get subscription
export const getSubscription = createAsyncThunk('subscriptions/getById', async (memberId, thunkAPI) => {
    try {
        return await subscriptionService.getSubscription(memberId);
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


// Create new subscription
export const createSubscription = createAsyncThunk('subscriptions/create', async (subscriptionData, thunkAPI) => {
    try {
        // const token = thunkAPI.getState().auth.user.token
        // console.log(subscriptionData);
        return await subscriptionService.createSubscription(subscriptionData)
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

// Subscription slice 
export const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState,
    reducers: {
        reducers: {
            reset: (state) => initialState,
        },
    },
    extraReducers: (builder) => {
        builder
            // Get subscriptions
            .addCase(getSubscriptions.pending, (state) => {
                state.isSubscriptionLoading = true
            })
            .addCase(getSubscriptions.fulfilled, (state, action) => {
                state.isSubscriptionLoading = false
                state.isSubscriptionSuccess = true
                state.subscriptions = (action.payload)
            })
            .addCase(getSubscriptions.rejected, (state, action) => {
                state.isSubscriptionLoading = false
                state.isSubscriptionError = true
                state.subscriptionMessage = action.payload
            })

            // Create subscriptions
            .addCase(createSubscription.pending, (state) => {
                state.isSubscriptionLoading = true
            })
            .addCase(createSubscription.fulfilled, (state, action) => {
                state.isSubscriptionLoading = false
                state.isSubscriptionSuccess = true
                state.subscriptions.push(action.payload)
            })
            .addCase(createSubscription.rejected, (state, action) => {
                state.isSubscriptionLoading = false
                state.isSubscriptionError = true
                state.subscriptionMessage = action.payload
            })
    }
})

export const { reset } = subscriptionSlice.actions
export default subscriptionSlice.reducer