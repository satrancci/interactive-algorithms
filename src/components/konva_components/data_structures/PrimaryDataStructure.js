import React from "react";
import { Group } from "react-konva";
import Array from "./Array";
import Tree from "./Tree";
import Array2D from "./Array2D";
import Graph from "./Graph";

const PrimaryDataStructure = (props) => {
  
  const cellY = 0;
  const textCenterY = cellY+props.cellHeight*0.4;

  return (
    <Group>
      {props.dataStructure === "Array" ? (
        <Array
          values={props.values}
          indices={props.indices}
          cellX={props.cellX}
          cellY={cellY}
          cellWidth={props.cellWidth}
          cellHeight={props.cellHeight}
          iFactor={props.iFactor}
          textCenterX={props.textCenterX}
          canvasHeight={props.canvasHeight}
          textCenterY={textCenterY}
          fontSize={props.fontSize}
        />
      ) : null}

      {props.dataStructure === "Array2D" ? (
        <Array2D
          values={props.values}
          indices={props.indices}
          cellX={props.cellX}
          cellY={cellY}
          cellWidth={props.cellWidth}
          cellHeight={props.cellHeight}
          iFactor={props.iFactor}
          textCenterX={props.textCenterX}
          canvasHeight={props.canvasHeight}
          textCenterY={textCenterY}
          fontSize={props.fontSize}
        />
      ) : null}

      {props.dataStructure === "Tree" ? (
        <Tree
          values={props.treeValues}
          offset={props.canvasWidth * 0.1}
          level={0}
          isRoot={true}
          canvasCenter={props.canvasCenter}
          x={props.canvasCenter}
          canvasWidth={props.canvasWidth}
          canvasHeight={props.canvasHeight}
          curNodeID={props.curNodeID}
          maxLevel={0}
          algorithm={props.algorithm}
        />
      ) : null}
       {props.dataStructure === "Graph" ? <Graph graph={props.graphValues} canvasWidth={props.canvasWidth} canvasHeight={props.canvasHeight}/> : null}
    </Group>
  );
};

export default PrimaryDataStructure;
