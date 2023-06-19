import React, { useState } from "react";

import axios from "axios";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";

import Modal from "react-bootstrap/Modal";
import CustomButton from "../../../../atoms/Buttons/CustomButton";
import { baseURL } from "../../../../../services/AdminService/adminService";
import FormB from "react-bootstrap/Form";

import CustomSelect from "./CustomFormComponents/CustomSelect";
import CustomInput from "./CustomFormComponents/CustomInput";
import CustomImage from "./CustomFormComponents/CustomImage";

import storage from "../../../../../config/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import useAdminDataUpload from "../../../../../hooks/useAdminDataUpload";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const UserModal = ({
  data,
  columns,
  page,
  table,
  row,
  add,
  edit,
  ...props
}) => {
  const { t } = useTranslation();
  const { file, percent, setFile, setPercent, handleChange, handleSubmit } =
    useAdminDataUpload();

  const validationSchema = yup.object().shape({
    first_name: yup.string().required("Required").max(50),
    last_name: yup.string().required("Required").max(50),
    username: yup.string().required("Required").max(50),
    password: yup.string().required("Required").max(255),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Required")
      .max(50),
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
          {edit === true && "Edit"}
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
            username: data.username,
            password: data.password,
            company_name: data.company_name,
            profile_picture: data.profile_picture,
            email: data.email,
            phone_number: data.phone_number,
            gender: data.gender,
            city: data.city,
            role: data.role,
            blocked: data.blocked,
            verified: data.verified,
          },
        })}
        {...(add === true && {
          initialValues: {
            first_name: "",
            last_name: "",
            username: "",
            password: "",
            company_name: "",
            profile_picture: data.profile_picture,
            email: "",
            phone_number: "",
            gender: "",
            city: "",
            role: 2,
            blocked: false,
            verified: "",
          },
        })}
        onSubmit={(values, actions) => {
          handleSubmit(values, page, add, edit);
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
                name={"username"}
                type={"text"}
                label={t("username")}
                component={CustomInput}
              />
              <Field
                name={"email"}
                type={"email"}
                label={t("email")}
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
                name={"company_name"}
                type={"text"}
                label={t("company_name")}
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

              <Field
                name={"role"}
                label={t("role")}
                component={CustomSelect}
                options={[
                  { value: 2, label: t("user") },
                  { value: 3, label: t("company") },
                  { value: 1, label: t("admin") },
                ]}
              />
              <Field
                name={"blocked"}
                label={t("blocked")}
                component={CustomSelect}
                options={[
                  { value: false, label: t("not_blocked") },
                  { value: true, label: t("blocked") },
                ]}
              />
              <Field
                name={"verified"}
                label={t("verified")}
                component={CustomSelect}
                options={[
                  { value: "", label: t("pendding") },
                  { value: true, label: t("verified") },
                  { value: false, label: t("not_verified") },
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
                variant={"save"}
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
