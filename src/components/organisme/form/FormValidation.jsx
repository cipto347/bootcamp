import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import propTypes from "prop-types";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

export default function FormValidation({ submit, formItem }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(submit)}>
      {formItem.map((item) => (
        <div key={item.name}>
          <label htmlFor="firstName" className="label">
            <span className="label-text-alt text-base">{item.label}</span>
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            className={`input input-bordered w-full   ${
              errors.firstName ? "input-error" : ""
            }`}
            {...register("firstName")}
            placeholder="masukkan nama depan"
          />
          {errors.firstName && (
            <p className="text-xs text-error mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>
      ))}

      <button className="btn btn-primary w-full mt-3 text-white" type="submit">
        submit
      </button>
    </form>
  );
}

FormValidation.propTypes = {
  submit: propTypes.func.isRequired,
  formItem: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string,
      name: propTypes.string,
      type: propTypes.string,
      registerYup: propTypes.string,
      option: propTypes.oneOfType([
        propTypes.string,
        propTypes.number,
        propTypes.bool,
        propTypes.object,
        propTypes.array,
      ]),
    })
  ),
};

FormValidation.defaultProps = {
  formItem: [
    {
      label: "",
      name: "",
      type: "",
      registerYup: "",
      option: [""],
    },
  ],
};
