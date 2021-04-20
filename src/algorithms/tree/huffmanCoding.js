import store from '../../store';
import { updateMessage, assignVisValues } from '../../actions';
import BinaryTreeNode from "../../data_structures/BinaryTreeNode";
import BinaryTree from "../../data_structures/BinaryTree";

import { MinHeap } from "@datastructures-js/heap";

import _ from "lodash";


const parseInput = () => {
    const {str} = store.getState().inputObj;
    console.log(`huffmanCoding received str: ${str}`);
    const freqsParsed = _.countBy(str);
    return freqsParsed;
}

const createArrWithNodes = (freqs) => {
    let arr = []
    Object.entries(freqs).map(tpl => arr.push(new BinaryTreeNode("", tpl[0]+":"+tpl[1], tpl[1])));
    return arr;
}

const createMinHeap = (arr) => {
    let pq = new MinHeap();
    arr.map(obj => pq.insert(obj.freq, obj));
    return pq;
}


const huffmanCoding = async () => {

    const BASE_SLEEP_TIME = 700;
    
    const freqs = parseInput();
    store.dispatch(updateMessage(`Frequencies: ${JSON.stringify(freqs)}`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

    const arr = createArrWithNodes(freqs);
    store.dispatch(updateMessage(`Create an array containing Nodes with values and frequencies`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    store.dispatch(updateMessage(`nodeArr = ${arr.map(node => JSON.stringify({[node.value]:node.freq}))}`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    store.dispatch(updateMessage(`Create a min heap out of nodeArr`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed / 2));
    const pq = createMinHeap(arr);
    store.dispatch(updateMessage(`Start a while loop until minHeap contains only the ROOT of the Huffman tree`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed / 2));
    
    
    while (pq.size() > 1) {
        store.dispatch(updateMessage(`Iterating...`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed / 4));
        const z = new BinaryTreeNode("", "", null);
        store.dispatch(updateMessage(`Create a new node Z`));

        const treeZBefore = new BinaryTree();
        treeZBefore.root = z;
        store.dispatch(assignVisValues(_.cloneDeep(treeZBefore)));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

        z.left = pq.extractRoot()["value"];
        z.right = pq.extractRoot()["value"];
        store.dispatch(updateMessage(`From minHeap, extract two nodes with smallest frequencies (GREEDY)`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

        const treeLeft = new BinaryTree();
        treeLeft.root = z.left;
        store.dispatch(assignVisValues(_.cloneDeep(treeLeft)));
        store.dispatch(updateMessage(`Node with smallest frequency`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

        const treeRight = new BinaryTree();
        treeRight.root = z.right;
        store.dispatch(assignVisValues(_.cloneDeep(treeRight)));
        store.dispatch(updateMessage(`Node with second smallest frequency`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

        store.dispatch(updateMessage(`Set Z.left to smaller value and Z.right to greater value of the two`));
        const treeZBetween = new BinaryTree();
        treeZBetween.root = z;
        store.dispatch(assignVisValues(_.cloneDeep(treeZBetween)));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

        z.value = z.left.freq + z.right.freq;
        z.freq = z.left.freq + z.right.freq;
        store.dispatch(updateMessage(`Set Z.value and Z.freq to Z.left.freq + Z.right.freq`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

        const treeZAfter = new BinaryTree();
        treeZAfter.root = z;
        store.dispatch(assignVisValues(_.cloneDeep(treeZAfter)));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
        store.dispatch(updateMessage(`Put Z into the minHeap`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
        pq.insert(z.freq, z);
    }

    store.dispatch(updateMessage(`minHeap only has one value: the ROOT! Exit the while loop`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));


    const tree = new BinaryTree();
    tree.root = pq.root()["value"];
    store.dispatch(updateMessage(`This is our tree that encodes and losslessly compresses characters`));
    store.dispatch(assignVisValues(_.cloneDeep(tree)));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

}   


export default huffmanCoding;