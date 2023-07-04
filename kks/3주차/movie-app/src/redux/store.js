import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";
import searchSlice from "./searchSlice";
import detailSlice from "./detailSlice";

const store = configureStore({
  reducer: {
    MovieStore: movieSlice,
    SearchStore: searchSlice,
    DetailStore: detailSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
