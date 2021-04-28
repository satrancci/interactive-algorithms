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


// graph3
const graph3 = new Graph();
_.times(7, () => graph3.addNode());
graph3.addEdge("A", "B", 3);
graph3.addEdge("A", "C", 10);
graph3.addEdge("B", "D", 25);
graph3.addEdge("B", "C", 6);
graph3.addEdge("C", "D", 15);
graph3.addEdge("B", "E", 40);
graph3.addEdge("C", "F", 7);
graph3.addEdge("D", "E", 2);
graph3.addEdge("D", "F", 30);
graph3.addEdge("E", "F", 3);


// graph4
const graph4 = new Graph();
_.times(12, () => graph4.addNode());
graph4.addEdge("A", "B", 1);
graph4.addEdge("A", "C", 10);
graph4.addEdge("A", "D", 5);
graph4.addEdge("B", "D", 25);
graph4.addEdge("B", "E", 1);
graph4.addEdge("C", "D", 1);
graph4.addEdge("C", "F", 1);
graph4.addEdge("D", "E", 1);
graph4.addEdge("D", "F", 30);
graph4.addEdge("D", "H", 8);
graph4.addEdge("E", "F", 7);
graph4.addEdge("E", "H", 15);
graph4.addEdge("F", "G", 1);
graph4.addEdge("G", "I", 1);
graph4.addEdge("G", "H", 6);
graph4.addEdge("G", "K", 9);
graph4.addEdge("H", "I", 4);
graph4.addEdge("H", "J", 2);
graph4.addEdge("I", "J", 1);
graph4.addEdge("J", "K", 1);
graph4.addEdge("J", "L", 3);
graph4.addEdge("K", "L", 1);



const graphValuesDiffEdgeCostOptions = [
  graph1,
  graph2,
  graph3,
  graph4
]


export default graphValuesDiffEdgeCostOptions;