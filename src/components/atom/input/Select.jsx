import PropTypes from "prop-types";
import CapitalFirstLetter from "../../../services/helpers/TextConverter";

function InputSelect({
  id,
  value,
  label,
  name,
  placeholder,
  onChange,
  validation,
  optionList,
  requiredValidation,
  submitted,
}) {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="label-1 mt-10 uppercase" htmlFor={id}>
          {label}
        </label>
      )}
      <select
        value={value}
        id={id}
        name={name}
        className="select mt-2 w-full shadow focus:outline-none px-4 bg-input font-light"
        onChange={onChange}
      >
        <option value="DEFAULT" disabled hidden>
          {placeholder}
        </option>
        {optionList.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {value === "DEFAULT" && (
        <span className="validation-1 mt-2 text-left">
          {CapitalFirstLetter(requiredValidation)}
        </span>
      )}
      {submitted && value && (
        <span className="validation-1 mt-2 text-left">
          {CapitalFirstLetter(validation)}
        </span>
      )}
    </div>
  );
}

InputSelect.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.node,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  validation: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  requiredValidation: PropTypes.string.isRequired,
  submitted: PropTypes.bool.isRequired,
  optionList: PropTypes.array.isRequired,
};

InputSelect.defaultProps = {
  value: "DEFAULT",
  placeholder: "Pilih item",
};

export default InputSelect;
