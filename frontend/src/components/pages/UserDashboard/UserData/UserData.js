import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import "./UserData.css";

const UserData = ({ showModal, handleClose }) => {
  const { t } = useTranslation();
  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t("account")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3 edit_input"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                type="text"
                placeholder={t("first_name")}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3 edit_input"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                type="text"

                placeholder={t("last_name")}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3 edit_input"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control type="text" placeholder={t("city")} autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3 edit_input"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                type="text"
                placeholder={t("phone_number")}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3 edit_input"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                type="text"
                placeholder={t("username")}
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
                placeholder={t("email")}
                autoFocus
                disabled
              />
            </Form.Group>
            <Form.Group
              className="mb-3 edit_input"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                type="password"
                placeholder={t("password")}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t("close")}
          </Button>
          <Button variant="success" onClick={handleClose}>
            {t("save_changes")}{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserData;
