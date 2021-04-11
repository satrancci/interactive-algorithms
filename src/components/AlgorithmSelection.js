import React from "react";
import { connect } from "react-redux";
import { Dropdown } from "semantic-ui-react";

import { updateAlgorithm, updateDataStructure } from '../actions';
import algorithmMappings from '../algorithmMappings';



const AlgorithmSelection = (props) => {

  const filtered = false ? Object.fromEntries(Object.entries(algorithmMappings).filter(alg => alg[1].tags.includes(props.dataStructure))) : algorithmMappings; // needs to be simplified
  const algorithms = Object.keys(filtered);
  const options = algorithms.map(elem => Object({key:elem, text:elem, value:elem}));


  const handleOnChange = (e, data) => {
    props.updateAlgorithm(data.value);
    if (Object.keys(algorithmMappings[data.value].params).length > 0) {console.log('params required!')};
    if (props.dataStructure && (!(algorithmMappings[data.value].tags.includes(props.dataStructure)))) {
        props.updateDataStructure("");
      }
  };

  return (
    <div className="ui segment">
      <label>Select Algorithm</label>
        <Dropdown
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
    dataStructure: state.dataStructure
  };
};


export default connect(mapStateToProps, {
  updateAlgorithm,
  updateDataStructure
})(AlgorithmSelection);
