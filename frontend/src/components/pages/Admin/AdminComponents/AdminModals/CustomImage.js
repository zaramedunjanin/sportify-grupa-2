import React, {useState} from "react";
import { Form } from "react-bootstrap";
import {ErrorMessage,
    useField,

} from "formik";
const CustomImage = (props) => {
    let replace = props.field.name.replace("_", " ");
    let name = replace.charAt(0).toUpperCase() + replace.slice(1);

    return (
        <>
            <Form.Text>{name}</Form.Text>
            <input className={"form-control"}
                   accept="/image/*"
                   {...props}

            />
        </>
    );
};
export default CustomImage;
