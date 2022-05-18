import styles from "./CardStartQuiz.module.scss";
import Banner from "../../asset/banner.png";

function CardStartQuiz() {
  return (
    <div className={styles.cardWrapper}>
      <figure className={styles.cardBanner}>
        <img src={Banner} alt="" />
      </figure>
      <section>
        <h1 className={styles.quizTitel}>Kuis Garis Dan Sudut</h1>
        <h2 className={`${styles.quizDescription} label-1-no-color`}>
          Ujian seputar garis dan sudut untuk SMA kelas 1 yang di buat oleh SMA
          Negri 10 Jakarta
        </h2>
        <div className={styles.question}>Anyeong</div>
        <div className={styles.foot}>
          <div className="right">
            <span>Anyeong</span>
            <span>Anyeong</span>
            <span>Anyeong</span>
          </div>
          <div className={styles.buttonWrapper}>
          <button>Jawab Quiz</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CardStartQuiz;
