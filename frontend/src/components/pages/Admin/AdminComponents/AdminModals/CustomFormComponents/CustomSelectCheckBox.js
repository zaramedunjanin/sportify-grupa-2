import React, { useState } from "react";
import { Form } from "react-bootstrap";

const CustomSelectCheckBox = ({ options, ...props }) => {
  let replace = props.field.name.replace("_", " ");
  const { label, field } = props;
  const [selectedOptions, setSelectedOptions] = useState("");

  const handleSelectChange = (event) => {
    // Get the selected options from the event
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.textContent
    );
    setSelectedOptions(selectedOptions);
  };

  const selectedOptionsStyle = {
    display: "block",
  };
  return (
    <>
      <Form.Text>{label}</Form.Text>
      <br />
      <Form.Text className={selectedOptionsStyle}>
        {selectedOptions !== "" && selectedOptions.join(", ")}
      </Form.Text>
      <select
        {...field}
        {...props}
        className="form-select"
        onChange={handleSelectChange}
        multiple
      >
        {options.map((o, index) => (
          <option key={`${field.name}${index}`} value={o.id}>
            {o.sport_name}
          </option>
        ))}
      </select>
    </>
  );
};
export default CustomSelectCheckBox;
