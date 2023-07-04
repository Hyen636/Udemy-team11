const { createSlice } = require("@reduxjs/toolkit");

const initialState = { movies: [], isLoading: true };

const searchSlice = createSlice({
  name: "Search",
  initialState,
  reducers: {
    updateSearchStore(state, action) {
      return { ...state, ...action.payload };
    },
    resetSearchStore(state, action) {
      return initialState;
    },
  },
});

export const { updateSearchStore, resetSearchStore } = searchSlice.actions;
export default searchSlice.reducer;
