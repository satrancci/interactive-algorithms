import React from "react";
import { connect } from "react-redux";
import InputParams from "./InputParams";
import DebuggingState from "../debugging/DebuggingState";

const InputSelectionWrapper = (props) => {

  return (
    <div id="input-selection-wrapper" style={{boxSizing: "border-box", backgroundColor: "#F4F4F4", padding: "0%", margin: "0%"}}>
      {props.state.algorithm && <InputParams/>}
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
