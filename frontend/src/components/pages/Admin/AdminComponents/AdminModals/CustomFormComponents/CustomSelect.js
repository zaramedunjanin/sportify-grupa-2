import React from "react";
import { Form } from "react-bootstrap";

const CustomSelect = ({ field, options, form, label, ...props }) => {
  let replace = field.name.replace("_", " ");
  let name = replace.charAt(0).toUpperCase() + replace.slice(1);

  return (
    <>
      <Form.Text>{label}</Form.Text>

      <select
        {...field}
        {...props}
        className="form-select"
        aria-label="Default select example"
      >
        {options.map((o, index) => (
          <option key={`${field.name}${index}`} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </>
  );
};
export default CustomSelect;
