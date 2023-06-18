import React from "react";
import { Form } from "react-bootstrap";
import { ErrorMessage, useField } from "formik";
import styles from "../../../../Venue/Venue.module.css";
const CustomTextArea = ({ options, form, label, ...props }) => {
  const [field, meta] = useField(props.field.name);

  let replace = props.field.name.replace("_", " ");
  let name = replace.charAt(0).toUpperCase() + replace.slice(1);
  const styleError = {
    color: "red",
    display: "inline-block",
    textAlign: "center",
    fontSize: "13px",
    marginLeft: "8px",
  };
  return (
    <>
      <div className={styles.heading_1}>{label}</div>
      {meta.touched && meta.error && <div style={styleError}>{meta.error}</div>}
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          as="textarea"
          rows={2}
          id={`${styles.custom} ${styles.full_width}`}
          style={{ resize: "none", height: "auto" }}
          {...field}
          {...props}
        />
      </Form.Group>
    </>
  );
};
export default CustomTextArea;
