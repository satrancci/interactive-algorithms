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


export const updateMessage = (message) => {
    return {
        type: 'UPDATE_MESSAGE',
        payload: {
            message: message
        }
    };
};

export const addValue = (val) => {
    return {
        type: 'ADD_VALUE',
        payload: {
            val: val
        }
    };
};

export const popValue = () => {
    return {
        type: 'POP_VALUE'
    };
};

export const addParams = (params) => {
    return {
        type: 'ADD_PARAMS',
        payload: {
            params:params
        }
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

export const updateNodeID = (nodeID) => {
    return {
        type: 'UPDATE_NODE_ID',
        payload: {
            nodeID: nodeID
        }
    };
};