const { createSlice } = require("@reduxjs/toolkit");

const initialState = { movie: {}, relatedMovies: [], isLoading: true };

const detailSlice = createSlice({
  name: "Detail",
  initialState,
  reducers: {
    updateDetailStore(state, action) {
      return { ...action.payload };
    },
    resetDetailStore(state, action) {
      return initialState;
    },
  },
});

export const { updateDetailStore, resetDetailStore } = detailSlice.actions;
export default detailSlice.reducer;
