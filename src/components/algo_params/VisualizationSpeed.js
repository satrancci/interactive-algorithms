import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

import { updateVisualizationSpeed } from '../../actions';

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

function valuetext(value) {
  return `${value}`;
}

const marks = [
  {
    value: 3,
    label: 'Fast <- Normal -> Slow',
  }
];


const VisualizationSpeed = (props) => {
  const classes = useStyles();

  const onChangeSpeed = newValue => props.updateVisualizationSpeed(newValue);

  return (
    <div className={classes.root} style={{margin: "auto", padding: "0%"}}>
      <Typography id="discrete-slider" gutterBottom>
      </Typography>
      <Slider
        value={props.state.visualizationSpeed}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="off"
        step={1}
        marks={marks}
        min={1}
        max={5}
        onChange={(e,v) => onChangeSpeed(v)}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state
  };
};


export default connect(mapStateToProps, {
  updateVisualizationSpeed
})(VisualizationSpeed);
