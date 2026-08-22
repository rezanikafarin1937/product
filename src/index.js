import App from "./App";
import { StrictMode } from "react";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)

reportWebVitals();