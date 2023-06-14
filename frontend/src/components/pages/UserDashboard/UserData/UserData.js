import React, { useContext, useState } from "react";

import axios from "axios";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";

import Modal from "react-bootstrap/Modal";
import CustomButton from "../../../atoms/Buttons/CustomButton";
import FormB from "react-bootstrap/Form";

import CustomSelect from "../../Admin/AdminComponents/AdminModals/CustomFormComponents/CustomSelect";
import CustomInput from "../../Admin/AdminComponents/AdminModals/CustomFormComponents/CustomInput";
import CustomImage from "../../Admin/AdminComponents/AdminModals/CustomFormComponents/CustomImage";
import { AuthContext } from "../../../../context/AuthContext";
import useAdminDataUpload from "../../../../hooks/useAdminDataUpload";
import { useTranslation } from "react-i18next";

const UserModal = ({ columns, page, table, row, add, edit, ...props }) => {
  const { t } = useTranslation();
  const { logout, isAuthenticated, user } = useContext(AuthContext);
  const data = user;
  const { file, percent, setFile, setPercent, handleChange, handleSubmit } =
    useAdminDataUpload();

  const validationSchema = yup.object().shape({
    first_name: yup.string().required("Required").max(50),
    last_name: yup.string().required("Required").max(50),
    phone_number: yup.string().max(50),
    city: yup.string().required("Required").max(50),
  });

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop={"static"}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {edit === true && t("edit")}
          {add === true && t("add")}
        </Modal.Title>
      </Modal.Header>
      <Formik
        validationSchema={validationSchema}
        validateOnChange={true}
        {...(edit === true && {
          initialValues: {
            id: data.id,
            first_name: data.first_name,
            last_name: data.last_name,
            profile_picture: data.profile_picture,
            phone_number: data.phone_number,
            gender: data.gender,
            city: data.city,
          },
        })}
        onSubmit={(values, actions) => {
          handleSubmit(values, (page = "users"), edit);
          props.onHide();
        }}
      >
        {({ values, errors }) => (
          <Form>
            <Modal.Body>
              {edit === true && (
                <div>
                  <FormB.Text>ID:</FormB.Text> {data.id}
                </div>
              )}
              <Field
                name={"profile_picture"}
                label={t("profile_picture")}
                type={"file"}
                onChange={handleChange}
                component={CustomImage}
              />
              <Field
                name={"first_name"}
                type={"text"}
                label={t("first_name")}
                component={CustomInput}
              />
              <Field
                name={"last_name"}
                type={"text"}
                label={t("last_name")}
                component={CustomInput}
              />
              <Field
                name={"city"}
                type={"text"}
                label={t("city")}
                component={CustomInput}
              />

              <Field
                name={"phone_number"}
                type={"text"}
                label={t("phone_number")}
                component={CustomInput}
              />

              <Field
                name={"gender"}
                label={t("gender")}
                component={CustomSelect}
                options={[
                  { value: "Other", label: t("other") },
                  { value: "Female", label: t("female") },
                  { value: "Male", label: t("male") },
                ]}
              />
            </Modal.Body>
            <Modal.Footer>
              <CustomButton
                text={t("close")}
                variant={"close"}
                type={"button"}
                onClick={props.onHide}
              >
                {t("close")}
              </CustomButton>
              <CustomButton
                text={t("save_changes")}
                variant={"success"}
                type={"submit"}
              ></CustomButton>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};
export default UserModal;
