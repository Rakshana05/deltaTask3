import React from "react";

// props with question name, Options, Answer
function Options(props) {
  const {options, selectedOption, onOptionChange} = props
  return (
    <div style={{ margin: "0" }}>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            name="option"
            value={option}
            checked={selectedOption === option}
            onChange={onOptionChange}
          />
          <label>{option}</label>
        </div>
    ))}
    </div>
  );
}
export default Options;