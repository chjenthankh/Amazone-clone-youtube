import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { StateProvider } from "./context/context";
import reducer, { initialState } from "./reducer/basket";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
