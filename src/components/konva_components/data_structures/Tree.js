import React from "react";
import { Group } from "react-konva";

import TreeNode from "./TreeNode";

const Tree = (props) => {
  const { values, x, offset, level, isRoot, canvasCenter, child, curNodeID } = props;

  /*
    console.log('values received:', values);
    console.log('child:', child);
    console.log('x:', x);
    console.log('level:', level);
    console.log('offset:', offset);
    console.log('canvasCenter:', canvasCenter);
    */

  if (!values) {
    return null;
  }

  const levelOffset = 2 ** (level + 1);
  //console.log('levelOffset:', levelOffset);
  const y = 50;

  const distOffset = canvasCenter / levelOffset;
  //console.log('distOffset:', distOffset);

  return (
    <Group>
      {isRoot ? (
        <TreeNode
          x={x}
          y={y + level * offset}
          id={values.id}
          level={level}
          val={values.value}
          parentX={null}
          parentY={null}
          curNodeID={curNodeID}
        />
      ) : null}
      {child === "left" ? (
        <TreeNode
          x={x}
          y={y + level * offset}
          id={values.id}
          level={level}
          val={values.value}
          parentX={x + distOffset * 2}
          parentY={y + (level - 1) * offset}
          curNodeID={curNodeID}
        />
      ) : null}
      {child === "right" ? (
        <TreeNode
          x={x}
          y={y + level * offset}
          id={values.id}
          level={level}
          val={values.value}
          parentX={x - distOffset * 2}
          parentY={y + (level - 1) * offset}
          curNodeID={curNodeID}
        />
      ) : null}
      {values.left ? (
        <Tree
          values={values.left}
          offset={offset}
          level={level + 1}
          x={x - distOffset}
          isRoot={false}
          canvasCenter={canvasCenter}
          child="left"
          curNodeID={curNodeID}
        />
      ) : null}
      {values.right ? (
        <Tree
          values={values.right}
          offset={offset}
          level={level + 1}
          x={x + distOffset}
          isRoot={false}
          canvasCenter={canvasCenter}
          child="right"
          curNodeID={curNodeID}
        />
      ) : null}
    </Group>
  );
};

export default Tree;
