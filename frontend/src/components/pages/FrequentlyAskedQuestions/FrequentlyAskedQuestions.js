import { useTranslation } from "react-i18next";
import Footer from "../../organisms/Footer/Footer";
import Navbar from "../../organisms/Navbar/Navbar";
import questions from "./getAllQuestions";
import "./FrequentlyAskedQuestions.css";
import getAllQuestions from "./getAllQuestions";
import useEffectTitle from "../../../hooks/useEffectTitle";

const FrequentlyAskedQuestions = () => {
  useEffectTitle("FAQ | Sportify")
  const { t } = useTranslation();
  const questions = getAllQuestions(t);
  return (
    <>
      <Navbar />
      <>
        <div>
          <div className="container">
            <div className="position-relative text-center bg-body">
              <div className="d-flex justify-content-end">
                <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
                  <div className="container-fluid text-center"></div>
                </nav>
              </div>
              <div className="md-4 mx-md-5">
                <h1 className="fw-semibold">
                  {t("frequently_asked_questions")}
                </h1>
                <div
                  className="accordion accordion-flush mt-5"
                  id="accordionFlushExample"
                >
                  {questions.map((q, index) => {
                    return (
                      <div className="accordion-item">
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button collapsed fs-6 fw-semibold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={"#flush-collapse" + index}
                            aria-expanded="false"
                            aria-controls={"flush-collapse" + index}
                          >
                            {q.question}
                          </button>
                        </h5>
                        <div
                          id={"flush-collapse" + index}
                          className="accordion-collapse collapse text-start my-4 fs-6 fw-medium md-4 mx-md-5"
                          data-bs-parent="#accordionFlushExample"
                        >
                          {q.answer}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
        <Footer />
      </>
    </>
  );
};

export default FrequentlyAskedQuestions;
