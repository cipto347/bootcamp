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
        <main className="w-full overflow-y-scroll">
          <Hero />
          <div className="flex flex-row justify-center flex-wrap mt-8 w-3/4 mx-auto">
            <LandingCreate className="mb-10 w-full" />
            <div className="w-1/2">
              <CardLanding cardType="various" />
            </div>
            <div className="w-1/2 flex flex-col flex-center">
              <TextTagging propsText="CREATE" />
              <TextTitle title="Make your own Quiz" />
              <TextDescription desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
            </div>
          </div>
          <div className="flex flex-row justify-center flex-wrap mt-8 w-3/4 mx-auto">
            <div className="w-1/2 flex flex-col flex-center">
              <TextTagging propsText="CREATE" />
              <TextTitle title="Make your own Quiz" />
              <TextDescription desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
            </div>
            <div className="w-1/2">
              <CardLanding cardType="any" />
            </div>
          </div>
          <div className="flex flex-row justify-center flex-wrap mt-8 w-3/4 mx-auto mb-12">
            <div className="w-1/2">
              <CardLanding cardType="score" />
            </div>
            <div className="w-1/2 flex flex-col flex-center">
              <TextTagging propsText="CREATE" />
              <TextTitle title="Make your own Quiz" />
              <TextDescription desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default Home;
