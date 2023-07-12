import { createSlice } from "@reduxjs/toolkit";

const initialState = "black";

const currentColorSlice = createSlice({
  name: "CurrentColor",
  initialState,
  reducers: {
    changeCurrentColor(state, action) {
      return action.payload;
    },
  },
});

export const { changeCurrentColor } = currentColorSlice.actions;
export default currentColorSlice.reducer;
