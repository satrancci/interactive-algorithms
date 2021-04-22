import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Button, Divider, Grid, Segment } from "semantic-ui-react";
import InputSelectionWrapper from "./InputSelectionWrapper";

const InputDivider = (props) => {
  const elemRef = useRef(null);

  useEffect(() => {
    if (elemRef.current) {
      let elemHeight = elemRef.current.offsetHeight;
      let elemWidth = elemRef.current.offsetWidth;
      props.callback({ width: elemWidth, height: elemHeight });
    }
  }, [
    elemRef,
    props.state.algorithm,
    props.state.dataStructure,
    props.state.inputObj,
    props.resize,
  ]);

  return (
    <div id="divider" ref={elemRef}>
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
            <Button size="medium" primary content="Generate random" />
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
