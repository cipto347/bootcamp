import PropTypes from "prop-types";
import CapitalFirstLetter from "../../../services/helpers/TextConverter";

function InputText({
  id,
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  validation,
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
      <input
        id={id}
        type={type}
        value={value}
        name={name}
        className="input w-full mt-2 shadow focus:outline-none px-4 bg-input"
        placeholder={CapitalFirstLetter(placeholder)}
        onChange={onChange}
        required
      />
      {!value && (
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

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  validation: PropTypes.string.isRequired,
  requiredValidation: PropTypes.string.isRequired,
  submitted: PropTypes.bool.isRequired,
};

export default InputText;
