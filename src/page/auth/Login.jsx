import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
// import useAuth from "../../services/auth/UseAuth";

// atom
import { useState } from "react";
// import PropTypes from "prop-types";
import BtnTranslate from "../../components/atom/ButtonTranslate";
import BtnBack from "../../components/atom/ButtonBack";
import InputText from "../../components/atom/input/Text";
import InputPassword from "../../components/atom/input/Password";
import CapitalFirstLetter, {
  partialEmail,
} from "../../services/helpers/TextConverter";
import Timer from "../../components/atom/timer";
import BtnThemeChanger from "../../components/atom/button/ThemeChanger";
import apiAuthHandler from "../../services/auth/apiAuthHandler";

function Login() {
  // plugin declare
  const navigate = useNavigate();
  const { t } = useTranslation("login");

  const [form, setForm] = useState({ username: "", password: "" });
  const [forgot, setForgot] = useState({
    username: "",
    recovery: "",
  });
  const [submitted] = useState(false);
  const [theme, setTheme] = useState("telkom");
  const [loading, setLoading] = useState(false);
  const [mdlLoading, setMdlLoading] = useState(false);
  const [mdlStep] = useState("forgot");
  const [limit, setLimit] = useState(true);
  // const handleLogin = () => {
  //   login().then(() => {
  //     navigate(state?.path || "/profile");
  //   });
  // };

  function changeTheme() {
    if (theme === "telkom") setTheme("dark");
    else setTheme("telkom");
  }

  function onSubmit() {
    setLoading(true);
    return apiAuthHandler("api/users/v1/login/email", form, "POST")
      .then((response) => {
        setLoading(false);
        if (response.success === true) {
          navigate("/dashboard");
        }
      })
      .catch();
  }

  return (
    <div className="hero min-h-screen bg-base-200" data-theme={theme}>
      <Helmet>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
      </Helmet>
      <div className="flex flex-wrap h-screen w-full">
        <figure className="hidden lg:flex w-3/5 h-full g-tosca relative">
          <img
            src="/src/assets/texture/texture_gray.png"
            className="w-full h-full object-cover absolute -scale-x-100"
            alt="textureGrey"
          />
          <img
            src="/src/assets/illustration/ill_login.png"
            className="w-2/3 h-4/5 object-contain absolute absolute-center -scale-x-100"
            alt="illLogin"
          />
        </figure>
        <div className="flex w-full h-screen lg:w-2/5 items-center justify-center relative bg-base-100">
          <div className="absolute top-2 left-2">
            <BtnBack />
          </div>
          <div className="absolute top-2 right-2">
            <div className="flex justify-center items-center gap-2">
              <BtnThemeChanger changeTheme={changeTheme} theme={theme} />
              <BtnTranslate />
            </div>
          </div>
          <div className="flex flex-col w-4/5 lg:w-3/5 items-center">
            <figure>
              <img
                src="/src/assets/icon/Icon-Illustration-Login.svg"
                className="h-24"
                alt="illLogin"
              />
            </figure>
            <span className="headline-1">{t("login.title")}</span>
            <span className="mt-1 typo-desc">{t("login.greeting")}</span>
            <form action="" className="w-full">
              <InputText
                id="identity"
                value={form.username}
                name="identity"
                label={t("form.username")}
                className="mt-2 w-full input-4dp focus:outline-none px-4"
                type="text"
                placeholder={t("form.usernamePlaceholder")}
                onChange={(e) => {
                  setForm({ ...form, username: e.target.value });
                }}
                submitted={submitted}
                validation={t("form.usernameValidationEmail")}
                requiredValidation={t("form.usernameValidationRequired")}
              />
              <InputPassword
                id="password"
                value={form.password}
                name="password"
                label={t("form.password")}
                className="mt-2 w-full input-4dp focus:outline-none px-4"
                placeholder={t("form.passwordPlaceholder")}
                onChange={(e) => {
                  setForm({ ...form, password: e.target.value });
                }}
                submitted={submitted}
                validation={t("form.passwordValidation")}
                requiredValidation={t("form.passwordValidationRequired")}
              />
              <div className="flex justify-end w-full mt-4 mb-2">
                <div className="flex flex-wrap cursor-pointer">
                  <span className="caption-2 text-grey-700 pr-1">
                    {CapitalFirstLetter(t("forgot.forgot"))}
                  </span>
                  <span className="caption-2 text-primary">
                    <label
                      htmlFor="forgot-password-modal"
                      className="cursor-pointer"
                    >
                      {CapitalFirstLetter(t("forgot.password"))}
                    </label>
                  </span>
                </div>
              </div>
              <button
                type="button"
                className={`btn btn-primary w-full mt-4 disabled:btn-primary disabled:opacity-80 ${
                  loading ? "loading" : ""
                }`}
                disabled={!form.username || !form.password}
                onClick={onSubmit}
              >
                {t("button.login")}
              </button>
              <div className="flex justify-center w-full mt-4">
                <div className="flex flex-wrap cursor-pointer">
                  <span className="caption-2 text-grey-700 pr-1">
                    {t("register.dontHaveAccount")}
                  </span>
                  <span className="caption-2 text-primary">
                    <button type="button" onClick={() => navigate("/register")}>
                      {t("register.register")}
                    </button>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <input
        type="checkbox"
        id="forgot-password-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          {mdlStep === "forgot" && (
            <div className="flex flex-col flex-center relative p-4">
              <label
                htmlFor="forgot-password-modal"
                className="btn btn-sm btn-link absolute -left-0.5 top-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </label>
              <img
                className="h-30 w-30 my-4"
                src="/src/assets/icon/Icon-Illustration-Password.svg"
                alt="illPassword"
              />
              <span className="headline-1 pr-1">{t("forgot.title")}</span>
              <span className="mt-1 typo-desc text-center">
                {t("forgot.desc")}
              </span>
              <form action="" className="w-full">
                <InputText
                  id="identity"
                  value={forgot.username}
                  name="identity"
                  label={t("form.username")}
                  className="mt-2 w-full input-4dp focus:outline-none px-4"
                  type="text"
                  placeholder={t("form.usernamePlaceholder")}
                  onChange={(e) => {
                    setForgot({ ...forgot, username: e.target.value });
                  }}
                  submitted={submitted}
                  validation={t("form.usernameValidationEmail")}
                  requiredValidation={t("form.usernameValidationRequired")}
                />
                <button
                  type="button"
                  className={`btn btn-primary w-full mt-8 disabled:btn-primary disabled:opacity-80 ${
                    loading ? "loading" : ""
                  }`}
                  disabled={!forgot.username}
                  onClick={() => {
                    setMdlLoading(!mdlLoading);
                  }}
                >
                  {t("button.sendForgot")}
                </button>
              </form>
            </div>
          )}
          {mdlStep === "recovery" && (
            <div className="flex flex-col flex-center relative p-4">
              <label
                htmlFor="forgot-password-modal"
                className="btn btn-sm btn-link absolute -left-0.5 top-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </label>
              <img
                className="h-30 w-30 my-4"
                src="/src/assets/icon/Icon-Illustration-Verify.svg"
                alt="illPassword"
              />
              <span className="headline-1 pr-1">{t("recovery.title")}</span>
              <span className="mt-1 typo-desc text-center">
                {`${t("recovery.desc")} ${partialEmail(forgot.username)}`}
              </span>
              <form action="" className="w-full">
                <InputPassword
                  id="recovery"
                  value={forgot.recovery}
                  name="identity"
                  label={t("form.recovery")}
                  className="mt-2 w-full input-4dp focus:outline-none px-4"
                  placeholder={t("form.usernamePlaceholder")}
                  onChange={(e) => {
                    setForgot({ ...forgot, recovery: e.target.value });
                  }}
                  submitted={submitted}
                  validation={t("form.recoveryValidation")}
                  requiredValidation={t("form.recoveryValidationRequired")}
                />
                <button
                  type="button"
                  className={`btn btn-primary w-full mt-8 disabled:btn-primary disabled:opacity-80 ${
                    loading ? "loading" : ""
                  }`}
                  disabled={!forgot.recovery}
                  onClick={() => setLoading(!loading)}
                >
                  {t("button.next")}
                </button>
                <button
                  type="button"
                  className="btn btn-ghost hover:bg-transparent hover:text-primary w-full mt-4 opacity-60 hover:opacity-100"
                >
                  {limit && (
                    <>
                      {t("button.sendAgain")}
                      <Timer
                        initialMinute={2}
                        initialSeconds={59}
                        onFinish={() => setLimit(false)}
                      />
                    </>
                  )}
                  {!limit && <>{t("button.sendForgot")}</>}
                </button>
              </form>
            </div>
          )}
          {mdlStep === "newPassword" && (
            <div className="flex flex-col flex-center relative p-4">
              <label
                htmlFor="forgot-password-modal"
                className="btn btn-sm btn-link absolute -left-0.5 top-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </label>
              <img
                className="h-30 w-30 my-4"
                src="/src/assets/icon/Icon-Illustration-Password.svg"
                alt="illPassword"
              />
              <span className="headline-1 pr-1">{t("forgot.title")}</span>
              <span className="mt-1 typo-desc text-center">
                {t("forgot.desc")}
              </span>
              <form action="" className="w-full">
                <InputText
                  id="identity"
                  value={forgot.username}
                  name="identity"
                  label={t("form.username")}
                  className="mt-2 w-full input-4dp focus:outline-none px-4"
                  type="text"
                  placeholder={t("form.usernamePlaceholder")}
                  onChange={(e) => {
                    setForgot({ ...forgot, username: e.target.value });
                  }}
                  submitted={submitted}
                  validation={t("form.usernameValidationEmail")}
                  requiredValidation={t("form.usernameValidationRequired")}
                />
                <button
                  type="button"
                  className={`btn btn-primary w-full mt-8 disabled:btn-primary disabled:opacity-80 ${
                    loading ? "loading" : ""
                  }`}
                  disabled={!forgot.username}
                  onClick={() => setLoading(!loading)}
                >
                  {t("button.sendForgot")}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
