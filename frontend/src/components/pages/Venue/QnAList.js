import React, { useState } from "react";
import { Accordion } from "react-bootstrap";

import styles from "./QnAList.module.css";

const QnAList = (props) => {
  const questionList = props.questionList;
  return (
    <>
      <h4>Frequently Asked Questions</h4>

      <Accordion>
        {questionList.map((question) => (
          <Accordion.Item eventKey={`${question.id}`}>
            <Accordion.Header className={styles.custom_header}>
              <h6>
                {question.pinned && (
                  <span className="material-symbols-outlined">push_pin</span>
                )}
                {"  " + question.text}
              </h6>
            </Accordion.Header>
            <Accordion.Body>{question.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default QnAList;
