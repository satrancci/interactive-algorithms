import store from "../../store";
import { updateNodeID, updateMessage, assignVisValues, assignVisitedNodes } from "../../actions";

import _ from "lodash";

const Deque = require("collections/deque");

const bfs = async () => {
  const BASE_SLEEP_TIME = 700;
  const { graphValues, src } = store.getState().inputObj;
  console.log(`bfs received src: ${src}, graphValues: ${JSON.stringify(graphValues)}`);

  store.dispatch(assignVisValues(_.cloneDeep(graphValues)));

  const visited = new Set();
  const q = new Deque();
  store.dispatch(updateMessage(`Initialize empty QUEUE "q" and SET "visited"`));
  await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
  if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
  store.dispatch(updateMessage(`We need to keep track of visited nodes to avoid being stuck in an infinite loop`));
  await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
  if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}

  q.push(src);
  visited.add(src);
  store.dispatch(updateMessage(`Add ${src} to the queue and mark as visited`));
  store.dispatch(assignVisitedNodes(_.cloneDeep(visited)));
  await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
  if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}

  let level = 0;

  while (q.length > 0) {
    store.dispatch(updateMessage(`Exploring level ${level}...`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
    store.dispatch(updateMessage(`Queue: ${JSON.stringify(q)}`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
    const levelSize = q.length;
    for (let i = 0; i < levelSize; i++) {
      const node = q.shift();
      store.dispatch(updateMessage(`Pop ${node} from the queue`));
      await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
      if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
      store.dispatch(updateNodeID(node));
      store.dispatch(updateMessage(`Exploring node ${node}`));
      await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
      if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
      const neighbors = Object.keys(graphValues.graph[node]["edges"]);
      store.dispatch(updateMessage(`Explore neighbors of ${node}: [${neighbors}]`));
      await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
      if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
      for (let j = 0; j < neighbors.length; j++) {
          const candidate = neighbors[j];
          if (!(visited.contains(candidate))) {
              q.push(candidate);
              visited.add(candidate);
              store.dispatch(updateMessage(`${candidate} hasn't been visited yet. ADD it to the queue and mark as visited!`));
              store.dispatch(assignVisitedNodes(_.cloneDeep(visited)));
              await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
              if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
          } else {
              store.dispatch(updateMessage(`${candidate} has been already visited. DO NOT add it to the queue!`));
              await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
              if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
          }
      }
    }
    level += 1;
    if (q.length === 0) {
        store.dispatch(updateMessage(`Queue is empty. Exit the while loop.`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
        if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
    }
  }

  store.dispatch(updateMessage(`BFS completed.`));
  await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed * 2));
  if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
};

export default bfs;
