import React from 'react';
import { connect } from "react-redux";
import { Button } from 'semantic-ui-react';
import algorithmMappings from '../../algorithmMappings';

const VisualizeButton = (props) => {

  const onVisualize = async () => {
    if (!(props.state["dataStructure"] && props.state["algorithm"])) {
      console.log("You must select ds and algorithm");
      return;
    }
    console.log("onVisualize clicked!");
    
    const f = algorithmMappings[props.state.algorithm].f;
    await f();
    };


    return (
        <Button size="small" disabled={props.disabled} color="orange" style={{marginLeft: "auto"}} onClick={onVisualize}>Visualize!</Button>
    );
};


const mapStateToProps = (state) => {
  return {
    state: state
  };
};


export default connect(mapStateToProps)(VisualizeButton);