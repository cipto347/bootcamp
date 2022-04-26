import Cookies from "js-cookie";
import { _ } from "gridjs-react";
import { useState } from "react";
import TextTitle from "../../../components/atom/text/Title";
import GridTable from "../../../components/organisme/table/grid";
import CapitalFirstLetter, {
  dateFormat,
} from "../../../services/helpers/TextConverter";
import BtnBackModal from "../../../components/atom/button/ButtonBackModal";
import InputText from "../../../components/atom/input/Text";
import InputTextArea from "../../../components/atom/input/TextArea";

function MailList() {
  const server = {
    url: `${import.meta.env.VITE_KOMPLEKKU_URL}api/broadcast/v1`,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${Cookies.get("token")}`,
    },
    then: (data) =>
      data.data.lists.map((item) => [
        item.subject,
        item.body,
        dateFormat(item.timestamp),
        CapitalFirstLetter(item.user_type),
        CapitalFirstLetter(item.send_type),
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
    "Judul Email/SMS",
    "Isi Pesan",
    "Tanggal",
    "Posisi",
    "Tipe Pesan",
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
  const [form, setForm] = useState({ email: "", body: "", to: "", type: "" });
  const [submitted] = useState(false);
  return (
    <div className="card rounded-xl bg-card elevation-4dp-light ">
      <div className="card-body">
        <TextTitle title="List Email/SMS" />
        <GridTable
          propsServer={server}
          propsColumns={columns}
          propsLanguage={language}
          propsAddButton
        >
          <label
            htmlFor="broadcast-message"
            className="btn btn-primary lg:absolute right-0 top-2 mb-2 lg:mb-0 float-right btn-sm lg:btn-md modal-button z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 fill-neutral"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            <span className="hidden lg:inline px-2 text-neutral">
              Tambah Email/SMS
            </span>
          </label>
        </GridTable>
      </div>
      <input type="checkbox" id="broadcast-message" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative p-4 flex flex-col">
          <div className="float-left">
            <BtnBackModal propFor="broadcast-message" />
          </div>
          <div className="p-4">
            <TextTitle title="Email/SMS" />
            <InputText
              id="email"
              value={form.email}
              name="email"
              label="judul email/sms"
              className="mt-2 w-full input-4dp focus:outline-none px-4"
              type="text"
              placeholder="masukkan judul email/sms"
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
              submitted={submitted}
              validation="belum memasukkan judul email/sms"
              requiredValidation="email/sms wajib diiisi"
            />
            <InputTextArea
              id="body"
              value={form.body}
              name="body"
              label="isi pesan"
              className="mt-2 w-full input-4dp focus:outline-none px-4"
              placeholder="Masukkan isi pesan"
              onChange={(e) => {
                setForm({ ...form, body: e.target.value });
              }}
              submitted={submitted}
              validation="belum memasukkan isi pesan"
              requiredValidation="isi pesan wajib diiisi"
            />
            <div className="tabs mt-4 bg-neutral-focus rounded-t-lg bordered">
              <span className="tab tab-bordered">Tab 1</span>
              <span className="tab tab-bordered tab-active">Tab 2</span>
              <span className="tab tab-bordered">Tab 3</span>
            </div>
            <div className="bordered border-2 rounded-b-lg p-2">
              <div className="form-control flex-row justify-start">
                <label className="label cursor-pointer justify-start">
                  <input
                    type="checkbox"
                    checked="checked"
                    className="checkbox checkbox-sm"
                  />
                  <span className="label-text ml-4">Remember me</span>
                </label>
                <label className="label cursor-pointer justify-start ml-4">
                  <input
                    type="checkbox"
                    checked="checked"
                    className="checkbox checkbox-sm"
                  />
                  <span className="label-text ml-4">Remember me</span>
                </label>
              </div>
              <textarea
                className="textarea resize-none w-full textarea-bordered focus:outline-none"
                placeholder="Masukkan nama kontak"
                rows={5}
              />
            </div>
            <h3 className="label-1 text-sm mt-4">Tipe Pesan</h3>
            <div className="form-control flex-row justify-start">
              <label className="label cursor-pointer justify-start">
                <input
                  type="checkbox"
                  checked="checked"
                  className="checkbox checkbox-sm checkbox-primary"
                />
                <span className="label-text ml-4">Email</span>
              </label>
              <label className="label cursor-pointer justify-start ml-4">
                <input
                  type="checkbox"
                  checked="checked"
                  className="checkbox checkbox-sm checkbox-primary "
                />
                <span className="label-text ml-4">SMS</span>
              </label>
            </div>
          </div>

          <div className="modal-action">
            <label htmlFor="broadcast-message" className="btn btn-primary px-4">
              Kirim
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MailList;
