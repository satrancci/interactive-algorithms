import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

import { updateVisualizationSpeed } from '../../actions';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}`;
}

const marks = [
  {
    value: 1,
    label: 'Very Fast',
  },
  {
    value: 2,
    label: 'Fast',
  },
  {
    value: 3,
    label: 'Normal',
  },
  {
    value: 4,
    label: 'Slow',
  },
  {
    value: 5,
    label: 'Very Slow',
  },
];


const VisualizationSpeed = (props) => {
  const classes = useStyles();

  const onChangeSpeed = newValue => props.updateVisualizationSpeed(newValue);

  return (
    <div className={classes.root} style={{marginLeft: "40px", marginTop: "20px", marginBottom: "10px"}}>
      <Typography id="discrete-slider" gutterBottom>
        Visualization Speed
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
