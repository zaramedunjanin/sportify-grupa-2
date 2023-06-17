import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/esm/Container";
import Button from "../../atoms/Buttons/MainButton/MainButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import mainLogo from "../../../assets/images/Increase.png";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Container
        fluid
        className={
          "header-container background-gray d-flex justify-content-center mt-4"
        }
      >
        <Row>
          <Col xs={12} lg={2} className="mt-auto mb-lg-auto mb-sm-3">
            <img src={mainLogo} alt="sadsd" width="100px" height="100px" />
          </Col>
          <Col xs={12} lg={7} className="mt-auto mb-lg-auto mb-sm-3">
            <div className="text-white">{t("venue")}</div>
          </Col>
          <Col xs={12} lg={3} className="mt-auto mb-lg-auto mb-sm-0">
            <Button text={t("text")}></Button>
          </Col>
        </Row>
      </Container>

      <div className="container text-center">
        <footer className="row row-cols-1 row-cols-sm-1 row-cols-md-3 py-5 mt-5 jusstify-content-center">
          <div className="col-sm-12  mb-3">
            <h6 className="fw-semibold">{t("info")}</h6>
            <ul className="nav flex-column text-center">
              <li className="nav-item mb-2">
                <a
                  href="/about"
                  className="p-0  text-decoration-none text-reset footer-links"
                >
                  {t("about")}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/bap"
                  className="p-0  text-decoration-none text-reset footer-links"
                >
                  {t("partner")}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/faq"
                  className="p-0  text-decoration-none text-reset footer-links"
                >
                  {t("faq")}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-12  mb-3">
            <h6 className="fw-semibold"> {t("links")}</h6>
            <ul className="nav flex-column text-center">
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="p-0  text-decoration-none text-reset footer-links"
                >
                  {t("sign_up")}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="p-0  text-decoration-none text-reset footer-links"
                >
                  {t("contact")}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/termsofuse"
                  className="p-0  text-decoration-none text-reset footer-links"
                >
                  {t("terms")}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="p-0  text-decoration-none text-reset footer-links"
                >
                  {t("privacy")}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-12  mb-md-3 mb-sm-0">
            <h6 className="fw-semibold">{t("socials")}</h6>
            <ul className="nav flex-column text-center">
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="p-0  text-decoration-none text-reset footer-links"
                >
                  {t("facebook")}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="p-0  text-decoration-none text-reset footer-links"
                >
                  {t("instagram")}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="p-0  text-decoration-none text-reset footer-links"
                >
                  {t("twitter")}
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 border-top ms-md-4 ms-sm-0">
        <p className="copyright">{t("rights")}</p>
      </div>
    </Fragment>
  );
};

export default Footer;
