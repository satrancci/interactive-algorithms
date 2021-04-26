import React from "react";
import { Group, Circle, Line, Text } from "react-konva";

const GraphNode = (props) => {
  
  const {nodeID, canvasWidth, canvasHeight, radius, nodeValue} = props;
  const {x, y} = props.coordinates;
  //console.log(`GraphNode received x:${x}, y:${y}, nodeID: ${JSON.stringify(nodeID)}`);

  const nodeColor = "#7CB9E8";
  const nodeIDTextX = x-radius*0.3;
  const nodeIDTextY = y-radius*0.6;
  const nodeIDFontSize = Math.min(Math.abs(canvasWidth), Math.abs(canvasHeight)) * 0.04;

  const valueTextX = x-nodeValue.toString().length*0.1*radius;
  const valueTextY = y+radius*0.45;
  const nodeValueFontSize = Math.min(Math.abs(canvasWidth), Math.abs(canvasHeight)) * 0.02;

  return (
      <Group>
        <Circle x={x} y={y} radius={radius} fill={nodeColor} />
        <Line points={[x-radius, y+radius*0.3, x+radius, y+radius*0.3]} stroke="black" strokeWidth={0.5}/>
        <Text text={nodeID} x={nodeIDTextX} y={nodeIDTextY} fontSize={nodeIDFontSize}/>
        <Text text={nodeValue} x={valueTextX} y={valueTextY} fontSize={nodeValueFontSize} />
      </Group>

  );
};

export default GraphNode;