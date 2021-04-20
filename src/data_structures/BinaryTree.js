import BinaryTreeNode from "./BinaryTreeNode";
import { createNodeID } from "./treeUtils";

export default class BinaryTree {
  constructor() {
    this.root = null;
    this.idMap = new Map();
  }

  nodeExists(nodeID) {
    const exists = this.idMap[nodeID];
    return exists ? [0, ""] : [1, `The node "${nodeID}" does not exist in the tree.`];
  }

  insert(parentID, value, left=true) {
    const nodeID = createNodeID(this.idMap);
    const newNode = new BinaryTreeNode(nodeID, value);
    if (!this.root) {
      this.root = newNode;
      this.idMap[nodeID] = newNode;
    } else {
      const parentNode = this.idMap[parentID];
      if (!parentNode) {
        return [1, `The parentID "${parentID}" does not exist in the tree.`];
      }
      if (parentNode.left && parentNode.right) {
        return [1, `The parent node "${parentID}" already has two children.`];
      }
      newNode.parentID = parentNode.id;
      if (parentNode.isLeaf()) {
        if (left) {
          parentNode.left = newNode;
        } else {
          parentNode.right = newNode;
        }
      } else if (parentNode.left) {
        parentNode.right = newNode;
      } else {
        parentNode.left = newNode;
      }
      this.idMap[nodeID] = newNode;
    }
    return [0, ""];
  }

  delete(nodeID) {
    if (!this.root) {
      return [1, `'Tree is empty. There is nothing to delete.`];
    }
    if (!this.idMap[nodeID]) {
      return [1, `Node that you want to delete does not exist in the tree`];
    }
    if (this.root.id === nodeID) {
      this.idMap.delete(nodeID);
      this.root = null;
      //console.log('Root deleted');
      return [0, ""];
    }
    this.deleteNode(nodeID);
  }

  deleteNode(nodeID) {
    const node = this.idMap[nodeID];
    //console.log(`deleteNode(): nodeID ${nodeID} received. node: ${JSON.stringify(node)}`)
    const parentNode = this.idMap[node.parentID];
    if (parentNode.left && parentNode.left.id === nodeID) {
      parentNode.left = null;
      return [0,""];
    } else {
      parentNode.right = null;
      return [0, ""];
    }
  }

  modify(nodeID, new_value) {
    if (!this.root) {
      return [1, `Tree is empty. There is nothing to modify.`];
    }
    if (!this.idMap[nodeID]) {
      return [1, `Node that you want to modify does not exist in the tree`];
    }
    const node = this.idMap[nodeID];
    node.value = new_value;
    //console.log(`Node ${nodeID}'s has been successfully modified to ${this.idMap[nodeID].value}`)
    return [0, ""];
  }

};
