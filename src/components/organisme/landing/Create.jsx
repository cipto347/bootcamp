import React from "react";
import TextDescription from "../../atom/text/Description";
import TextTagging from "../../atom/text/Tagging";
import TextTitle from "../../atom/text/Title";
import CardSection from "../../molecul/card/CardSection";

const LandingCreate = () => {
  return (
    <>
      <section>
        <article className="flex flex-col flex-center">
          <TextTagging propsText="CREATE" />
          <TextTitle title="Make your own Quiz" />
          <TextDescription desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
        </article>
        <CardSection />
      </section>
    </>
  );
};

export default LandingCreate;
