import React, {useContext, useState} from "react";
import Modal from "react-bootstrap/Modal";
import MainButton from "../../atoms/Buttons/MainButton/MainButton";
import Form from "react-bootstrap/Form";
import {getCurrentDateTime} from "../../../utils/utils";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import SportCategoryButton from "../../atoms/Buttons/SportCategoryButton/SportCategoryButton";
import axios from "axios";
import {AuthContext} from "../../../context/AuthContext";

const currentDateTime = getCurrentDateTime()

const ScheduleNowModal = (props) => {
    const { isAuthenticated, user } = useContext(AuthContext);
    const username = user.username

    const [sport, setSport] = useState('');
    const [date, setDate] = useState('');
    const [duration, setDuration] = useState('');
    const [total_places, setTotal_places] = useState('');
    const [going, setGoing] = useState('');
    const [desc, setDesc] = useState('');

    const sports = props.sports;
    const url = props.url;

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Creating real dates from duration
        const start_date = new Date(date)
        const end_date = new Date(start_date)
        console.log(start_date.getHours())
        end_date.setHours(start_date.getHours() + parseInt(duration))
        console.log(start_date, duration, end_date)


        try {
            const response = await axios.post(
                `${props.url}/schedule`,
                {
                    sport, start_date, end_date, total_places, going, desc, username
                }
            );
            console.log(response.data);
            setSport(''); setDate(''); setDuration(''); setTotal_places('');
            setGoing(''); setDesc('');
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <Modal
            show={props.show}
            onHide={props.handleClose}
            backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title>Schedule An Appointment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="reservationSports">
                        <Form.Label>Choose a Sport</Form.Label>
                        <Form.Select
                            size={"sm"}
                            aria-label={"Choose a Sport"}
                            required
                            onChange={(event) => setSport(event.target.value)}
                        >
                            <option></option>
                            {sports.map(
                                (sport) => {
                                    return (
                                        <option value={`${sport}`}>{sport}</option>
                                    )
                                }
                            )}
                        </Form.Select>
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group controlId="reservationDate">
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    size={"sm"}
                                    type="datetime-local"
                                    min={currentDateTime}
                                    required
                                    onChange={(event) => setDate(event.target.value)}
                                    placeholder={date}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="reservationDuration">
                                <Form.Label>Duration</Form.Label>
                                <Form.Control
                                    size={"sm"}
                                    type="number"
                                    min={"1"}
                                    required
                                    onChange={(event) => setDuration(event.target.value)}
                                    placeholder={duration}
                                />
                                <Form.Text>Duration of your event (hours)</Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId={"reservationTotalPlaces"}>
                                <Form.Label>Number of Participants</Form.Label>
                                <Form.Control
                                    size={"sm"}
                                    type={"number"}
                                    min={"1"}
                                    required
                                    onChange={(event) => setTotal_places(event.target.value)}
                                    placeholder={total_places}
                                />
                                <Form.Text>Maximum number of people attending the event</Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId={"reservationGoing"}>
                                <Form.Label>Number of Attendees</Form.Label>
                                <Form.Control
                                    size={"sm"}
                                    min={"1"}
                                    max={total_places}
                                    type={"number"}
                                    required
                                    onChange={(event) => setGoing(event.target.value)}
                                    placeholder={going}
                                />
                                <Form.Text muted>Number of people that have confirmed their attendence</Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group controlId={"reservationDescription"}>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            size={"sm"}
                            as={"textarea"}
                            rows={"3"}
                            onChange={(event) => setDesc(event.target.value)}
                            placeholder={desc}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <MainButton
                    text={"Schedule"}
                    onClick={handleSubmit}
                    disabled={!isAuthenticated}
                />
            </Modal.Footer>
        </Modal>
    )
}

export default ScheduleNowModal