import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateGraph, assignInputObj, deleteInputObj, setErrors } from "../../actions";
import { Button, Form } from "semantic-ui-react";
import SingleInput from "./SingleInput";

import _ from "lodash";

const hideEdgeCost = ["bfs", "dfs"];

const graphInputOperations = {
  AddNode: ["node-value"],
  DeleteNode: ["node-id"],
  AddEdge: ["nodeID1", "nodeID2", "cost"],
  DeleteEdge: ["nodeID1", "nodeID2"],
  ModifyEdgeCost: ["nodeID1", "nodeID2", "cost"]
};

const GraphInput = (props) => {

  const [optionSelected, setOptionSelected] = useState("AddNode");

  const [singleInputObj, setSingleInputObj] = useState({});

  const onAddNodeClick = () => setOptionSelected("AddNode");
  const onDeleteNodeClick = () => !_.isEmpty(props.graphValues.graph) ? setOptionSelected("DeleteNode") : null;
  const onAddEdgeClick = () => !_.isEmpty(props.graphValues.graph) ? setOptionSelected("AddEdge") : null;
  const onDeleteEdgeClick = () => !_.isEmpty(props.graphValues.graph) ? setOptionSelected("DeleteEdge") : null;
  const onModifyEdgeCostClick = () => !_.isEmpty(props.graphValues.graph) ? setOptionSelected("ModifyEdgeCost") : null;

  const onSingleInputSubmit = (inputName, value) => {
    setSingleInputObj((singleInputObj) => ({
      ...singleInputObj,
      [inputName]: value,
    }));
  };

  useEffect(() => {
    const objLength = Object.keys(singleInputObj).length;
    const optionsLength = graphInputOperations[optionSelected].length;
    if (
      objLength !== 0 && objLength >= optionsLength ) {
      switch (optionSelected) {
        case "AddNode":
          onAddNodeSubmit(singleInputObj);
          setSingleInputObj({});
          break;
        case "DeleteNode":
          onDeleteNodeSubmit(singleInputObj);
          setSingleInputObj({});
          if (_.isEmpty(props.graphValues.graph)) {
            setOptionSelected("AddNode");
          }
          break;
        case "AddEdge":
          onAddEdgeSubmit(singleInputObj);
          setSingleInputObj({});
          break;
        case "DeleteEdge":
          onDeleteEdgeSubmit(singleInputObj);
          setSingleInputObj({});
          break;
        case "ModifyEdgeCost":
          onModifyEdgeCostSubmit(singleInputObj);
          setSingleInputObj({});
          break;
        default:
          return null;
      }
    }
  }, [singleInputObj]);

  const onAddNodeSubmit = (obj) => {
    const value = obj["node-value"];
    let newGraph = _.cloneDeep(props.graphValues);

    if (newGraph.length === newGraph.maxLength) { 
      props.setErrors([`Could not insert. The graph cannot have more than ${newGraph.maxLength} nodes.`]);
      return;
    }
    newGraph.addNode(value);
    props.assignInputObj(Object.assign({},_.cloneDeep(props.inputObj), { graphValues: newGraph }));
    props.updateGraph(newGraph);
  };

  const onDeleteNodeSubmit = (obj) => {
    const nodeID = obj["node-id"];
    let newGraph = _.cloneDeep(props.graphValues);
    newGraph.deleteNode(nodeID);
    if (_.isEmpty(newGraph.graph)) {
      props.deleteInputObj();
      setOptionSelected("AddNode");
    } else {
      props.assignInputObj(Object.assign({},_.cloneDeep(props.inputObj), { graphValues: newGraph }));
    }
    props.updateGraph(newGraph);
  };

  const onAddEdgeSubmit = (obj) => {
    const nodeID1 = obj["nodeID1"];
    const nodeID2 = obj["nodeID2"];
    const cost = obj["cost"];
    let newGraph = _.cloneDeep(props.graphValues);

    const [statusCode, message] = newGraph.edgeExists(nodeID1, nodeID2);
    if (statusCode === 0) { // 0 if edge exists
      props.setErrors([message]);
      return;
    }

    newGraph.addEdge(nodeID1, nodeID2, cost);
    props.assignInputObj(Object.assign({},_.cloneDeep(props.inputObj), { graphValues: newGraph }));
    props.updateGraph(newGraph);
  };

  const onDeleteEdgeSubmit = (obj) => {
    const nodeID1 = obj["nodeID1"];
    const nodeID2 = obj["nodeID2"];
    let newGraph = _.cloneDeep(props.graphValues);

    const [statusCode, message] = newGraph.edgeExists(nodeID1, nodeID2);
    if (statusCode === 1) { // 1 if edge does not exist
      props.setErrors([message]);
      return;
    }

    newGraph.deleteEdge(nodeID1, nodeID2);
    props.assignInputObj(Object.assign({},_.cloneDeep(props.inputObj), { graphValues: newGraph }));
    props.updateGraph(newGraph);
  };

  const onModifyEdgeCostSubmit = (obj) => {
    const nodeID1 = obj["nodeID1"];
    const nodeID2 = obj["nodeID2"];
    const newCost = obj["cost"];
    let newGraph = _.cloneDeep(props.graphValues);

    const [statusCode, message] = newGraph.edgeExists(nodeID1, nodeID2);
    if (statusCode === 1) { // 1 if edge does not exist
      props.setErrors([message]);
      return;
    }
    
    newGraph.modifyEdgeCost(nodeID1, nodeID2, newCost);
    props.assignInputObj(Object.assign({},_.cloneDeep(props.inputObj), { graphValues: newGraph }));
    props.updateGraph(newGraph);
  };

  return (
    <div>
      <div>
        <Button.Group>
          <Button
            size="small"
            color={optionSelected === "AddNode" ? "teal" : null}
            active={optionSelected === "AddNode"}
            disabled={!optionSelected === "AddNode"}
            onClick={onAddNodeClick}
          >
            +Node
          </Button>
          <Button.Or />
          <Button
            size="small"
            color={optionSelected === "DeleteNode" ? "teal" : null}
            active={optionSelected === "DeleteNode"}
            disabled={!optionSelected === "DeleteNode"}
            onClick={onDeleteNodeClick}
          >
            -Node
          </Button>
          <Button.Or />
          <Button
            size="small"
            color={optionSelected === "AddEdge" ? "teal" : null}
            active={optionSelected === "AddEdge"}
            disabled={props.graphValues.length < 2}
            onClick={onAddEdgeClick}
          >
            +Edge
          </Button>
          <Button.Or />
          <Button
            size="small"
            color={optionSelected === "DeleteEdge" ? "teal" : null}
            active={optionSelected === "DeleteEdge"}
            disabled={props.graphValues.length < 2}
            onClick={onDeleteEdgeClick}
          >
            -Edge
          </Button>
          <Button.Or />
          <Button
            size="small"
            color={optionSelected === "ModifyEdgeCost" ? "teal" : null}
            active={optionSelected === "ModifyEdgeCost"}
            disabled={hideEdgeCost.includes(props.algorithm) || props.graphValues.length < 2}
            onClick={onModifyEdgeCostClick}
          >
            :=Edge
          </Button>
        </Button.Group>
      </div>

      <div>
        {graphInputOperations[optionSelected].map((labelName) => {
          return (
            <SingleInput
              key={labelName}
              inputName={labelName}
              hidden={false}
              inputDisabled={(hideEdgeCost.includes(props.algorithm) && labelName === "cost" ) || optionSelected==="AddNode" ? true : false}
              buttonText={optionSelected==="AddNode" ? "Add" : ""}
              onSingleInputSubmit={onSingleInputSubmit}
              algorithm={props.algorithm}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    graphValues: state.graphValues,
    inputObj: state.inputObj
  };
};

export default connect(mapStateToProps, {
  updateGraph,
  assignInputObj,
  deleteInputObj,
  setErrors
})(GraphInput);
