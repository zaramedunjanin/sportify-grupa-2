import React from "react";

import Container from "react-bootstrap/Container";

const AboutText = () => {
  const textStyle = {
    textAlign: "center",
    marginLeft: "20%",
    marginRight: "20%",
  };

  return (
    <Container fluid>
      <p style={textStyle}>
        Sportify is a modern online platform that connects sports enthusiasts
        with sports facilities. Whether you're looking to rent a field, pitch,
        court, ring, or rink, Sportify makes it easy to find and book the
        perfect venue for your sports event. With user accounts, you can manage
        your bookings, invite others to your events, and get answers to your
        questions about the facilities. Facility owners can also create
        accounts, register their venues, and provide helpful information to
        potential customers.
      </p>
    </Container>
  );
};

export default AboutText;
