import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Divider, Grid, Segment } from "semantic-ui-react";
import InputSelectionWrapper from "./InputSelectionWrapper";
import GenerateRandomButton from "./GenerateRandomButton";

const InputDivider = (props) => {

  const {algorithm, dataStructure, inputObj} = props.state;
  const {resize, callback} = props;

  const elemRef = useRef(null);

  const displayBlock = props.displayBlock ? "block" : "none";

  useEffect(() => {
    let elemHeight = 0;
    let elemWidth = 0;  
    if (elemRef.current) {
      if (displayBlock) {
        elemHeight = elemRef.current.offsetHeight;
        elemWidth = elemRef.current.offsetWidth;
      }
      callback({ width: elemWidth, height: elemHeight });
    }
  }, [
    elemRef,
    algorithm,
    dataStructure,
    inputObj,
    resize,
    displayBlock
  ]);

  const [text, setText] = useState("");
  const onRandomClickCallback = (obj) => (obj["treeValues"] || obj["graphValues"]) ? setText("") : setText(JSON.stringify(obj));
  
  useEffect(()=> {
    const showTextNSeconds = async (n) => {
      await new Promise((r) => setTimeout(r, n*1000));
      setText("");
    }
    if (text) {
      showTextNSeconds(3);
    }
  }, [text])



  return (
    <div id="divider" ref={elemRef} style={{display: displayBlock}}>
      <Segment
        basic
        style={{
          boxSizing: "border-box",
          backgroundColor: "#F4F4F4",
          padding: "0%",
          margin: "0%",
        }}
      >
        <InputSelectionWrapper callback={null} />
        <Divider horizontal>Or</Divider>
        <Grid>
          <Grid.Column textAlign="center">
            <GenerateRandomButton onRandomClickCallback={onRandomClickCallback}/>
            {<p style={{color: "green"}}>{text}</p>}
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(InputDivider);
