import { configureStore } from "@reduxjs/toolkit";
import likesReducer from "../redux/slices/postsSlice";

export const store = configureStore({
  reducer: {
    likes: likesReducer,
  },
});
