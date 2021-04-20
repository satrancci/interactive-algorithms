import BinaryTree from '../data_structures/BinaryTree';

const initialTree = new BinaryTree();

const treeReducer = (tree=initialTree, action) => {
    switch (action.type) {
        case 'UPDATE_TREE':
          return action.payload.tree;
        case 'DELETE_TREE':
          return initialTree;
        default:
          return tree;
    }
};

export default treeReducer;