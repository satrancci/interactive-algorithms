import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import TreeInput from "./TreeInput";
import GraphInput from "./GraphInput";
import SingleInput from "./SingleInput";
import { assignInputObj } from "../../actions";
import paramsMappings from "../../paramsMappings";
import MessageError from "./MessageError";

import _ from "lodash";

const InputParams = (props) => {
  const inputNames = paramsMappings[props.state.algorithm];
  const {assignInputObj} = props;

  const [inputObj, setInputObj] = useState({});

  const onSingleInputSubmit = (inputName, value) => {
    setInputObj((inputObj) => ({
      ...inputObj,
      [inputName]: value,
    }));
  };

  useEffect(() => {
    if (Object.keys(inputObj).length === inputNames.length) {
      assignInputObj(inputObj);
    }
  }, [inputObj]);

  return (
    <div>
      <div id="input-container" style={{ display: "flex" }}>
        {inputNames.includes("treeValues") ? (
          <TreeInput algorithm={props.state.algorithm} />
        ) : null}

        {inputNames.includes("graphValues") ? (
          <GraphInput algorithm={props.state.algorithm} />
        ) : null}

        {inputNames &&
          !inputNames.includes("treeValues") && !inputNames.includes("graphValues") &&
          inputNames.map((inputName) => {
            return (
              <SingleInput
                key={inputName}
                inputName={inputName}
                onSingleInputSubmit={onSingleInputSubmit}
                algorithm={props.state.algorithm}
              />
            );
          })}
      </div>
      {!_.isEmpty(props.state.errors) ? (
        <div id="error-container">
          <MessageError errors={props.state.errors} />
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps, {
  assignInputObj,
})(InputParams);
