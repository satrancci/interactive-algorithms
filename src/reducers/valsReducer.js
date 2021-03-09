const valsReducer = (values=[], action) => {
    switch (action.type) {
        case 'ADD_VALUE':
          return [...values, action.payload.val];
        case 'POP_VALUE':
            return values.slice(0, values.length - 1);
        default:
          return values;
    }
};

export default valsReducer;