import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import useAuth from "../../services/auth/UseAuth";

// atom
import BtnTranslate from "../../components/atom/ButtonTranslate";

// organisme
import FormValidation from "../../components/organisme/form/FormValidation";

function Login() {
  // plugin declare
  const navigate = useNavigate();
  const { login } = useAuth();
  const { state } = useLocation();
  const { t } = useTranslation("login");

  const handleLogin = () => {
    login().then(() => {
      navigate(state?.path || "/profile");
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200 relative">
      <Helmet>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
      </Helmet>
      <div className="absolute top-1 right-1">
        <BtnTranslate />
      </div>
      <div className="flex flex-wrap h-full w-full">
        <div className="hidden lg:inline w-3/4 h-full">
          <div className="carousel w-full h-full">
            <div id="item1" className="carousel-item">
              <img
                src="/src/assets/image/ads/rektorat.jpg"
                className="w-full h-full object-cover object-left-bottom"
                alt="rektorat"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">{t("login.title")}</h1>
            <p className="py-6">{t("login.description")}</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <FormValidation submit={handleLogin} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
