import BinaryTree from '../algorithms/data_structures/BinaryTree';

const initialTree = new BinaryTree();

const treeReducer = (tree=initialTree, action) => {
    switch (action.type) {
        case 'UPDATE_TREE':
          return action.payload.tree;
        default:
          return tree;
        
        case 'SOME_OTHER_ACTION':
          return {}
    }
};

export default treeReducer;