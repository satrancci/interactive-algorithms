import Graph from '../data_structures/Graph';

const initialGraph = new Graph();

const graphReducer = (graph=initialGraph, action) => {
    switch (action.type) {
        case 'UPDATE_GRAPH':
          return action.payload.graph;
        case 'DELETE_GRAPH':
          return initialGraph;
        default:
          return graph;
    }
};

export default graphReducer;