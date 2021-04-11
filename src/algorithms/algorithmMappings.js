import twoSum from './twoSum';
import isPalindrome from './isPalindrome';
import bfs from './bfs';
import preorderTraversal from './preorderTraversal';

const algorithmMappings = {
    twoSum: {f:twoSum, tags:["Array"], params:{targetVal:''}},
    isPalindrome: {f:isPalindrome, tags:["Array", "LinkedList"], params:{}},
    sudokuSolver: {f:null, tags:["Array"], params:{}},
    BFS: {f:bfs, tags:["Graph", "Tree"], params:{}},
    preorderTraversal: {f:preorderTraversal, tags:["Tree"], params:{}},
};

export default algorithmMappings;


