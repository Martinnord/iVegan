import React from "react";
import { FieldProps } from "formik";

export const InputField = ({ field, form, ...props }: FieldProps) => {
  return (
    <div>
      <label>{props.placeholder}</label>
      <input {...field} {...props} />
    </div>
  );
};
