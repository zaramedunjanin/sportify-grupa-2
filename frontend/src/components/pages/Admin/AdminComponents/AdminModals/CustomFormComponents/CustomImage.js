import React, { useState } from "react";
import { Form } from "react-bootstrap";
import styles from "../../AdminTable/AdminTable.module.scss";
import { ErrorMessage, useField } from "formik";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const CustomImage = (props) => {
  let replace = props.field.name.replace("_", " ");
  let name = replace.charAt(0).toUpperCase() + replace.slice(1);
  const { t } = useTranslation();
  const { label, field } = props;

  return (
    <>
      <Form.Text>{label}</Form.Text>
      <div className="mb-3">
        {props.field.value !== "" && (
          <img
            className={styles.tableImage}
            src={props.field.value}
            alt="image"
          />
        )}
        <label htmlFor="filePicker" className={styles.labelStyle}>
          {t("choose_a_picture")}
        </label>
        <input
          id="filePicker"
          style={{ display: "none" }}
          type={"file"}
          {...props}
        />
      </div>
    </>
  );
};
export default CustomImage;
