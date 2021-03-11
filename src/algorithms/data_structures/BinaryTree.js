import treeReducer from "../../reducers/treeReducer";
import BinaryTreeNode from "./BinaryTreeNode";

export default class BinaryTree {
  constructor() {
    this.root = null;
    this.idMap = new Map();
  }

  insert(parentID, value, left=true) {
    const nodeID =
      Math.random().toString(36).substring(2, 3) +
      Math.random().toString(36).substring(2, 3);
    const newNode = new BinaryTreeNode(nodeID, value);
    if (!this.root) {
      this.root = newNode;
      this.idMap[nodeID] = newNode;
    } else {
      const parentNode = this.idMap[parentID];
      if (!parentNode) {
        console.log("this parentID does not exist");
        return;
      }
      if (parentNode.left && parentNode.right) {
        console.log("the parent node already has two children");
        return;
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
  }

  delete(nodeID) {
    if (!this.root) {
      console.log('Tree is empty. There is nothing to delete.');
      return;
    }
    if (!this.idMap[nodeID]) {
      console.log('Node that you want to delete does not exist in the tree');
      return
    }
    if (this.root.id === nodeID) {
      this.idMap.delete(nodeID);
      this.root = null;
      console.log('Root deleted');
      return;
    }
    this.deleteNode(nodeID);
  }

  deleteNode(nodeID) {
    const node = this.idMap[nodeID];
    console.log(`deleteNode(): nodeID ${nodeID} received. node: ${JSON.stringify(node)}`)
    const parentNode = this.idMap[node.parentID];
    if (parentNode.left && parentNode.left.id === nodeID) {
      parentNode.left = null;
      return;
    } else {
      parentNode.right = null;
      return
    }
  }

  modify(nodeID, new_value) {
    if (!this.root) {
      console.log('Tree is empty. There is nothing to modify.');
      return;
    }
    if (!this.idMap[nodeID]) {
      console.log('Node that you want to modify does not exist in the tree');
      return
    }
    const node = this.idMap[nodeID];
    node.value = new_value;
    console.log(`Node ${nodeID}'s has been successfully modified to ${this.idMap[nodeID].value}`)
  }

};
