import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import authForm from '../modules/auth';
const store = configureStore({
  reducer: {
    auth: authReducer,
    authForm,
  },
});

export default store;
