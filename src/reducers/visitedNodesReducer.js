const emptySet = new Set();

const visitedNodesReducer = (visited=emptySet, action) => {
    switch (action.type) {
        case 'ASSIGN_VISITED_NODES':
          return action.payload.visited;
        case 'DELETE_VISITED_NODES':
            return emptySet;
        default:
          return visited;
    }
};

export default visitedNodesReducer;