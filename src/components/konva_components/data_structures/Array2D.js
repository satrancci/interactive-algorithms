import React from "react";
import { Group } from "react-konva";
import Array from "./Array";

const Array2D = (props) => {

  const cellY = props.cellY;
  const textCenterY = props.textCenterY;

  return (
    <Group>
      {props.values.map((row, i) => {
        return (
          <Group key={"row" + i}>
                <Array
                values={row}
                rowIdx={i}
                indices={props.indices}
                cellX={props.cellX}
                cellY={cellY + props.cellHeight * i}
                cellWidth={props.cellWidth}
                cellHeight={props.cellHeight}
                iFactor={props.iFactor}
                textCenterX={props.textCenterX}
                canvasHeight={props.canvasHeight}
                textCenterY={textCenterY + props.cellHeight * i}
                fontSize={props.fontSize}
                />
          </Group>
        );
      })}
    </Group>
  );
};

export default Array2D;
