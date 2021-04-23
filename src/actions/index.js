export const updateDataStructure = (ds) => {
    return {
        type: 'UPDATE_DATA_STRUCTURE',
        payload: {
            ds: ds
        }
    };
};


export const updateAlgorithm = (algorithm) => {
    return {
        type: 'UPDATE_ALGORITHM',
        payload: {
            algorithm: algorithm
        }
    };
};

// indexTuple of the form ["i", 0]
export const updateIndex = (indexTuple) => {
    return {
        type: 'UPDATE_INDEX',
        payload: {
            indexTuple: indexTuple
        }
    };
};

export const deleteIndices = () => {
    return {
        type: 'DELETE_INDICES'
    };
};


export const updateMessage = (message) => {
    return {
        type: 'UPDATE_MESSAGE',
        payload: {
            message: message
        }
    };
};

export const deleteMessage = () => {
    return {
        type: 'DELETE_MESSAGE'
    };
};


export const updateTree = (tree) => {
    return {
        type: 'UPDATE_TREE',
        payload: {
            tree:tree
        }
    };
};

export const deleteTree = () => {
    return {
        type: 'DELETE_TREE'
    };
};

export const updateNodeID = (nodeID) => {
    return {
        type: 'UPDATE_NODE_ID',
        payload: {
            nodeID: nodeID
        }
    };
};

export const deleteNodeID = () => {
    return {
        type: 'DELETE_NODE_ID',
    };
};


export const updateVisualizationSpeed = (speed) => {
    return {
        type: 'UPDATE_VISUALIZATION_SPEED',
        payload: {
            speed: speed
        }
    };
};


export const assignInputObj = (obj) => {
    return {
        type: 'ASSIGN_INPUT_OBJ',
        payload: {
            obj:obj
        }
    };
};

export const deleteInputObj = () => {
    return {
        type: 'DELETE_INPUT_OBJ'
    }
};

export const assignVisValues = (values) => {
    return {
        type: 'ASSIGN_VIS_VALUES',
        payload: {
            values:values
        }
    };
};

export const deleteVisValues = () => {
    return {
        type: 'DELETE_VIS_VALUES'
    }
};


export const setErrors = (errors) => {
    return {
        type: 'SET_ERRORS',
        payload: {
            errors:errors
        }
    };
};

export const deleteErrors = () => {
    return {
        type: 'DELETE_ERRORS'
    };
};


export const toggleIsVisualizing = (bool) => {
    return {
        type: 'TOGGLE_IS_VISUALIZING',
        payload: {
            bool: bool
        }
    };
};

export const toggleCancelClicked = (bool) => {
    return {
        type: 'TOGGLE_CANCEL_CLICKED_BOOL',
        payload: {
            bool: bool
        }
    };
};


export const updateStateAfterCancel = () => (dispatch) => {
    dispatch(deleteIndices());
    dispatch(deleteMessage());
    dispatch(deleteTree());
    dispatch(deleteNodeID());
    dispatch(updateVisualizationSpeed(3));
    dispatch(deleteInputObj());
    dispatch(deleteVisValues());
    dispatch(deleteErrors());
    dispatch(deleteNodeID());
    dispatch(toggleIsVisualizing(0));
    dispatch(toggleCancelClicked(0));
}


