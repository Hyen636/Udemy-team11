import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Reset } from "styled-reset";
import { Provider } from "react-redux";
import store from "redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Reset />
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
