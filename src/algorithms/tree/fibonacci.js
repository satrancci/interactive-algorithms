import store from '../../store';
import { updateNodeID, updateMessage, assignVisValues } from '../../actions';
import BinaryTreeNode from "../../data_structures/BinaryTreeNode";
import BinaryTree from "../../data_structures/BinaryTree";
import { createNodeID } from "../../data_structures/treeUtils";

import _ from "lodash";


const fibonacci = async () => {

    const {n} = store.getState().inputObj;
    console.log(`fibonacci received n: ${n}`);

    const tree = new BinaryTree();

    const nodeID = createNodeID(tree.idMap);
    const root = new BinaryTreeNode(nodeID, `fib(${n})`);
    tree.root = root;
    store.dispatch(assignVisValues(_.cloneDeep(tree)));
    await fibonacciHelper(tree, root, n);
    store.dispatch(updateMessage(`Fibonacci visualization completed...`));
}

const fibonacciHelper = async (tree, node, n) => {
    const BASE_SLEEP_TIME = 700;
    
    store.dispatch(updateNodeID(node.id));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

    if ( n == 0 || n == 1 ) {
        store.dispatch(updateMessage(`A BASE CASE reached. Can return directly!`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
        node.value = `${n}`;
        const newTree = _.cloneDeep(tree);
        store.dispatch(assignVisValues(newTree));

        store.dispatch(updateMessage(`Recursing...`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

        return;
    }

    const nodeIDLeft = createNodeID(tree.idMap);
    const nodeIDRight = createNodeID(tree.idMap);

    const leftNode = new BinaryTreeNode(nodeIDLeft, `fib(${n-1})`);
    const rightNode = new BinaryTreeNode(nodeIDRight, `fib(${n-2})`);

    node.left = leftNode;
    const newTreeBeforeLeft = _.cloneDeep(tree);
    store.dispatch(assignVisValues(newTreeBeforeLeft));
    
    store.dispatch(updateMessage(`${node.value}: Make first recursive call`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    await fibonacciHelper(tree, node.left, n-1);

    store.dispatch(updateMessage(`Recursing...`));
    store.dispatch(updateNodeID(node.id));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

    const newTreeAfterLeft = _.cloneDeep(tree);
    store.dispatch(assignVisValues(newTreeAfterLeft));

    node.right = rightNode;

    const newTreeBeforeRight = _.cloneDeep(tree);
    store.dispatch(assignVisValues(newTreeBeforeRight));

    store.dispatch(updateMessage(`${node.value}: Make second recursive call`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    await fibonacciHelper(tree, node.right, n-2);

    store.dispatch(updateMessage(`Recursing...`));
    store.dispatch(updateNodeID(node.id));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    
    store.dispatch(updateMessage(`${node.value}: Both recursive calls returned. Current value is the sum of returned values.`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

    node.value = parseInt(node.left.value) + parseInt(node.right.value);
    const newTreeAfterRight = _.cloneDeep(tree);
    store.dispatch(assignVisValues(newTreeAfterRight));

    store.dispatch(updateMessage(`Recursing...`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

}


export default fibonacci;