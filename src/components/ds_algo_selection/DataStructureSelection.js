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
    <div className="ui segment">
        <label>Select Data Structure</label>
        <Dropdown
          text={props.dataStructure}
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
    dataStructure: state.dataStructure,
    algorithm: state.algorithm
  };
};


export default connect(mapStateToProps, {
  updateDataStructure
})(DataStructureSelection);