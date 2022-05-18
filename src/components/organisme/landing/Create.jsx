import propTypes from "prop-types";
import TextDescription from "../../atom/text/Description";
import TextTagging from "../../atom/text/Tagging";
import TextTitle from "../../atom/text/Title";
import CardSection from "../../molecul/card/CardSection";

function LandingCreate({ className }) {
  return (
    <section className={className}>
      <article className="flex flex-col flex-center">
        <TextTagging propsText="CREATE" />
        <TextTitle title="Make your own Quiz" />
        <TextDescription desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
      </article>
      <CardSection />
    </section>
  );
}
LandingCreate.propTypes = {
  className: propTypes.string.isRequired,
};
export default LandingCreate;
