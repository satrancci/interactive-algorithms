import React from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { toggleIsVisualizing, toggleCancelClicked } from "../../actions";

const CancelVisualizationButton = (props) => {

    const onCancelClick = () => {
       console.log(`onCancelClick()`);
       props.toggleIsVisualizing(0);
       props.toggleCancelClicked(1);
    }

    return (
        <Button
        size="small"
        onClick={onCancelClick}
        >
            Cancel
        </Button>
    )
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps, {
    toggleIsVisualizing,
    toggleCancelClicked
})(CancelVisualizationButton);