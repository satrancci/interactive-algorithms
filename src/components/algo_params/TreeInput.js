import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateTree, assignInputObj, deleteInputObj } from "../../actions";
import { Button, Form } from "semantic-ui-react";
import SingleInput from "./SingleInput";

import _ from "lodash";

const treeInputOperations = {
  Add: ["node-value", "parent-id"],
  Delete: ["node-id"],
  Modify: ["node-value", "node-id"],
};

const TreeInput = (props) => {

  const [optionSelected, setOptionSelected] = useState("Add");

  const [singleInputObj, setSingleInputObj] = useState({});

  const [leftOrRightChild, setLeftOrRightChild] = useState(false); // true refers to left child
  const onToggleChange = (e) => setLeftOrRightChild(!leftOrRightChild);

  const onAddClick = () => setOptionSelected("Add");
  const onDeleteClick = () => props.treeValues.root !== null ? setOptionSelected("Delete") : null;
  const onModifyClick = () => props.treeValues.root !== null ? setOptionSelected("Modify") : null;


  const onSingleInputSubmit = (inputName, value) => {
      setSingleInputObj((singleInputObj) => ({
      ...singleInputObj,
      [inputName]: value,
    }));
  };

  useEffect(() => {
      const objLength = Object.keys(singleInputObj).length;
      const optionsLength = treeInputOperations[optionSelected].length;
      if ( (objLength === optionsLength) || (props.treeValues.root === null && objLength === optionsLength-1 )) {
          switch (optionSelected) {
              case "Add":
                  onAddSubmit(singleInputObj);
                  setSingleInputObj({});
                  break;
              case "Delete":
                  onDeleteSubmit(singleInputObj);
                  setSingleInputObj({});
                  if (props.treeValues.tree === null) {setOptionSelected("Add")};
                  break;
              case "Modify":
                  onModifySubmit(singleInputObj);
                  setSingleInputObj({});
                  break;
              default:
                  return null;
          }
      }        
  }, [singleInputObj])

  // add validation to all later
  const onAddSubmit = (obj) => {
    const value = obj["node-value"];
    const parentID = obj["parent-id"];
    if (value) {
      let newTree = _.cloneDeep(props.treeValues);
      const parID = newTree.root === null ? null : parentID;
      const leftChild = leftOrRightChild === true;
      newTree.insert(parID, value, leftChild);
      props.assignInputObj({"treeValues": newTree});
      props.updateTree(newTree);
      setLeftOrRightChild(!leftOrRightChild);
    }
  };

  const onDeleteSubmit = (obj) => {
    const nodeID = obj["node-id"];
    if (nodeID) {
      let newTree = _.cloneDeep(props.treeValues);
      newTree.delete(nodeID);
      if (newTree.root === null) {
          props.deleteInputObj();
          setOptionSelected("Add");
      } else {
          props.assignInputObj({"treeValues": newTree});
      }
      props.updateTree(newTree);
    } else {
      console.log("You need to specify nodeID that you want to delete");
    }
  };


  const onModifySubmit = (obj) => {
    const value = obj["node-value"];
    const nodeID = obj["node-id"];
    if (value && nodeID) {
      let newTree = _.cloneDeep(props.treeValues);
      newTree.modify(nodeID, value);
      props.assignInputObj({"treeValues": newTree});
      props.updateTree(newTree);
    } else {
      console.log("You need to provide both value and nodeID");
    }
  };

  return (
    <div>
      <div style={{ margin: "10px 10px 10px 10px" }}>
        <Button.Group>
          <Button
            color={optionSelected === "Add" ? "teal" : null}
            active={optionSelected === "Add"}
            disabled={!optionSelected === "Add"}
            onClick={onAddClick}
          >
            Add
          </Button>
          <Button.Or />
          <Button
            color={optionSelected === "Delete" ? "teal" : null}
            active={optionSelected === "Delete"}
            disabled={!optionSelected === "Delete"}
            onClick={onDeleteClick}
          >
            Delete
          </Button>
          <Button.Or />
          <Button
            color={optionSelected === "Modify" ? "teal" : null}
            active={optionSelected === "Modify"}
            disabled={!optionSelected === "Modify"}
            onClick={onModifyClick}
          >
            Modify
          </Button>
        </Button.Group>
      </div>

      <div style={{ margin: "10px 10px 10px 10px" }}>
        {treeInputOperations[optionSelected].map((labelName) => {
          return (
            <SingleInput
              key={labelName}
              inputName={labelName}
              hidden={optionSelected === "Add" && props.treeValues.root === null && labelName === "parent-id"}
              onSingleInputSubmit={onSingleInputSubmit}
              buttonText={optionSelected}
              onAddSubmit={onAddSubmit}
            />
          );
        })}
        {optionSelected === "Add" && props.treeValues.root !== null && (
          <Form.Group>
            <label>{`${leftOrRightChild ? "Left" : "Right"}`} Child</label>
            <Form.Radio
              toggle
              checked={leftOrRightChild}
              onClick={onToggleChange}
            />
          </Form.Group>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    treeValues: state.treeValues,
  };
};

export default connect(mapStateToProps, {
  updateTree,
  assignInputObj,
  deleteInputObj
})(TreeInput);
