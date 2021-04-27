import store from '../../store';
import { updateNodeID, updateMessage, assignVisValues, updateGraph, assignVisitedNodes } from "../../actions";

import _ from "lodash";

import { MinHeap } from "@datastructures-js/heap";

const dijkstra = async () => {
    const BASE_SLEEP_TIME = 500;

    const {graphValues, src, dst} = store.getState().inputObj;
    console.log(`dijkstra received src: ${src}, dst: ${dst}, graphValues: ${JSON.stringify(graphValues)}`);

    store.dispatch(assignVisValues(_.cloneDeep(graphValues)));

    store.dispatch(updateMessage(`The first step is to initialize tentative cost to reach each node from the source ${src}.`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}

    store.dispatch(updateMessage(`The tentative cost for the source node ${src} to reach all other nodes will be infinity`));
    Object.keys(graphValues.graph).map(key => graphValues.graph[key]["value"] = "∞");
    store.dispatch(assignVisValues(_.cloneDeep(graphValues)));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}

    store.dispatch(updateMessage(`and the tentative cost to reach itself will be set to 0 (naturally!)`));
    graphValues.graph[src]["value"] = 0;
    store.dispatch(assignVisValues(_.cloneDeep(graphValues)));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}

    const visited = new Set();

    const prev = {};
    prev[src] = null;

    store.dispatch(updateMessage(`Initialize an empty SET "visited" that will help us keep track of visited nodes`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed / 2));
    if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}

    store.dispatch(updateMessage(`Further, initialize a PRIORITY QUEUE`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed / 2));
    if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
    store.dispatch(updateMessage(`which will allow us to choose the most promising node to explore at each iteration`));
    const pq = new MinHeap();
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}

    store.dispatch(updateMessage(`Add source node ${src} to the priority queue`));
    pq.insert(graphValues.graph[src]["value"], src); // value is 0
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed * 1.5));
    if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}

    store.dispatch(updateMessage(`Iterate until smallest cost to reach each node in the graph is computed`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
    
    while (pq.size() > 0) {
        store.dispatch(updateMessage(`pq: ${JSON.stringify(pq["_nodes"])}`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
        if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
        store.dispatch(updateMessage(`Pop node with the smallest cost`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed / 2));
        if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
        const popped = pq.extractRoot();
        const dist = popped["key"];
        const node = popped["value"];
        store.dispatch(updateMessage(`Popped node ${node} with cost ${dist}`));
        store.dispatch(updateNodeID(node));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
        if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
        if (visited.contains(node)) {
            store.dispatch(updateMessage(`${node} has been already visited!`));
            await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
            if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
            continue;            
        }
        store.dispatch(updateMessage(`Mark ${node} as visited. ${dist} is the smallest cost to reach ${node}. We can't do better!`));
        visited.add(node);
        store.dispatch(assignVisitedNodes(_.cloneDeep(visited)));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
        if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}

        const neighbors = Object.keys(graphValues.graph[node]["edges"]);
        store.dispatch(updateMessage(`Explore neighbors of ${node}: [${neighbors}]`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
        if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}

        for (let i = 0; i < neighbors.length; i++) {
            const candidate = neighbors[i];
            let candidateDist = graphValues.graph[candidate]["value"];
            store.dispatch(updateMessage(`Node ${candidate} has cost ${candidateDist}`));
            await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
            if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
            candidateDist = candidateDist === "∞" ? Infinity : candidateDist;
            const prevPlusEdgeCostDist = dist + graphValues.graph[node]["edges"][candidate];
            store.dispatch(updateMessage(`Compare it with: (cost to reach ${node} + cost of edge ${node}-${candidate})`));
            await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
            if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
            store.dispatch(updateMessage(`which is ${dist}+${graphValues.graph[node]["edges"][candidate]} = ${prevPlusEdgeCostDist}`));
            await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
            if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}

            if (prevPlusEdgeCostDist < candidateDist) {
                store.dispatch(updateMessage(`The new cost is smaller than the current cost. Update.`));
                graphValues.graph[candidate]["value"] = prevPlusEdgeCostDist;
                store.dispatch(assignVisValues(_.cloneDeep(graphValues)));
                await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
                if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
                store.dispatch(updateMessage(`Add (${prevPlusEdgeCostDist}, ${candidate}) to the priority queue`));
                pq.insert(prevPlusEdgeCostDist,candidate);
                prev[candidate] = node;
                await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
                if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
            } else {
                store.dispatch(updateMessage(`The new cost is NOT smaller than the current cost. DO NOT update.`));
                await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
                if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
            }

      }
    }
    if (!visited.contains(dst)) {
        store.dispatch(updateMessage(`There is NO PATH from ${src} to ${dst}!`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
        return;
    }
    let parent = dst;
    const path = [];
    path.push(parent);
    while (parent !== src) {
        parent = prev[parent];
        path.push(parent);
    }
    const shortestPathFromSrcToDst = path.reverse().join("-->");
    store.dispatch(updateMessage(`Shortest path from ${src} to ${dst}: ${shortestPathFromSrcToDst} with cost ${graphValues.graph[dst]["value"]}`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}

    store.dispatch(updateGraph(_.cloneDeep(graphValues)));

}

export default dijkstra;