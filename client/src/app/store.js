import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import movieReducer from '../features/movie/movieSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    movie: movieReducer,
  },
})