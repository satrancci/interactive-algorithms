import twoSum from './algorithms/array/twoSum';
import isPalindrome from './algorithms/array/isPalindrome';
import levelOrderTraversal from './algorithms/tree/levelOrderTraversal';
import preorderTraversal from './algorithms/tree/preorderTraversal';
import inorderTraversal from './algorithms/tree/inorderTraversal';
import postorderTraversal from './algorithms/tree/postorderTraversal';
import fibonacci from './algorithms/tree/fibonacci';
import sudokuSolver from './algorithms/array2d/sudokuSolver';
import nQueens from './algorithms/array2d/nQueens';
import longestIncreasingSubsequence from './algorithms/array/longestIncreasingSubsequence';
import editDistance from './algorithms/array2d/editDistance';

const algorithmMappings = {
    twoSum: {f:twoSum, tags:["Array"], params:{targetVal:''}},
    isPalindrome: {f:isPalindrome, tags:["Array"], params:{}},
    sudokuSolver: {f:sudokuSolver, tags:["Array2D"], params:{}},
    levelOrderTraversal: {f:levelOrderTraversal, tags:["Tree"], params:{}},
    preorderTraversal: {f:preorderTraversal, tags:["Tree"], params:{}},
    inorderTraversal: {f:inorderTraversal, tags:["Tree"], params:{}},
    postorderTraversal: {f:postorderTraversal, tags:["Tree"], params:{}},
    fibonacci: {f:fibonacci, tags:["Tree"], params:{}},
    nQueens: {f:nQueens, tags:["Array2D"], params:{}},
    longestIncreasingSubsequence: {f:longestIncreasingSubsequence, tags:["Array"], params:{}},
    editDistance: {f:editDistance, tags:["Array2D"], params:{}}
};

export default algorithmMappings;


