import React from 'react';

import './About.scss'

import Container from "react-bootstrap/Container";
const About = () => {
    return(
    <Container className={"mt-5 mb-1 p-5"}>
        <h3>About Us</h3>
        <p className={"text-start"}>
            Sportify is a modern online platform that connects sports enthusiasts with sports facilities.
            Whether you're looking to rent a field, pitch, court, ring, or rink,
            Sportify makes it easy to find and book the perfect venue for your sports event.
            With user accounts, you can manage your bookings, invite others to your events, and get answers to your questions about the facilities.
            Facility owners can also create accounts, register their venues, and provide helpful information to potential customers.
            Discover your next sports adventure with Sportify.
        </p>
    </Container>
    )
}

export default About