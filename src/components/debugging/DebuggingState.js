import React from 'react';
import { connect } from "react-redux";

const DebuggingState = (props) => {
    
    return (
      <div style={{ borderStyle: "dashed", padding:"20px", margin: "10px"}}>
        <div>
          dataStructure: {props.state.dataStructure}
        </div>
        <div>
          values:[{props.state.values.map(val => `${val}  `)}]
        </div>
        <div>
          treeValuesRoot: {JSON.stringify(props.state.treeValues.root)}
        </div>
        <div>
          nodeID: {props.state.nodeID}
        </div>
        <div>
          params:{JSON.stringify(props.state.params)}
        </div>
        <div>
          algorithm: {props.state.algorithm}
        </div>
        <div>
          indices: {JSON.stringify(props.state.indices)}
        </div>
        <div>
          message: {props.state.message}
        </div>
        <div>
          speed: {props.state.visualizationSpeed}
        </div>
      </div>
    );
};

const mapStateToProps = (state) => {
  return {
    state: state
  };
};


export default connect(mapStateToProps)(DebuggingState);