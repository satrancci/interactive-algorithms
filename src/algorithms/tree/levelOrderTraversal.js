import store from "../../store";
import { updateNodeID, updateMessage } from "../../actions";

const Deque = require("collections/deque");

const levelOrderTraversal = async (paramsObj) => {
  const tree = paramsObj["tree"];
  const root = tree.root;
  levelOrderTraversalHelper(root);
};

const levelOrderTraversalHelper = async (root) => {
  const BASE_SLEEP_TIME = 700;
  const q = new Deque();
  q.push(root);
  let level = 0;

  while (q.length > 0) {
    store.dispatch(updateMessage(`Exploring level ${level}...`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    const levelSize = q.length;
    for (let i = 0; i < levelSize; i++) {
      const node = q.shift();
      store.dispatch(updateNodeID(node.id));
      store.dispatch(updateMessage(`Exploring node ${node.id}`));
      await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
    if (q.length > 0) {
      store.dispatch(updateMessage(`Going to a new level...`));
      await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
      level += 1;
    }
  }
  store.dispatch(updateMessage(`Level order traversal completed...`));
};

export default levelOrderTraversal;
