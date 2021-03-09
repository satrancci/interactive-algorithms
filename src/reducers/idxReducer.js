const idxReducer = (indices={}, action) => {
    switch (action.type) {
        case 'UPDATE_INDEX':
          let newState = Object.assign(indices, {});
          const [name, index] = action.payload.indexTuple;
          newState[name] = index;
          return newState;
        default:
          return indices;
        
        case 'SOME_OTHER_ACTION':
          return {}
    }
};

export default idxReducer;