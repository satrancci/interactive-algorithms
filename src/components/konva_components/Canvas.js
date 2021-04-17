import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Stage, Layer } from "react-konva";
import PrimaryDataStructure from "./data_structures/PrimaryDataStructure";
import DynamicIndex from "./explanations/DynamicIndex";
import Message from "./explanations/Message";
import AuxiliaryInfo from "./explanations/AuxiliaryInfo";

const Canvas = (props) => {


  console.log(`Canvas received props.x: ${props.x}`);
  const availableWidth = window.innerWidth;
  console.log(`Canvas available width: ${availableWidth}`);

  console.log(`Canvas received props.y: ${props.y}`);
  const availableHeight = window.innerHeight - props.y;
  console.log(`Canvas available height: ${availableHeight}`);

  const canvasWidth = availableWidth * 0.9;
  const canvasHeight = availableHeight * 0.9;
  console.log(`CANVAS SIZE: ${canvasWidth}x${canvasHeight}`);

  // for Array
  const N = props.state.visValues.length;
  const divisor = Math.max(N, 5);
  const cellX = canvasWidth * 0.1;
  const cellWidth = canvasWidth / (divisor * 1.2);
  const cellHeight = canvasHeight / (divisor * 1.2);
  const iFactor = canvasWidth / (divisor * 1.2);
  const textCenterX = cellX + cellWidth * 0.5;
  const fontSize = cellWidth / 4;

  console.log(`cellX: ${cellX}, cellWidth: ${cellWidth}, cellHeight: ${cellHeight}`)

  const canvasCenter = canvasWidth / 2;

  return (
    <div
      id="canvas-wrapper"
      style={{
        overflow: "auto",
        boxSizing: "border-box",
        padding: "2%",
        width: availableWidth,
        height: availableHeight
      }}
    >
      <Stage width={canvasWidth} height={canvasHeight} draggable>
        <Layer>
          {
            <PrimaryDataStructure
              values={props.state.visValues}
              treeValues={props.state.visValues.root || props.state.treeValues.root}
              dataStructure={props.state.dataStructure}
              indices={props.state.indices}
              cellX={cellX}
              cellWidth={cellWidth}
              cellHeight={cellHeight}
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
