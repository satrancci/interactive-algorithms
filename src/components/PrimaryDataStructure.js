import React from "react";
import { Group } from "react-konva";
import Array from "./data_structures/Array";

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
    </Group>
  );
};

export default PrimaryDataStructure;
