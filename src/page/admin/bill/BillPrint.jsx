import { useState } from "react";
import QRCode from "react-qr-code";
import TextTitle from "../../../components/atom/text/Title";
import LogoKomplekku from "../../../components/atom/logo/Komplekku";
import mockBillPrint from "../../../mock/mockBillPrint.json";
import { moneyFormatter } from "../../../services/helpers/TextConverter";

function BillPrint() {
  const [billPrint] = useState(mockBillPrint);
  return (
    <div className="w-full lg:w-3/4 flex mx-auto">
      <div>
        <div className="flex justify-between items-center">
          <TextTitle title="Invoice List Tagihan" />
          <label
            htmlFor="my-modal"
            className="btn btn-md btn-primary modal-button"
          >
            <svg
              className="h-5 w-5 stroke-neutral"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9V2H18V9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 18H4C2.9 18 2 17.1 2 16V11C2 9.9 2.9 9 4 9H20C21.1 9 22 9.9 22 11V16C22 17.1 21.1 18 20 18H18"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 14H6V22H18V14Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="hidden lg:inline pl-2 text-neutral">
              {" "}
              Print Barcode
            </span>
          </label>
        </div>
        <div className="card rounded-xl bg-card elevation-4dp-light my-8">
          <div className="card-body grid grid-cols-3">
            <figure className="col-span-3 lg:col-span-2 justify-start items-start">
              <LogoKomplekku propClass="w-20 h-20" />
            </figure>
            <article className="flex flex-col text-left lg:text-right text-base col-span-3 lg:col-span-1">
              <span className="font-bold">{billPrint.sender}</span>
              <p className="text-sm text-content">{billPrint.senderAddress}</p>
              <p className="text-sm text-content mt-4">
                <span className="text-primary">@</span> {billPrint.senderEmail}
              </p>
              <p className="text-sm text-content">
                <span className="text-primary">m</span>{" "}
                {billPrint.senderContact}
              </p>
            </article>
            <article className="flex flex-col text-base col-span-3 lg:col-span-2 mt-2">
              <span className="font-bold">Penerima</span>
              <span className="text-sm font-bold mt-2">
                {billPrint.receiver}
              </span>
              <p className="text-sm text-content w-full lg:w-1/2">
                {billPrint.receiverAddress}
              </p>
              <p className="text-sm text-content mt-4">
                <span className="text-primary opacity-100">@ </span>
                {billPrint.receiverEmail}
              </p>
              <p className="text-sm text-content">
                <span className="text-primary">m</span>{" "}
                {billPrint.receiverContact}
              </p>
            </article>
            <article className="flex flex-col text-left lg:text-right col-span-3 lg:col-span-1 mt-2 grid grid-cols-2">
              <h1 className="headline-1 col-span-2">Invoice</h1>
              <div className="col-span-1 lg:col-span-2 text-sm lg:text-base">
                <h2 className="text-content">NOMOR INVOICE</h2>
                <h2 className="text-content text-sm">
                  {billPrint.invoiceNumber}
                </h2>
              </div>
              <div className="col-span-1 lg:col-span-2 text-sm lg:text-base">
                <h2 className="text-content lg:mt-2">TANGGAL INVOICE</h2>
                <h2 className="text-content text-sm">
                  {billPrint.invoiceDate}
                </h2>
              </div>
            </article>
            <div className="overflow-x-auto col-span-3 mt-12 text-base">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th className="text-base bg-transparent">#</th>
                    <th className="text-base bg-transparent">DESKRIPSI</th>
                    <th className="text-base bg-transparent text-right">
                      JUMLAH
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {billPrint.invoiceItem.items.map((item, index) => (
                    <tr key={item.id}>
                      <th className="border-b-base-200 border-b">
                        {index + 1}
                      </th>
                      <td className="border-b-base-200 border-b">
                        {item.name}
                      </td>
                      <td className="border-b-base-200 border-b text-right">
                        {moneyFormatter(item.price)}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <th
                      colSpan={2}
                      className="border-b-base-200 border-b text-right"
                    >
                      SUBTOTAL
                    </th>
                    <td className="border-b-base-200 border-b text-right">
                      {moneyFormatter(billPrint.invoiceItem.subtotal)}
                    </td>
                  </tr>
                  <tr>
                    <th
                      colSpan={2}
                      className="border-b-base-200 border-b text-right"
                    >
                      PAJAK 5%
                    </th>
                    <td className="border-b-base-200 border-b text-right">
                      {moneyFormatter(billPrint.invoiceItem.tax)}
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2} className="text-right">
                      TOTAL
                    </th>
                    <td className="text-primary text-right text-2xl">
                      {moneyFormatter(billPrint.invoiceItem.total)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <article className="col-span-3 text-right text-xs lg:text-sm mt-12">
              Transfer jumlah total tagihan ke rekening di bawah ini. Harap
              sertakan nomor invoice pada cek Anda
            </article>
            <article className="col-span-3 text-right text-xs lg:text-sm">
              <span className="text-primary">BANK </span>
              <span className="text-sm text-content mt-4">
                0000 0000 0000 0000
              </span>
              <span className="text-primary ml-4">Link Aja </span>
              <span className="text-sm text-content mt-4">
                0000 0000 0000 0000
              </span>
            </article>
          </div>
        </div>
      </div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal modal-bottom  sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Qrcode invoice anda</h3>
          <div className="flex flex-center w-full mt-8">
            <QRCode value={billPrint.invoiceItem.total} />
          </div>
          <div className="modal-action">
            <label
              htmlFor="my-modal"
              className="btn btn-primary btn-sm text-neutral"
            >
              OK
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillPrint;
