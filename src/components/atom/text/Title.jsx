import propTypes from "prop-types";

function TextTitle(props) {
  const { title } = props;
  return (
    <span className="lg:headline-1 headline-2 pb-4 text-darkPurple px-32 text-center">
      {title}
    </span>
  );
}

TextTitle.propTypes = {
  title: propTypes.string.isRequired,
};

export default TextTitle;
