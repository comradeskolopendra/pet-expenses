import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/app";
import store from "./store";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
