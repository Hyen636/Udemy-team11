import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const dotSlice = createSlice({
  name: "Dot",
  initialState,
  reducers: {
    addDotStore(state, action) {
      return [...state, action.payload];
    },
  },
});

export const { addDotStore } = dotSlice.actions;
export default dotSlice.reducer;
