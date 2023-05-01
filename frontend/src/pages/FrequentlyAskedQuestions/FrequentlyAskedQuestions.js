import Navbar from "../../components/Navbar/Navbar";
import questions from "./allQuestions";
import "./FrequentlyAskedQuestions.css";

const FrequentlyAskedQuestions = () => {
  return (
    <>
      <Navbar />
      <>
        <div>
          <div class="container my-5">
            <div class="position-relative text-center bg-body">
              <div className="d-flex justify-content-end" >
                <nav class="navbar navbar-expand-lg bg-body-tertiary mb-3">
                  <div class="container-fluid text-center">
                    <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav fw-medium me-2">
                        <li class="nav-item nav-link-size">
                          <a class="nav-link active" aria-current="page" href="/">About us</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link active nav-link-size" href="/">Become a partner</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link active nav-link-size text-orange" href="/">FAQ</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
              <div >
                <h1 class="fw-semibold">Frequently Asked Questions</h1>
                <div class="accordion accordion-flush mt-5" id="accordionFlushExample">
                  {
                    questions.map((q, index) => {
                      return <div class="accordion-item">
                        <h5 class="accordion-header">
                          <button class="accordion-button collapsed fs-6 fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse" + index} aria-expanded="false" aria-controls={"flush-collapse" + index}>
                            {q.question}
                          </button>
                        </h5>
                        <div id={"flush-collapse" + index} class="accordion-collapse collapse text-start my-4 fs-6 fw-medium" data-bs-parent="#accordionFlushExample">
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