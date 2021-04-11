import React, { useState, useEffect } from 'react';
import { Input, Button } from 'semantic-ui-react';


const FunctionParameter = (props) => {

    const [valToAdd, setValToAdd] = useState("");

    const onAddVal = (val) => {
        setValToAdd(val);
    }

    const onParamSubmit = (e) => {
        // validate here!
        const name = props.param;
        //const obj = {};
        //obj[name] = parseInt(valToAdd);
        const parsed = parseInt(valToAdd);
        console.log('obj:', [name,parsed]);
        props.onParamSubmitCallback([name, parsed]);
    }

    useEffect(() => {
        setValToAdd("");
    }, [props.onParamSubmitCallback])


    return (
            <div>
            <Input
            id={props.param}
            type="text"
            value={valToAdd}
            onChange={(e) => onAddVal(e.target.value)}
            />
            <Button primary onClick={onParamSubmit}>{props.param}</Button>
            </div>
    );
};

export default FunctionParameter;