import React, { useContext } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./UserDashboard.module.css";
import { Image } from "react-bootstrap";
import { AuthContext } from "../../../context/AuthContext";

const UserDashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Row className={`${styles.card}`}>
        <Col lg={"6"} className={`text-center`}>
          <Image className={styles.cover} src={user.profile_picture} />
        </Col>
        <Col lg={"6"}>
          <Row>
            <p>
              <span className="material-symbols-outlined">person</span>{" "}
              {user && user.first_name} {user.last_name} ( {user.username} )
            </p>
            <p>
              <span className="material-symbols-outlined">location_on</span>{" "}
              {user.city}
            </p>
            <p>
              <span className="material-symbols-outlined">call</span>{" "}
              {user.phone_number}
            </p>
            <p>
              <span className="material-symbols-outlined">mail</span>{" "}
              {user.email}
            </p>
            <p>
              {user.gender === 'Female' && <span className="material-symbols-outlined">female</span>}
              {user.gender === 'Male' && <span className="material-symbols-outlined">male</span>}
              {user.gender === 'Other' && <span className="material-symbols-outlined">transgender</span>}
              {" "}{user.gender}
            </p>
            <p>
              <span className="material-symbols-outlined">
                sports_basketball
              </span>{" "}
              {user.sport === ""?
              "No Sports"
                  :
                  user.sport
              }
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDashboard;
