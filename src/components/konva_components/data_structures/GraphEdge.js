import React, { useState } from "react";
import { Group, Line, Text } from "react-konva";


const calculateEdgeTextCoord = (x1, y1, x2, y2) => {
    let slopeValue = (y2-y1)/(x2-x1);
    let coordX = 0; 
    if (slopeValue < 0 || slopeValue === 0) {coordX = x1+(x2-x1)/2};
    if (slopeValue > 0 ) {coordX = x1+(x2-x1)/2-((x2-x1)*0.1)};
    const coordY = y1+(y2-y1)/2+y1*0.02;
    return [coordX, coordY];
}


const GraphEdge = (props) => {
    
  const {from, to, cost, positions, canvasWidth, canvasHeight, radius} = props;

  let fromX = positions[from].x;
  let fromY = positions[from].y;
  let toX = positions[to].x;
  let toY = positions[to].y;

  if (fromY === toY) {
      if (fromX < toX) {
        fromX += radius;
        toX -= radius;
      }
      if (fromX > toX) {
          fromX -= radius;
          toX += radius;
      }
  }

  if (fromY < toY) {
      fromY += radius;
      toY -= radius;
  }

  if (fromY > toY) {
      fromY -= radius;
      toY += radius;
  }
  
  const [edgeValX, edgeValY] = calculateEdgeTextCoord(fromX, fromY, toX, toY);

  const [isHovered, setIsHovered] = useState(false);
  const onMouseOverCallback = () => setIsHovered(true);
  const onMouseOutCallback = () => setIsHovered(false);


  const edgeColor = isHovered ? "orange" : "black";
  let fontSize = Math.min(Math.abs(canvasWidth), Math.abs(canvasHeight)) * 0.04;
  fontSize = isHovered ? fontSize *= 2 : fontSize;

  return (
      <Group onMouseOver={onMouseOverCallback} onMouseOut={onMouseOutCallback}>
      <Line
        points={[fromX,fromY,toX,toY]}
        stroke={edgeColor}
        strokeWidth={null}
      />
      <Text text={cost} x={edgeValX} y={edgeValY} fontSize={fontSize} fill={edgeColor}/>
      </Group>

  );
};

export default GraphEdge;