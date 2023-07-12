import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const lineSlice = createSlice({
  name: "Line",
  initialState,
  reducers: {
    addLineStore(state, action) {
      return [...state, action.payload];
    },
  },
});

export const { addLineStore } = lineSlice.actions;
export default lineSlice.reducer;
