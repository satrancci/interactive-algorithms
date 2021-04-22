const valsReducer = (values=[], action) => {
    switch (action.type) {
        case 'UPDATE_AT_INDEX':
            const {idx, newVal} = action.payload;
            return values.map((x, i) => i===idx ? newVal : x);
        default:
          return values;
    }
};

export default valsReducer;