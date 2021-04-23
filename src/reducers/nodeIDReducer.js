const nodeIDReducer = (nodeID=null, action) => {
    switch (action.type) {
        case 'UPDATE_NODE_ID':
          return action.payload.nodeID ? action.payload.nodeID : nodeID;
        case 'DELETE_NODE_ID':
          return null;
        default:
          return nodeID;
    }
};

export default nodeIDReducer;