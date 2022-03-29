import * as React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// context
import useAuth from "./services/auth/UseAuth";

// parts
import PartNavigation from "./parts/Navigation";

// pages
import Home from "./page/Home";
import Login from "./page/auth/Login";

const ProtectedRoute = ({ children }) => {
  const { authed } = useAuth();
  const location = useLocation();

  return authed === true ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

const NoMatch = () => {
  return <p>There's nothing here: 404!</p>;
};

export default App;
