import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import index from "./store/index";

ReactDOM.render(
  <Provider store={index}>
    <App />
  </Provider>,
  document.getElementById("root")
);
