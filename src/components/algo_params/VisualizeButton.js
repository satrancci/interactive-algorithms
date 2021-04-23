import React from 'react';
import { connect } from "react-redux";
import { Button } from 'semantic-ui-react';
import algorithmMappings from '../../algorithmMappings';
import { toggleIsVisualizing } from "../../actions";

const VisualizeButton = (props) => {

  const onVisualize = async () => {
    if (!(props.state["dataStructure"] && props.state["algorithm"])) {
      console.log("You must select ds and algorithm");
      return;
    }
    console.log("onVisualize clicked!");
    
    const f = algorithmMappings[props.state.algorithm].f;
    props.toggleIsVisualizing(1);
    console.log(`IS VISUALIZING BEFORE: ${props.state.isVisualizing}`);
    await f();
    props.toggleIsVisualizing(0);
    console.log(`IS VISUALIZING AFTER: ${props.state.isVisualizing}`);
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


export default connect(mapStateToProps, {
  toggleIsVisualizing
})(VisualizeButton);