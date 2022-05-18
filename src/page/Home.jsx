// import { useState } from "react";
import "./Home.css";
import CardLanding from "../components/atom/image/CardLanding";
import Footer from "../components/organisme/part/Footer";
import CardStartQuiz from "../components/organisme/CardStartQuiz";
import LandingCreate from "../components/organisme/landing/Create";
import Landing from "./Landing";
import Hero from "../components/organisme/hero/Hero";

function Home() {
  // const [count, setCount] = useState(0);

  return (
    <div className="h-screen" data-theme="telkom">
      {/* <PartHeader /> */}
      <div className="flex main-layout">
        <Hero />
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

export default Home;
