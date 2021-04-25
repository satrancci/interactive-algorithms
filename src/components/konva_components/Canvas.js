import React from "react";
import { connect } from "react-redux";
import { Stage, Layer } from "react-konva";
import PrimaryDataStructure from "./data_structures/PrimaryDataStructure";
import DynamicIndex from "./explanations/DynamicIndex";
import Message from "./explanations/Message";
import AuxiliaryInfo from "./explanations/AuxiliaryInfo";

import _ from "lodash"

const Canvas = (props) => {

  const availableWidth = props.x;
  const availableHeight = window.innerHeight - props.y;
  const canvasWidth = availableWidth;
  const canvasHeight = availableHeight;

  const defaultVal = 5;
  // so that 2darray of highly skewed dimensions is displayed in full size on the screen
  const thresholdToResize = (props.state.dataStructure === "Array2D" && (!_.isEmpty(props.state.visValues))) ? Math.max(props.state.visValues.length, props.state.visValues[0].length) : defaultVal;

  const N = props.state.visValues.length;
  const divisor = Math.max(N, thresholdToResize);
  const divisorConstant = 1.4;
  const cellX = canvasWidth * 0.05;
  const cellWidth = canvasWidth / (divisor * divisorConstant);
  const cellHeight = canvasHeight / (divisor * divisorConstant);
  const iFactor = canvasWidth / (divisor * divisorConstant);
  const textCenterX = cellX + cellWidth * 0.5;
  const fontSize = Math.max(cellWidth / 5, cellHeight / 5);

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
              graphValues={props.state.visValues.graph || props.state.graphValues.graph}
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
              algorithm={props.state.algorithm}
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
              ellHeight={cellHeight}
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
