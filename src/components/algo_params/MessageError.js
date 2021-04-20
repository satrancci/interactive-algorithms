import React from "react";
import { Message } from "semantic-ui-react";

const MessageError = (props) => {
  return (
    <Message
      error
      header="There were some errors with your input."
      list={props.errors}
    />
  );
};

export default MessageError;
