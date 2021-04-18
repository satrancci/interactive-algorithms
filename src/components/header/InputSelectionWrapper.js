import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import VisualizeButton from "../algo_params/VisualizeButton";
import DataStructureSelection from "../ds_algo_selection/DataStructureSelection";
import AlgorithmSelection from "../ds_algo_selection/AlgorithmSelection";
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
      <AlgorithmSelection />

      {props.state.algorithm ? <DataStructureSelection disabled={false}/> : <DataStructureSelection disabled={true}/>}

      {props.state.algorithm && props.state.dataStructure && <InputParams/>}
      
      {props.state.algorithm && props.state.dataStructure && (!_.isEmpty(props.state.inputObj)) && <VisualizationSpeed/>}

      {props.state.algorithm && props.state.dataStructure && (!_.isEmpty(props.state.inputObj)) && <VisualizeButton />}

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
