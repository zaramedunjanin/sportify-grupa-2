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
          {...(edit === true && {
              initialValues:{
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
          }
          })}
          {...(add === true && {
              initialValues:{
                  first_name: "",
                  last_name: "",
                  username: "",
                  password: "",
                  company_name: "",
                  email: "",
                  phone_number: "",
                  profile_picture: "",
                  gender: "",
                  city: "",
                  role: 2,
                  blocked: false,
                  verified: ""
              }
          })}

          onSubmit={async (values, actions) => {
              if(add === true) {
                  await axios.post(`${baseURL}/tables/users/add/`, values)
                      .then(response => {
                          {props.onHide()}
                      })
                      .catch(error => {
                          console.log(error.response);
                      });
              }
              if(edit === true){
                  await axios.put(`${baseURL}/tables/users/update/${data.id}/`, values)
                      .then(response => {
                          {props.onHide()}
                      })
                      .catch(error => {
                          console.log(error.response);
                      });
              }
          }}

      >
        <Form
        >
      <Modal.Body>
          {edit===true && <div>ID: {data.id}</div>}
          <Field
              name={"profile_picture"}
              type={"text"}
              component={CustomInput}
          />
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
              name={"password"}
              type={"text"}
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
                    {value: "Other", label: "Other"},
                    {value: "Female", label: "Female"},
                  {value: "Male", label: "Male"},
                ]}
            />

            <Field
                name={"role"}
                component={CustomSelect}
                options = {[
                  {value: 2, label: "User"},
                    {value: 3, label: "Company"},
                    {value: 1, label: "Admin"},

                ]}
            />
            <Field
                name={"blocked"}
                component={CustomSelect}
                options = {[
                    {value: false, label: "Not Blocked"},

                    {value: true, label: "Blocked"},
                ]}
            />
            <Field
                name={"verified"}
                component={CustomSelect}
                options = {[
                    {value: "", label: "Pending"},
                    {value: true, label: "Verified"},
                  {value: false, label: "Not Verified"},

                ]}
            />

      </Modal.Body>
      <Modal.Footer>
        <CustomButton
            text={"Close"}
            variant={"close"}
            type= {"button"}
            onClick={props.onHide}>Close</CustomButton>
        <CustomButton
          text={"Save"}
          variant={"save"}
          type = {"submit"}
        ></CustomButton>
      </Modal.Footer>
        </Form>
      </Formik>
    </Modal>
  );
};
export default UserEditModal;
