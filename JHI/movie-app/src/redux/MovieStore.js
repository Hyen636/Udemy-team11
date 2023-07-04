import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const MovieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    updateMovieStore: (state, action) => {
      return (state = { ...state, ...action.payload });
    },
  },
});

export const { updateMovieStore } = MovieSlice.actions;

export default MovieSlice.reducer;
