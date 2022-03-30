import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./services/auth/UseAuth";

// i18n init
import i18n from "/src/services/i18n/i18n";

// css
import "./index.css";

// app dynamic page
import App from "./App";

// tailwind
import "./style/tailwind/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
