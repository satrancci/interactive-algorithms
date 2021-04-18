import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import AlgorithmSelection from "../ds_algo_selection/AlgorithmSelection";
import VisualizeButton from "../algo_params/VisualizeButton";

import _ from "lodash";

const Header = (props) => {

  const elemRef = useRef(null);

  useEffect(() => {
    if(elemRef.current){
        let elemHeight = elemRef.current.offsetHeight;
        let elemWidth  = elemRef.current.offsetWidth;
        props.callback({width: elemWidth, height: elemHeight});
    }
          
  }, [elemRef, props.state.algorithm, props.state.dataStructure, props.state.inputObj, props.resize]);

    return (
        <div id="header" style={{boxSizing: "border-box", backgroundColor: "#add8e6", display: "flex"}} ref={elemRef}>
            <AlgorithmSelection />
            {(props.state.algorithm && (!_.isEmpty(props.state.inputObj))) ? <VisualizeButton disabled={false}/> : <VisualizeButton disabled={true}/>}
        </div>
    )
};


const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(Header);