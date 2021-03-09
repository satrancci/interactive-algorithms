const idxReducer = (index=-100, action) => { // =-100 so that it is not visible on canvas by default
    switch (action.type) {
        case 'UPDATE_INDEX':
          return action.payload.index;
        default:
          return index;
        
        case 'SOME_OTHER_ACTION':
          return {}
    }
};

export default idxReducer;