import React from "react";
import { connect } from "react-redux";
import { Dropdown } from "semantic-ui-react";

import { updateAlgorithm, updateDataStructure, updateStateAfterCancel } from '../../actions';
import algorithmMappings from '../../algorithmMappings';

// sort by the length of algorithm name so that all options are fully visible in the dropdown
const compare = (a, b) => {
  if (a["key"].length > b["key"].length) {return -1;}
  if (a["key"].length < b["key"].length) {return 1;}
  return 0;
}

const AlgorithmSelection = (props) => {

  const algorithms = Object.keys(algorithmMappings);
  const options = algorithms.map(elem => Object({key:elem, text:elem, value:elem})).sort((a,b) => compare(a,b));

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
