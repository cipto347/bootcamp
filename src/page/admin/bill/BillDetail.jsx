import Cookies from "js-cookie";
import { _ } from "gridjs-react";
import { useNavigate, useParams } from "react-router-dom";
import GridTable from "../../../components/organisme/table/grid";
import TextTitle from "../../../components/atom/text/Title";

function BillDetail() {
  const navigate = useNavigate();
  const { year, month } = useParams();
  const server = {
    url: `${
      import.meta.env.VITE_KOMPLEKKU_URL
    }api/list-tagihan/v1/detail/?month=${month}&year=${year}`,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${Cookies.get("token")}`,
    },
    then: (data) =>
      data.data.lists.map((item) => [
        item.nomor,
        item.nama,
        item.harga_sewa,
        item.biaya_ipl,
        item.penalty,
        item.total_biaya || 0,
        _(
          <div
            className={`badge gap-2 ${
              item.penalty === "PAID" ? "badge-success" : "badge-error"
            }`}
          >
            {item.penalty}
          </div>
        ),
        _(
          <button
            type="button"
            className="py-2 px-2 rounded-xl text-white bg-primary"
            onClick={() => navigate("/bill/detail/print")}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              fill="none"
            >
              <path
                d="M6 9V2H18V9"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 18H4C2.9 18 2 17.1 2 16V11C2 9.9 2.9 9 4 9H20C21.1 9 22 9.9 22 11V16C22 17.1 21.1 18 20 18H18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 14H6V22H18V14Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ),
      ]),
    total: (data) => data.data.countTotal,
  };
  const columns = [
    "Nomor Tempat Tinggal",
    "Nama Penyewa",
    "Harga Sewa",
    "Tagihan IPL",
    "Pinalti",
    "Total Pembayaran",
    "Status",
    "Print Bill",
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

export default BillDetail;
