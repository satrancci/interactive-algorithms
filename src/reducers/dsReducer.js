const dsReducer = (dataStructure="", action) => {
    switch (action.type) {
        case 'UPDATE_DATA_STRUCTURE':
          return action.payload.ds;
        default:
          return dataStructure;
        
        case 'SOME_OTHER_ACTION':
          return {}
    }
};

export default dsReducer;