import { combineReducers } from '@reduxjs/toolkit';
import { mealReducer } from './mealReducer';

export default combineReducers({
  meals: mealReducer,
});
