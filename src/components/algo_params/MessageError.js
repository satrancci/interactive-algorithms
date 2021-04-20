import React from "react";
import { Message } from "semantic-ui-react";

const MessageError = (props) => {
  return (
    <Message
      error
      list={props.errors}
    />
  );
};

export default MessageError;
