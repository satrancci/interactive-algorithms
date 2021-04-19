import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react';

const getPlaceholderValue = (inputName) => {
    switch (inputName) {
        case "arr":
            return "e.g. 1,2,3";
        case "targetSum":
        case "n":
            return "e.g. 5";
        case "str1":
        case "str2":
            return "e.g. abc"
        case "sudokuBoard":
            return "str of size 81, no commas"
        case "freqs":
          return "e.g. a:5,b:2,c:1"
        default:
            return "";
    }
}


const SingleInput = (props) => {
  
  const inputName = props.inputName;
  const placeholderValue = getPlaceholderValue(inputName);

  const [valToAdd, setValToAdd] = useState("");

  const onAddValue = newVal => setValToAdd(newVal);

  const onAddSubmit = () => {
    // need to add robust and modular validation, these checks below are just temporary
    if (valToAdd) {
        if (inputName === "arr") {
            const arr = valToAdd.split(",");
            props.onSingleInputSubmit(inputName, arr);
        } else if (inputName === "sudokuBoard"){
            const arr2d = valToAdd.split("").reduce((rows, key, index) => (index % 9 == 0 ? rows.push([key]) : rows[rows.length-1].push(key)) && rows, []); // one-liner from https://stackoverflow.com/questions/4492385/how-to-convert-simple-array-into-two-dimensional-array-matrix-with-javascript
            props.onSingleInputSubmit(inputName, arr2d);
        } else if (inputName === "n") {
          props.onSingleInputSubmit(inputName, parseInt(valToAdd));
        } else {
            props.onSingleInputSubmit(inputName, valToAdd);
        }
    //setValToAdd("");
    }
  };
    
    if (props.hidden) {return null};

    return (
      <div style={{display: "inline-block"}}>
        <Input
          size="small"
          placeholder={placeholderValue}
          label={`${inputName}: `}
          id={inputName}
          type="text"
          value={valToAdd}
          onChange={(e) => onAddValue(e.target.value)}
        />
        <Button size="small" primary onClick={onAddSubmit}>{props.buttonText || "Add"}</Button>
      </div>
    );
};


export default SingleInput;