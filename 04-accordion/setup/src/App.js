import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions,setQuestion]=useState(data);
  return <main>
    <div className="container">
      <h3>Questions And Answers About Login</h3>
      <section className="info">
        {questions.map((question)=>{
          return <div className="question">
            <SingleQuestion question={question} key={question.id}/>
          </div>
        })}
      </section>
    </div>
  </main>
}

export default App;
