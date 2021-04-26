import React from "react";
import { Group } from "react-konva";
import GraphNode from "./GraphNode";
import GraphEdge from "./GraphEdge";

const Graph = (props) => {
  const { canvasWidth, canvasHeight, graph } = props;

  const offsetX = canvasWidth * 0.05;

  const positions = {
    A: { x: offsetX, y: canvasHeight * 0.5 },
    B: { x: offsetX + canvasWidth * 0.1, y: canvasHeight * 0.2 },
    C: { x: offsetX + canvasWidth * 0.1, y: canvasHeight * 0.8 },
    D: { x: offsetX + canvasWidth * 0.2, y: canvasHeight * 0.5 },
    E: { x: offsetX + canvasWidth * 0.3, y: canvasHeight * 0.2 },
    F: { x: offsetX + canvasWidth * 0.3, y: canvasHeight * 0.8 },
    G: { x: offsetX + canvasWidth * 0.4, y: canvasHeight * 0.5 },
    H: { x: offsetX + canvasWidth * 0.5, y: canvasHeight * 0.2 },
    I: { x: offsetX + canvasWidth * 0.5, y: canvasHeight * 0.8 },
    J: { x: offsetX + canvasWidth * 0.7, y: canvasHeight * 0.2 },
    K: { x: offsetX + canvasWidth * 0.7, y: canvasHeight * 0.8 },
    L: { x: offsetX + canvasWidth * 0.8, y: canvasHeight * 0.5 },
  };

  const radius = Math.min(Math.abs(canvasWidth), Math.abs(canvasHeight)) * 0.04;

  return (
    <Group>
      {Object.entries(graph).map((edges, i) => {
        return (
          <Group key={i}>
            <GraphNode
              nodeID={edges[0]}
              nodeValue={edges[1]["value"]}
              coordinates={positions[edges[0]]}
              canvasWidth={canvasWidth}
              canvasHeight={canvasHeight}
              radius={radius}
            />
            {Object.entries(edges[1]["edges"]).map((edge, j) => {
              return edges[0] < edge[0] ? (
                <GraphEdge
                  key={`edge${j}`}
                  from={edges[0]}
                  to={edge[0]}
                  cost={edge[1]}
                  positions={positions}
                  canvasWidth={canvasWidth}
                  canvasHeight={canvasHeight}
                  radius={radius}
                />
              ) : null;
            })}
          </Group>
        );
      })}
    </Group>
  );
};

export default Graph;
