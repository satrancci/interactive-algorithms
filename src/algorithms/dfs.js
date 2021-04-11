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

export default dfs;