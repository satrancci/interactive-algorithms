import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Stage, Layer, Circle } from "react-konva";
import PrimaryDataStructure from "./data_structures/PrimaryDataStructure";
import DynamicIndex from "./explanations/DynamicIndex";
import Message from "./explanations/Message";
import AuxiliaryInfo from "./explanations/AuxiliaryInfo";

const Canvas = (props) => {

  const scaleFactorX = 0.8;
  const scaleFactorY = 0.8;

  const [windowWidth, setWindowWidth] = useState(
    window.innerWidth * scaleFactorX
  );
  const [windowHeight, setWindowHeight] = useState(
    window.innerHeight * scaleFactorY
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth * scaleFactorX);
      setWindowHeight(window.innerHeight * scaleFactorY);
    };
    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // for Array
  const N = props.state.values.length;
  const divisor = Math.max(N, 5);
  const cellX = windowWidth*0.1;
  const cellWidth = windowWidth/(divisor*1.2);
  const cellHeight = windowHeight/(divisor*1.2);
  const iFactor = windowWidth/(divisor*1.2);
  const textCenterX = cellX+cellWidth*0.5;
  const fontSize = cellWidth/4;

  const windowCenter = windowWidth/2;
  

  return (
    <Stage
      width={windowWidth}
      height={windowHeight}
      style={{ borderStyle: "solid" }}
    >
      <Layer>
        {
          <PrimaryDataStructure
            values={props.state.values}
            dataStructure={props.state.dataStructure}
            indices={props.state.indices}
            cellX={cellX}
            cellWidth={cellWidth}
            cellHeight={cellHeight}
            iFactor={iFactor}
            textCenterX={textCenterX}
            windowWidth={windowWidth}
            windowHeight={windowHeight}
            windowCenter={windowCenter}
            fontSize={fontSize}
            treeValues={props.state.treeValues.root}
            curNodeID={props.state.nodeID}
          />
        }
        {props.state.dataStructure === "Array" ? (
          <DynamicIndex
            indices={props.state.indices}
            textCenterX={textCenterX}
            windowHeight={windowHeight}
            cellHeight={cellHeight}
            iFactor={iFactor}
            cellWidth={cellWidth}
            fontSize={fontSize}

          />
        ) : null}
        {
          <Message
            message={props.state.message}
            windowWidth={windowWidth}
            windowHeight={windowHeight}
          />
        }
        {<AuxiliaryInfo />}
      </Layer>
    </Stage>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(Canvas);
