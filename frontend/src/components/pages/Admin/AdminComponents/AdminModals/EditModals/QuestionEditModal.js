import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CustomButton from "../../../../../atoms/Buttons/CustomButton";
import axios from "axios";
import { baseURL } from "../../../../../../services/AdminService/adminService";
import { Field, Form, Formik } from "formik";
import CustomSelect from "../CustomSelect";
import CustomInput from "../CustomInput";
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
        initialValues={{
          text: data.text,
          answer: data.answer,
          pinned: data.pinned,
        }}
        onSubmit={async (values, actions) => {
          if (add === true) {
            await axios
              .post(`${baseURL}/tables/questions/add/`, values)
              .then((response) => {
                {
                  props.onHide();
                }
              })
              .catch((error) => {
                console.log(error.response);
              });
          }
          if (edit === true) {
            await axios
              .put(`${baseURL}/tables/questions/update/${data.id}/`, values)
              .then((response) => {
                {
                  props.onHide();
                }
              })
              .catch((error) => {
                console.log(error.response);
              });
          }
        }}
      >
        <Form>
          <Modal.Body>
            {edit === true && <div>ID: {data.id}</div>}

            <Field name={"text"} type={"text"} component={CustomInput} />
            <Field name={"answer"} type={"text"} component={CustomInput} />
            <Field
              name={"pinned"}
              component={CustomSelect}
              options={[
                { value: true, label: "Pinned" },
                { value: false, label: "Not Pinned" },
              ]}
            />
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
