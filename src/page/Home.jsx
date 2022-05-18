// import { useState } from "react";
import "./Home.css";
import CardLanding from "../components/atom/image/CardLanding";
import Footer from "../components/organisme/part/Footer";
import LandingCreate from "../components/organisme/landing/Create";
import Hero from "../components/organisme/hero/Hero";
import TextTitle from "../components/atom/text/Title";
import TextDescription from "../components/atom/text/Description";
import TextTagging from "../components/atom/text/Tagging";

function Home() {
  // const [count, setCount] = useState(0);

  return (
    <div data-theme="telkom">
      {/* <PartHeader /> */}
      <div className="flex main-layout">
        <main className="w-full">
          <Hero />
          <div className="flex flex-row justify-center flex-wrap mt-8 w-3/4 mx-auto">
            <LandingCreate className="mb-10 w-full" />
            <div className="flex flex-row w-full">
              <div className="w-1/2">
                <CardLanding cardType="various" />
              </div>
              <div className="w-1/2 flex flex-col flex-center">
                <TextTagging propsText="CUSTOMIZE" />
                <TextTitle title="Various Types of Questions " />
                <TextDescription desc="You can choose various types of questions such as multiple choice, description answers, scales, picture answers and many others." />
              </div>
            </div>
            <div className="flex flex-row w-full">
              <div className="w-1/2 flex flex-col flex-center">
                <TextTagging propsText="FLEXIBLE" />
                <TextTitle title="Works On Any Device" />
                <TextDescription desc="You can choose various types of questions such as multiple choice, description answers, scales, picture answers and many others." />
              </div>
              <div className="w-1/2">
                <CardLanding cardType="any" />
              </div>
            </div>
            <div className="flex flex-row w-full mb-20">
              <div className="w-1/2">
                <CardLanding cardType="score" />
              </div>
              <div className="w-1/2 flex flex-col flex-center">
                <TextTagging propsText="REPORT" />
                <TextTitle title="Check Score of Your Respondents in RealTime" />
                <TextDescription desc="You can choose various types of questions such as multiple choice, description answers, scales, picture answers and many others." />
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default Home;
