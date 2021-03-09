import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Stage, Layer, Circle } from "react-konva";
import PrimaryDataStructure from "./PrimaryDataStructure";
import DynamicIndex from "./DynamicIndex";
import Message from "./Message";
import AuxiliaryInfo from "./AuxiliaryInfo";

const Canvas = (props) => {

  const scaleFactorX = 0.8;
  const scaleFactorY = 0.8;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth*scaleFactorX);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight*scaleFactorY);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth*scaleFactorX);
      setWindowHeight(window.innerHeight*scaleFactorY);
    }
    window.addEventListener('resize', handleResize)

    return _ => {
      window.removeEventListener('resize', handleResize)};
  })

  return (
      <Stage width={windowWidth} height={windowHeight} style={{borderStyle: "solid"}}>
        <Layer>
          {
            <PrimaryDataStructure
              values={props.state.values}
              dataStructure={props.state.dataStructure}
              index={props.state.index}
              windowWidth={windowWidth}
              windowHeight={windowHeight} 
            />
          }
          {false ? <DynamicIndex index={props.state.index}/> : null}
          {<Message message={props.state.message} windowWidth={windowWidth} windowHeight={windowHeight} />}
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
