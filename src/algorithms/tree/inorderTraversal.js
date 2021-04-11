import store from '../../store';
import { updateNodeID, updateMessage } from '../../actions';

const inorderTraversal = async (paramsObj) => {
    const tree = paramsObj["tree"];
    const root = tree.root;
    await inorderTraversalHelper(root);
    store.dispatch(updateMessage(`inorder traversal completed...`));

}

const inorderTraversalHelper = async (node) => {

    if (!node) {
        return;
    }
    store.dispatch(updateNodeID(node.id));
    await new Promise((r) => setTimeout(r, 1000));

    store.dispatch(updateMessage(`Check left child of ${node.id}`));
    await new Promise((r) => setTimeout(r, 2000));

    if (node.left) {
        store.dispatch(updateMessage(`Left child of ${node.id} exists. Going there...`));
        await new Promise((r) => setTimeout(r, 2000));
        await inorderTraversalHelper(node.left);

        store.dispatch(updateMessage(`Recursing...`));
        store.dispatch(updateNodeID(node.id));
        await new Promise((r) => setTimeout(r, 1000));

    } else {
        store.dispatch(updateMessage(`Left child of ${node.id} does not exist.`));
        await new Promise((r) => setTimeout(r, 2000));
    }

    store.dispatch(updateMessage(`Exploring node ${node.id}`));
    await new Promise((r) => setTimeout(r, 2000));


    store.dispatch(updateMessage(`Check right child of ${node.id}`));
    await new Promise((r) => setTimeout(r, 2000));

    if (node.right) {
        store.dispatch(updateMessage(`Right child of ${node.id} exists. Going there...`));
        await new Promise((r) => setTimeout(r, 2000));
        await inorderTraversalHelper(node.right);
    } else {
        store.dispatch(updateMessage(`Right child of ${node.id} does not exist.`));
        await new Promise((r) => setTimeout(r, 2000));
    }

    store.dispatch(updateMessage(`Recursing...`));
    store.dispatch(updateNodeID(node.id));
    await new Promise((r) => setTimeout(r, 1000));

}

export default inorderTraversal;