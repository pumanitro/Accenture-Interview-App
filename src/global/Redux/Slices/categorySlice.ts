import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MockyService } from '../../../services/MockyService';

// First, create the thunk
export const fetchCategories = createAsyncThunk('categories/fetchAll', async () => {
  const response = await MockyService.getCategories();
  return response;
});

type SliceThunkType = {
  entities: any[];
  isLoading: boolean;
  error: any;
};

// Then, handle actions in your reducers:
export const categorySlice = createSlice({
  name: 'categories',
  initialState: { entities: [], isLoading: false, error: null } as SliceThunkType,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: builder => {
    builder.addCase(fetchCategories.pending, state => {
      if (!state.isLoading) {
        state.isLoading = true;
      }
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      if (state.isLoading) {
        state.isLoading = false;
        state.entities = action.payload;
      }
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      if (state.isLoading) {
        state.isLoading = false;
        state.error = action.error;
      }
    });
  },
});
