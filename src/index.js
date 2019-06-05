import React from "react";
import { HashRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootEl
);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    ReactDOM.render(<NextApp />, rootEl);
  });
}
