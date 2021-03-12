import store from '../store';
import { updateNodeID, updateMessage } from '../actions';

const bfs = async (paramsObj) => {
    const tree = paramsObj["tree"];
    const root = tree.root;
    bfsHelper(root);
}

const bfsHelper = async (root) => {
    const level = 0;
    const q = [[root, level]];
    
    while (q.length > 0) {
      //store.dispatch(updateMessage(`Exploring node level ${level}...`));
      await new Promise((r) => setTimeout(r, 2000));
      const n = q.length;
      for (let i=0; i<n; i++) {
        const [node, level] = q.shift(); // ineffiecient; change from array to deque later
        store.dispatch(updateNodeID(node.id));
        store.dispatch(updateMessage(`Exploring node ${node.id}`));
        await new Promise((r) => setTimeout(r, 2000));
        if (node.left) {
            q.push([node.left, level+1]);
        }
        if (node.right) {
            q.push([node.right, level+1]);
        }
        q.length > 0 ? store.dispatch(updateMessage(`Going to a new level...`)) : store.dispatch(updateMessage(`BFS traversal completed...`));
        await new Promise((r) => setTimeout(r, 2000));
        //level += 1;
      }

    }

    
}

export default bfs;