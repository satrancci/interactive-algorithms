import React from "react";
import { Group } from "react-konva";
import Array from "./data_structures/Array";

const PrimaryDataStructure = (props) => {
  return (
    <Group>
      {props.dataStructure === "Array" ? (
        <Array values={props.values} index={props.index} windowWidth={props.windowWidth} windowHeight={props.windowHeight} />
      ) : null}
    </Group>
  );
};

export default PrimaryDataStructure;
