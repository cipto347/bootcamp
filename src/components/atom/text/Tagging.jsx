import propTypes from "prop-types";

function TextTagging(props) {
  const { propsText } = props;
  return (
    <article className="text-tagging text-Lightpurple">{propsText}</article>
  );
}

TextTagging.propTypes = {
  propsText: propTypes.string.isRequired,
};
export default TextTagging;
