import React, { useEffect } from 'react';
import { Group, Circle, Line, Text } from 'react-konva';


const TreeNode = (props) => {

    const {i, x, y, val, level} = props;

    console.log('TREE NODE: i:', i, 'x:', x, 'y:', y, 'val:', val, 'level:', level);

    const fontSize = 15;
    const radius = 30;

    const nodeID = Math.random().toString(36).substring(2,3)+Math.random().toString(36).substring(2,3);

    return (
        <Group id={"nodeID"+nodeID}>
             <Circle x={x} y={y} radius={radius} fill="green" />
             <Line points={[x-radius, y+radius*0.3, x+radius, y+radius*0.3]} stroke="black" strokeWidth={0.5} />
             <Text text={val} x={x} y={y-radius*0.3} fontSize={fontSize} />
             <Text text={nodeID} x={x} y={y+radius*0.5} fontSize={fontSize*0.75} />
        </Group>
        
    );
};

export default TreeNode;