import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CustomButton from "../../../atoms/Buttons/CustomButton";

const DeleteModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Confirm {props.type}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to {props.type}?</p>
      </Modal.Body>
      <Modal.Footer>
        <CustomButton onClick={props.onHide} text={"Close"} variant="close" />
        <CustomButton
          variant="delete"
          onClick={props.onSubmit}
          text={props.type}
        />
      </Modal.Footer>
    </Modal>
  );
};
export default DeleteModal;
