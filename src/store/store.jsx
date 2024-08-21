// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import budgetReducer from './budgetSlice';

export const store = configureStore({
  reducer: {
    budget: budgetReducer,
  },
});
export default store;