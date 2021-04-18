import React from "react";
import { connect } from "react-redux";
import { Stage, Layer } from "react-konva";
import PrimaryDataStructure from "./data_structures/PrimaryDataStructure";
import DynamicIndex from "./explanations/DynamicIndex";
import Message from "./explanations/Message";
import AuxiliaryInfo from "./explanations/AuxiliaryInfo";

const Canvas = (props) => {

  const availableWidth = props.x;
  const availableHeight = window.innerHeight - props.y;
  const canvasWidth = availableWidth;
  const canvasHeight = availableHeight;

  // for Array
  const N = props.state.visValues.length;
  const divisor = Math.max(N, 5);
  const divisorConstant = 1.4;
  const cellX = canvasWidth * 0.05;
  const cellWidth = canvasWidth / (divisor * divisorConstant);
  const cellHeight = canvasHeight / (divisor * divisorConstant);
  const iFactor = canvasWidth / (divisor * divisorConstant);
  const textCenterX = cellX + cellWidth * 0.5;
  const fontSize = cellWidth / 4;

  const canvasCenter = canvasWidth / 2;

  return (
    <div
      id="canvas-wrapper"
      style={{
        overflow: "auto",
        boxSizing: "border-box",
        padding: "1%",
        backgroundColor: "#EEEEEE",
      }}
    >
      <Stage width={canvasWidth} height={canvasHeight*2} draggable>
        <Layer>
          {
            <PrimaryDataStructure
              values={props.state.visValues}
              treeValues={props.state.visValues.root || props.state.treeValues.root}
              dataStructure={props.state.dataStructure}
              indices={props.state.indices}
              cellX={cellX}
              cellWidth={cellWidth}
              cellHeight={cellHeight || null}
              iFactor={iFactor}
              textCenterX={textCenterX}
              canvasWidth={canvasWidth}
              canvasHeight={canvasHeight}
              canvasCenter={canvasCenter}
              fontSize={fontSize}
              curNodeID={props.state.nodeID}
            />
          }
          {props.state.dataStructure === "Array" ? (
            <DynamicIndex
              indices={props.state.indices}
              textCenterX={textCenterX}
              canvasHeight={canvasHeight}
              cellHeight={cellHeight}
              iFactor={iFactor}
              cellWidth={cellWidth}
              fontSize={fontSize}
            />
          ) : null}
          {
            <Message
              message={props.state.message}
              canvasWidth={canvasWidth}
              canvasHeight={canvasHeight}
            />
          }
          {<AuxiliaryInfo />}
        </Layer>
      </Stage>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(Canvas);
