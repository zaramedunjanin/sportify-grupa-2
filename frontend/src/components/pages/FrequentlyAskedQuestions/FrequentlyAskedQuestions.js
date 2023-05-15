import Navbar from "../../organisms/Navbar/Navbar";
import questions from "./allQuestions";
import "./FrequentlyAskedQuestions.css";

const FrequentlyAskedQuestions = () => {
  return (
    <>
      <Navbar />
      <>
        <div>
          <div className="container">
            <div className="position-relative text-center bg-body">
              <div className="d-flex justify-content-end" >
                <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
                  <div className="container-fluid text-center">
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav fw-medium me-2">
                        <li className="nav-item nav-link-size">
                          <a className="nav-link active" aria-current="page" href="/">About us</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active nav-link-size" href="/">Become a partner</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active nav-link-size text-orange" href="/">FAQ</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="md-4 mx-md-5">
                <h1 className="fw-semibold">Frequently Asked Questions</h1>
                <div className="accordion accordion-flush mt-5" id="accordionFlushExample">
                  {
                    questions.map((q, index) => {
                      return <div className="accordion-item">
                        <h5 className="accordion-header">
                          <button className="accordion-button collapsed fs-6 fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse" + index} aria-expanded="false" aria-controls={"flush-collapse" + index}>
                            {q.question}
                          </button>
                        </h5>
                        <div id={"flush-collapse" + index} className="accordion-collapse collapse text-start my-4 fs-6 fw-medium md-4 mx-md-5" data-bs-parent="#accordionFlushExample">
                          {q.answer}
                        </div>
                      </div>
                    })
                  }


                </div>
              </div>
            </div>
          </div>
        </div>
      </>

    </>
  )
}

export default FrequentlyAskedQuestions;