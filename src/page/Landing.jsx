import CardLanding from "../components/atom/image/CardLanding";
import CardStartQuiz from "../components/organisme/CardStartQuiz";
import LandingCreate from "../components/organisme/landing/Create";
import Footer from "../components/organisme/part/Footer";
import PartHeader from "../components/organisme/part/Header";

function Landing() {
  return (
    <div className="h-screen" data-theme="telkom">
      <PartHeader />
      <img src="/src/assets/img/imagee.jpg" alt="" />
      <div className="flex main-layout">
        <main className="mt-2 lg:px-20 p-4 w-full justify-center items-center overflow-y-scroll">
          <Landing />
          <LandingCreate className="mb-10" />
          <CardLanding cardType="various" />
          <CardLanding cardType="any" />
          <CardLanding cardType="score" />
          <CardStartQuiz className="w-60" />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
