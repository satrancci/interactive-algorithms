export default class BinaryTreeNode {
  constructor(id, value, freq=null) {
    this.id = id;
    this.freq = freq;
    this.value = value;
    this.parentID = null;
    this.left = null;
    this.right = null;
  }

  isLeaf() {
    return ((!this.left) && (!this.right));
  }
}