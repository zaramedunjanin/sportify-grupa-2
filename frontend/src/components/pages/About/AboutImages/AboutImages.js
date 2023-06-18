import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";

import styles from "../AboutImages/AboutImages.module.scss";

import ena_isen from "../../../../assets/images/ena_isen.jpg";
import zara_medunjanin from "../../../../assets/images/zara_medunjanin.jpg";
import almir_handabaka from "../../../../assets/images/almir_handabaka.jpg";
import tarik_ajanovic from "../../../../assets/images/tarik_ajanovic.jpg";
import emir_babacic from "../../../../assets/images/emir_babacic.jpg";

export const AboutImages = () => {
  const imageList = [
    {
      src: almir_handabaka,
      alt: "Almir Handabaka",
      description: "Almir Handabaka",
    },
    {
      src: emir_babacic,
      alt: "Emir Babacic",
      description: "Emir Babačić",
    },
    {
      src: ena_isen,
      alt: "Ena Isen",
      description: "Ena Isen",
    },
    {
      src: tarik_ajanovic,
      alt: "Tarik Ajanovic",
      description: "Tarik Ajanović",
    },
    {
      src: zara_medunjanin,
      alt: "Zara Medunjanin",
      description: "Zara Medunjanin",
    },
  ];

  return (
    <Container className={styles.center_row}>
      <Row>
        {imageList.map((image, index) => (
          <Col key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className={styles.button_image}
            />
            <h4 className={styles.center_paragraf}>{image.description}</h4>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
