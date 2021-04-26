import Graph from "../../data_structures/Graph";
import _ from "lodash";


// graph1
const graph1 = new Graph();
_.times(9, () => graph1.addNode());
graph1.addEdge("A", "B", 1);
graph1.addEdge("A", "C", 1);
graph1.addEdge("B", "D", 1);
graph1.addEdge("D", "E", 1);
graph1.addEdge("E", "F", 1);
graph1.addEdge("D", "F", 1);
graph1.addEdge("F", "H", 1);
graph1.addEdge("H", "G", 1);
graph1.addEdge("H", "I", 1);


// graph2
const graph2 = new Graph();
_.times(12, () => graph2.addNode());
graph2.addEdge("A", "B", 1);
graph2.addEdge("A", "C", 1);
graph2.addEdge("B", "D", 1);
graph2.addEdge("C", "E", 1);
graph2.addEdge("E", "G", 1);
graph2.addEdge("D", "F", 1);
graph2.addEdge("F", "H", 1);
graph2.addEdge("G", "I", 1);
graph2.addEdge("H", "J", 1);
graph2.addEdge("I", "K", 1);
graph2.addEdge("J", "L", 1);
graph2.addEdge("K", "L", 1);



const graphValuesEqualEdgeCostOptions = [
  graph1,
  graph2
]


export default graphValuesEqualEdgeCostOptions;