import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./App.css"
import { SpeedInsights } from "@vercel/speed-insights/react"

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <SpeedInsights/>
    <BrowserRouter>
      <App />
      <SpeedInsights/>
    </BrowserRouter>
  </React.StrictMode>
);
