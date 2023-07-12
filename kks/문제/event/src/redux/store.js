import { configureStore } from "@reduxjs/toolkit";
import dotSlice from "./dotSlice";
import lineSlice from "./lineSlice";
import currentColorSlice from "./currentColorSlice";

const store = configureStore({
  reducer: {
    DotStore: dotSlice,
    LineStore: lineSlice,
    CurrentColorStore: currentColorSlice,
  },
});

export default store;
