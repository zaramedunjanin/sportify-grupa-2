import React from "react";
import {Form} from "react-bootstrap";

const CustomInput= ({ field, options, form, ...props }) =>{
    let replace = field.name.replace('_', ' ')
    let name = replace.charAt(0).toUpperCase() + replace.slice(1)

    return (
        <>
        <Form.Text >{name}</Form.Text>
        <Form.Control
            {...field} {...props}
        />
            </>
    )
}
export default CustomInput;