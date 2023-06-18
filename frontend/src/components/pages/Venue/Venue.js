import React, { useEffect, useState, useContext } from "react";

import Navbar from "../../organisms/Navbar/Navbar";
import Footer from "../../organisms/Footer/Footer";

import styles from "./Venue.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import MainButton from "../../atoms/Buttons/MainButton/MainButton";
import useEffectTitle from "../../../hooks/useEffectTitle";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import SportCategoryButton from "../../atoms/Buttons/SportCategoryButton/SportCategoryButton";
import ScheduleNowModal from "./ScheduleNowModal";
import QnAList from "./QnAList";
import {AuthContext} from "../../../context/AuthContext";
import RatingStars from "./RatingStars/RatingStars";
import {baseURL} from "../../../services/AdminService/adminService";

const Venue = () => {
    let { id } = useParams();
    const url = `http://127.0.0.1:8000/venue/${id}`;

    const [venue, setVenue] = useState({});
    const [sports, setSports] = useState([]);
    const [rating, setRating] = useState("");
    const [questionList, setQuestionList] = useState([])
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    const [userRating, setUserRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function fetchVenue() {
        const response = await axios.get(`${url}`);

        if (response.data[0] === undefined) {
            navigate(-1);
        } else {
            response.data[0].opening_time = response.data[0].opening_time.substring(
                0,
                5
            );
            response.data[0].closing_time = response.data[0].closing_time.substring(
                0,
                5
            );
            setVenue(response.data[0]);
            setSports(response.data[0].sport);
        }

        const r = await axios.get(`${url}/getrating`);
        if (r.data === 0.0 || typeof r.data !== "number") setRating("--");
        else setRating(`${r.data}`);

        const q = await axios.get(`${url}/getquestions`);
        setQuestionList(q.data)
    }

    useEffect(() => {
        const getUserRating = async () =>{
             await axios
                .get(`http://127.0.0.1:8000/venue/user/${user.id}/rating/`)
                .then((res)=>setUserRating(res.data[0].rating))
                .catch((e) => {
                    console.error(e);
                });
        }
        fetchVenue();
        getUserRating()

    }, [submitted]);

    return (
        <>
            <Navbar />
            <div className={styles.body}>
                <Container>
                    <Row>
                        <Col className={`${styles.card} my-2`}>
                            {venue.venue_picture !== '' && <Image className={styles.cover} fluid src={venue.venue_picture}/>}
                            <Row className={"justify-content-between align-items-center"}>
                                <Col xs={7} className={"align-items-center my-1"}>
                                    <h2 className={`${styles.title} ms-2`}>{venue.venue_name}</h2>
                                </Col>
                                <Col className={"text-center"}>
                                    <MainButton text={"Schedule Now"} onClick={handleShow} />
                                </Col>
                            </Row>

                            {sports.map((sport) => {
                                return <SportCategoryButton sport_name={sport} />;
                            })}

                            <Row>
                                <h5 className = {`d-flex`}>
                                    <span className="material-symbols-outlined ms-2">grade</span>{" "}
                                    {rating}
                                    <div className = {styles.ratingSpace}>
                                        <RatingStars submitted = {()=>setSubmitted(true)} oldRating={userRating} venue = {parseInt(id)} user = {user.id}/>
                                    </div>
                                </h5>
                                <h5>
                  <span className="material-symbols-outlined ms-2">
                    location_on
                  </span>{" "}
                                    {venue.address}
                                </h5>
                                <h5>
                  <span className="material-symbols-outlined ms-2">
                    schedule
                  </span>{" "}
                                    {venue.opening_time} - {venue.closing_time}
                                </h5>
                                <h5>
                  <span className="material-symbols-outlined ms-2">
                    payments
                  </span>{" "}
                                    {venue.price_per_hour} KM/h
                                </h5>
                            </Row>
                            <Row className={"mt-1"}>
                                <h4>Description</h4>
                                <p>{venue.description}</p>
                            </Row>
                        </Col>
                    </Row>
                    <Row className={"my-2"}>
                        {questionList.length !== 0 && <QnAList questionList={questionList}/>}
                    </Row>
                </Container>
            </div>
            <Footer />
            <ScheduleNowModal
                show={show}
                handleClose={handleClose}
                sports={sports}
                url={url}
            />
        </>
    );
};

export default Venue;

