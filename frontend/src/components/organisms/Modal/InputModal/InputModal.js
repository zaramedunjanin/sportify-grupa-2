import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import React from "react";

const InputModal = ({ table, row, ...props }) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              className=" input "
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              className="input "
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default InputModal;
