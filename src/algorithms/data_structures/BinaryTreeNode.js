module.exports = class BinaryTreeNode {
  constructor(id, value) {
    this.id = id;
    this.value = value;
    this.left = null;
    this.right = null;
  }

  isLeaf() {
    return ((!this.left) && (!this.right));
  }
}