import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Header from "./header/Header";
import InputDivider from "./algo_params/InputDivider";
import VisualizationParameters from "./algo_params/VisualizationParameters";
import Canvas from "./konva_components/Canvas";
import Minimizer from "./header/Minimizer";

import _ from "lodash";

const initializedSize = { width: 0, height: 0 }; // to avoid NaN warning

const App = (props) => {
  const [headerSize, setHeaderSize] = useState(initializedSize);
  const [dividerSize, setDividerSize] = useState(initializedSize);
  const [visualizationParametersSize, setVisualizationParametersSize] = useState(initializedSize);
  const [canvasY, setCanvasY] = useState(0);
  const [minimizerUp, setMinimizerUp] = useState(true);
  const [resize, setResize] = useState(false);

  const onMinimizerToggle = () => setMinimizerUp(!minimizerUp);
  const onHeaderSizeUpdate = (obj) => setHeaderSize(obj);
  const onDividerSizeUpdate = (obj) => setDividerSize(obj);
  const onVisualizationParametersSizeUpdate = (obj) => setVisualizationParametersSize(obj);

  useEffect(() => {
    const handleResize = () => {
      setResize(!resize); // a little trick to update props in children components
    };
    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    setCanvasY(
      headerSize["height"] +
        dividerSize["height"] +
        visualizationParametersSize["height"]
    );
  }, [headerSize, dividerSize, visualizationParametersSize]);

  useEffect(() => {
    if (props.state.isVisualizing) {setMinimizerUp(!minimizerUp)};
  }, [props.state.isVisualizing])

  return (
    <div
      id="app"
      style={{ boxSizing: "border-box", backgroundColor: "#F4F4F4" }}
    >
      <Header callback={onHeaderSizeUpdate} resize={resize} />
      {props.state.algorithm && (
        <Minimizer up={minimizerUp} onToggle={onMinimizerToggle} />
      )}
      {props.state.algorithm && (
        <InputDivider
          callback={onDividerSizeUpdate}
          resize={resize}
          displayBlock={minimizerUp}
        />
      )}
      {props.state.algorithm && !_.isEmpty(props.state.inputObj) && props.state.isVisualizing && (
        <VisualizationParameters
          callback={onVisualizationParametersSizeUpdate}
          resize={resize}
        />
      )}

        <Canvas
          x={window.innerWidth}
          y={canvasY ? canvasY : 0}
        />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps, {})(App);
