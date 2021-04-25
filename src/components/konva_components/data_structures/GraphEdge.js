import React from "react";
import { Group, Circle, Line, Text } from "react-konva";


const calculateEdgeTextCoord = (x1, y1, x2, y2) => {
    const coordX = x1+(x2-x1)/2;
    const coordY = y1+(y2-y1)/2+y1*0.02;
    return [coordX, coordY];
}



const GraphEdge = (props) => {
    
  const {from, to, cost, positions, canvasWidth, canvasHeight, radius} = props;
  console.log(`GraphEdge received: from:${from}, to:${to}, cost:${cost}`);

  const randomColor = "#"+Math.floor(Math.random()*16777215).toString(16); // https://css-tricks.com/snippets/javascript/random-hex-color/
  console.log(`randomColor: ${randomColor}`);  


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
  console.log(`GraphEdge edgeValX: ${edgeValX}, edgeValY: ${edgeValY}`);

  console.log(`GraphEdge fromX: ${fromX}, fromY: ${fromY}, toX: ${toX}, toY: ${toY}`);

  
  const fontSize = Math.min(Math.abs(canvasWidth), Math.abs(canvasHeight)) * 0.02;

  return (
      <Group>
      <Line
        points={[fromX,fromY,toX,toY]}
        stroke={randomColor}
        strokeWidth={null}
      />
      <Text text={cost} x={edgeValX} y={edgeValY} fontSize={fontSize} fill={randomColor}/>
      </Group>

  );
};

export default GraphEdge;