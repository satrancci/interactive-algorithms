import twoSumValidator from './validators/array/twoSumValidator';
import isPalindromeValidator from './validators/array/isPalindromeValidator';
import levelOrderTraversalValidator from './validators/tree/levelOrderTraversalValidator';
import preorderTraversalValidator from './validators/tree/preorderTraversalValidator';
import inorderTraversalValidator from './validators/tree/inorderTraversalValidator';
import postorderTraversalValidator from './validators/tree/postorderTraversalValidator';
import fibonacciValidator from './validators/tree/fibonacciValidator';
import sudokuSolverValidator from './validators/array2d/sudokuSolverValidator';
import nQueensValidator from './validators/array2d/nQueensValidator';
import longestIncreasingSubsequenceValidator from './validators/array/longestIncreasingSubsequenceValidator';
import editDistanceValidator from './validators/array2d/editDistanceValidator';
import subsetSumValidator from './validators/array/subsetSumValidator';
import huffmanCodingValidator from './validators/tree/huffmanCodingValidator';
import bfsValidator from './validators/graph/bfsValidator';
import dfsValidator from './validators/graph/dfsValidator';
import dijkstraValidator from './validators/graph/dijkstraValidator';
import bellmanFordValidator from './validators/graph/bellmanFordValidator';



const validationMappings = {
    twoSum: {f:twoSumValidator},
    isPalindrome: {f:isPalindromeValidator},
    sudokuSolver: {f:sudokuSolverValidator},
    levelOrderTraversal: {f:levelOrderTraversalValidator},
    preorderTraversal: {f:preorderTraversalValidator},
    inorderTraversal: {f:inorderTraversalValidator},
    postorderTraversal: {f:postorderTraversalValidator},
    fibonacci: {f:fibonacciValidator},
    nQueens: {f:nQueensValidator},
    longestIncreasingSubsequence: {f:longestIncreasingSubsequenceValidator},
    editDistance: {f:editDistanceValidator},
    subsetSum: {f:subsetSumValidator},
    huffmanCoding: {f:huffmanCodingValidator},
    bfs: {f:bfsValidator},
    dfs: {f:dfsValidator},
    dijkstra: {f:dijkstraValidator},
    bellmanFord: {f:bellmanFordValidator}
};

export default validationMappings;


