import React from 'react';
import { Group, Text } from 'react-konva';

const Message = (props) => {

    const textStartX = props.canvasWidth*0.02;
    const textStartY = props.canvasHeight*0.75;

    const fontSize = props.canvasWidth/40;

    return (
        <Group draggable>
            {props.message ? <Text id={"message"} text={props.message} x={textStartX} y={textStartY} fontSize={fontSize}/> : null}
        </Group>
    )
};

export default Message;