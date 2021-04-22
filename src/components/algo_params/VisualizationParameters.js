import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import VisualizationSpeed from "./VisualizationSpeed";


const VisualizationParameters = (props) => {

  const {algorithm, dataStructure, inputObj} = props.state;
  const {resize, callback} = props;

  const elemRef = useRef(null);

  useEffect(() => {
    if(elemRef.current){
        let elemHeight = elemRef.current.offsetHeight;
        let elemWidth  = elemRef.current.offsetWidth;
        callback({width: elemWidth, height: elemHeight});
    }
          
  }, [elemRef, algorithm, dataStructure, inputObj, resize]);

    return (
        <div id="visualization-parameters" style={{boxSizing: "border-box", display: "flex"}} ref={elemRef}>
            <VisualizationSpeed/>
        </div>
    )
};


const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(VisualizationParameters);