import { Outlet } from "react-router-dom";
import PartHeader from "../../components/organisme/part/Header";

function AdminLayout() {
  return (
    <div className="h-screen" data-theme="telkom">
      <PartHeader />
      <div className="flex main-layout">
        <main className="mt-2 lg:px-20 p-4 w-full justify-center items-center overflow-y-scroll">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
