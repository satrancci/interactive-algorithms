const nodeIDReducer = (nodeID=null, action) => {
    switch (action.type) {
        case 'UPDATE_NODE_ID':
          return action.payload.nodeID ? action.payload.nodeID : nodeID;
        default:
          return nodeID;
        
        case 'SOME_OTHER_ACTION':
          return {}
    }
};

export default nodeIDReducer;