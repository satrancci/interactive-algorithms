import BinaryTree from "../../data_structures/BinaryTree";
import BinaryTreeNode from "../../data_structures/BinaryTreeNode";


// tree1
const tree1 = new BinaryTree();
const root1 = new BinaryTreeNode("n1", 1);
root1.left = new BinaryTreeNode("n2", 2);
root1.right = new BinaryTreeNode("n3", 3);
root1.left.left = new BinaryTreeNode("n4", 4);
root1.left.right = new BinaryTreeNode("n5", 5);
root1.right.left = new BinaryTreeNode("n6", 6);
root1.right.right = new BinaryTreeNode("n7", 7);
tree1.root = root1;


// tree2
const tree2 = new BinaryTree();
const root2 = new BinaryTreeNode("n1", 1);
root2.left = new BinaryTreeNode("n2", 2);
root2.right = new BinaryTreeNode("n3", 3);
root2.left.left = new BinaryTreeNode("n4", 4);
root2.left.right = new BinaryTreeNode("n5", 5);
root2.right.left = new BinaryTreeNode("n6", 6);
root2.right.right = new BinaryTreeNode("n7", 7);
root2.left.left.left = new BinaryTreeNode("n8", 8);
root2.left.left.right = new BinaryTreeNode("n9", 9);
root2.left.right.left = new BinaryTreeNode("n10", 10);
root2.left.right.right = new BinaryTreeNode("n11", 11);
root2.right.left.left = new BinaryTreeNode("n12", 12);
root2.right.left.right = new BinaryTreeNode("n13", 13);
root2.right.right.left = new BinaryTreeNode("n14", 14);
root2.right.right.right = new BinaryTreeNode("n15", 15);
tree2.root = root2;


const treeValuesOptions = [
  tree1,
  tree2
]


export default treeValuesOptions;