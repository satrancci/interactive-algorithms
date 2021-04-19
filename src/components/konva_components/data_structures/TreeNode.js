import React from 'react';
import { Group, Circle, Line, Text } from 'react-konva';


const decayTable = {
    2: 0.95,
    3: 0.9,
    4: 0.85,
    5: 0.75,
    6: 0.65,
    7: 0.7,
    8: 0.65,
    9: 0.6
}


const TreeNode = (props) => {

    const {i, x, y, val, level, parentX, parentY, id, curNodeID, canvasWidth, canvasHeight} = props;

    let fontSize = Math.min(canvasWidth, canvasHeight) * 0.02;
    fontSize = level > 3 ? fontSize * decayTable[level] : fontSize;

    let radius = Math.min(canvasWidth, canvasHeight) * 0.04;
    radius = level > 3 ? radius * decayTable[level] : radius;

    return (
        <Group id={"nodeID"+id}>
             <Circle x={x} y={y} radius={radius} fill={curNodeID === id ? "red" : "green"} />
             <Line points={[x-radius, y+radius*0.3, x+radius, y+radius*0.3]} stroke="black" strokeWidth={0.5}/>
             <Text text={val} x={x-val.toString().length*0.08*radius} y={y-radius*0.3} fontSize={fontSize} />
             <Text text={id} x={x} y={y+radius*0.5} fontSize={fontSize*0.75} />
             {parentX && parentY ? <Line points={[parentX, parentY+radius, x, y-radius]} stroke={"black"} strokeWidth={1} /> : null}
        </Group>
        
    );
};

export default TreeNode;