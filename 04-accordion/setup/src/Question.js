import React, { useState } from 'react';
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'

const Question = ({question}) => {
  const {id,title,info}=question;
  const [answer,setAnswer]=useState(false);

  return <div>
    <header>
      <h4>{title}</h4>
      <button className="btn" onClick={()=>setAnswer(!answer)}>
        {answer?<AiOutlineMinus/>:<AiOutlinePlus/>}
        </button>
    </header>
      {answer && <p>{info}</p>}
  </div>
};

export default Question;