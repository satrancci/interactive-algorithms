import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import AlgorithmSelection from "../ds_algo_selection/AlgorithmSelection";
import VisualizeButton from "../algo_params/VisualizeButton";
import GithubIcon from "./GithubIcon";
import paramsMappings from "../../paramsMappings";

import _ from "lodash";

const Header = (props) => {

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
        <div id="header" style={{boxSizing: "border-box", backgroundColor: "#add8e6", display: "flex"}} ref={elemRef}>
            <AlgorithmSelection />
            <GithubIcon/>            
            {(props.state.algorithm && (!_.isEmpty(props.state.inputObj)) && Object.keys(props.state.inputObj).length === paramsMappings[props.state.algorithm].length) ? <VisualizeButton disabled={false}/> : <VisualizeButton disabled={true}/>}
        </div>
    )
};


const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(Header);