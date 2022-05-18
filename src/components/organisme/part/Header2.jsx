// import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function PartHeader() {
  // const { t } = useTranslation("header");
  return (
    <div className="navbar">
      <div className="navbar-start">
        <label
          htmlFor="my-drawer"
          className="btn btn-ghost btn-circle flex md:hidden"
        >
          <figure>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </figure>
        </label>
        <div className="btn btn-ghost flex justify-center items-center pl-40 gap-x-4 bg-transparent">
          <img src="/src/assets/img/logo/logo-horizontal.png" alt="profile" />
        </div>
      </div>
      <div className="navbar-end py-1 hidden lg:inline-flex gap-2 justify-center items-center mr-20">
        <Link className="text-white pr-12" to="/">
          About Us
        </Link>
        <Link className="text-white pr-11" to="/">
          Feature
        </Link>
        <Link className="text-white pr-14" to="/">
          Bank Soal
        </Link>
        <button
          type="button"
          className="btn btn-tp btn-ghost text-white border-white mr-2.5 rounded-md"
        >
          LOGIN
        </button>
        <button
          type="button"
          className="btn btn-gradient text-white border-none rounded-md"
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
}
export default PartHeader;
