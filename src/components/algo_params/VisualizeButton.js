import React from 'react';
import { connect } from "react-redux";
import { Button } from 'semantic-ui-react';
import algorithmMappings from '../../algorithmMappings';
import { toggleIsVisualizing, updateStateAfterCancel, deleteVisValues, deleteInputObj} from "../../actions";

import _ from "lodash";

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
    props.deleteInputObj();
    if ((!_.isEmpty(props.state.graphValues.graph)) || props.state.treeValues.root !== null) {
      props.deleteVisValues(); // so that users could add/modify/delete the same tree/graph after first visualization
    }    
  }

    return (
        <Button size="small" disabled={Boolean(Number(props.state.isVisualizing)) || props.disabled} color="orange" style={{marginLeft: "auto"}} onClick={onVisualize}>Visualize!</Button>
    );
};


const mapStateToProps = (state) => {
  return {
    state: state
  };
};


export default connect(mapStateToProps, {
  toggleIsVisualizing,
  updateStateAfterCancel,
  deleteVisValues,
  deleteInputObj
})(VisualizeButton);