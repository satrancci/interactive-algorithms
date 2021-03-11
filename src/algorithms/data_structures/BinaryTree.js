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

};
