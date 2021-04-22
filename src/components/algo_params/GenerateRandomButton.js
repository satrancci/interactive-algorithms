import React from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { assignInputObj, updateTree } from "../../actions";
import inputGeneratorMappings from "../../inputGeneratorMappings";

const GenerateRandomButton = (props) => {

    const onRandomClick = () => {
       console.log(`onRandomClick()`);
       const algorithm = props.state.algorithm;
       console.log(`algorithm: ${algorithm}`);
       const inputGenerator = inputGeneratorMappings[algorithm].f;
       const randomInputObj = inputGenerator();
       props.assignInputObj(randomInputObj);
       if (randomInputObj["treeValues"]) {props.updateTree(randomInputObj["treeValues"])};
    }

    return (
        <Button 
        size="medium"
        primary
        content="Generate random"
        onClick={onRandomClick}
        />
    )
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps, {
  assignInputObj,
  updateTree
})(GenerateRandomButton);
