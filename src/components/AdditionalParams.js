import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import algorithmMappings from '../algorithms/algorithmMappings';

import { addParams } from '../actions';

import FunctionParameter from './FunctionParameter';

const AdditionalParameters = (props) => {

    // for now the code is buggy if user sends parameters in the wrong order!
    // also needs to add validation before sending as argument to the function!
    const [params, setParams] = useState([]);

    const onParamSubmitCallback = (tpl) => {
        //let newState = Object.assign(params);
        //newState[tpl[0]] = tpl[1];
        //console.log('newState:', newState);
        const lst = [...params, [tpl[0], tpl[1]] ];
        console.log('lst:', lst);
        setParams(lst);
    }
   
    const algParams = Object.keys(algorithmMappings[props.algorithm].params)
    //console.log('algParams:', algParams);

    useEffect(() => {
        console.log('params:', params);
        //const n = Object.keys(params).length;
        const n = params.length;
        //console.log('n:',n);
        if (n === algParams.length) {
            props.addParams(params);
            console.log('dispatched params to Redux store!');
            setParams([]);
        }
    }, [params])

    return (
        <div>
            <label>Please provide additional parameters to {props.algorithm}()</label>
        {algParams.map((p) => {
            return (
            <FunctionParameter param={p} onParamSubmitCallback={onParamSubmitCallback} key={p}/>
            )
        })}
      </div>
    );
};


const mapStateToProps = (state) => {
  return {
    params: state.params
  };
};


export default connect(mapStateToProps, {
  addParams
})(AdditionalParameters);;