import React from "react";
import ChartDoughnut from "../components/atom/chart/Doughnut";
import TextMain from "../components/atom/text/Main";
import CardQuestion from "../components/molecul/card/CardQuestion";
import Navbar from "../components/molecul/navbar/Navbar";

function Summary() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col flex-center mt-14 text-3xl">
        <TextMain textProps="Ringkasan" />
        <ChartDoughnut />
      </div>
      <div className="flex flex-center">
        <div className="mx-6">
          <TextMain textProps="8" />
        </div>
        <div className="mx-6">
          <TextMain textProps="3" />
        </div>
        <div className="mx-6">
          <TextMain textProps="2:31" />
        </div>
      </div>
      <div className="flex flex-center mb-8">
        <div className="mx-6">
          <TextMain textProps="Benar" />
        </div>
        <div className="mx-6">
          <TextMain textProps="Salah" />
        </div>
        <div className="mx-6">
          <TextMain textProps="Waktu Penyelesaian" />
        </div>
      </div>
      <div className="flex flex-center">
        <button
          type="button"
          className="btn btn-gradient text-white normal-case border-none rounded-md w-64"
        >
          Review Hasil Jawaban
        </button>
      </div>
      <div className="flex flex-center mb-36">
        <button
          type="button"
          className="btn btn-gradient text-white normal-case border-none rounded-md w-64 mt-2.5"
        >
          Temukan Quiz lainnya
        </button>
      </div>
      <div className="flex flex-center">
        <TextMain textProps="Review Hasil Jawaban" />
      </div>
      <CardQuestion />
    </>
  );
}

export default Summary;
