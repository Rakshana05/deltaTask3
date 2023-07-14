import React from "react";
import { useState } from "react";
import Options from "./Option";

// props with question name, Options, Answer
function Question(props) {
  const {question, selectedOption, onOptionChange, onSubmit} = props
  const options = [question.a,question.b,question.c,question.d]
  return (
    <div className="container">
      <h2 className="qn">{question.qn}</h2>
      <form onSubmit={onSubmit}>
      <Options 
        options={options}
        selectedOption={selectedOption}
        onOptionChange={onOptionChange}
      />
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Question;