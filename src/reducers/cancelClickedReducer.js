const cancelClickedReducer = (cancelClicked=0, action) => {
    switch (action.type) {
        case 'TOGGLE_CANCEL_CLICKED_BOOL':
          return action.payload.bool;
        default:
          return cancelClicked;
    }
};

export default cancelClickedReducer;