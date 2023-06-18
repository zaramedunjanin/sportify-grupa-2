import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import style from "../TopVenues/TopVenue.module.scss.css";
import { useNavigate } from "react-router-dom";
import Card from "../../SearchResults/Card/Card";
import Container from "react-bootstrap/Container";

const TopVenues = ({ venues, ...props }) => {
  const navigate = useNavigate();

  const { t } = useTranslation();
  return (
    <Container className={"mt-5"}>
      <h2 className={"pb-5"}>{t("top_rated_venues")}</h2>
      {!venues || venues.length === 0 ? (
        <h5 className={"text-center pb-5"}>{t("no_venues")}</h5>
      ) : (
        <div className="container mt-4 d-flex justify-content-center">
          <div className="row row-cols-xl-auto row-cols-lg-2 row-cols-md-2 row-cols-sm-1 justify-content-center">
            {venues.map((venue) => {
              return (
                <div
                  key={venues.id}
                  className="col d-flex justify-content-center"
                >
                  <Card venue={venue} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Container>
  );
};

export default TopVenues;
