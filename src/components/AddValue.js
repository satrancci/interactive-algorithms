import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { Input, Button } from 'semantic-ui-react';
import { addValue } from '../actions';

const AddValue = (props) => {

  const [valToAdd, setValToAdd] = useState("");

  const onAddValue = (new_val) => {
    console.log("value to be added:", new_val);
    setValToAdd(new_val);
  };

  const onAddSubmit = () => {
    // need to add validation!
    if (valToAdd) {
      props.addValue(valToAdd);
      setValToAdd("");
      console.log("onAdd submitted!");
    }
  };


    return (
      <div>
        <Input
          id="add-value"
          type="text"
          value={valToAdd}
          onChange={(e) => onAddValue(e.target.value)}
        />
        <Button primary onClick={onAddSubmit}>Add Value</Button>
      </div>
    );
};

const mapStateToProps = (state) => {
  return {
    values: state.values
  };
};


export default connect(mapStateToProps, {
  addValue
})(AddValue);
