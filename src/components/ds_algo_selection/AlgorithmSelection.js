import React from "react";
import { connect } from "react-redux";
import { Dropdown } from "semantic-ui-react";

import { updateAlgorithm, updateDataStructure, updateStateAfterCancel } from '../../actions';
import algorithmMappings from '../../algorithmMappings';


const AlgorithmSelection = (props) => {

  const algorithms = Object.keys(algorithmMappings);
  const options = algorithms.sort().map(x => Object({key:x, text:x, value:x}));

  const handleOnChange = (e, data) => {
    const newDataStructure = algorithmMappings[data.value].tags[0];
    props.updateAlgorithm(data.value);
    props.updateDataStructure(newDataStructure);
    props.updateStateAfterCancel();
  }


  return (
    <div style={{}}>
        <Dropdown
          disabled={props.isVisualizing ? true : false}
          placeholder='Select Algorithm'
          text={props.algorithm}
          onChange={handleOnChange}
          fluid
          selection
          search
          button
          scrolling
          options={options}
        />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    algorithm: state.algorithm,
    dataStructure: state.dataStructure,
    isVisualizing: state.isVisualizing
  };
};


export default connect(mapStateToProps, {
  updateAlgorithm,
  updateDataStructure,
  updateStateAfterCancel
})(AlgorithmSelection);
