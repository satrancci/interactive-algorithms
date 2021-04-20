const errorReducer = (values=[], action) => {
    switch (action.type) {
        case 'SET_ERRORS':
          return action.payload.errors;
        case 'DELETE_ERRORS':
            return [];
        default:
          return values;
    }
};

export default errorReducer;