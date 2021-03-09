import React from 'react';
import { Group, Text } from 'react-konva';

const Message = (props) => {

    const textStartX = props.windowWidth*0.1;
    const textStartY = props.windowHeight*0.5;
    
    const fontSize = props.windowWidth/40;

    return (
        <Group>
            {props.message ? <Text id={"message"} text={props.message} x={textStartX} y={textStartY} fontSize={fontSize}/> : null}
        </Group>
    )
};

export default Message;