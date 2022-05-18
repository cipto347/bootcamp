import { Outlet, Link } from "react-router-dom";
// import PartHeader from "../../components/organisme/part/Header";
import PartHeader from "../../components/organisme/part/Header2";

function AdminLayout() {
  return (
    <div className="h-screen" data-theme="telkom">
      <div className="flex">
        <main className="w-full relative">
          <div className="absolute top-0 h-full w-full bg-primary/60" />
          <div className="absolute top-0 w-full">
            <div className="container flex-initial w-11/12 mx-auto">
              <PartHeader />
              <article>
                <h1 className="mt-32 ml-44 font-bold text-white w-1/3 text-4xl">
                  Create an Awesome Quiz in Minutes
                </h1>
                <h6 className="mt-6 ml-44 text-white w-1/3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec
                </h6>
                <Link to="/survey">
                  <button
                    type="button"
                    className="btn btn-gradient pt-4 pb-5 pl-14 pr-14 ml-44 mt-12 text-white border-none rounded-md"
                  >
                    demo Quiz, NOW
                  </button>
                </Link>
              </article>
            </div>
          </div>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
