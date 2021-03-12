import store from '../store';
import { updateNodeID, updateMessage } from '../actions';

const dfs = async (paramsObj) => {
    const tree = paramsObj["tree"];
    const root = tree.root;
    const visited = new Set();
    //dfsIterative(root);
    await dfsRecursive(root, visited);
    store.dispatch(updateMessage(`DFS traversal completed...`));

}

const dfsRecursive = async (node, visited) => {
    console.log('visited before:', visited);
    if (!node) {
        return;
    }
    store.dispatch(updateNodeID(node.id));
    console.log('nodeID:', node.id);
    store.dispatch(updateMessage(`Exploring node ${node.id}`));
    console.log('sleeping for 4 seconds...');
    await new Promise((r) => setTimeout(r, 2000));
    console.log('Resuming after sleep...');
    
    visited.add(node.id);
    console.log('visited after:', visited);
    if ((node.left) && (!visited.has(node.left.id))) {
        console.log('checking left...')
        const leftNode = await dfsRecursive(node.left, visited);
        console.log('leftNode.id:', leftNode.id);
        store.dispatch(updateNodeID(leftNode.id));
        store.dispatch(updateMessage(`Recursing...`));
        await new Promise((r) => setTimeout(r, 2000));
    }
    store.dispatch(updateNodeID(node.id));
    await new Promise((r) => setTimeout(r, 2000));
    if ((node.right) && (!visited.has(node.right.id))) {
        console.log('checking right...')
        const rightNode = await dfsRecursive(node.right, visited);
        console.log('rightNode.id:', rightNode.id);
        store.dispatch(updateNodeID(rightNode.id));
        store.dispatch(updateMessage(`Recursing...`));
        await new Promise((r) => setTimeout(r, 2000));
    }
    store.dispatch(updateNodeID(node.id));
    await new Promise((r) => setTimeout(r, 2000));
    console.log('returning', node.id);
    return node;

}

const dfsIterative = async (root) => {

    const q = [[root, 0]];
    const visited = new Set();
    
    while (q.length > 0) {
      await new Promise((r) => setTimeout(r, 2000));
      const n = q.length;
      for (let i=0; i<n; i++) {
        const [node, level] = q.pop();
        if (!visited.has(node.id)) {
            visited.add(node.id);
            console.log(`${node.id} added to set`);
        }
        store.dispatch(updateNodeID(node.id));
        store.dispatch(updateMessage(`Exploring node ${node.id}`));
        await new Promise((r) => setTimeout(r, 2000));

        if (node.right) {
            q.push([node.right, level+1]);
        }
        if (node.left) {
            q.push([node.left, level+1]);
        }
        q.length > 0 ? store.dispatch(updateMessage(`some comment`)) : store.dispatch(updateMessage(`DFS traversal completed...`));
        await new Promise((r) => setTimeout(r, 2000));

      }

    }

    
}

export default dfs;