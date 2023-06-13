import React from "react";
import { Form } from "react-bootstrap";
import { ErrorMessage, useField } from "formik";
const CustomInput = ({ options, form, label, ...props }) => {
  const [field, meta] = useField(props.field.name);
  let replace = props.field.name.replace("_", " ");
  let name = replace.charAt(0).toUpperCase() + replace.slice(1);
  const errorText = meta.error && meta.touched ? meta.error : "";
  const styleError = {
    color: "red",
    display: "inline-block",
    textAlign: "center",
    fontSize: "13px",
  };
  return (
    <>
      <Form.Text>
        {label}{" "}
        {meta.touched && meta.error && (
          <div style={styleError}>{meta.error}</div>
        )}
      </Form.Text>
      <Form.Control {...field} {...props} />
    </>
  );
};
export default CustomInput;
