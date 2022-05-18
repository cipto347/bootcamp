import React from "react";
import QuestionImage from "../../../asset/question-img.png";

function GroupQuestion() {
  return (
    <div className="flex justify-center gap-20 my-10 p-2">
      <figure>
        <img src={QuestionImage} />
      </figure>
      <article className="text-survey">
        Perhatikan gambar! <br />x dan y adalah sudut...
      </article>
    </div>
  );
}

export default GroupQuestion;
