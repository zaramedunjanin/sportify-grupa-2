import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CustomButton from "../../../../atoms/Buttons/CustomButton";
import axios from "axios";
import { baseURL } from "../../../../../services/AdminService/adminService";
import { Field, Form, Formik } from "formik";
import CustomSelect from "./CustomFormComponents/CustomSelect";
import CustomInput from "./CustomFormComponents/CustomInput";
import * as yup from "yup";
import useAdminDataUpload from "../../../../../hooks/useAdminDataUpload";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import {
  addData,
  editData,
} from "../../../../../services/AdminService/useAdminMutator";
const VenueEditModal = ({
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
    user: yup.number().required("Required"),
    sport: yup.number().required("Required"),
    venue: yup.number().required("Required"),
    total_places: yup.number().required("Required"),
    start_time: yup
      .string()
      .required("Required")
      .max(10)
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
    end_time: yup
      .string()
      .required("Required")
      .max(10)
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
            user: data.user_id,
            sport: data.sport_id,
            venue: data.venue_id,
            total_places: data.total_places,
            going: data.going,
            start_time: data.start_time,
            end_time: data.end_time,
            description: data.description,
            approved: data.approved,
            auto_invite: data.auto_invite,
            number_of_invites: data.number_of_invites,
          },
        })}
        {...(add === true && {
          initialValues: {
            user: "",
            sport: "",
            venue: "",
            total_places: 0,
            going: 0,
            start_time: "",
            end_time: "",
            description: "",
            approved: "",
            auto_invite: false,
            number_of_invites: 0,
          },
        })}
        initialValues={{}}
        onSubmit={async (values, actions) => {
          if (add === true) {
            addData(values, page);
          } else if (edit === true) {
            editData(values, page);
          }
          props.onHide();
        }}
      >
        <Form>
          <Modal.Body>
            {edit === true && <div>ID: {data.id}</div>}
            <Field
              name={"user"}
              type={"number"}
              label={t("user")}
              component={CustomInput}
            />
            <Field
              name={"sport"}
              type={"number"}
              label={t("sport")}
              component={CustomInput}
            />
            <Field
              name={"venue"}
              type={"number"}
              label={t("venue")}
              component={CustomInput}
            />

            <Field
              name={"total_places"}
              type={"number"}
              label={t("total_places")}
              component={CustomInput}
            />
            <Field
              name={"going"}
              type={"number"}
              label={t("going")}
              component={CustomInput}
            />
            <Field
              name={"start_time"}
              type={"text"}
              label={t("start_time")}
              component={CustomInput}
            />
            <Field
              name={"end_time"}
              type={"text"}
              label={t("end_time")}
              component={CustomInput}
            />
            <Field
              name={"description"}
              type={"text"}
              label={t("description")}
              component={CustomInput}
            />
            <Field
              name={"auto_invite"}
              label={t("auto_invite")}
              component={CustomSelect}
              options={[
                { value: false, label: t("off") },
                { value: true, label: t("on") },
              ]}
            />
            <Field
              name={"number_of_invites"}
              type={"number"}
              label={t("number_of_invites")}
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
export default VenueEditModal;
