import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import movieReducer from '../features/movie/movieSlice';
import userReducer from '../features/user/userSlice';
import memberReducer from '../features/member/memberSlice';
import subscriptionReducer from '../features/subscription/subscriptionSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    movie: movieReducer,
    user: userReducer,
    member: memberReducer,
    subscription: subscriptionReducer
  },
})