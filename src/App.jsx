import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import propTypes from "prop-types";

// context
import useAuth from "./services/auth/UseAuth";

// pages
import Home from "./page/Home";
// import ImageLanding from "./components/atom/image/Landing";
import LandingCreate from "./components/organisme/landing/Create";
import Summary from "./page/Summary";
import Survey from "./page/Survey";
import AdminLayout from "./page/layout/Layout";
import SurveyPreview from "./page/SurveyPreview";

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
      <Route path="/" element={<Home />} />
      <Route element={<SurveyPreview />} path="/survey-preview" />
      <Route element={<Summary />} path="/summary" />
      <Route element={<Survey />} path="/survey" />
      <Route element={<AdminLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Route path="/" element={<Home />} />
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
