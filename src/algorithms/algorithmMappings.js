import twoSum from './twoSum';
import isPalindrome from './isPalindrome';
import bfs from './bfs';
import dfs from './dfs';

const algorithmMappings = {
    twoSum: {f:twoSum, tags:["Array"], params:{targetVal:''}},
    isPalindrome: {f:isPalindrome, tags:["Array", "LinkedList"], params:{}},
    sudokuSolver: {f:null, tags:["Array"], params:{}},
    BFS: {f:bfs, tags:["Graph", "Tree"], params:{}},
    DFS: {f:dfs, tags:["Graph", "Tree"], params:{}},
};

export default algorithmMappings;


