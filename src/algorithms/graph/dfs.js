import store from "../../store";
import { updateNodeID, updateMessage, assignVisValues, assignVisitedNodes } from "../../actions";

import _ from "lodash";

const dfs = async () => {
  const BASE_SLEEP_TIME = 700;
  const { graphValues, src } = store.getState().inputObj;
  console.log(`dfs received src: ${src}, graphValues: ${JSON.stringify(graphValues)}`);

  store.dispatch(assignVisValues(_.cloneDeep(graphValues)));

  const visited = new Set();
  const stack = [];
  store.dispatch(updateMessage(`Initialize empty STACK "stack" and SET "visited"`));
  await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
  if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
  store.dispatch(updateMessage(`We need to keep track of visited nodes to avoid being stuck in an infinite loop`));
  await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
  if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}

  stack.push(src);
  visited.add(src);
  store.dispatch(updateMessage(`Add ${src} to the stack and mark as visited`));
  store.dispatch(assignVisitedNodes(_.cloneDeep(visited)));
  await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
  if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}


  while (stack.length > 0) {
    store.dispatch(updateMessage(`Stack: ${JSON.stringify(stack)}`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
    const levelSize = stack.length;
    for (let i = 0; i < levelSize; i++) {
      const node = stack.pop();
      store.dispatch(updateMessage(`Pop ${node} from the stack`));
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
              stack.push(candidate);
              visited.add(candidate);
              store.dispatch(updateMessage(`${candidate} hasn't been visited yet. ADD it to the stack and mark as visited!`));
              store.dispatch(assignVisitedNodes(_.cloneDeep(visited)));
              await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
              if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
          } else {
              store.dispatch(updateMessage(`${candidate} has been already visited. DO NOT add it to the stack!`));
              await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
              if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
          }
      }
    }

    if (stack.length === 0) {
        store.dispatch(updateMessage(`Stack is empty. Exit the while loop.`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
        if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
    }
  }

  store.dispatch(updateMessage(`DFS completed.`));
  await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed * 2));
  if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
};

export default dfs;