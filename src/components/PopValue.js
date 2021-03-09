import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { Button } from 'semantic-ui-react';
import { popValue } from '../actions';

const PopValue = (props) => {

    const onPopSubmit = () => {
        props.popValue();
        console.log("onPop submitted!");
    }; 

    return (
      <div>
        <Button primary onClick={onPopSubmit}>Pop Value</Button>
      </div>
    );
};


const mapStateToProps = (state) => {
  return {
    values: state.values
  };
};


export default connect(mapStateToProps, {
  popValue
})(PopValue);