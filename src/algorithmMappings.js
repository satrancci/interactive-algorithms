import twoSum from './algorithms/array/twoSum';
import isPalindrome from './algorithms/array/isPalindrome';
import levelOrderTraversal from './algorithms/tree/levelOrderTraversal';
import preorderTraversal from './algorithms/tree/preorderTraversal';
import inorderTraversal from './algorithms/tree/inorderTraversal';
import postorderTraversal from './algorithms/tree/postorderTraversal';
import fibonacci from './algorithms/tree/fibonacci';
import sudokuSolver from './algorithms/array2d/sudokuSolver';


const algorithmMappings = {
    twoSum: {f:twoSum, tags:["Array"], params:{targetVal:''}},
    isPalindrome: {f:isPalindrome, tags:["Array"], params:{}},
    sudokuSolver: {f:sudokuSolver, tags:["Array2D"], params:{}},
    levelOrderTraversal: {f:levelOrderTraversal, tags:["Tree"], params:{}},
    preorderTraversal: {f:preorderTraversal, tags:["Tree"], params:{}},
    inorderTraversal: {f:inorderTraversal, tags:["Tree"], params:{}},
    postorderTraversal: {f:postorderTraversal, tags:["Tree"], params:{}},
    fibonacci: {f:fibonacci, tags:["Tree"], params:{}}
};

export default algorithmMappings;


