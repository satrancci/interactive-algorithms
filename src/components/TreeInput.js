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

  const onFormAddSubmit = () => {
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


  const onFormPopSubmit = () => {
    // need to add validation!
    if (parentID) {
      let newTree = _.cloneDeep(props.treeValues);
      newTree.delete(parentID);
      props.updateTree(newTree);
      setParentID("");
    } else {
      console.log("You need to specify parentID that you want to delete");
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
          onClick={onToggleChange}
        />
      </Form.Group>
      : null
        }
        <Form.Group inline>
              <Form.Button onClick={onFormAddSubmit}>Add</Form.Button>
              {props.treeValues.root ? <Form.Button onClick={onFormPopSubmit}>Delete</Form.Button> : null}
        </Form.Group>
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
