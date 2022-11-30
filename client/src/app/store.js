import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import movieReducer from '../features/movie/movieSlice'
import movieEditReducer from '../features/movieEdit/movieEditSlice'
import userReducer from '../features/user/userSlice'
import userEditReducer from '../features/editUser/editUserSlice'
import memberReducer from '../features/member/memberSlice'
import memberEditReducer from '../features/memberEdit/memberEditSlice'
import subscriptionReducer from '../features/subscription/subscriptionSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    movie: movieReducer,
    movieEdit: movieEditReducer,
    user: userReducer,
    userEdit: userEditReducer,
    member: memberReducer,
    memberEdit: memberEditReducer,
    subscription: subscriptionReducer
  },
})