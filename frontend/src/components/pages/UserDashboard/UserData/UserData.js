<<<<<<< HEAD
import React, {useContext, useEffect, useState} from "react";
=======
import React, { useContext, useEffect, useState } from "react";
>>>>>>> 2268fe628d84b9689fc5dd0473b405214ab472ba
import { Field, Form, Formik } from "formik";
import * as yup from "yup";

import Modal from "react-bootstrap/Modal";
import CustomButton from "../../../atoms/Buttons/CustomButton";

import CustomSelect from "../../Admin/AdminComponents/AdminModals/CustomFormComponents/CustomSelect";
import CustomInput from "../../Admin/AdminComponents/AdminModals/CustomFormComponents/CustomInput";
import CustomImage from "../../Admin/AdminComponents/AdminModals/CustomFormComponents/CustomImage";
<<<<<<< HEAD
import CustomCheckBox from "../../Admin/AdminComponents/AdminModals/CustomFormComponents/CustomCheckBox";
import { AuthContext } from "../../../../context/AuthContext";
import useAdminDataUpload from "../../../../hooks/useAdminDataUpload";
import { useTranslation } from "react-i18next";

const UserModal = ({ columns, page, table, row, add, edit, ...props }) => {
  const { t } = useTranslation();
  const { logout, isAuthenticated, user } = useContext(AuthContext);
=======
import useAdminDataUpload from "../../../../hooks/useAdminDataUpload";
import { useTranslation } from "react-i18next";
import CustomSelectCheckBox from "../../Admin/AdminComponents/AdminModals/CustomFormComponents/CustomSelectCheckBox";
import { getDataList } from "../../../../services/AdminService/useAdminFetcher";
import { isElementType } from "@testing-library/user-event/dist/utils";
import { parse } from "@fortawesome/fontawesome-svg-core";
import { AuthContext } from "../../../../context/AuthContext";
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

  const { user, fetchUserProfile } = useContext(AuthContext);
>>>>>>> 2268fe628d84b9689fc5dd0473b405214ab472ba
  const data = user;
  const { file, percent, setFile, setPercent, handleChange, handleSubmit } =
    useAdminDataUpload();

<<<<<<< HEAD

=======
>>>>>>> 2268fe628d84b9689fc5dd0473b405214ab472ba
  const validationSchema = yup.object().shape({
    first_name: yup.string().required("Required").max(50),
    last_name: yup.string().required("Required").max(50),
    phone_number: yup.string().max(50),
    city: yup.string().required("Required").max(50),
  });

<<<<<<< HEAD
=======
  const updateInfo = async (values) => {
    const newArray = []
    values.sport.map((option) => {
      newArray.push(option.value)
    });
    values["sport"] = newArray
    await handleSubmit(values, (page = "users"), (add = false), (edit = true));
    setTimeout(() => {
      fetchUserProfile();
    }, 1500);
    props.onHide();
  };

>>>>>>> 2268fe628d84b9689fc5dd0473b405214ab472ba
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
<<<<<<< HEAD
            {t("edit")}
=======
          {t("edit")}
>>>>>>> 2268fe628d84b9689fc5dd0473b405214ab472ba
        </Modal.Title>
      </Modal.Header>
      <Formik
        validationSchema={validationSchema}
        validateOnChange={true}
<<<<<<< HEAD

          initialValues = {{
            id: data.id,
            first_name: data.first_name,
            last_name: data.last_name,
            profile_picture: data.profile_picture,
            phone_number: data.phone_number,
            gender: data.gender,
            city: data.city,
            sport: data.sport,

          }}
        onSubmit={async (values, actions)  => {
         await handleSubmit(values, (page = "users"), add = false, edit = true);
          props.onHide();
=======
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
>>>>>>> 2268fe628d84b9689fc5dd0473b405214ab472ba
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
<<<<<<< HEAD
                  name={"city"}
                  type={"text"}
                  label={t("city")}
                  component={CustomInput}
=======
                name={"city"}
                type={"text"}
                label={t("city")}
                component={CustomInput}
>>>>>>> 2268fe628d84b9689fc5dd0473b405214ab472ba
              />
              <Field
                name={"phone_number"}
                type={"text"}
                label={t("phone_number")}
                component={CustomInput}
              />
<<<<<<< HEAD
                <Field
                    name={"phone_number"}
                    type={"text"}
                    label={t("phone_number")}
                    component={CustomInput}
                />
=======
>>>>>>> 2268fe628d84b9689fc5dd0473b405214ab472ba
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

<<<<<<< HEAD
=======
              <Field
                name={"sport"}
                label={t("sport")}
                type={"select"}
                defaultValues = {data.sport}
                component={SelectCheckBox}
                options={sports}
                isMulti={true}
              />
>>>>>>> 2268fe628d84b9689fc5dd0473b405214ab472ba
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
<<<<<<< HEAD
export default UserModal;
=======
export default UserData;
>>>>>>> 2268fe628d84b9689fc5dd0473b405214ab472ba
