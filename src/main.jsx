import "./index.css";

import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import Store from "./redux/Store.js";

ReactDOM.createRoot(document.getElementById("root"))
.render(
    <Provider store={Store}>
        <BrowserRouter>
            <Toaster />
            <App />
        </BrowserRouter>
    </Provider>
    
);


