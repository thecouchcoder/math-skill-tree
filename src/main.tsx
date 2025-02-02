import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { ReactFlowProvider } from "reactflow";
import "reactflow/dist/style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactFlowProvider>
      <div style={{ width: "100vw", height: "100vh" }}>
        <App />
      </div>
    </ReactFlowProvider>
  </React.StrictMode>
);
