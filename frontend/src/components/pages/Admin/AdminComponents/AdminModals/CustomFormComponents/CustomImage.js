import React, { useState } from "react";
import { Form } from "react-bootstrap";
import styles from "../../AdminTable/AdminTable.module.scss";
import { ErrorMessage, useField } from "formik";
const CustomImage = (props) => {
  let replace = props.field.name.replace("_", " ");
  let name = replace.charAt(0).toUpperCase() + replace.slice(1);

  return (
    <>
      <Form.Text>{name}</Form.Text>
      <div className="mb-3">
        {props.field.value !== "" && (
          <img
            className={styles.tableImage}
            src={props.field.value}
            alt="Image"
          />
        )}
        <input className="form-control" {...props} />
      </div>
    </>
  );
};
export default CustomImage;
