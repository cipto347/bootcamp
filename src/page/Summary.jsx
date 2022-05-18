import React from "react";
import ChartDoughnut from "../components/atom/chart/Doughnut";
import TextMain from "../components/atom/text/Main";
import CardQuestion from "../components/molecul/card/CardQuestion";
import Navbar from "../components/molecul/navbar/Navbar";

function Summary() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col flex-center">
        <TextMain textProps="Ringkasan" />
        <ChartDoughnut />
      </div>
      <div className="flex flex-center">
        <TextMain textProps="Review Hasil Jawaban" />
      </div>
      <CardQuestion />
    </>
  );
}

export default Summary;
