import React from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";

import "./index.css";
import App from "./App";
import i18n from "config/i18n";
import reportWebVitals from "./reportWebVitals";
import { PopUpContextProvider } from "context/popupContext";
import { CounterContextProvider } from "context/counterContext";

ReactDOM.render(
  <React.StrictMode>
    <PopUpContextProvider>
      <CounterContextProvider>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </CounterContextProvider>
    </PopUpContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
