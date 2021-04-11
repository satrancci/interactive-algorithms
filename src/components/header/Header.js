import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import algorithmMappings from "../../algorithmMappings";

import AddValue from "../algo_params/AddValue";
import PopValue from "../algo_params/PopValue";
import TreeInput from "../algo_params/TreeInput";
import VisualizeButton from "../algo_params/VisualizeButton";
import DataStructureSelection from "../ds_algo_selection/DataStructureSelection";
import AlgorithmSelection from "../ds_algo_selection/AlgorithmSelection";
import AdditionalParameters from "../algo_params/AdditionalParams";

import DebuggingState from "../debugging/DebuggingState";

const Header = (props) => {
  const [targetValToAdd, setTargetValToAdd] = useState("");
  const [targetValue, setTargetValue] = useState(null);

  const onAddTargetValue = (new_val) => {
    const parsedVal = parseInt(new_val);
    if (!(parsedVal == new_val)) return;
    console.log("target value to be added:", parsedVal);
    setTargetValToAdd(parsedVal);
  };

  const onTargetValueSubmit = () => {
    if (targetValToAdd) {
      setTargetValue(targetValToAdd);
      console.log("onTargetValue submitted!");
    }
  };

  useEffect(() => {
    if (targetValue) {
      console.log("targetValue selected:", targetValue);
      setTargetValToAdd("");
    }
  }, [targetValue]);

  return (
    <div>
      <AlgorithmSelection />
      {props.state.algorithm &&
      Object.keys(algorithmMappings[props.state.algorithm].params).length >
        0 ? (
        <AdditionalParameters algorithm={props.state.algorithm} />
      ) : null}
      <DataStructureSelection />
      {props.state.dataStructure === "Array" ? <AddValue /> : null}
      {props.state.dataStructure === "Array" ? <PopValue /> : null}
      {props.state.dataStructure === "Tree" ? <TreeInput/> : null}

      <VisualizeButton />

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
