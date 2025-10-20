import { createSlice } from "@reduxjs/toolkit";

const likesSlice = createSlice({
  name: "likes",
  initialState: {
    likesByPost: {},
  },
  reducers: {
    toggleLike: (state, action) => {
      const postId = action.payload;
      if (state.likesByPost[postId]) {
        delete state.likesByPost[postId];
      } else {
        state.likesByPost[postId] = true;
      }
    },
  },
});

export const { toggleLike } = likesSlice.actions;
export default likesSlice.reducer;
