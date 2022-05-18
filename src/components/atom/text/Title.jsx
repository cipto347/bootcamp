import propTypes from "prop-types";

function TextTitle(props) {
  const { title } = props;
  return <span className="text-title mb-4">{title}</span>;
}

TextTitle.propTypes = {
  title: propTypes.string.isRequired,
};

export default TextTitle;
