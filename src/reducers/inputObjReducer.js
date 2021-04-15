const inputObjReducer = (obj={}, action) => {
    switch (action.type) {
        case 'ASSIGN_INPUT_OBJ':
          return action.payload.obj;
        case 'DELETE_INPUT_OBJ':
            return {};
        default:
          return obj;
    }
};

export default inputObjReducer;