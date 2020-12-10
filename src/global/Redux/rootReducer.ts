import { combineReducers } from '@reduxjs/toolkit';
import { categorySlice } from './Slices/categorySlice';
import { coordinatorsSlice } from './Slices/coordinatorsSlice';

const rootReducer = combineReducers({ categories: categorySlice.reducer, coordinators: coordinatorsSlice.reducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
