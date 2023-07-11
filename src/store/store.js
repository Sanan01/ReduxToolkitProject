import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import dataReducer from './dataSlice';
import authReducer from './authSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    data: dataReducer,
    auth: authReducer,
  },
});
