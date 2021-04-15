import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react';

const SingleInput = (props) => {

  const [valToAdd, setValToAdd] = useState("");

  const onAddValue = new_val => setValToAdd(new_val);

  const onAddSubmit = () => {
    // need to add validation!
    if (valToAdd) {
      props.onSingleInputSubmit(props.inputName, valToAdd);
      //setValToAdd("");
    }
  };

    return (
      <div style={{display: "inline-block", marginRight: "5px", marginBottom: "10px"}}>
        <Input
          label={`${props.inputName}: `}
          id={props.inputName}
          type="text"
          value={valToAdd}
          onChange={(e) => onAddValue(e.target.value)}
        />
        <Button primary onClick={onAddSubmit}>Add</Button>
      </div>
    );
};


export default SingleInput;