import store from '../../store';
import { updateNodeID, updateMessage, assignVisValues } from '../../actions';

import _ from "lodash";

const preorderTraversal = async () => {

    const {treeValues} = store.getState().inputObj;
    console.log(`preorderTraversal received treeValues: ${JSON.stringify(treeValues)}`);

    store.dispatch(assignVisValues(_.cloneDeep(treeValues)));

    const root = treeValues.root;
    await preorderTraversalHelper(root);
    store.dispatch(updateMessage(`Preorder traversal completed...`));

}

const preorderTraversalHelper = async (node) => {

    if (!node) {
        return;
    }
    const BASE_SLEEP_TIME = 700;

    store.dispatch(updateNodeID(node.id));
    store.dispatch(updateMessage(`Exploring node ${node.id}`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

    store.dispatch(updateMessage(`Check left child of ${node.id}`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    
    if (node.left) {
        store.dispatch(updateMessage(`Left child of ${node.id} exists. Going there...`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
        await preorderTraversalHelper(node.left);

        store.dispatch(updateMessage(`Recursing...`));
        store.dispatch(updateNodeID(node.id));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

    } else {
        store.dispatch(updateMessage(`Left child of ${node.id} does not exist.`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    }

    store.dispatch(updateMessage(`Check right child of ${node.id}`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

    if (node.right) {
        store.dispatch(updateMessage(`Right child of ${node.id} exists. Going there...`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
        await preorderTraversalHelper(node.right);
    } else {
        store.dispatch(updateMessage(`Right child of ${node.id} does not exist.`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    }

    store.dispatch(updateMessage(`Recursing...`));
    store.dispatch(updateNodeID(node.id));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

}

export default preorderTraversal;