import Graph from "../../data_structures/Graph";
import _ from "lodash";


// graph1
const graph1 = new Graph();
_.times(7, () => graph1.addNode());
graph1.addEdge("A", "B", 2);
graph1.addEdge("A", "C", 5);
graph1.addEdge("B", "D", 1);
graph1.addEdge("B", "C", 6);
graph1.addEdge("B", "E", 3);
graph1.addEdge("D", "E", 4);
graph1.addEdge("E", "G", 9);
graph1.addEdge("C", "F", 8);
graph1.addEdge("F", "G", 7);


// graph2
const graph2 = new Graph();
_.times(7, () => graph2.addNode());
graph2.addEdge("A", "B", 9);
graph2.addEdge("A", "C", 2);
graph2.addEdge("B", "D", 3);
graph2.addEdge("B", "C", 6);
graph2.addEdge("C", "D", 2);
graph2.addEdge("B", "E", 1);
graph2.addEdge("C", "F", 9);
graph2.addEdge("D", "E", 5);
graph2.addEdge("D", "F", 6);
graph2.addEdge("E", "F", 3);
graph2.addEdge("E", "G", 7);
graph2.addEdge("F", "G", 4);



const graphValuesDiffEdgeCostOptions = [
  graph1,
  graph2
]


export default graphValuesDiffEdgeCostOptions;