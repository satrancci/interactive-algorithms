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
        default:
            return "";
    }
}


const SingleInput = (props) => {
  
  const inputName = props.inputName;
  const placeholderValue = getPlaceholderValue(inputName);

  const [valToAdd, setValToAdd] = useState("");

  const onAddValue = new_val => setValToAdd(new_val);

  const onAddSubmit = () => {
    // need to add validation!
    if (valToAdd) {
        if (inputName === "arr") {
            // just for now
            const arr = valToAdd.split(",");
            props.onSingleInputSubmit(inputName, arr);
        } else {
            props.onSingleInputSubmit(inputName, valToAdd);
        }
    //setValToAdd("");
    }
  };

    return (
      <div style={{display: "inline-block", marginRight: "5px", marginBottom: "10px"}}>
        <Input
          placeholder={placeholderValue}
          label={`${inputName}: `}
          id={inputName}
          type="text"
          value={valToAdd}
          onChange={(e) => onAddValue(e.target.value)}
        />
        <Button primary onClick={onAddSubmit}>Add</Button>
      </div>
    );
};


export default SingleInput;