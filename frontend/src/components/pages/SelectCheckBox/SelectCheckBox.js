import React from "react";
import Select from "react-select";

export const SelectCheckBox = ({ options }) => {
  return (
    <Select
      isMulti
      name="colors"
      options={options}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  );
};
