const valsReducer = (values=[], action) => {
    switch (action.type) {
        case 'ADD_VALUE':
          return [...values, action.payload.val];
        case 'POP_VALUE':
            return values.slice(0, values.length - 1);
        case 'UPDATE_AT_INDEX':
            const {idx, newVal} = action.payload;
            return values.map((x, i) => i===idx ? newVal : x);
        default:
          return values;
    }
};

export default valsReducer;