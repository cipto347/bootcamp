import Cookies from "js-cookie";
import { _ } from "gridjs-react";
import GridTable from "../../../components/organisme/table/grid";
import TextTitle from "../../../components/atom/text/Title";
import CapitalFirstLetter, {
  dateFormat,
} from "../../../services/helpers/TextConverter";

function InfoList() {
  const server = {
    url: `${import.meta.env.VITE_KOMPLEKKU_URL}/api/info/v1`,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${Cookies.get("token")}`,
    },
    then: (data) =>
      data.data.lists.map((item) => [
        item.judul,
        dateFormat(item.terbit),
        dateFormat(item.kedaluarsa),
        CapitalFirstLetter(item.posisi),
        item.status === true ? "Aktif" : "Non-Aktif",
        _(
          <div className="flex gap-1">
            <button
              type="button"
              className="py-2 px-2 rounded-xl text-white bg-primary"
              onClick={() => alert("clicked!")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
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
          </div>
        ),
      ]),
    total: (data) => data.data.countTotal,
  };
  const columns = [
    "Judul Info Pemberitahuan",
    "Tanggal Terbit",
    "Tanggal Kedaluarsa",
    "Posisi",
    "Status",
    "Action",
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

export default InfoList;
