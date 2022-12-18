import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from './redux/toggleSlice';
import todoReducer from './redux/todoSlice'
export const store = configureStore({
  reducer: {
    toggleMenu: toggleReducer,
    addTodo:todoReducer
  },
});
