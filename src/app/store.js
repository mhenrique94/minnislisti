import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/toggle/toggleSlice';

export const store = configureStore({
  reducer: {
    toggleMenu: counterReducer,
  },
});
