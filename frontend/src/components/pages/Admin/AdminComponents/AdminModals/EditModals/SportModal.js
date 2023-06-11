import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CustomButton from "../../../../../atoms/Buttons/CustomButton";
import { Field, Form, Formik } from "formik";
import CustomInput from "../CustomInput";
import * as yup from "yup";
import {addData, editData} from "../../../../../../services/AdminService/useAdminMutator";

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

  const validationSchema = yup.object().shape({
    sport_name: yup
        .string()
        .required("Required")
        .max(50),
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
        <Modal.Title id="contained-modal-title-vcenter">Edit</Modal.Title>
      </Modal.Header>
      <Formik
          validationSchema={validationSchema}
          validateOnChange={true}
        {...(edit === true && {
          initialValues: {
            id: data.id,
            sport_name: data.sport_name,
          },
        })}
        {...(add === true && {
          initialValues: {
            sport_name: "",
          },
        })}
        onSubmit={ (values, actions) => {
          if (add === true) {
              addData(values, page)

          } else if (edit === true) {
              editData(values, page)
          }
          props.onHide()
        }}
      >
        <Form>
          <Modal.Body>
            {edit === true && <div>ID: {data.id}</div>}

            <Field name={"sport_name"} type={"text"} component={CustomInput} />
          </Modal.Body>
          <Modal.Footer>
            <CustomButton
              text={"Close"}
              variant={"close"}
              type={"button"}
              onClick={props.onHide}
            >
              Close
            </CustomButton>
            <CustomButton
              text={"Save"}
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
