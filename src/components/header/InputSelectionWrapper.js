import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import VisualizationSpeed from "../algo_params/VisualizationSpeed";
import InputParams from "../algo_params/InputParams";
import DebuggingState from "../debugging/DebuggingState";

const InputSelectionWrapper = (props) => {

  const elemRef = useRef(null);

  useEffect(() => {
    if(elemRef.current){
        let elemHeight = elemRef.current.offsetHeight;
        let elemWidth  = elemRef.current.offsetWidth;
        props.callback({width: elemWidth, height: elemHeight});
    }
          
  }, [elemRef, props.state.algorithm, props.state.dataStructure, props.state.inputObj, props.resize]);

  return (
    <div id="input-selection-wrapper" style={{boxSizing: "border-box", backgroundColor: "#72ce9b", padding: "0%"}} ref = {elemRef}>

      {props.state.algorithm && <InputParams/>}
      
      {props.state.algorithm && (!_.isEmpty(props.state.inputObj)) && <VisualizationSpeed/>}

      {/*<DebuggingState />*/}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(InputSelectionWrapper);
