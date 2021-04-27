import React, { useState } from 'react';
import { connect } from "react-redux";
import { Input, Button } from 'semantic-ui-react';
import validationMappings from "../../validationMappings";
import  { setErrors, deleteErrors } from "../../actions";

const getPlaceholderValue = (inputName) => {
    switch (inputName) {
        case "arr":
            return "e.g. 1,2,3";
        case "targetSum":
        case "n":
            return "e.g. 5";
        case "str":
        case "str1":
        case "str2":
            return "e.g. abc"
        case "sudokuBoard":
            return "str of size 81, no commas"
        case "freqs":
            return "e.g. a:5,b:2,c:1"
        case "cost":
            return "1"
        default:
            return "";
    }
}



const SingleInput = (props) => {

  const {inputName, algorithm} = props;
  const placeholderValue = getPlaceholderValue(inputName);

  const [valToAdd, setValToAdd] = useState("");

  const onAddValue = newVal => setValToAdd(newVal);

  const onAddSubmit = () => {
    props.deleteErrors();
    if (props.inputDisabled && inputName === "cost") { // a bit ugly, need to find a better way in the future to deal with this exception 
      props.onSingleInputSubmit(inputName, 1);
      return;
    }
    if (props.inputDisabled && inputName === "node-value") { // a bit ugly, need to find a better way in the future to deal with this exception 
      props.onSingleInputSubmit(inputName, "");
      return;
    }

    const validator = validationMappings[algorithm].f;
    const [statusCode, retVal] =  validator(inputName, valToAdd); // [0, values] or [1, errorMsg]
    //console.log(`statusCode: ${statusCode}, retVal: ${JSON.stringify(retVal)}`);
    statusCode === 0 ? props.onSingleInputSubmit(inputName, retVal) : props.setErrors([retVal]);
  };


    if (props.hidden) {return null};

    return (
      <div style={{display: "inline-block"}}>
        <Input
          disabled={props.inputDisabled}
          size="small"
          placeholder={placeholderValue}
          label={`${inputName}: `}
          id={inputName}
          type="text"
          value={valToAdd}
          onChange={(e) => onAddValue(e.target.value)}
        />
        <Button size="small" primary onClick={onAddSubmit}>{props.buttonText || "Submit"}</Button>
      </div>
    );
};


const mapStateToProps = (state) => {
  return {
    errors: state.errors,
  };
};

export default connect(mapStateToProps, {
  setErrors,
  deleteErrors
})(SingleInput);