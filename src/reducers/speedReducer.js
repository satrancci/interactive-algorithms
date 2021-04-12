const speedReducer = (speed=3, action) => {
    switch (action.type) {
        case 'UPDATE_VISUALIZATION_SPEED':
          return action.payload.speed;
        default:
          return speed;
    }
};

export default speedReducer;