import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// A->B->C->D->...................................->E   (PROP DRILLING -> SOL (REDUX,USECONTEXT))
//                 STORE(STATES)

// reducer , action , dispatch , selector
