import React from 'react';
import { connect } from "react-redux";
import { Button } from 'semantic-ui-react';
import algorithmMappings from '../../algorithmMappings';
import { toggleIsVisualizing, updateStateAfterCancel } from "../../actions";

const VisualizeButton = (props) => {

  const onVisualize = async () => {

    const f = algorithmMappings[props.state.algorithm].f;
    props.toggleIsVisualizing(1);
    try {
      await f();
    } catch (e) {
      console.log(`${props.state.algorithm}() ran into error: ${e}`);
      props.updateStateAfterCancel();
    }
    props.toggleIsVisualizing(0);
  }

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
  toggleIsVisualizing,
  updateStateAfterCancel
})(VisualizeButton);