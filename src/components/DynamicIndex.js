import React from 'react';
import { Group, Text } from 'react-konva';

const DynamicIndex = (props) => {

    const N = props.values.length;
    const divisor = Math.max(N, 5);
    
    const cellX = props.windowWidth*0.1;
    const cellY = props.windowHeight*0.6;
    const cellWidth = props.windowWidth/(divisor*1.2);
    const cellHeight = props.windowHeight/(divisor*1.2);

    const iFactor = props.windowWidth/(divisor*1.2)

    const textCenterX = cellX+cellWidth*0.5;
    const textCenterY = cellY+cellHeight*0.4;

    const fontSize = cellWidth/4;

    const indicesList = Object.entries(props.indices);

    return (
        <Group>
            {indicesList.map((indexTuple,i) => 
            <Group id={"dynamicIndex"+i} key={"dynamicIndex"+i}>
                <Text id={"IndexText"+i} text={indexTuple[0]} x={textCenterX+indexTuple[1]*iFactor - indexTuple[0].toString().length*0.08*cellWidth} y={textCenterY} fontSize={fontSize} />
            </Group>
            )}
        </Group>
    )
};

export default DynamicIndex;
