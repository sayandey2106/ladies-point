import React, { useState } from "react";
import Loader_cont from "../../containers/loader/loader_cont";
export default function AddQuestionModal(props) {
  const { add_quiz , add_question , currQuiz, loader} = props.data;

  const [question, setQuestion] = useState("");
  const [A, setA] = useState("");
  const [B, setB] = useState("");
  const [C, setC] = useState("");
  const [D, setD] = useState("");
  const [correct, setCorrect] = useState("");
  const [marks, setMarks] = useState("");
  const [id, setquiz_id] = useState(currQuiz.current_quiz)

  let newQuestion ={question,A,B,C,D,correct,marks}

  // let  newQuiz ={name,date,time,subject,marks,duration}

  console.log();
  return (
    <div class="modal-body">
      {/* {
      loader.openLoader===true? <Loader_cont/>:<></>} */}
      <form>
        <div class="form-group">
          <label for="recipient-name" class="col-form-label">
            Question
          </label>
          <textarea
            type="text"
            class="form-control"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="recipient-name" class="col-form-label">
            Option A
          </label>
          <input
            type="text"
            class="form-control"
            value={A}
            onChange={(e) => setA(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="recipient-name" class="col-form-label">
            Option B
          </label>
          <input
            type="text"
            class="form-control"
            value={B}
            onChange={(e) => setB(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="recipient-name" class="col-form-label">
            Option C
          </label>
          <input
            type="text"
            class="form-control"
            value={C}
            onChange={(e) => setC(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="recipient-name" class="col-form-label">
            Option D
          </label>
          <input
            type="text"
            class="form-control"
            value={D}
            onChange={(e) => setD(e.target.value)}
          />
        </div>
        <label for="recipient-name" class="col-form-label">
          Choose the correct Ans
        </label>
        <div className="d-flex">
          <div class="form-check mx-3 my-1">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onChange={()=>{
                setCorrect("A");
            
              }}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              A
            </label>
          </div>
          <div class="form-check mx-3 my-1">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              onChange={() => {
                setCorrect("B");
               
              }}
             
            />
            <label class="form-check-label" for="flexRadioDefault2">
              B
            </label>
          </div>
          <div class="form-check mx-3 my-1">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onChange={() => {
                setCorrect("C");
                
              }}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              C
            </label>
          </div>
          <div class="form-check mx-3 my-1">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              onChange={() => {
                setCorrect("D");
              
              }}
            />
            <label class="form-check-label" for="flexRadioDefault2">
              D
            </label>
          </div>
        </div>
        <div class="form-group">
          <label for="recipient-name" class="col-form-label">
            Marks
          </label>
          <input
            type="number"
            class="form-control"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
          />
        </div>

        <button
          className="btn btn-success my-2"
          type="button"
          onClick={() => {
            add_question(id, newQuestion)
            setA("");
            setB("");
            setC("");
            setD("");
            setQuestion("");
            setMarks("");
            
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}