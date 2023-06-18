import { useNavigate } from "react-router-dom";
import myImage from "./placeholder.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";

import styles from "./Card.module.scss";
import SportIcon from "../SportIcon/SportIcon";
import MainButton from "../../../atoms/Buttons/MainButton/MainButton";

const Card = ({ venue, ...rest }) => {
  const navigate = useNavigate();

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const parsedTime = `${hours}:${minutes}`;

    return parsedTime;
  };
  return (
    <>
      <div
        className={`${styles.card} ${styles.min_width_card} mb-5`}
        style={{ width: "17rem", fontSize: "12px" }}
      >
         <img src={myImage} className="card-img-top" alt="..." /> 
      
        <div className="card-body">
          <div className="row">
            <div className="col">
              <div className="row fw-bolder fs-6">
                <p
                  className={`${styles.card_title}`}
                  style={{ marginLeft: "0px !important" }}
                >
                  {venue.venue_name}
                  {venue.sport.map((sp) => {
                    return <SportIcon sport_name={sp}></SportIcon>;
                  })}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="row fw-semibold" style={{ fontSize: "16px" }}>
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faLocationDot} className="me-1" />{" "}
                  {venue.address}{" "}
                </p>
              </div>
              <div className="row fw-semibold" style={{ fontSize: "16px" }}>
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faStar} className="me-1" />
                  {venue.avg_rating > 0 ? venue.avg_rating : "-"}
                </p>
              </div>
              <div className="row fw-semibold" style={{ fontSize: "16px" }}>
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faClock} className="me-1" />
                  {formatTime(venue.opening_time)}h -{" "}
                  {formatTime(venue.closing_time)}h{" "}
                </p>
              </div>
              <div className="row fw-semibold" style={{ fontSize: "16px" }}>
                <p>
                  {" "}
                  <FontAwesomeIcon
                    icon={faTag}
                    className="me-1"
                    rotation={90}
                  />
                  {venue.price_per_hour} KM{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="text-center pt-2">
            <MainButton
              onClick={() => navigate(`/venue/${venue.id}`)}
              text={"Schedule"}
            ></MainButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
