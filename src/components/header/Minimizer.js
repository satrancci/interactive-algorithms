import React from "react";
import { Icon } from "semantic-ui-react";

const Minimizer = (props) => (
  <div
    style={{
      boxSizing: "border-box",
      textAlign: "center",
      color: "#C0C0C0",
      padding: "0%",
      margin: "0%",
    }}
    onClick={props.onToggle}
  >
{props.up ? <Icon name="angle double up"/> : <Icon name="angle double down"/> }
  </div>
);

export default Minimizer;
