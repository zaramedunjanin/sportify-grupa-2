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
        {...(edit === true && {
          initialValues: {
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
            await axios
              .post(`${baseURL}/tables/reservations/add/`, values)
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
              .put(`${baseURL}/tables/reservations/update/${data.id}/`, values)
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

            <Field
              name={"total_places"}
              type={"number"}
              component={CustomInput}
            />
            <Field name={"going"} type={"number"} component={CustomInput} />
            <Field name={"start_time"} type={"time"} component={CustomInput} />
            <Field name={"end_time"} type={"time"} component={CustomInput} />
            <Field name={"description"} type={"text"} component={CustomInput} />
            <Field
              name={"auto_invite"}
              component={CustomSelect}
              options={[
                { value: true, label: "On" },
                { value: false, label: "Off" },
              ]}
            />
            <Field
              name={"number_of_invites"}
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
