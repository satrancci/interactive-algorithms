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