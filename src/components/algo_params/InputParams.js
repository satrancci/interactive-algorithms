import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";

import TreeInput from "./TreeInput";
import SingleInput from "./SingleInput";

import { assignInputObj } from "../../actions";
import paramsMappings from '../../paramsMappings';

const InputParams = (props) => {

    const inputNames = paramsMappings[props.state.algorithm];

    const [inputObj, setInputObj] = useState({});

    const onSingleInputSubmit = (inputName, value) => {
        setInputObj(inputObj => ({
            ...inputObj, 
            [inputName]: value
        }))
    }

    useEffect(() => {
        if (Object.keys(inputObj).length === inputNames.length) {
            props.assignInputObj(inputObj);
        }
    }, [inputObj])

    return (
        <div style={{display: "flex"}}>
            {inputNames.includes("treeValues") ? <TreeInput/> : null}

            {inputNames && (!inputNames.includes("treeValues")) && inputNames.map((inputName) => {
                return (
                    <SingleInput key={inputName} inputName={inputName} onSingleInputSubmit={onSingleInputSubmit}/>
                )
            })}
        </div>
    )
};


const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps, {
  assignInputObj
})(InputParams);