import React, { useEffect } from 'react';
import { Group, Circle, Line, Text } from 'react-konva';


const TreeNode = (props) => {

    const {i, x, y, val, level, parentX, parentY, id, curNodeID} = props;

    //console.log('TREE NODE: id:', id, 'x:', x, 'y:', y, 'val:', val, 'level:', level, 'parentX:', parentX, 'parentY:', parentY, 'curNodeID:', curNodeID);

    const fontSize = 15;
    const radius = 30;

    return (
        <Group id={"nodeID"+id}>
             <Circle x={x} y={y} radius={radius} fill={curNodeID === id ? "red" : "green"} />
             <Line points={[x-radius, y+radius*0.3, x+radius, y+radius*0.3]} stroke="black" strokeWidth={0.5}/>
             <Text text={val} x={x} y={y-radius*0.3} fontSize={fontSize} />
             <Text text={id} x={x} y={y+radius*0.5} fontSize={fontSize*0.75} />
             {parentX && parentY ? <Line points={[parentX, parentY+radius, x, y-radius]} stroke={"black"} strokeWidth={1} /> : null}
        </Group>
        
    );
};

export default TreeNode;