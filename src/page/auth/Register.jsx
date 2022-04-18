// import { useLocation, useNavigate } from "react-router-dom";
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
import InputPhone from "../../components/atom/input/Phone";
import InputSelect from "../../components/atom/input/Select";

function Register() {
  // plugin declare
  const { t } = useTranslation("register");

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    position: "",
    apartment: "",
    password: "",
    confirmPass: "",
  });
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
  const [selectPosition] = useState([
    {
      label: "Petugas Keamanan",
      value: "petugas keamanan",
    },
  ]);
  // const handleLogin = () => {
  //   login().then(() => {
  //     navigate(state?.path || "/profile");
  //   });
  // };

  function changeTheme() {
    if (theme === "telkom") setTheme("dark");
    else setTheme("telkom");
  }

  return (
    <div className="hero min-h-screen bg-base-200" data-theme={theme}>
      <Helmet>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
      </Helmet>
      <div className="flex flex-wrap h-screen w-full">
        <div className="flex w-full overflow-y-scroll h-screen lg:w-2/5 items-center justify-center relative bg-base-100">
          <div className="absolute top-2 left-2">
            <BtnBack />
          </div>
          <div className="absolute top-2 right-2">
            <button
              type="button"
              className="btn btn-sm mr-2 gap-2"
              onClick={changeTheme}
            >
              {theme === "telkom" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
            <BtnTranslate />
          </div>
          <div className="flex flex-col w-4/5 lg:w-3/5 items-center mt-64 mb-10">
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
                id="name"
                value={form.name}
                name="name"
                label={t("form.name")}
                className="mt-2 w-full input-4dp focus:outline-none px-4"
                type="text"
                placeholder={t("form.namePlaceholder")}
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                }}
                submitted={submitted}
                validation={t("form.usernameValidationEmail")}
                requiredValidation={t("form.nameValidationRequired")}
              />
              <InputText
                id="email"
                value={form.email}
                name="email"
                label={t("form.email")}
                className="mt-2 w-full input-4dp focus:outline-none px-4"
                type="text"
                placeholder={t("form.emailPlaceholder")}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                }}
                submitted={submitted}
                validation={t("form.emailValidationEmail")}
                requiredValidation={t("form.emailValidationRequired")}
              />
              <InputPhone
                id="phone"
                value={form.phone}
                name="phone"
                label={t("form.phone")}
                className="mt-2 w-full input-4dp focus:outline-none px-4"
                type="text"
                onChange={(e) => {
                  setForm({ ...form, phone: e.target.value });
                }}
                submitted={submitted}
                placeholder={t("form.phonePlaceholder")}
                validation={t("form.phoneValidationEmail")}
                requiredValidation={t("form.phoneValidationRequired")}
              />
              <InputSelect
                id="position"
                name="position"
                label="pilih posisi"
                value={form.position}
                placeholder="Pilih posisi"
                onChange={(e) => setForm({ ...form, position: e.target.value })}
                optionList={selectPosition}
                validation="Pilih salah satu posisi"
                submitted={submitted}
                requiredValidation={t("form.phoneValidationRequired")}
              />
              <InputSelect
                id="apartment"
                name="apartment"
                label="pilih apartment"
                value={form.apartment}
                placeholder="Pilih apartment"
                onChange={(e) =>
                  setForm({ ...form, apartment: e.target.value })
                }
                optionList={selectPosition}
                validation="Pilih salah satu apartment"
                submitted={submitted}
                requiredValidation={t("form.phoneValidationRequired")}
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
                  mdlLoading ? "loading" : ""
                }`}
                disabled={!form.username || !form.password}
                onClick={() => setMdlLoading(!mdlLoading)}
              >
                {t("button.login")}
              </button>
              <div className="flex justify-center w-full mt-4">
                <div className="flex flex-wrap cursor-pointer">
                  <span className="caption-2 text-grey-700 pr-1">
                    {t("register.dontHaveAccount")}
                  </span>
                  <span className="caption-2 text-primary">
                    <button type="button">{t("register.register")}</button>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
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
                  onClick={() => setLoading(!loading)}
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

export default Register;
