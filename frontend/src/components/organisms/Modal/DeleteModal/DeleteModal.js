import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CustomButton from "../../../atoms/Buttons/CustomButton";

const DeleteModal = (props) => {

    return (
        <Modal
                {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <Modal.Header  closeButton >
                <Modal.Title id="contained-modal-title-vcenter">
                    Confirm Delete
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <p >
                    Are sure you want to delete this?
                </p>
            </Modal.Body>
            <Modal.Footer>
                <CustomButton onClick={props.onHide} text={"Close"}/>
                <CustomButton variant = "success" onClick={props.onDelete} text={"Delete"}/>
            </Modal.Footer>
        </Modal>
    );
}
export default DeleteModal