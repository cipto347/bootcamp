import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./services/auth/UseAuth";

// i18n init
import "./services/language/I18n";

// css
import "./index.css";

// app dynamic page
import App from "./App";

// tailwind
import "./style/Index.scss";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <AuthProvider>
            <App />
          </AuthProvider>
        </BrowserRouter>
      </Suspense>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
