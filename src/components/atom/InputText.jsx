import { useRef } from "react";
import propTypes from "prop-types";

function InputText({
  id,
  type,
  value,
  name,
  placeholder,
  onChange,
  label,
  validation,
  refProp,
}) {
  const inputRef = useRef(refProp);
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        name={name}
        className="mt-2 w-full input-4dp focus:outline-none px-4 border px-2 h-24"
        ref={inputRef}
        placeholder={placeholder}
        onChange={onChange}
      />
      {validation && (
        <span className="validation-1 mt-2 text-left">{validation}</span>
      )}
    </>
  );
}

InputText.propTypes = {
  id: propTypes.string.isRequired,
  value: propTypes.node.isRequired,
  label: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  validation: propTypes.string,
  refProp: propTypes.oneOfType([propTypes.object]),
};

InputText.defaultProps = {
  validation: "",
  refProp: {},
};

export default InputText;
