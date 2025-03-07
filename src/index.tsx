import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AlertProvider } from "./components/Alert";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <AlertProvider>
        <App/>
    </AlertProvider>
);
