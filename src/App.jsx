import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import propTypes from "prop-types";

// context
import useAuth from "./services/auth/UseAuth";

// pages
import Home from "./page/Home";
import Login from "./page/auth/Login";
import Profile from "./page/profile/Profile";
import DocChart from "./page/documentation/DocChart";
import Register from "./page/auth/Register";
import Dashboard from "./page/admin/Dashboard";
import AdminLayout from "./page/layout/AdminLayout";

function ProtectedRoute({ children }) {
  const { authed } = useAuth();
  const location = useLocation();

  return authed === true ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<AdminLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chart" element={<DocChart />} />
      </Route>
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
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
}

function NoMatch() {
  return <p>There &apos;s nothing here: 404!</p>;
}

ProtectedRoute.propTypes = {
  children: propTypes.element.isRequired,
};

export default App;
