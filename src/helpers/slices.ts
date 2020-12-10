import { ActionReducerMapBuilder, AsyncThunk } from '@reduxjs/toolkit';

export type SliceThunkType = {
  entities: any[];
  isLoading: boolean;
  error: any;
};

export const thunkBuilder = (builder: ActionReducerMapBuilder<SliceThunkType>, thunk: AsyncThunk<any, any, any>) => {
  builder.addCase(thunk.pending, state => {
    if (!state.isLoading) {
      state.isLoading = true;
    }
  });
  builder.addCase(thunk.fulfilled, (state, action) => {
    if (state.isLoading) {
      state.isLoading = false;
      state.entities = action.payload;
    }
  });
  builder.addCase(thunk.rejected, (state, action) => {
    if (state.isLoading) {
      state.isLoading = false;
      state.error = action.error;
    }
  });
};
