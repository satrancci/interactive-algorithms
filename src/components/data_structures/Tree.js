import React, { useEffect } from 'react';
import { Group, Rect, Text } from 'react-konva';

import TreeNode from './TreeNode';


const Tree = (props) => {
    const {values, x, offset, level, isRoot, windowCenter} = props;


    if (!values || !values.length) {
        console.log('returning');
        return null;
    }

    
    //console.log('isRoot:', isRoot);
    //console.log('x:', x);
    console.log('values received:', values);
    console.log('level:', level);
    //console.log('offset:', offset);

    const levelOffset = 2**(level+1);
    console.log('levelOffset:', levelOffset);
    const y = 50;

    console.log('windowCenter:', windowCenter);
    const distOffset = windowCenter*1.5/levelOffset;
    console.log('distOffset:', distOffset);

    return (
        <Group>
        {values.map((val, i) => {
            return (
                <Group>
                    {/*console.log(`mapping over... val.value: ${val.value}, i: ${i}`) */}

                    {/* Drawing current node */}
                    {isRoot ? <TreeNode i={i} x={x} y={y+level*offset} level={level} val={val.value} parentX={null} parentY={null} /> : null}
                    {(!isRoot) && (i === 0) ? <TreeNode i={i} x={x-distOffset} y={y+level*offset} level={level} val={val.value} parentX={x} parentY={y+(level-1)*offset}/> : null}
                    {(!isRoot) && (i === 1) ? <TreeNode i={i} x={x+distOffset} y={y+level*offset} level={level} val={val.value} parentX={x} parentY={y+(level-1)*offset}/> : null}
                    {/* Recursing */} 
                    {/*<Tree values={val.children} offset={offset} level={level+1} x={x/2} isRoot={false} />*/}
                    {isRoot ? <Tree values={val.children} offset={offset} level={level+1} x={x} isRoot={false} windowCenter={windowCenter}/> : null }
                    {(!isRoot) && (i === 0) ? <Tree values={val.children} offset={offset} level={level+1} x={x-distOffset} isRoot={false} windowCenter={windowCenter} /> : null }
                    {(!isRoot) && (i === 1) ? <Tree values={val.children} offset={offset} level={level+1} x={x+distOffset} isRoot={false} windowCenter={windowCenter} /> : null }
                </Group>
            )
        })}
        </Group>
    )
}


export default Tree;