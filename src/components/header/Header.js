import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

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
        <div id="header" style={{boxSizing: "border-box", padding: "2%"}} ref={elemRef}>
            This space will be filled with custom header elements (logo, name, link to github)
        </div>
    )
};


const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(Header);