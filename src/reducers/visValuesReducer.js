const visValuesReducer = (values=[], action) => {
    switch (action.type) {
        case 'ASSIGN_VIS_VALUES':
          return action.payload.values;
        case 'DELETE_VIS_VALUES':
            return [];
        default:
          return values;
    }
};

export default visValuesReducer;