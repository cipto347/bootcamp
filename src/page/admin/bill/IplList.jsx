import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { _ } from "gridjs-react";
import TextTitle from "../../../components/atom/text/Title";
import GridTable from "../../../components/organisme/table/grid";

function IplList() {
  const navigate = useNavigate();
  const server = {
    url: `${import.meta.env.VITE_KOMPLEKKU_URL}api/list-tagihan/v1`,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${Cookies.get("token")}`,
    },
    then: (data) =>
      data.data.lists.map((item) => [
        item.nama,
        `${item.month} - ${item.year}`,
        _(
          <button
            type="button"
            className="py-2 px-4 border rounded-md text-white bg-primary"
            onClick={() => navigate(`/bill/detail/${item.year}/${item.month}`)}
          >
            Lihat tagihan
            <div className="badge badge-md badge-accent ml-4">{item.count}</div>
          </button>
        ),
        _(
          <button
            type="button"
            className="py-2 px-2 rounded-xl text-white bg-primary"
            onClick={() => alert("clicked!")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        ),
      ]),
    total: (data) => data.data.countTotal,
  };
  const columns = [
    "Nama Tempat Tinggal",
    "Tanggal Tagihan",
    "Jumlah Tagihan",
    "actions",
  ];
  const language = {
    search: {
      placeholder: "Search...",
    },
    pagination: {
      previous: "‹ prev",
      next: "next ›",
      showing: "Menunjukkan",
      results: () => "Item",
      to: "-",
      of: "dari",
    },
  };
  return (
    <div className="card rounded-xl bg-card elevation-4dp-light ">
      <div className="card-body">
        <TextTitle title="List Tagihan" />
        <GridTable
          propsServer={server}
          propsColumns={columns}
          propsLanguage={language}
        />
      </div>
    </div>
  );
}

export default IplList;
