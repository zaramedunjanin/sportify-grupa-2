import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CustomButton from "../../../../atoms/Buttons/CustomButton";
import axios from "axios";
import { baseURL } from "../../../../../services/AdminService/adminService";
import { Field, Form, Formik } from "formik";
import CustomSelect from "./CustomFormComponents/CustomSelect";
import CustomInput from "./CustomFormComponents/CustomInput";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import storage from "../../../../../config/firebaseConfig";
import useAdminDataUpload from "../../../../../hooks/useAdminDataUpload";
import CustomImage from "./CustomFormComponents/CustomImage";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const VenueModal = ({
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

  const timeValidation = (time) => {
    var regexp = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/i;
    const valid = regexp.test(time);
    return valid
      ? {
          isValid: true,
        }
      : {
          isValid: false,
          errorMessage: "Invalid time format",
        };
  };
  const validationSchema = yup.object().shape({
    venue_name: yup.string().required("Required").max(100),
    address: yup.string().required("Required").max(100),
    city: yup.string().required("Required").max(50),
    description: yup.string().required("Required").max(255),
    price_per_hour: yup.number().required("Required"),
    opening_time: yup
      .string()
      .max(5)
      .required("Required")
      .test("validator-custom-name", function (value) {
        const validation = timeValidation(value);
        if (!validation.isValid) {
          return this.createError({
            path: this.path,
            message: validation.errorMessage,
          });
        } else {
          return true;
        }
      }),
    closing_time: yup
      .string()
      .max(5)
      .required("Required")
      .test("validator-custom-name", function (value) {
        const validation = timeValidation(value);
        if (!validation.isValid) {
          return this.createError({
            path: this.path,
            message: validation.errorMessage,
          });
        } else {
          return true;
        }
      }),
    company: yup.number().required("Required"),
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
          {t("edit")}
        </Modal.Title>
      </Modal.Header>
      <Formik
        validationSchema={validationSchema}
        validateOnChange={true}
        {...(edit === true && {
          initialValues: {
            id: data.id,
            venue_name: data.venue_name,
            address: data.address,
            city: data.city,
            venue_picture: data.venue_picture,
            type: data.type,
            description: data.description,
            price_per_hour: data.price_per_hour,
            opening_time: data.opening_time,
            closing_time: data.closing_time,
            company: data.company,
          },
        })}
        {...(add === true && {
          initialValues: {
            venue_name: "",
            address: "",
            city: "",
            venue_picture: "",
            type: "",
            description: "",
            price_per_hour: 0,
            opening_time: "",
            closing_time: "",
            company: "",
          },
        })}
        onSubmit={(values, actions) => {
          handleSubmit(values, page, add, edit);
          props.onHide();
        }}
      >
        <Form>
          <Modal.Body>
            {edit === true && <div>ID: {data.id}</div>}
            <Field
              name="venue_picture"
              label={t("venue_picture")}
              type={"file"}
              onChange={handleChange}
              component={CustomImage}
            />
            <Field
              name="venue_name"
              type={"text"}
              label={t("venue_name")}
              component={CustomInput}
            />
            <Field
              name="address"
              type={"text"}
              label={t("address")}
              component={CustomInput}
            />
            <Field
              name="city"
              type={"text"}
              label={t("city")}
              component={CustomInput}
            />
            <Field
              name="type"
              type={"text"}
              label={t("type")}
              component={CustomInput}
            />
            <Field
              name="description"
              type={"text"}
              label={t("description")}
              component={CustomInput}
            />
            <Field
              name="price_per_hour"
              type={"number"}
              label={t("price_per_hour")}
              component={CustomInput}
            />
            <Field
              name="opening_time"
              type={"text"}
              label={t("opening_time")}
              component={CustomInput}
            />
            <Field
              name="closing_time"
              type={"text"}
              label={t("closing_time")}
              component={CustomInput}
            />
            <Field
              name="company"
              type={"number"}
              label={t("company_id")}
              component={CustomInput}
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
      </Formik>
    </Modal>
  );
};
export default VenueModal;
