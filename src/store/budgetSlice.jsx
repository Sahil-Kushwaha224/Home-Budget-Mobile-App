// src/store/budgetSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { insertData as dbInsertData, getAllItems as dbGetAllItems, deleteAllItems as dbDeleteAllItems } from '../utils/Database';

export const insertData = createAsyncThunk(
  'budget/insertData',
  async ({ name, plannedAmount, actualAmount }, { rejectWithValue }) => {
    try {
      await dbInsertData(name, plannedAmount, actualAmount);
      return { name, plannedAmount, actualAmount };
    } catch (error) {
      return rejectWithValue(error.toString());
    }
  }
);

export const fetchItems = createAsyncThunk(
  'budget/fetchItems',
  async (_, { rejectWithValue }) => {
    try {
      const items = await dbGetAllItems();
      return items;
    } catch (error) {
      return rejectWithValue(error.toString());
    }
  }
);

export const clearItems = createAsyncThunk(
  'budget/clearItems',
  async (_, { rejectWithValue }) => {
    try {
      await dbDeleteAllItems();
      return [];
    } catch (error) {
      return rejectWithValue(error.toString());
    }
  }
);

const budgetSlice = createSlice({
  name: 'budget',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(insertData.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(clearItems.fulfilled, (state, action) => {
        state.items = action.payload;
      });
  },
});

export default budgetSlice.reducer;
