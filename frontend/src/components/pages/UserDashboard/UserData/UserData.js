import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import "./UserData.css";

const UserData = ({ showModal, handleClose }) => {
  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3 edit_input"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control type="text" placeholder="First name" autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3 edit_input"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control type="text" placeholder="Last name" autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3 edit_input"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control type="text" placeholder="City" autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3 edit_input"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control type="text" placeholder="Phone number" autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3 edit_input"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                type="text"
                placeholder="Username"
                autoFocus
                disabled
              />
            </Form.Group>
            <Form.Group
              className="mb-3 edit_input"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                type="email"
                placeholder="Email"
                autoFocus
                disabled
              />
            </Form.Group>
            <Form.Group
              className="mb-3 edit_input"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control type="password" placeholder="Password" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserData;
