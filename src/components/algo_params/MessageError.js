import React from "react";
import { Message } from "semantic-ui-react";

import _ from "lodash";

const MessageError = (props) => {
  return (
    <Message
      error
      header="There were some errors with your input."
      list={_.isEmpty(props.errors) ? [
        "Error1",
        "Error2",
      ] : props.errors}
    />
  );
};

export default MessageError;
