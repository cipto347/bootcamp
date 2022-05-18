import propTypes from "prop-types";

function TextTitle(props) {
  const { title } = props;
  return (
    <span className="lg:headline-1 headline-2 mb-4 text-darkPurple">
      {title}
    </span>
  );
}

TextTitle.propTypes = {
  title: propTypes.string.isRequired,
};

export default TextTitle;
