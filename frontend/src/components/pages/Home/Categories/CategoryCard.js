import React from "react";
import "./CategoryCard.scss";
import Row from "react-bootstrap/Row";

const CategoryCard = (props) => {
  return (
    <a href={props.link}>
      <button
        type={props.type}
        className="category-card background-orange"
        onClick={props.onClick}
      >
        <Row>
          <span className={"material-symbols-outlined"}>{props.icon}</span>
        </Row>
        <Row className={"justify-content-center"}>{props.text}</Row>
      </button>
    </a>
  );
};

export default CategoryCard;
