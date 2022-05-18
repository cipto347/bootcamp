import React from "react";
import { Link } from "react-router-dom";
import ChartDoughnut from "../components/atom/chart/Doughnut";
import TextMain from "../components/atom/text/Main";
// import CardQuestion from "../components/molecul/card/CardQuestion";
import Navbar from "../components/molecul/navbar/Navbar";

function Summary() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col flex-center mt-12 text-3xl">
        <TextMain textProps="Ringkasan" />
        <ChartDoughnut />
      </div>
      <div className="flex flex-center mb-12">
        <div className="ml-14 font-extrabold text-center">
          <TextMain textProps="0" />
          <TextMain textProps="Benar" />
        </div>
        <div className="ml-16 text-red-600 font-extrabold text-center">
          <TextMain textProps="0" />
          <TextMain textProps="Salah" />
        </div>
        <div className="ml-16 font-extrabold text-center">
          <TextMain textProps="10:00" />
          <TextMain textProps="Waktu Penyelesaian" />
        </div>
      </div>
      {/* <div className="flex flex-center">
        <button
          type="button"
          className="btn btn-gradient text-white normal-case border-none rounded-md w-64"
        >
          Review Hasil Jawaban
        </button>
      </div> */}
      <div className="flex flex-center mb-36">
        <Link to="/survey">
          <button
            type="button"
            className="btn border-gradient text-black normal-case border-black rounded-md w-64 mt-2.5"
          >
            Temukan Quiz lainnya
          </button>
        </Link>
      </div>
      {/* <div className="flex flex-center">
        <TextMain textProps="Review Hasil Jawaban" />
      </div>
      <CardQuestion /> */}
    </>
  );
}

export default Summary;
