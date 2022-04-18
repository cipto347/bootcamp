import { useState } from "react";
import { Outlet } from "react-router-dom";
import Aside from "../../components/organisme/part/Aside";
import PartHeader from "../../components/organisme/part/Header";

function AdminLayout() {
  const [rtl] = useState(false);
  const [collapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [theme, setTheme] = useState("telkom");

  function changeTheme() {
    if (theme === "telkom") setTheme("dark");
    else setTheme("telkom");
  }

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  return (
    <div className="h-screen" data-theme={theme}>
      <PartHeader themeChanger={changeTheme} theme={theme} />
      <div className="flex main-layout">
        <Aside
          collapsed={collapsed}
          rtl={rtl}
          toggled={toggled}
          handleToggleSidebar={handleToggleSidebar}
        />
        <main className="lg:p-20 p-4 w-full justify-center items-center">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
