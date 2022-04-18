import PropTypes from "prop-types";
import { MaskField } from "react-mask-field";
import CapitalFirstLetter from "../../../services/helpers/TextConverter";

function InputPhone({
  id,
  value,
  label,
  name,
  type,
  onChange,
  validation,
  placeholder,
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
      <MaskField
        id={id}
        type={type}
        value={value}
        name={name}
        className="input w-full mt-2 shadow focus:outline-none px-4 bg-input"
        onChange={onChange}
        required
        placeholder={CapitalFirstLetter(placeholder)}
        mask="(___)-____-____-_"
        replacement={{ _: /\d/ }}
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

InputPhone.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  validation: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  requiredValidation: PropTypes.string.isRequired,
  submitted: PropTypes.bool.isRequired,
};

export default InputPhone;
