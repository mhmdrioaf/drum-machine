import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { DrumProvider } from "./lib/hooks/drumContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DrumProvider>
      <App />
    </DrumProvider>
  </React.StrictMode>
);
