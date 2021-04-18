import React from 'react';
import { Group, Rect, Text } from 'react-konva';

const Array = (props) => {

  const cellY = props.cellY;
  const textCenterY = props.textCenterY;

  const fillColorArray = i => Object.values(props.indices).includes(i) ? "red" : "lightblue";
  const fillColorArray2D = (i, j) => props.indices["i"] === i && props.indices["j"] === j ? "red" : "lightblue";

  return (
        <Group>
          {props.values.map((v,i) => 
          <Group id={"cell"+i} key={"cell"+i}>
          <Rect
          x={props.cellX+i*props.iFactor}
          y={cellY}
          width={props.cellWidth}
          height={props.cellHeight}
          fill={(props.rowIdx === undefined || props.rowIdx === null) ? fillColorArray(i) : fillColorArray2D(props.rowIdx, i)}
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