import Styles from "./styles.module.scss";
import HeaderBackground from "../../asset/header.png"
import CardStartQuiz from "../../components/organisme/CardStartQuiz";
function SurveyPreview() {
  return (
    <div className="bg-[#E5E5E5] w-full h-screen " data-theme="telkom">
      <div className="relative  h-full w-full">
        <figure className="w-full absolute z-0 ">
            <img src={HeaderBackground} alt="" className="object-cover w-full" />
        </figure>
        <div className="absolute z-1 flex items-center justify-center">
            <CardStartQuiz/>
        </div>
      </div>
    </div>
  );
}

export default SurveyPreview;
