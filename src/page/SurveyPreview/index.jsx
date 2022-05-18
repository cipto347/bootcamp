import React, { useState, useEffect } from "react";
import axios from "axios";
import Styles from "./styles.module.scss";
import HeaderBackground from "../../asset/header.png";
import CardStartQuiz from "../../components/organisme/CardStartQuiz";
import IconLogo from "../../asset/logo.png";
import Copyright from "../../components/atom/text/Copyright";

function SurveyPreview() {
  const [listSoal, setListSoal] = useState([]);
  const [questionExample, setQuestionExample] = useState([]);
  const getData = () => {
    axios
      .get(
        `${
          import.meta.env.VITE_BASE_URL
        }v1/pub/smart-survey/627e7a588f66290032fc0b06`,
        {
          auth: {
            username: "telkom",
            password: import.meta.env.VITE_PASSWORD,
          },
        }
      )
      .then((result) => {
        setListSoal(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(questionExample);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div
      className={`bg-[#E5E5E5] w-full h-screen ${Styles.wrapper}`}
      data-theme="telkom"
    >
      <div
        className={Styles.content}
        style={{ backgroundImage: `url(${HeaderBackground})` }}
      >
        <figure className={Styles.imageLogo}>
          <img src={IconLogo} alt="" />
        </figure>
        <div className={Styles.cardWrap}>
          <CardStartQuiz
            quizTitle={listSoal?.title}
            quizDescription={listSoal?.description}
            data={listSoal}
            level={listSoal?.layoutSize}
            questionLength={listSoal?.questions?.length}
            time={listSoal.timer?.duration}
          />
        </div>
      </div>
      <Copyright />
    </div>
  );
}

export default SurveyPreview;
