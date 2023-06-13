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
  const validationSchema = yup.object().shape({
    user: yup.number().required("Required"),
    venue: yup.number().required("Required"),
    text: yup.string().required("Required"),
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
            user: data.user,
            venue: data.venue,
            text: data.text,
            answer: data.answer,
            pinned: data.pinned,
          },
        })}
        {...(add === true && {
          initialValues: {
            user: "",
            venue: "",
            text: "",
            answer: "",
            pinned: false,
          },
        })}
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
              name={"venue"}
              type={"number"}
              label={t("venue")}
              component={CustomInput}
            />
            <Field
              name={"user"}
              type={"number"}
              label={t("user")}
              component={CustomInput}
            />

            <Field
              name={"text"}
              type={"text"}
              label={t("text")}
              component={CustomInput}
            />
            <Field
              name={"answer"}
              type={"text"}
              label={t("answer")}
              component={CustomInput}
            />
            <Field
              name={"pinned"}
              label={t("pinned")}
              component={CustomSelect}
              options={[
                { value: false, label: t("not_pinned") },
                { value: true, label: t("pinned") },
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
      </Formik>
    </Modal>
  );
};
export default VenueEditModal;
