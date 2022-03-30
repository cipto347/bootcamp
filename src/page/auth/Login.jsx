import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "/src/services/auth/UseAuth";
import { useTranslation } from "react-i18next";
import "./login.css";

//atom
import BtnTranslate from "../../components/atom/ButtonTranslate";

function Login() {
  //plugin declare
  const navigate = useNavigate();
  const { login } = useAuth();
  const { state } = useLocation();
  const { t } = useTranslation("login");

  const handleLogin = () => {
    login().then(() => {
      navigate(state?.path || "/home");
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200 relative">
      <div className="absolute top-1 right-1">
        <BtnTranslate />
      </div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">{t("login.title")}</h1>
          <p className="py-6">{t("login.description")}</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
