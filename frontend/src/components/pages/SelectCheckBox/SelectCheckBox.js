import React from "react";
import Select from "react-select";
import { Form } from "react-bootstrap";
import { useField, useFormikContext } from "formik";

export const SelectCheckBox = ({ label, options, ...props }) => {
  const [field, meta] = useField(props.field.name);
  const newArray = options.map((option) => {
    return {
      value: option.id,
      label: option.sport_name,
    };
  });
  const { setFieldValue } = useFormikContext();
  const defaultVal = [];
  newArray.map((element, index) => {
    if (props.defaultValues.includes(element.label)) {
      defaultVal.push(newArray[index]);
    }
  });
  console.log(defaultVal);
  return (
    <>
      <Form.Text>{label}</Form.Text>
      <Select
        defaultValue={defaultVal}
        isMulti
        name="colors"
        options={newArray}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={(value) => {
          console.log(value);
          setFieldValue(field.name, value);
        }}
        {...props}
      />
    </>
  );
};
