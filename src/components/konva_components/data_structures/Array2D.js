import React from "react";
import { Group, Rect, Text } from "react-konva";

const Array2D = (props) => {
  const cellY = props.canvasHeight * 0.05;
  const textCenterY = cellY + props.cellHeight * 0.4;

  return (
    <Group>
      {props.values.map((row, i) => {
        return (
          <Group key={"row" + i}>
            {row.map((v, j) => (
              <Group id={"cell" + i + j} key={"cell" + i + j}>
                <Rect
                  x={props.cellX + j * props.iFactor}
                  y={cellY + props.cellHeight * i}
                  width={props.cellWidth}
                  height={props.cellHeight}
                  fill={
                    props.indices["i"] == i && props.indices["j"] == j
                      ? "red"
                      : "lightblue"
                  }
                  stroke="black"
                  strokeWidth={1}
                />
                <Text
                  id={"cellText" + j}
                  text={v}
                  x={
                    props.textCenterX +
                    j * props.iFactor -
                    v.toString().length * 0.08 * props.cellWidth
                  }
                  y={textCenterY + props.cellHeight * i}
                  fontSize={props.fontSize}
                />
              </Group>
            ))}
          </Group>
        );
      })}
    </Group>
  );
};

export default Array2D;
