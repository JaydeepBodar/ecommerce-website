import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import datastore from "./features/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={datastore}>
      <App />
    </Provider>
);
