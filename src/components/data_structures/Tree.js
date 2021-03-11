import React from 'react';
import { Group } from 'react-konva';

import TreeNode from './TreeNode';


const Tree = (props) => {
    const {values, x, offset, level, isRoot, windowCenter, child} = props;

    /*
    console.log('values received:', values);
    console.log('child:', child);
    console.log('x:', x);
    console.log('level:', level);
    console.log('offset:', offset);
    console.log('windowCenter:', windowCenter);
    */

    if (!values) {
        return null;
    }


    const levelOffset = 2**(level+1);
    //console.log('levelOffset:', levelOffset);
    const y = 50;

    
    const distOffset = windowCenter/levelOffset;
    //console.log('distOffset:', distOffset);

    return (
        <Group>
        {isRoot ? <TreeNode x={x} y={y+level*offset} id={values.id} level={level} val={values.value} parentX={null} parentY={null} /> : null}
        {child === "left" ? <TreeNode x={x} y={y+level*offset} id={values.id} level={level} val={values.value} parentX={x+distOffset*2} parentY={y+(level-1)*offset}/> : null}
        {child === "right"? <TreeNode x={x} y={y+level*offset} id={values.id} level={level} val={values.value} parentX={x-distOffset*2} parentY={y+(level-1)*offset}/> : null}
        {values.left ? <Tree values={values.left} offset={offset} level={level+1} x={x-distOffset} isRoot={false} windowCenter={windowCenter} child="left" /> : null}
        {values.right? <Tree values={values.right} offset={offset} level={level+1} x={x+distOffset} isRoot={false} windowCenter={windowCenter} child="right" /> : null}
        </Group>
    )
}


export default Tree;