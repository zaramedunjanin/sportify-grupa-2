import { Fragment } from "react";
import Container from "react-bootstrap/esm/Container"
import Button from "../../atoms/Buttons/MainButton";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mainLogo from '../../../assets/images/Increase.png';
import "./Footer.css"

const Footer = () => {
  return <Fragment>
    <Container fluid className={"header-container background-gray d-flex justify-content-center mt-4"}>
      <Row>
        <Col xs={2} className="mt-auto mb-auto">
          <img src={mainLogo} alt="sadsd" width="100px" height="100px" />
        </Col>
        <Col xs={7} className="mt-auto mb-auto">
          <div className="text-white">Get More Bookings for Your Venue Today !</div>
        </Col>
        <Col xs={3} className="mt-auto mb-auto">
          <Button text="Become a partner"></Button>
        </Col>
      </Row>
    </Container>

    <div className="container">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 mt-5">
        <div className="col mb-3">
        </div>
        <div className="col mb-3">
          <h6 className="fw-semibold">Informations</h6>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="p-0  text-decoration-none text-reset footer-links">About us</a></li>
            <li className="nav-item mb-2"><a href="#" className="p-0  text-decoration-none text-reset footer-links">Become a partner</a></li>
            <li className="nav-item mb-2"><a href="#" className="p-0  text-decoration-none text-reset footer-links">FAQ</a></li>
          </ul>
        </div>
        <div className="col mb-3">
          <h6 className="fw-semibold">Important links</h6>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="p-0  text-decoration-none text-reset footer-links">Signup</a></li>
            <li className="nav-item mb-2"><a href="#" className="p-0  text-decoration-none text-reset footer-links">Contact us</a></li>
            <li className="nav-item mb-2"><a href="#" className="p-0  text-decoration-none text-reset footer-links">Terms of use</a></li>
            <li className="nav-item mb-2"><a href="#" className="p-0  text-decoration-none text-reset footer-links">Privacy policy</a></li>
          </ul>
        </div>
        <div className="col mb-3">
          <h6 className="fw-semibold">Section</h6>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="p-0  text-decoration-none text-reset footer-links">Facebook</a></li>
            <li className="nav-item mb-2"><a href="#" className="p-0  text-decoration-none text-reset footer-links">Instagram</a></li>
            <li className="nav-item mb-2"><a href="#" className="p-0  text-decoration-none text-reset footer-links">Twitter</a></li>
          </ul>
        </div>
      </footer>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 border-top ms-4">
      <p className="copyright">© 2023 Sportify. All Rights Reserved.</p>
    </div>
  </Fragment>

}

export default Footer;