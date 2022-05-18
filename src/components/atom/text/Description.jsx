import propTypes from "prop-types";

function TextDescription(props) {
  const { desc } = props;
  return (
    <article className="text-description w-1/2 mx-auto text-center text-lighterPurple">
      {desc}
    </article>
  );
}

TextDescription.propTypes = {
  desc: propTypes.string.isRequired,
};
export default TextDescription;
