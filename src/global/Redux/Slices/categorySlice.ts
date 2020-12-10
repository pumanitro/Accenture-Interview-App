import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MockyService } from '../../../services/MockyService';

// First, create the thunk
export const fetchCategories = createAsyncThunk('categories/fetchAll', async () => {
  const response = await MockyService.getCategories();
  return response;
});

type SliceThunkType = {
  entities: any[];
  loading: 'idle' | 'pending';
  error: any;
};

// Then, handle actions in your reducers:
export const categorySlice = createSlice({
  name: 'categories',
  initialState: { entities: [], loading: 'idle', error: null } as SliceThunkType,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: builder => {
    builder.addCase(fetchCategories.pending, state => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.entities = action.payload;
      }
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.error = action.error;
      }
    });
  },
});
