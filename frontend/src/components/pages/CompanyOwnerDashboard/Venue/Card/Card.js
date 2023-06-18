import myImage from "./placeholder.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { faBasketball } from "@fortawesome/free-solid-svg-icons";
import { faVolleyball } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import SportIcon from "../../../SearchResults/SportIcon/SportIcon";

import "./Card.css";
import { useState } from "react";

const Card = ({ venue, setDeleteId, setEditId, ...rest }) => {
  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const parsedTime = `${hours}:${minutes}`;

    return parsedTime;
  };

  return (
    <>
      <div
        className="card min-width-card mb-5"
        style={{ width: "17rem", fontSize: "12px" }}
      >
        <img src={myImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="row">
            <div className="col">
              <div className="dropdown">
                <button
                  className="btn btn-light btn-lg card-options "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faEllipsis} className="me-1 ms-1" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-end shadow p-2">
                  <li className="edit">
                    <a
                      className="dropdown-item"
                      onClick={() => setEditId(venue.id)}
                    >
                      Edit
                    </a>
                  </li>
                  <li className="delete">
                    <a
                      className="dropdown-item"
                      onClick={() => setDeleteId(venue.id)}
                    >
                      Delete
                    </a>
                  </li>
                </ul>
              </div>

              <div className="row fw-bolder fs-6">
                <p
                  className="card-title"
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
        </div>
      </div>
    </>
  );
};

export default Card;
