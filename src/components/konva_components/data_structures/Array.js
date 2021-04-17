import React from 'react';
import { Group, Rect, Text } from 'react-konva';

const Array = (props) => {

  const cellY = props.cellY;
  const textCenterY = cellY+props.cellHeight*0.4;

  return (
        <Group>
          {props.values.map((v,i) => 
          <Group id={"cell"+i} key={"cell"+i}>
          <Rect
          x={props.cellX+i*props.iFactor}
          y={cellY}
          width={props.cellWidth}
          height={props.cellHeight}
          fill={Object.values(props.indices).includes(i) ? "red" : "lightblue"}
          stroke="black"
          strokeWidth={1}
          />
          <Text id={"cellText"+i} text={v} x={props.textCenterX+i*props.iFactor - v.toString().length*0.08*props.cellWidth} y={textCenterY} fontSize={props.fontSize} />

          </Group>
          )}

        </Group>

  );
};

export default Array;