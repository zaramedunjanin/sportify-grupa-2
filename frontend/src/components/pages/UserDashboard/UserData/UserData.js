import React, { useContext, useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";

import Modal from "react-bootstrap/Modal";
import CustomButton from "../../../atoms/Buttons/CustomButton";

import CustomSelect from "../../Admin/AdminComponents/AdminModals/CustomFormComponents/CustomSelect";
import CustomInput from "../../Admin/AdminComponents/AdminModals/CustomFormComponents/CustomInput";
import CustomImage from "../../Admin/AdminComponents/AdminModals/CustomFormComponents/CustomImage";
import CustomCheckBox from "../../Admin/AdminComponents/AdminModals/CustomFormComponents/CustomCheckBox";
import { AuthContext } from "../../../../context/AuthContext";
import useAdminDataUpload from "../../../../hooks/useAdminDataUpload";
import { useTranslation } from "react-i18next";

import CustomSelectCheckBox from "../../Admin/AdminComponents/AdminModals/CustomFormComponents/CustomSelectCheckBox";
import { getDataList } from "../../../../services/AdminService/useAdminFetcher";
import { isElementType } from "@testing-library/user-event/dist/utils";
import { parse } from "@fortawesome/fontawesome-svg-core";
import { SelectCheckBox } from "../../SelectCheckBox/SelectCheckBox";

const UserData = ({
  columns,
  sports,
  page,
  table,
  row,
  add,
  edit,
  ...props
}) => {
  const { t } = useTranslation();

  const { user, isAuthenticated, fetchUserProfile } = useContext(AuthContext);
  const data = user;
  const { file, percent, setFile, setPercent, handleChange, handleSubmit } =
    useAdminDataUpload();

  const validationSchema = yup.object().shape({
    first_name: yup.string().required("Required").max(50),
    last_name: yup.string().required("Required").max(50),
    phone_number: yup.string().max(50),
    city: yup.string().required("Required").max(50),
  });

  const updateInfo = async (values) => {
    console.log(values)
    const newArray = [];
    if(values.sport){
      values.sport.map((option) => {
        newArray.push(option.value);
      })
    }

    values["sport"] = newArray;
    await handleSubmit(values, (page = "users"), (add = false), (edit = true));
    setTimeout(() => {
      fetchUserProfile();
    }, 1500);
    props.onHide();
  };

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
          {t("edit")}
        </Modal.Title>
      </Modal.Header>
      <Formik
        validationSchema={validationSchema}
        validateOnChange={true}
        initialValues={{
          id: data.id,
          first_name: data.first_name,
          last_name: data.last_name,
          profile_picture: data.profile_picture,
          phone_number: data.phone_number,
          gender: data.gender,
          city: data.city,
          sport: data.sport,
        }}
        onSubmit={async (values, actions) => {
          await updateInfo(values);
        }}
      >
        {({ values, errors }) => (
          <Form>
            <Modal.Body>
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

              <Field
                name={"sport"}
                label={t("sport")}
                type={"select"}
                defaultValues={data.sport}
                component={SelectCheckBox}
                options={sports}
                isMulti={true}
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

export default UserData;
