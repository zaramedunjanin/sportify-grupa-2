import React, { useState} from "react";

import axios from "axios";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";

import Modal from "react-bootstrap/Modal";
import CustomButton from "../../../../../atoms/Buttons/CustomButton";
import { baseURL } from "../../../../../../services/AdminService/adminService";
import FormB from "react-bootstrap/Form";

import CustomSelect from "../CustomSelect";
import CustomInput from "../CustomInput";
import CustomImage from "../CustomImage";

import storage from "../../../../../../config/firebaseConfig";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import useImageUpload from "../../../../../../hooks/useImageUpload";

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
    const {
        file,
        percent,
        setFile,
        setPercent,
        handleChange,
        handleSubmit
    } = useImageUpload()

    const validationSchema = yup.object().shape({
        first_name: yup
            .string()
            .required("Required")
            .max(50),
        last_name:yup
            .string()
            .required("Required")
            .max(50),
        username: yup
            .string()
            .required("Required")
            .max(50),
        password: yup
            .string()
            .required("Required")
            .max(255),
        email: yup
            .string()
            .email("Invalid email format")
            .required("Required")
            .max(50),
        phone_number: yup
            .string()
            .max(50),
        city: yup
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
            id:data.id,
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
              profile_picture: "",
              email: "",
              phone_number: "",
            gender: "",
            city: "",
            role: 2,
            blocked: false,
            verified: "",
          },
        })}
        onSubmit={(values,actions) => {
            handleSubmit(values, page, add, edit)
            props.onHide()
        }
        }
      >
          {({ values, errors }) => (
        <Form>
          <Modal.Body>
              {edit === true && <div><FormB.Text>ID:</FormB.Text> {data.id}</div>}
              <Field name={"profile_picture"}  type={"file"} onChange = {handleChange} component={CustomImage} />
              <Field name={"first_name"} type={"text"} component={CustomInput} />
              <Field name={"last_name"} type={"text"} component={CustomInput} />
              <Field name={"username"} type={"text"} component={CustomInput} />
              <Field name={"email"} type={"email"} component={CustomInput} />
              <Field name={"password"} type={"password"} component={CustomInput} />
              <Field name={"city"} type={"text"} component={CustomInput} />

              <Field name={"phone_number"} type={"text"} component={CustomInput}/>
              <Field name={"company_name"} type={"text"} component={CustomInput}
            />

            <Field
              name={"gender"}
              component={CustomSelect}
              options={[
                { value: "Other", label: "Other" },
                { value: "Female", label: "Female" },
                { value: "Male", label: "Male" },
              ]}
            />

            <Field
              name={"role"}
              component={CustomSelect}
              options={[
                { value: 2, label: "User" },
                { value: 3, label: "Company" },
                { value: 1, label: "Admin" },
              ]}
            />
            <Field
              name={"blocked"}
              component={CustomSelect}
              options={[
                { value: false, label: "Not Blocked" },
                { value: true, label: "Blocked" },
              ]}
            />
            <Field
              name={"verified"}
              component={CustomSelect}
              options={[
                { value: "", label: "Pending" },
                { value: true, label: "Verified" },
                { value: false, label: "Not Verified" },
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
        )}
      </Formik>
    </Modal>
  );
};
export default UserModal;
