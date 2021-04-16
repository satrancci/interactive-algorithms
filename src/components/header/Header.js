import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import VisualizeButton from "../algo_params/VisualizeButton";
import DataStructureSelection from "../ds_algo_selection/DataStructureSelection";
import AlgorithmSelection from "../ds_algo_selection/AlgorithmSelection";
import VisualizationSpeed from "../algo_params/VisualizationSpeed";
import InputParams from "../algo_params/InputParams";
import DebuggingState from "../debugging/DebuggingState";

const Header = (props) => {

  return (
    <div>
      <AlgorithmSelection />

      {props.state.algorithm ? <DataStructureSelection disabled={false}/> : <DataStructureSelection disabled={true}/>}

      {props.state.algorithm && props.state.dataStructure && <InputParams/>}
      
      {props.state.algorithm && props.state.dataStructure && (!_.isEmpty(props.state.inputObj)) && <VisualizationSpeed/>}

      {props.state.algorithm && props.state.dataStructure && (!_.isEmpty(props.state.inputObj)) && <VisualizeButton />}

      <DebuggingState />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(Header);
