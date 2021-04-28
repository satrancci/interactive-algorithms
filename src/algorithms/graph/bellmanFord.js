import store from '../../store';
import { updateNodeID, updateMessage, assignVisValues, updateGraph } from "../../actions";

import _ from "lodash";

const bellmanFord = async () => {
    const BASE_SLEEP_TIME = 500;

    const {graphValues, src, dst} = store.getState().inputObj;
    console.log(`bellmanFord received src: ${src}, dst: ${dst}, graphValues: ${JSON.stringify(graphValues)}`);

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

    const prev = {};
    prev[src] = null;

    const nodes = Object.keys(graphValues.graph);
    const n = nodes.length;
    store.dispatch(updateMessage(`We will relax all edges |N-1| times, where |N| is the number of nodes: |${n}-1| = ${n-1}`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}

    for (let i=1; i<n; i++) {
        store.dispatch(updateMessage(`Iteration ${i}/${n-1}`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
        for (let j=0;j<n; j++) {
            const node = nodes[j];
            store.dispatch(updateNodeID(node));
            const dist = graphValues.graph[node]["value"];
            const neighbors = Object.keys(graphValues.graph[node]["edges"]);
            store.dispatch(updateMessage(`Explore outgoing edges of ${node}: [${neighbors}]`));
            await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
            for (let k=0; k<neighbors.length; k++) {
                const candidate = neighbors[k];
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
                    prev[candidate] = node;
                } else {
                    store.dispatch(updateMessage(`The new cost is NOT smaller than the current cost. DO NOT update.`));
                    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
                    if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
                }
            
            } 
        }
    }

    // check for negative cycle
    store.dispatch(updateMessage(`Now check if a negative cycle exists in the graph`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    for (let j=0;j<n; j++) {
        const node = nodes[j];
        store.dispatch(updateNodeID(node));
        const dist = graphValues.graph[node]["value"];
        const neighbors = Object.keys(graphValues.graph[node]["edges"]);
        store.dispatch(updateMessage(`Explore outgoing edges of ${node}: [${neighbors}]`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
        for (let k=0; k<neighbors.length; k++) {
            const candidate = neighbors[k];
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
                store.dispatch(updateMessage(`The new cost is smaller than the current cost`));
                await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
                if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
                store.dispatch(updateMessage(`A negative cycle exists!`));
                await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
                if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
                store.dispatch(updateGraph(_.cloneDeep(graphValues)));
                return;
            } 
        } 
    }    
    // end of checking for negative cycle

    store.dispatch(updateMessage(`A negative cycle does NOT exist`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}


    if (graphValues.graph[dst]["value"] === "∞") {
        store.dispatch(updateMessage(`There is NO PATH from ${src} to ${dst}!`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
        store.dispatch(updateGraph(_.cloneDeep(graphValues)));
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

export default bellmanFord;