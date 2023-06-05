import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CustomButton from "../../../../../atoms/Buttons/CustomButton";
import axios from "axios";
import { baseURL } from "../../../../../../services/AdminService/adminService";
import FormB from "react-bootstrap/Form";
import {Field, Form, Formik} from "formik";
import CustomSelect from "../CustomSelect";
import CustomInput from "../CustomInput";
const UserEditModal = ({
  data,
  columns,
  page,
  table,
  row,
  add = false,
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
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit</Modal.Title>
      </Modal.Header>
      <Formik
          initialValues={{
            first_name: data.first_name,
            last_name: data.last_name,
            username: data.username,
            password: data.password,
            company_name: data.company_name,
            email: data.email,
            phone_number: data.phone_number,
            gender: data.gender,
            city: data.city,
            role: data.role,
            blocked: data.blocked,
            verified: data.verified,
          }}
          onSubmit={async (values, actions) => {
            await axios.put(`${baseURL}/tables/users/update/${data.id}/`, values)
                .then(response => {
                  console.log(response);
                })
                .catch(error => {
                  console.log(error.response);
                });
          }}

      >
        <Form
        >
      <Modal.Body>
        <div>ID: {data.id}</div>

            <Field
                name={"first_name"}
                type={"text"}
                component={CustomInput}
            />
            <Field
                name={"last_name"}
                type={"text"}
                component={CustomInput}
            />
            <Field
                name={"username"}
                type={"text"}
                component={CustomInput}
            />
            <Field
                name={"company_name"}
                type={"text"}
                component={CustomInput}
            />
            <Field
                name={"email"}
                type={"email"}
                component={CustomInput}
            />
            <Field
                name={"phone_number"}
                type={"text"}
                component={CustomInput}
            />
            <Field
                name={"city"}
                type={"text"}
                component={CustomInput}
            />
            <Field
                name={"gender"}
                component={CustomSelect}
                options = {[
                  {value: "Female", label: "Female"},
                  {value: "Male", label: "Male"},
                  {value: "Other", label: "Other"},
                ]}
            />

            <Field
                name={"role"}
                component={CustomSelect}
                options = {[
                  {value: 1, label: "Admin"},
                  {value: 2, label: "User"},
                  {value: 3, label: "Company"},
                ]}
            />
            <Field
                name={"blocked"}
                component={CustomSelect}
                options = {[
                  {value: true, label: "Blocked"},
                  {value: false, label: "Not Blocked"},
                ]}
            />
            <Field
                name={"verified"}
                component={CustomSelect}
                options = {[
                  {value: true, label: "Verified"},
                  {value: false, label: "Not Verified"},
                  {value: "", label: "Not Specified"}

                ]}
            />


      </Modal.Body>
      <Modal.Footer>
        <CustomButton
            text={"Close"}
            variant={"close"}
            onClick={props.onHide}>Close</CustomButton>
        <CustomButton
          text={"Save"}
          variant={"save"}
          onClick={(e) => {
            props.onHide();
            }}
          type = {"submit"}
        ></CustomButton>
      </Modal.Footer>
        </Form>
      </Formik>
    </Modal>
  );
};
export default UserEditModal;
