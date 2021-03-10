import React, { useEffect } from 'react';
import { Group, Rect, Text } from 'react-konva';


const TreeNode = (props) => {

    const {i, x, y, val, level} = props;

    console.log('TREE NODE: i:', i, 'x:', x, 'y:', y, 'val:', val, 'level:', level);

    const fontSize = 20;

    return (
        <Group>
             <Text id={"node"+i} text={val} x={x} y={y} fontSize={fontSize} />
        </Group>
        
    );
};

export default TreeNode;