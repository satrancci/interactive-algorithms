import twoSum from './algorithms/array/twoSum';
import isPalindrome from './algorithms/array/isPalindrome';
import levelOrderTraversal from './algorithms/tree/levelOrderTraversal';
import preorderTraversal from './algorithms/tree/preorderTraversal';
import inorderTraversal from './algorithms/tree/inorderTraversal';

const algorithmMappings = {
    twoSum: {f:twoSum, tags:["Array"], params:{targetVal:''}},
    isPalindrome: {f:isPalindrome, tags:["Array"], params:{}},
    sudokuSolver: {f:null, tags:["2DArray"], params:{}},
    levelOrderTraversal: {f:levelOrderTraversal, tags:["Tree"], params:{}},
    preorderTraversal: {f:preorderTraversal, tags:["Tree"], params:{}},
    inorderTraversal: {f:inorderTraversal, tags:["Tree"], params:{}},
};

export default algorithmMappings;


