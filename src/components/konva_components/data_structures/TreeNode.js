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

const calculateLeftEdgeCoord = (x, y, parentX, parentY) => {
    const coordX = x+(parentX-x)/2;
    const coordY = y+(parentY-y)/2+y*0.02;
    return [coordX, coordY];
}

const TreeNode = (props) => {

    const {i, x, y, val, level, parentX, parentY, id, curNodeID, canvasWidth, canvasHeight, edgeVal} = props;


    let fontSize = Math.min(canvasWidth, canvasHeight) * 0.02;
    fontSize = level > 3 ? fontSize * decayTable[level] : fontSize;

    let radius = Math.min(canvasWidth, canvasHeight) * 0.04;
    radius = level > 3 ? radius * decayTable[level] : radius;

    let edgeX = null;
    let edgeY = null;
    if (!(edgeVal === undefined || edgeVal === null)) {
        [edgeX, edgeY] = calculateLeftEdgeCoord(x, y, parentX, parentY);
    }


    return (
        <Group id={"nodeID"+id}>
             <Circle x={x} y={y} radius={radius} fill={curNodeID === id ? "red" : "green"} />
             <Line points={[x-radius, y+radius*0.3, x+radius, y+radius*0.3]} stroke="black" strokeWidth={0.5}/>
             {(edgeVal === undefined || edgeVal === null) ? null : <Text text={edgeVal} x={edgeX} y={edgeY} fontSize={fontSize} />}
             <Text text={val} x={x-val.toString().length*0.08*radius} y={y-radius*0.3} fontSize={fontSize} />
             <Text text={id} x={x} y={y+radius*0.5} fontSize={fontSize*0.75} />
             {parentX && parentY ? <Line points={[parentX, parentY+radius, x, y-radius]} stroke={"black"} strokeWidth={1} /> : null}
        </Group>
        
    );
};

export default TreeNode;