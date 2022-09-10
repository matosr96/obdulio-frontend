import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import Application from "./Application";
import "../src/styles/globals.css";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <Application />
    </React.StrictMode>
  </Provider>
);
