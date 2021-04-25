export default class Graph {
  constructor() {
    this.graph = {}
    this.length = 0
    this.maxLength = 12
  }

  nodeExists(nodeID){
    const exists = this.graph[nodeID];
    return exists ? [0, ""] : [1, `The node "${nodeID}" does not exist in the graph.`];
  }

  edgeExists(nodeID1, nodeID2){
    const exists = this.graph[nodeID1]["edges"][nodeID2] && this.graph[nodeID2]["edges"][nodeID1];
    return exists ? [0, ""] : [1, `The edge "${nodeID1}-${nodeID2}" does not exist in the graph.`];
  }

  addNode(value) {
    if (this.length === this.maxLength) {return [1, `Could not insert. The graph cannot have more than ${this.maxLength} nodes.`];}
    this.length += 1;
    this.graph[this.length] = {value: value, edges: {}};
    return [0, `Node ${this.length} has been successfully added to the graph`];
  }

  deleteNode(nodeID) {
    const [statusCode, message] = this.nodeExists(nodeID);
    if (statusCode === 1) {return [statusCode, message];}
    Object.keys(this.graph[nodeID]["edges"]).map(id => delete this.graph[id]["edges"][nodeID]);
    delete this.graph[nodeID];
    this.length -= 1;
    return [0, `nodeID ${nodeID} and all its edges have been deleted from the graph`];
  }

  addEdge(nodeIDFrom, nodeIDTo, cost) {
      if (!this.graph[nodeIDFrom]) {return [1, `nodeID ${nodeIDFrom} does not exist in the graph`];} 
      if (!this.graph[nodeIDTo]) {return [1, `nodeID ${nodeIDTo} does not exist in the graph`];}
      this.graph[nodeIDFrom]["edges"][nodeIDTo] = cost;
      this.graph[nodeIDTo]["edges"][nodeIDFrom] = cost;
      return [0, `Edge ${nodeIDFrom}-${nodeIDTo} with cost ${cost} has been added to the graph`];
  }

  deleteEdge(nodeIDFrom, nodeIDTo) {
      delete this.graph[nodeIDFrom]["edges"][nodeIDTo];
      delete this.graph[nodeIDTo]["edges"][nodeIDFrom];
      return [0, `Edge ${nodeIDFrom}-${nodeIDTo} has been deleted from the graph`];
  }

  modifyEdgeCost(nodeIDFrom, nodeIDTo, newCost) {
      if (!this.graph[nodeIDFrom]) {return [1, `nodeID ${nodeIDFrom} does not exist in the graph`];} 
      if (!this.graph[nodeIDTo]) {return [1, `nodeID ${nodeIDTo} does not exist in the graph`];}
      this.graph[nodeIDFrom]["edges"][nodeIDTo] = newCost;
      this.graph[nodeIDTo]["edges"][nodeIDFrom] = newCost;
      return [0, `The cost of edge ${nodeIDFrom}-${nodeIDTo} has been successfully modified to ${newCost}.`];
  }
  modifyNodeValue(nodeID, newValue) {
      if (!this.graph[nodeID]) {return [1, `nodeID ${nodeID} does not exist in the graph`];}
      this.graph[nodeID]["value"] = newValue;
      return [0, `The new value of nodeID ${nodeID} is ${newValue}.`];
  }

}