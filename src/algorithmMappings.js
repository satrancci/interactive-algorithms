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
import subsetSum from './algorithms/array/subsetSum';
import huffmanCoding from './algorithms/tree/huffmanCoding';


const algorithmMappings = {
    twoSum: {f:twoSum, tags:["Array"]},
    isPalindrome: {f:isPalindrome, tags:["Array"]},
    sudokuSolver: {f:sudokuSolver, tags:["Array2D"]},
    levelOrderTraversal: {f:levelOrderTraversal, tags:["Tree"]},
    preorderTraversal: {f:preorderTraversal, tags:["Tree"]},
    inorderTraversal: {f:inorderTraversal, tags:["Tree"]},
    postorderTraversal: {f:postorderTraversal, tags:["Tree"]},
    fibonacci: {f:fibonacci, tags:["Tree"]},
    nQueens: {f:nQueens, tags:["Array2D"]},
    longestIncreasingSubsequence: {f:longestIncreasingSubsequence, tags:["Array"]},
    editDistance: {f:editDistance, tags:["Array2D"]},
    subsetSum: {f:subsetSum, tags:["Array"]},
    huffmanCoding: {f:huffmanCoding, tags:["Tree"]}
};

export default algorithmMappings;


