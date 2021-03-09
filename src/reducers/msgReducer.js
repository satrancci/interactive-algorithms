const msgReducer = (message="", action) => {
    switch (action.type) {
        case 'UPDATE_MESSAGE':
          return action.payload.message;
        default:
          return message;
    }
};

export default msgReducer;