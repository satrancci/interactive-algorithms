import React from 'react';
import { Group, Rect, Text } from 'react-konva';

const Array = (props) => {

  const N = props.values.length;
  const divisor = Math.max(N, 5);
  
  const cellX = props.windowWidth*0.1;
  const cellY = props.windowHeight*0.2;
  const cellWidth = props.windowWidth/(divisor*1.2);
  const cellHeight = props.windowHeight/(divisor*1.2);

  const iFactor = props.windowWidth/(divisor*1.2)

  const textCenterX = cellX+cellWidth*0.5;
  const textCenterY = cellY+cellHeight*0.4;

  const fontSize = cellWidth/4;


  return (
        <Group>
          {props.values.map((v,i) => 
          <Group id={"cell"+i} key={"cell"+i}>
          <Rect
          x={cellX+i*iFactor}
          y={cellY}
          width={cellWidth}
          height={cellHeight}
          fill={props.index===i ? "red" : "lightblue"}
          stroke="black"
          strokeWidth={1}
          />
          <Text id={"cellText"+i} text={v} x={textCenterX+i*iFactor - v.toString().length*0.08*cellWidth} y={textCenterY} fontSize={fontSize} />

          </Group>
          )}

        </Group>

  );
};

export default Array;