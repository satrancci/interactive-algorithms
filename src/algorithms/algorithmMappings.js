import twoSum from './twoSum';
import isPalindrome from './isPalindrome';

const algorithmMappings = {
    twoSum: {f:twoSum, tags:["Array"], params:{targetVal:''}},
    isPalindrome: {f:isPalindrome, tags:["Array", "LinkedList"], params:{}},
    sudokuSolver: {f:null, tags:["Array"], params:{}},
    BFS: {f:null, tags:["Graph", "Tree"], params:{}},
    DFS: {f:null, tags:["Graph", "Tree"], params:{}},
};

export default algorithmMappings;


