const msgReducer = (message="", action) => {
    switch (action.type) {
        case 'UPDATE_MESSAGE':
          return action.payload.message;
        case 'DELETE_TREE':
          return "";
        default:
          return message;
    }
};

export default msgReducer;