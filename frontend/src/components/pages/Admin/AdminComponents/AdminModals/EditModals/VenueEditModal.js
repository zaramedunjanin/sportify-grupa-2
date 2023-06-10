import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CustomButton from "../../../../../atoms/Buttons/CustomButton";
import axios from "axios";
import { baseURL } from "../../../../../../services/AdminService/adminService";
import { Field, Form, Formik } from "formik";
import CustomSelect from "../CustomSelect";
import CustomInput from "../CustomInput";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import storage from "../../../../../../config/firebaseConfig";
import useImageUpload from "../../../../../../hooks/useImageUpload";
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

  const {
    file,
    percent,
    setFile,
    setPercent,
    handleChange,
    handleSubmit
  } =useImageUpload(add, edit)


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
          initialValues: {
            venue_name: data.venue_name,
            address: data.address,
            city: data.city,
            venue_picture: data.venue_picture,
            type: data.type,
            description: data.description,
            price_per_hour: data.price_per_hour,
            opening_time: data.opening_time,
            closing_time: data.closing_time,
            company_id: data.company_id,
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
            company_id: "",
          },
        })}
        onSubmit={(values, actions) => {
          handleSubmit(values, data.id, page, add, edit)
          props.onHide()
        }}
      >
        <Form>
          <Modal.Body>
            {edit === true && <div>ID: {data.id}</div>}
            <input name={"profile_picture"} type={"file"} onChange={handleChange} />
            <Field name={"venue_name"} type={"text"} component={CustomInput} />
            <Field name={"address"} type={"text"} component={CustomInput} />
            <Field name={"city"} type={"text"} component={CustomInput} />
            <Field
              name={"venue_picture"}
              type={"text"}
              component={CustomInput}
            />
            <Field name={"type"} type={"text"} component={CustomInput} />
            <Field name={"description"} type={"text"} component={CustomInput} />
            <Field
              name={"price_per_hour"}
              type={"text"}
              component={CustomInput}
            />
            <Field
              name={"opening_time"}
              type={"time"}
              component={CustomInput}
            />
            <Field
              name={"closing_time"}
              type={"text"}
              component={CustomInput}
            />
            <Field
              name={"company_id"}
              type={"number"}
              component={CustomInput}
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
