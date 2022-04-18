import propTypes from "prop-types";
import { useTranslation } from "react-i18next";
import LogoKomplekku from "../../atom/logo/Komplekku";
import BtnTranslate from "../../atom/ButtonTranslate";
import BtnThemeChanger from "../../atom/button/ThemeChanger";

function PartHeader(props) {
  const { t } = useTranslation("header");
  const { themeChanger, theme } = props;
  return (
    <div className="navbar bg-base-100 shadow">
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
        <div className="btn btn-ghost flex justify-center items-center gap-x-4 hover:bg-transparent">
          <LogoKomplekku />
          <span>KOMPLEKKU</span>
        </div>
      </div>
      <div className="navbar-end py-1 hidden lg:inline-flex gap-2">
        <button type="button" className="btn btn-ghost">
          {t("label.helpCenter")}
        </button>
        <button type="button" className="btn btn-ghost btn-circle">
          <svg
            className="h-8 w-8"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35 19.1667C35 21.3333 34.5 23.5 33.5 25.5C31.1667 30.3333 26.1667 33.3333 20.8333 33.3333C18.6667 33.3333 16.5 32.8333 14.5 31.8333L5 35L8.16667 25.5C7.16667 23.5 6.66667 21.3333 6.66667 19.1667C6.66667 13.8333 9.66667 8.83333 14.5 6.5C16.5 5.5 18.6667 5 20.8333 5H21.6667C28.8333 5.33333 34.6667 11.1667 35 18.3333V19.1667Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.4997 20.8333C15.4202 20.8333 16.1663 20.0871 16.1663 19.1667C16.1663 18.2462 15.4202 17.5 14.4997 17.5C13.5792 17.5 12.833 18.2462 12.833 19.1667C12.833 20.0871 13.5792 20.8333 14.4997 20.8333Z"
              fill="currentColor"
            />
            <path
              d="M20.8337 20.8333C21.7541 20.8333 22.5003 20.0871 22.5003 19.1667C22.5003 18.2462 21.7541 17.5 20.8337 17.5C19.9132 17.5 19.167 18.2462 19.167 19.1667C19.167 20.0871 19.9132 20.8333 20.8337 20.8333Z"
              fill="currentColor"
            />
            <path
              d="M27.1667 20.8333C28.0871 20.8333 28.8333 20.0871 28.8333 19.1667C28.8333 18.2462 28.0871 17.5 27.1667 17.5C26.2462 17.5 25.5 18.2462 25.5 19.1667C25.5 20.0871 26.2462 20.8333 27.1667 20.8333Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button type="button" className="btn btn-ghost btn-circle">
          <svg
            className="h-8 w-8"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 15C30 9.5 25.5 5 20 5C14.5 5 10 9.5 10 15C10 26.6667 5 30 5 30H35C35 30 30 26.6667 30 15Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.9997 30C15.9997 30.3333 15.833 30.5 15.833 30.8333C15.833 33.1667 17.6663 35 19.9997 35C22.333 35 24.1663 33.1667 24.1663 30.8333C24.1663 30.5 24.1663 30.3333 23.9997 30H15.9997Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <BtnTranslate />
        <BtnThemeChanger changeTheme={themeChanger} theme={theme} />
        <div className="dropdown dropdown-end w-52">
          <label
            tabIndex="0"
            htmlFor="profile-menu"
            className="flex justify-start items-center gap-2 cursor-pointer btn btn-ghost"
          >
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://api.lorem.space/image/face?hash=33791"
                  alt="profile"
                />
              </div>
            </div>
            <span className="overflow-ellipsis overflow-hidden whitespace-nowrap">
              Cipto Tri Utomo
            </span>
          </label>
          <ul
            tabIndex="0"
            id="profile-menu"
            className="menu menu-compact dropdown-content mt-1 p-2 shadow bg-gray-50 rounded-box w-52"
          >
            <li>
              <a href="/" className="justify-between">
                Profile
                <span className="badge badge-accent">New</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
PartHeader.propTypes = {
  themeChanger: propTypes.func.isRequired,
  theme: propTypes.string.isRequired,
};
export default PartHeader;
