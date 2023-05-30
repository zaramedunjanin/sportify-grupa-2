import React, {useEffect, useState} from "react";

import Navbar from "../../organisms/Navbar/Navbar";
import Footer from "../../organisms/Footer/Footer";

import styles from "./Venue.module.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Image} from "react-bootstrap";

import slika from "../../../assets/images/pitch.jpg"
import MainButton from "../../atoms/Buttons/MainButton/MainButton";
import useEffectTitle from "../../../hooks/useEffectTitle";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import SportCategoryButton from "../../atoms/Buttons/SportCategoryButton/SportCategoryButton";

const Venue = () => {
    let {id} = useParams();
    const url = `http://127.0.0.1:8000/venue/${id}`

    const [venue, setVenue] = useState({})
    const [sports, setSports] = useState([])
    const [rating, setRating] = useState("")

    const navigate = useNavigate()

    async function fetchVenue() {
        const response = await axios.get(`${url}`)

        if (response.data[0] === undefined) {
            navigate(-1)
        } else {
            response.data[0].opening_time = response.data[0].opening_time.substring(0, 5);
            response.data[0].closing_time = response.data[0].closing_time.substring(0, 5);
            setVenue(response.data[0])
            setSports(response.data[0].sport)
        }

        const r = await axios.get(`${url}/getrating`)
        if (r.data === 0.0 || typeof (r.data) !== "number") setRating("--")
        else setRating(`${r.data}`)
    }

    useEffect(() => {
        fetchVenue()
    }, [])


    return (
        <>
            <Navbar/>
            <div className={styles.body}>
                <Container>
                    <Row>
                        <Col className={`${styles.card} my-2`}>
                            <Image className={styles.cover} fluid src={slika}/>
                            <Row className={"justify-content-between align-items-center"}>
                                <Col xs={7} className={"align-items-center my-1"}>
                                    <h2 className={`${styles.title} ms-2`}>{venue.venue_name}</h2>
                                </Col>
                                <Col className={"text-center"}>
                                    <MainButton
                                        text={"Schedule Now"}
                                    />
                                </Col>
                            </Row>

                            {sports.map(
                                (sport) => {
                                    return (
                                        <SportCategoryButton sport_name={sport}/>
                                    )
                                }
                            )}


                            <Row>
                                <h5><span className="material-symbols-outlined ms-2">grade</span> {rating}</h5>
                                <h5><span className="material-symbols-outlined ms-2">location_on</span> {venue.address}
                                </h5>
                                <h5><span
                                    className="material-symbols-outlined ms-2">schedule</span> {venue.opening_time} - {venue.closing_time}
                                </h5>
                                <h5><span
                                    className="material-symbols-outlined ms-2">payments</span> {venue.price_per_hour} KM/h
                                </h5>
                            </Row>
                            <Row className={"mt-1"}>
                                <h4>Description</h4>
                                <p>
                                    {venue.description}
                                </p>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        {/* Free time slots */}
                    </Row>
                    <Row>
                        {/* faq */}
                    </Row>
                </Container>
            </div>
            <Footer/>
        </>
    );
};

export default Venue;
