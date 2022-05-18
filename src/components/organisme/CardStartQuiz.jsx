import propTypes from "prop-types";
import styles from "./CardStartQuiz.module.scss";
import Banner from "../../asset/banner.png";
import IconQuestion from "../../asset/iconquestion.png";
import IconTimer from "../../asset/icontimer.png";

function CardStartQuiz({
  quizTitle,
  quizDescription,
  data,
  questionLength,
  time,
  level,
}) {
  const question = data?.questions;

  return (
    <div className={styles.cardWrapper}>
      <figure className={styles.cardBanner}>
        <img src={Banner} alt="" />
      </figure>
      <section>
        <h1 className="quiz-title text-darkPurple">{quizTitle}</h1>
        <h2 className={`${styles.quizDescription} label-1-no-color text-dark`}>
          {quizDescription}
        </h2>
        <ol
          className={`label-1-no-color ${styles.question}`}
          style={{ listStyleType: "number" }}
        >
          {question.slice(0, 2).map((item) => {
            return <li className="pb-3">{item.label}</li>;
          })}
        </ol>
        <div className={styles.foot}>
          <div className={styles.right}>
            <div className={styles.section}>
              <figure>
                <img src={IconQuestion} alt="" />
              </figure>
              <span className="caption-2 text-Lightpurple">
                <b>{questionLength}</b> Pertanyaan
              </span>
            </div>
            <span className={styles.verticalLine} />
            <div className={styles.section}>
              <figure>
                <img src={IconTimer} alt="" />
              </figure>
              <span className="caption-2 text-Lightpurple">
                <b>{time}</b> Menit
              </span>
            </div>
            <span className={styles.verticalLine} />
            <div className={styles.section}>
              <span className="caption-2 text-Lightpurple">
                Tingkat Kesulitan : <b>{level}</b>
              </span>
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <button>Jawab Quiz</button>
          </div>
        </div>
      </section>
    </div>
  );
}
CardStartQuiz.propTypes = {
  quizTitle: propTypes.string.isRequired,
  quizDescription: propTypes.string.isRequired,
  data: propTypes.array.isRequired,
  questionLength: propTypes.array.isRequired,
  time: propTypes.array.isRequired,
  level: propTypes.array.isRequired,
};
export default CardStartQuiz;
