import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CustomButton from "../../../../../atoms/Buttons/CustomButton";
import axios from "axios";
import { baseURL } from "../../../../../../services/AdminService/adminService";
import {Field, Form, Formik} from "formik";
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
                    reservation_id: data.reservation_id,
                    user_id: data.user_id,

                }}
                onSubmit={async (values, actions) => {
                    if(add === true) {
                        await axios.post(`${baseURL}/tables/acceptedinvites/add/`, values)
                            .then(response => {
                                {props.onHide()}
                            })
                            .catch(error => {
                                console.log(error.response);
                            });
                    }
                    if(edit === true){
                        await axios.put(`${baseURL}/tables/acceptedinvites/update/${data.id}/`, values)
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
                        <div>ID: {data.id}</div>

                        <Field
                            name={"reservation_id"}
                            type={"text"}
                            component={CustomInput}
                        />
                        <Field
                            name={"user_id"}
                            type={"text"}
                            component={CustomInput}
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
export default VenueEditModal;
