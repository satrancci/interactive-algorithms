import twoSumGenerator from './random_input_generators/array/twoSumGenerator';
import isPalindromeGenerator from './random_input_generators/array/isPalindromeGenerator';
import levelOrderTraversalGenerator from './random_input_generators/tree/levelOrderTraversalGenerator';
import preorderTraversalGenerator from './random_input_generators/tree/preorderTraversalGenerator';
import inorderTraversalGenerator from './random_input_generators/tree/inorderTraversalGenerator';
import postorderTraversalGenerator from './random_input_generators/tree/postorderTraversalGenerator';
import fibonacciGenerator from './random_input_generators/tree/fibonacciGenerator';
import sudokuSolverGenerator from './random_input_generators/array2d/sudokuSolverGenerator';
import nQueensGenerator from './random_input_generators/array2d/nQueensGenerator';
import longestIncreasingSubsequenceGenerator from './random_input_generators/array/longestIncreasingSubsequenceGenerator';
import editDistanceGenerator from './random_input_generators/array2d/editDistanceGenerator';
import subsetSumGenerator from './random_input_generators/array/subsetSumGenerator';
import huffmanCodingGenerator from './random_input_generators/tree/huffmanCodingGenerator';
import bfsGenerator from './random_input_generators/graph/bfsGenerator';
import dfsGenerator from './random_input_generators/graph/dfsGenerator';
import dijkstraGenerator from './random_input_generators/graph/dijkstraGenerator';
import bellmanFordGenerator from './random_input_generators/graph/bellmanFordGenerator';



const inputGeneratorMappings = {
    twoSum: {f:twoSumGenerator},
    isPalindrome: {f:isPalindromeGenerator},
    levelOrderTraversal: {f:levelOrderTraversalGenerator},
    preorderTraversal: {f:preorderTraversalGenerator},
    inorderTraversal: {f:inorderTraversalGenerator},
    postorderTraversal: {f:postorderTraversalGenerator},
    fibonacci: {f:fibonacciGenerator},
    sudokuSolver: {f:sudokuSolverGenerator},
    nQueens: {f:nQueensGenerator},
    longestIncreasingSubsequence: {f:longestIncreasingSubsequenceGenerator},
    editDistance: {f:editDistanceGenerator},
    subsetSum: {f:subsetSumGenerator},
    huffmanCoding: {f:huffmanCodingGenerator},
    bfs: {f:bfsGenerator},
    dfs: {f:dfsGenerator},
    dijkstra: {f:dijkstraGenerator},
    bellmanFord: {f:bellmanFordGenerator},
};

export default inputGeneratorMappings;


