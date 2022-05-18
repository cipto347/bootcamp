import React from "react";
import QuestionImage from "../../../asset/question-img.png";
import TextQuestion from "../../atom/text/Question";
import OptionMultipleChoice from "../option/MultipleChoice";
import OptionStatus from "../option/Status";

function CardQuestion() {
  return (
    <div class="card w-4/12 bg-base-100 shadow-xl m-auto">
      <div class="card-body">
        <figure className="justify-start">
          <img src={QuestionImage} />
        </figure>
        <TextQuestion question="1. Perhatikan gambar! x dan y adalah sudut..." />
        <hr />
        <OptionMultipleChoice option="A" contentOption="Luar Sepihak" />
        <OptionMultipleChoice option="B" contentOption="Luar Berseberangan" />
        <OptionMultipleChoice option="C" contentOption="Dalam Berseberangan" />
        <OptionMultipleChoice option="D" contentOption="Sehadap" />
        <OptionStatus statusContent="Jawaban anda adalah:  D" />
      </div>
    </div>
  );
}

export default CardQuestion;
