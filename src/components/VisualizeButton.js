import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { Button } from 'semantic-ui-react';
import algorithmMappings from '../algorithms/algorithmMappings';

const VisualizeButton = (props) => {

  const onVisualize = async () => {
    if (!(props.state["dataStructure"] && props.state["algorithm"] && props.state.values)) { // add another check for params!
      console.log("You must select ds, algorithm and values!");
      return;
    }
    console.log("onVisualize clicked!");
    
    console.log('params received by onVisualized!:', props.state.params);
    const f = algorithmMappings[props.state.algorithm].f;
    // find a way to apply arguments in a sorted order!!!
    //f.apply(null, [props.state.values, Object.values(props.state.params)]); // doesn't work right now
    let allParameters = Object.keys(props.state.params).length > 0 ? Object.fromEntries(props.state.params) : {}; // needs to be improved!!
    allParameters["values"] = props.state.values;
    console.log('OnVisualize() is sending:', allParameters);
    await f(allParameters);
    };


    return (
      <div>
        <Button color="orange" style={{marginTop:"10px", marginBottom: "10px"}} onClick={onVisualize}>Visualize!</Button>
      </div>
    );
};


const mapStateToProps = (state) => {
  return {
    state: state
  };
};


export default connect(mapStateToProps)(VisualizeButton);