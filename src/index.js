import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StyleProvider } from "@ant-design/cssinjs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyleProvider hashPriority="high">
        <App />
      </StyleProvider>
    </BrowserRouter>
  </React.StrictMode>
);
