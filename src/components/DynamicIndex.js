import React from 'react';
import { Group, Text } from 'react-konva';

const DynamicIndex = (props) => {

    const indicesList = Object.entries(props.indices);
    const textY = props.windowHeight*0.3;
    const textCenterY = textY+props.cellHeight*0.4;

    return (
        <Group>
            {indicesList.map((indexTuple,i) => 
            <Group id={"dynamicIndex"+i} key={"dynamicIndex"+i}>
                <Text id={"IndexText"+i} text={indexTuple[0]} x={props.textCenterX+indexTuple[1]*props.iFactor - indexTuple[0].toString().length*0.08*props.cellWidth} y={textCenterY} fontSize={props.fontSize} />
            </Group>
            )}
        </Group>
    )
};

export default DynamicIndex;
