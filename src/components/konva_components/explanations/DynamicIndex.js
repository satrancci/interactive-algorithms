import React from "react";
import { Group, Text } from "react-konva";

const DynamicIndex = (props) => {
  const indicesList = Object.entries(props.indices);
  const textY = props.canvasHeight * 0.3;
  const textCenterY = textY + props.cellHeight * 0.4;

  const offsetY = props.canvasHeight * 0.05;
  const fontSizeMultiplier = 1.2;
  const fontColor = "red";

  return (
    <Group>
      {indicesList.map((indexTuple, i) => (
        <Group id={"dynamicIndex" + i} key={"dynamicIndex" + i}>
          <Text
            id={"IndexText" + i}
            text={indexTuple[0]}
            x={
              props.textCenterX +
              indexTuple[1] * props.iFactor -
              indexTuple[0].toString().length * 0.08 * props.cellWidth
            }
            y={textCenterY + i * offsetY}
            fontSize={props.fontSize * fontSizeMultiplier}
            fill={fontColor}
          />
        </Group>
      ))}
    </Group>
  );
};

export default DynamicIndex;
