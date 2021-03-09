import React from 'react';
import { Group, Circle } from 'react-konva';

const DynamicIndex = (props) => {

    return (
        <Group>
            {<Circle x={125+props.index*50} y={200} radius={10} fill="red"/>}
        </Group>
    )
};

export default DynamicIndex;
