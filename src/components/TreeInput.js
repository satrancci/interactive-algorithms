import React, { useState } from "react";
import { connect } from "react-redux";
import { Form } from "semantic-ui-react";
import { updateTree } from "../actions";

import _ from "lodash";

const TreeInput = (props) => {
  const [value, setValue] = useState("");
  const [parentID, setParentID] = useState("");
  const [leftOrRightChild, setLeftOrRightChild] = useState(false); // true refers to left child

  const onValueChange = e => setValue(e.target.value);

  const onParentIDChange = e => setParentID(e.target.value);

  const onToggleChange = e => setLeftOrRightChild(!leftOrRightChild);

  const onFormSubmit = () => {
    // need to add validation!
    if (value) {
      let newTree = _.cloneDeep(props.treeValues);
      const parID = newTree.root === null ? null : parentID;
      const leftChild = leftOrRightChild === true;
      newTree.insert(parID, value, leftChild);
      props.updateTree(newTree);
      setValue("");
      //setParentID("");
      setLeftOrRightChild(!leftOrRightChild);
    }
  };

  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          label="node-value"
          placeholder="node value"
          value={value}
          onChange={onValueChange}
        />
        {props.treeValues.root ?
        <Form.Input
          fluid
          label="parent-id"
          placeholder="parent id"
          value={parentID}
          onChange={onParentIDChange}
        />
        : null
        }
      </Form.Group>
      {props.treeValues.root ?
      <Form.Group inline>
        <label>{`${leftOrRightChild ? "Left" : "Right"}`} Child</label>
        <Form.Radio
          toggle
          checked={leftOrRightChild}
          value={leftOrRightChild}
          onClick={onToggleChange}
        />
      </Form.Group>
      : null
        }
      <Form.Button onClick={onFormSubmit}>Submit</Form.Button>
      
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {
    treeValues: state.treeValues,
  };
};

export default connect(mapStateToProps, {
  updateTree,
})(TreeInput);
