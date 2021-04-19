import React from "react";
import { Group } from "react-konva";

import TreeNode from "./TreeNode";

const displayBinaryEdges = ["huffmanCoding"];


const Tree = (props) => {
  const { values, x, offset, level, isRoot, canvasCenter, child, curNodeID, algorithm } = props;
  const maxLevel = Math.max(props.maxLevel, level);

  if (!values) {
    return null;
  }

  const decayMultiplier = 2.0;
  const levelOffset = decayMultiplier ** (level + 1);
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
          canvasWidth={props.canvasWidth}
          canvasHeight={props.canvasHeight}
          maxLevel={maxLevel}
          edgeVal={null}
        />
      ) : null}
      {child === "left" ? (
        <TreeNode
          x={x}
          y={y + level * offset}
          id={values.id}
          level={level}
          val={values.value}
          parentX={x + distOffset * decayMultiplier}
          parentY={y + (level - 1) * offset}
          curNodeID={curNodeID}
          canvasWidth={props.canvasWidth}
          canvasHeight={props.canvasHeight}
          maxLevel={maxLevel}
          edgeVal={displayBinaryEdges.includes(algorithm) ? 0 : null}
        />
      ) : null}
      {child === "right" ? (
        <TreeNode
          x={x}
          y={y + level * offset}
          id={values.id}
          level={level}
          val={values.value}
          parentX={x - distOffset * decayMultiplier}
          parentY={y + (level - 1) * offset}
          curNodeID={curNodeID}
          canvasWidth={props.canvasWidth}
          canvasHeight={props.canvasHeight}
          maxLevel={maxLevel}
          edgeVal={displayBinaryEdges.includes(algorithm) ? 1 : null}
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
          canvasWidth={props.canvasWidth}
          canvasHeight={props.canvasHeight}
          maxLevel={maxLevel}
          algorithm={algorithm}
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
          canvasWidth={props.canvasWidth}
          canvasHeight={props.canvasHeight}
          maxLevel={maxLevel}
          algorithm={algorithm}
        />
      ) : null}
    </Group>
  );
};

export default Tree;
