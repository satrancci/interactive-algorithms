import React from "react";
import { Group } from "react-konva";
import Array from "./Array";
import Tree from "./Tree";
import Array2D from "./Array2D";

const PrimaryDataStructure = (props) => {
  
  return (
    <Group>
      {props.dataStructure === "Array" ? (
        <Array
          values={props.values}
          indices={props.indices}
          cellX={props.cellX}
          cellWidth={props.cellWidth}
          cellHeight={props.cellHeight}
          iFactor={props.iFactor}
          textCenterX={props.textCenterX}
          windowHeight={props.windowHeight}
          fontSize={props.fontSize}
        />
      ) : null}

      {props.dataStructure === "Array2D" ? (
        <Array2D
          values={props.values}
          indices={props.indices}
          cellX={props.cellX}
          cellWidth={props.cellWidth}
          cellHeight={props.cellHeight}
          iFactor={props.iFactor}
          textCenterX={props.textCenterX}
          windowHeight={props.windowHeight}
          fontSize={props.fontSize}
        />
      ) : null}

      {props.dataStructure === "Tree" ? (
        <Tree
          values={props.treeValues}
          offset={props.windowWidth * 0.1}
          level={0}
          isRoot={true}
          windowCenter={props.windowCenter}
          x={props.windowCenter}
          windowWidth={props.windowWidth}
          windowHeight={props.windowHeight}
          curNodeID={props.curNodeID}
        />
      ) : null}
    </Group>
  );
};

export default PrimaryDataStructure;
