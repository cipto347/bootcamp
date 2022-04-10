import propTypes from "prop-types";
import { useState } from "react";
import CapitalFirstLetter from "../../../services/helpers/TextConverter";
import ViewPassword from "../button/ViewPassword";

function InputPassword({
  id,
  value,
  label,
  name,
  placeholder,
  onChange,
  validation,
  requiredValidation,
  submitted,
}) {
  const [type, setType] = useState("password");
  const [view, setView] = useState(false);
  function changeType() {
    if (type === "password") {
      setType("text");
      setView(true);
    } else {
      setType("password");
      setView(false);
    }
  }
  return (
    <div className="flex flex-col">
      {label && (
        <label className="label-1 mt-10 uppercase" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="input-group">
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
        <ViewPassword changeType={changeType} view={view} />
      </div>
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

InputPassword.propTypes = {
  id: propTypes.string.isRequired,
  value: propTypes.node.isRequired,
  label: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  validation: propTypes.string.isRequired,
  requiredValidation: propTypes.string.isRequired,
  submitted: propTypes.bool.isRequired,
};

export default InputPassword;
