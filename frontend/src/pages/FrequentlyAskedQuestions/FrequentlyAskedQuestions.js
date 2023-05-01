import Navbar from "../../components/Navbar/Navbar";
import questions from "./allQuestions";

const FrequentlyAskedQuestions = () => {


  return (
    <>
      <Navbar />
      <>
        <div>
          <div class="container my-5">
            <div class="position-relative p-5 text-center bg-body">
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