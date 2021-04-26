import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateGraph, assignInputObj, deleteInputObj } from "../../actions";
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
    //console.log(`onSingleInputSubmit callback received: inputName: ${inputName}, value: ${value}`)
    setSingleInputObj((singleInputObj) => ({
      ...singleInputObj,
      [inputName]: value,
    }));
  };

  useEffect(() => {
    const objLength = Object.keys(singleInputObj).length;
    const optionsLength = graphInputOperations[optionSelected].length;
    if (
      objLength !== 0 && objLength === optionsLength ) {
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
    newGraph.addNode(value);
    props.assignInputObj({ graphValues: newGraph });
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
      props.assignInputObj({ graphValues: newGraph });
    }
    props.updateGraph(newGraph);
  };

  const onAddEdgeSubmit = (obj) => {
    const nodeID1 = obj["nodeID1"];
    const nodeID2 = obj["nodeID2"];
    const cost = obj["cost"];
    let newGraph = _.cloneDeep(props.graphValues);
    newGraph.addEdge(nodeID1, nodeID2, cost);
    props.assignInputObj({ graphValues: newGraph });
    props.updateGraph(newGraph);
  };

  const onDeleteEdgeSubmit = (obj) => {
    const nodeID1 = obj["nodeID1"];
    const nodeID2 = obj["nodeID2"];
    let newGraph = _.cloneDeep(props.graphValues);
    newGraph.deleteEdge(nodeID1, nodeID2);
    props.assignInputObj({ graphValues: newGraph });
    props.updateGraph(newGraph);
  };

  const onModifyEdgeCostSubmit = (obj) => {
    const nodeID1 = obj["nodeID1"];
    const nodeID2 = obj["nodeID2"];
    const newCost = obj["cost"];
    let newGraph = _.cloneDeep(props.graphValues);
    newGraph.modifyEdgeCost(nodeID1, nodeID2, newCost);
    props.assignInputObj({ graphValues: newGraph });
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
            AddNode
          </Button>
          <Button.Or />
          <Button
            size="small"
            color={optionSelected === "DeleteNode" ? "teal" : null}
            active={optionSelected === "DeleteNode"}
            disabled={!optionSelected === "DeleteNode"}
            onClick={onDeleteNodeClick}
          >
            DeleteNode
          </Button>
          <Button.Or />
          <Button
            size="small"
            color={optionSelected === "AddEdge" ? "teal" : null}
            active={optionSelected === "AddEdge"}
            disabled={props.graphValues.length < 2}
            onClick={onAddEdgeClick}
          >
            AddEdge
          </Button>
          <Button.Or />
          <Button
            size="small"
            color={optionSelected === "DeleteEdge" ? "teal" : null}
            active={optionSelected === "DeleteEdge"}
            disabled={props.graphValues.length < 2}
            onClick={onDeleteEdgeClick}
          >
            DeleteEdge
          </Button>
          <Button.Or />
          <Button
            size="small"
            color={optionSelected === "ModifyEdgeCost" ? "teal" : null}
            active={optionSelected === "ModifyEdgeCost"}
            disabled={hideEdgeCost.includes(props.algorithm) || props.graphValues.length < 2}
            onClick={onModifyEdgeCostClick}
          >
            ModifyEdgeCost
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
              inputDisabled={hideEdgeCost.includes(props.algorithm) && labelName === "cost" ? true : false}
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
  };
};

export default connect(mapStateToProps, {
  updateGraph,
  assignInputObj,
  deleteInputObj,
})(GraphInput);
