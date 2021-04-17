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

  const parentRef   = useRef(null);

  useEffect(() => {
    if(parentRef.current){
        let parentHeight = parentRef.current.offsetHeight;
        let parentWidth  = parentRef.current.offsetWidth;
        console.log(`parentRef. parentWidth: ${parentWidth}, parentHeight: ${parentHeight}`);
    }
          
  });

  return (
    <div ref = { parentRef }>
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
