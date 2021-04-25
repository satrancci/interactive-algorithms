import React from "react";
import { Group } from "react-konva";
import GraphNode from "./GraphNode";
import GraphEdge from "./GraphEdge";


const Graph = (props) => {
  
  const {canvasWidth, canvasHeight, graph} = props;

  const offsetX = canvasWidth*0.05;

  const positions = {
    1: { x: offsetX, y: canvasHeight/2 },
    2: { x: offsetX+(canvasWidth*0.1), y: canvasHeight*0.1 },
    3: { x: offsetX+(canvasWidth*0.1), y: canvasHeight*0.9 },
    4: { x: offsetX+(canvasWidth*0.3), y: canvasHeight*0.1 },
    5: { x: offsetX+(canvasWidth*0.3), y: canvasHeight*0.9 },
    6: { x: offsetX+(canvasWidth*0.5), y: canvasHeight*0.2 },
    7: { x: offsetX+(canvasWidth*0.5), y: canvasHeight*0.8 },
    8: { x: offsetX+(canvasWidth*0.7), y: canvasHeight*0.1 },
    9: { x: offsetX+(canvasWidth*0.7), y: canvasHeight*0.9 },
    10: { x: offsetX+(canvasWidth*0.9), y: canvasHeight*0.2 },
    11: { x: offsetX+(canvasWidth*0.9), y: canvasHeight*0.8 },
    12: { x: offsetX+(canvasWidth*0.8), y: canvasHeight/2 },
  };

  const radius = Math.min(Math.abs(canvasWidth), Math.abs(canvasHeight)) * 0.04;

  return (
    <Group>
      {Object.entries(graph).map((edges, i) => {
        return (
          <Group key={i}>
            <GraphNode nodeID={edges[0]} coordinates={positions[edges[0]]} canvasWidth={canvasWidth} canvasHeight={canvasHeight} radius={radius} />
            {Object.entries(edges[1]["edges"]).map((edge, j) => {
              return parseInt(edges[0]) < parseInt(edge[0]) ? (
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
