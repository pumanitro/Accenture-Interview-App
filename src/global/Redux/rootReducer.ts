import { combineReducers } from '@reduxjs/toolkit';
import { categorySlice } from './Slices/categorySlice';

const rootReducer = combineReducers({ categories: categorySlice.reducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
