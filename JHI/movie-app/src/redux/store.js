import { configureStore, current } from "@reduxjs/toolkit";
import { getDefaultNormalizer } from "@testing-library/react";

import MovieStore from "./MovieStore";

const store = configureStore({
  reducer: {
    MovieStore: MovieStore,
  },
});

export default store;
