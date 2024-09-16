import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../slices/userSlice.js";
import { useExercises } from "../slices/Exercises";

export const store = configureStore({
  reducer: combineReducers({
    user: userReducer.reducer,
    exercises: useExercises.reducer
  }),
});

