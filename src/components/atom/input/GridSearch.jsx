import propTypes from "prop-types";
import CapitalFirstLetter from "../../../services/helpers/TextConverter";

function InputGridSearch(props) {
  const { id, value, onChange, name, placeholder } = props;
  return (
    <div className="input-group mb-4 max-w-[32rem] gridjs-search">
      <input
        id={id}
        type="search"
        value={value}
        name={name}
        className="input w-full shadow focus:outline-none px-4 bg-input gridjs-input gridjs-search-input"
        placeholder={CapitalFirstLetter(placeholder)}
        onChange={onChange}
        required
      />
      <button
        type="button"
        className="btn btn-square shadow focus:outline-none px-4 bg-input"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
}

InputGridSearch.propTypes = {
  id: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
};

export default InputGridSearch;
