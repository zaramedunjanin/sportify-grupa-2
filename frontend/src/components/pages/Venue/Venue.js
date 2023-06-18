
import React, { useEffect, useState, useContext } from "react";


import {addData, editData} from "../../../services/AdminService/useAdminMutator";
import {Field, Formik, Form} from "formik";
import * as yup from "yup";
import CustomInput from "../Admin/AdminComponents/AdminModals/CustomFormComponents/CustomInput";
import CustomTextArea from "../Admin/AdminComponents/AdminModals/CustomFormComponents/CustomTextArea";

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
import { AuthContext } from "../../../context/AuthContext";
import RatingStars from "./RatingStars/RatingStars";
import { useTranslation } from "react-i18next";

const Venue = () => {
    let { id } = useParams();
    const url = `http://127.0.0.1:8000/venue/${id}`;

    const [venue, setVenue] = useState({});
    const [sports, setSports] = useState([]);
    const [rating, setRating] = useState("");
    const [questionList, setQuestionList] = useState([]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [userRating, setUserRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const validationSchema = yup.object().shape({
        text: yup.string().required("Required"),
    });
    const { t } = useTranslation();
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
        setQuestionList(q.data);
    }

    useEffect(() => {
        const getUserRating = async () => {
            await axios
                .get(`http://127.0.0.1:8000/venue/user/${user.id}/rating/`)
                .then((res) => setUserRating(res.data[0].rating))
                .catch((e) => {
                    console.error(e);
                });
        };
        fetchVenue();
        getUserRating();
    }, [submitted]);

    useEffectTitle("Venue | Sportify");

    return (
        <>
            <Navbar />
            <div className={styles.body}>
                <Container>
                    <Row>
                        <Col className={`${styles.card} my-2`}>
                            {venue.venue_picture !== "" && (
                                <Image
                                    className={styles.cover}
                                    fluid
                                    src={venue.venue_picture}
                                />
                            )}
                            <Row className={"justify-content-between align-items-center"}>
                                <Col xs={7} className={"align-items-center my-1"}>
                                    <h2 className={`${styles.title} ms-2`}>{venue.venue_name}</h2>
                                </Col>
                                <Col className={"text-end"}>
                                    <MainButton onClick={handleShow} text={t("schedule_now")} />
                                </Col>
                            </Row>

                            {sports.map((sport) => {
                                return <SportCategoryButton sport_name={sport} />;
                            })}

                            <Row>
                                <h5 className={`d-flex`}>
                                    <span className="material-symbols-outlined ms-2">grade</span>{" "}
                                    {rating}
                                    <div className={styles.ratingSpace}>
                                        <RatingStars
                                            submitted={() => setSubmitted(true)}
                                            oldRating={userRating}
                                            venue={parseInt(id)}
                                            user={user.id}
                                        />
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
                                <h4>{t("description")}</h4>
                                <p>{venue.description}</p>
                            </Row>
                        </Col>
                    </Row>
                    <Row className={"my-2"}>
                        {questionList.length !== 0 && (
                            <QnAList questionList={questionList} />
                        )}
                    </Row>
                </Container>
                <Row>
                    <Col md={12}>
                        <Row className={`${styles.card_1} justify-content-center`}>
                            <Col>
                                <Formik
                                    validationSchema={validationSchema}
                                    validateOnChange={true}

                                    initialValues= {{
                                        user: "",
                                        venue: id,
                                        text: "",
                                        answer: "",
                                        pinned: false,
                                    }}
                                    onSubmit={async (values, actions) => {
                                        values["user"] = user.id;
                                        values["venue"] = parseInt(values["venue"])

                                        const response =  await addData(values, "questions");
                                        setTimeout(() => {
                                            if (response.status === 201) {
                                                actions.resetForm()
                                                actions.setStatus( {success: 'Message has been sent!'} )
                                            }
                                            else if (response.status === 400) {
                                                actions.resetForm()

                                                actions.setStatus( {success: 'Message failed to send.'} )

                                            }
                                        }, 2000);

                                    }}
                                >
                                    {({ values, errors, status, isSubmitting }) => (
                                        <Form>
                                            <p>{status}</p>
                                            <Field
                                                name={"text"}
                                                type={"textarea"}
                                                placeholder = {"Write a Question"}
                                                label = {`Send a Question`}
                                                component={CustomTextArea}
                                            />
                                            <div className={styles.button_wrapper}>
                                                <div>{ status && status.success? status.success :  ""}</div>

                                                <MainButton
                                                    type="submit"
                                                    text="Send"
                                                />
                                            </div>
                                        </Form>
                                    )}
                                </Formik>

                            </Col>
                        </Row>
                    </Col>
                </Row>
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
