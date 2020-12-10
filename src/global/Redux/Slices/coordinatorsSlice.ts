import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MockyService } from 'services/MockyService';
import { SliceThunkType, thunkBuilder } from 'helpers/slices';

// First, create the thunk
export const fetchCoordinators = createAsyncThunk('coordinators/fetchAll', async () => {
  const response = await MockyService.getCoordinators();
  return response;
});

// Then, handle actions in your reducers:
export const coordinatorsSlice = createSlice({
  name: 'coordinators',
  initialState: { entities: [], isLoading: false, error: null } as SliceThunkType,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: builder => {
    thunkBuilder(builder, fetchCoordinators);
  },
});
