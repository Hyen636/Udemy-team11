const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  movies: [],
  isLoading: true,
};

const movieSlice = createSlice({
  name: "Movie",
  initialState,
  reducers: {
    updateMovieStore(state, action) {
      return { ...state, ...action.payload };
    },
    resetMovieStore(state, action) {
      return initialState;
    },
  },
});

export const { updateMovieStore, resetMovieStore } = movieSlice.actions;
export default movieSlice.reducer;
