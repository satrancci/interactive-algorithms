import React from "react";
import { Group, Circle, Line, Text } from "react-konva";

const GraphNode = (props) => {
  
  const {nodeID, canvasWidth, canvasHeight, radius} = props;
  const {x, y} = props.coordinates;
  //console.log(`GraphNode received x:${x}, y:${y}, nodeID: ${JSON.stringify(nodeID)}`);

  const fontSize = Math.min(Math.abs(canvasWidth), Math.abs(canvasHeight)) * 0.02;

  return (
      <Group>
        <Circle x={x} y={y} radius={radius} fill="blue" />
        <Text text={nodeID} x={x} y={y} fontSize={fontSize}/>
      </Group>

  );
};

export default GraphNode;