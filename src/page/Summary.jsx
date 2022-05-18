import React from "react";
import TextMain from "../components/atom/text/Main";
import CardQuestion from "../components/molecul/card/CardQuestion";
import Navbar from "../components/molecul/navbar/Navbar";

function Summary() {
  return (
    <>
      <Navbar />
      <div className="flex flex-center">
        <TextMain textProps="Review Hasil Jawaban" />
      </div>
      <CardQuestion />
    </>
  );
}

export default Summary;
