export const createNodeID = (idMap) => {
    while (1) {
        const nodeID =
        Math.random().toString(36).substring(2, 3) +
        Math.random().toString(36).substring(2, 3);

        if (!(nodeID in idMap)) {
            return nodeID;
        }
    }
}