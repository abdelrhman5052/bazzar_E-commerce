import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import {store , persistor} from "./redux/store.js"
import "react-toastify/dist/ReactToastify.css" // important
import { PersistGate } from 'redux-persist/integration/react'
import {app} from "./firebase.config.js"
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store} app={app}>
      <PersistGate loading={"loading"} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
