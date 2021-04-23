const isVisualizingReducer = (isVisualizing=0, action) => {
    switch (action.type) {
        case 'TOGGLE_IS_VISUALIZING':
          return action.payload.bool;
        default:
          return isVisualizing;
    }
};

export default isVisualizingReducer;