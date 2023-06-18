import { useTranslation } from "react-i18next";
import i18next from "i18next";

const getAllQuestions = (t) => {
  return [
    {
      question: t("question_1"),
      answer: t("answer_1"),
    },
    {
      question: t("question_2"),
      answer: t("answer_2"),
    },
    {
      question: t("question_3"),
      answer: t("answer_3"),
    },
    {
      question: t("question_4"),
      answer: t("answer_4"),
    },
    {
      question: t("question_5"),
      answer: t("answer_5"),
    },
    {
      question: t("question_6"),
      answer: t("answer_6"),
    },
  ];
};

export default getAllQuestions;
