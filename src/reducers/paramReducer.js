const paramReducer = (params={}, action) => {
    switch (action.type) {
        case 'ADD_PARAMS':
          return action.payload.params;
        default:
          return params;
        
        case 'SOME_OTHER_ACTION':
          return {}
    }
};

export default paramReducer;