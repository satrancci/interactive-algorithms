import React, { useState, useEffect } from "react";
import Header from "./header/Header";
import InputSelectionWrapper from "./header/InputSelectionWrapper";
import Canvas from "./konva_components/Canvas";

const App = () => {
  const [headerSize, setHeaderSize] = useState({});
  const [inputSelectionWrapperSize, setInputSelectionWrapperSize] = useState(
    {}
  );
  const [resize, setResize] = useState(false);

  const onHeaderSizeUpdate = (obj) => setHeaderSize(obj);
  const onInputSelectionWrapperSizeUpdate = (obj) =>
    setInputSelectionWrapperSize(obj);

  useEffect(() => {
    const handleResize = () => {
      setResize(!resize); // a little trick to update props in children components
    };
    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div id="app">
      <Header callback={onHeaderSizeUpdate} resize={resize} />
      <InputSelectionWrapper
        callback={onInputSelectionWrapperSizeUpdate}
        resize={resize}
      />
      <Canvas
        x={window.innerWidth}
        y={(headerSize["height"] + inputSelectionWrapperSize["height"]) ? headerSize["height"] + inputSelectionWrapperSize["height"] : 0} // to avoid NaN warning
      />
    </div>
  );
};

export default App;
