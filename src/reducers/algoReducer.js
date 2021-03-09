const algoReducer = (algorithm="", action) => {
    switch (action.type) {
        case 'UPDATE_ALGORITHM':
          return action.payload.algorithm;
        default:
          return algorithm;
        
        case 'SOME_OTHER_ACTION':
          return {}
    }
};

export default algoReducer;