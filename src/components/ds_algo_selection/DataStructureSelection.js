import React from "react";
import { connect } from "react-redux";
import { Dropdown } from "semantic-ui-react";

import { updateDataStructure } from '../../actions';
import dataStructureOptions from '../../dataStructureOptions';
import algorithmMappings from '../../algorithmMappings';


const DataStructureSelection = (props) => {

  let options = props.algorithm ? algorithmMappings[props.algorithm].tags : dataStructureOptions;
  options = options.map(elem => Object({key:elem, text:elem, value:elem}));
 
  const handleOnChange = (e, data) => {
    props.updateDataStructure(data.value);
  };

  return (
    <div style={{display: "inline-block", width: "48%",  margin: "10px 1% 10px 1%"}}>
        <Dropdown
          placeholder='Select Data Structure'
          text={props.dataStructure}
          onChange={handleOnChange}
          fluid
          disabled={props.disabled}
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
    dataStructure: state.dataStructure,
    algorithm: state.algorithm
  };
};


export default connect(mapStateToProps, {
  updateDataStructure
})(DataStructureSelection);