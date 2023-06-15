import React from "react";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import OffcanvasBS from "react-bootstrap/Offcanvas";

const Offcanvas = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <OffcanvasBS show={show} onHide={handleClose} {...props}>
        <OffcanvasBS.Header closeButton>
          <OffcanvasBS.Title>Offcanvas</OffcanvasBS.Title>
        </OffcanvasBS.Header>
        <OffcanvasBS.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </OffcanvasBS.Body>
      </OffcanvasBS>
    </>
  );
};

export default Offcanvas;
