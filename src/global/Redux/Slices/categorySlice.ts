import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MockyService } from 'services/MockyService';
import { SliceThunkType, thunkBuilder } from 'helpers/slices';

// First, create the thunk
export const fetchCategories = createAsyncThunk('categories/fetchAll', async () => {
  const response = await MockyService.getCategories();
  return response;
});

// Then, handle actions in your reducers:
export const categorySlice = createSlice({
  name: 'categories',
  initialState: { entities: [], isLoading: false, error: null } as SliceThunkType,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: builder => {
    thunkBuilder(builder, fetchCategories);
  },
});
