const idxReducer = (indices={}, action) => {
    switch (action.type) {
        case 'UPDATE_INDEX':
          let newState = Object.assign(indices, {});
          const [name, index] = action.payload.indexTuple;
          newState[name] = index;
          return newState;
        case 'DELETE_INDICES':
          return {};
        default:
          return indices;
    }
};

export default idxReducer;