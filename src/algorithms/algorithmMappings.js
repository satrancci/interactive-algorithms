import twoSum from './twoSum';
import isPalindrome from './isPalindrome';
import levelOrderTraversal from './levelOrderTraversal';
import preorderTraversal from './preorderTraversal';

const algorithmMappings = {
    twoSum: {f:twoSum, tags:["Array"], params:{targetVal:''}},
    isPalindrome: {f:isPalindrome, tags:["Array", "LinkedList"], params:{}},
    sudokuSolver: {f:null, tags:["Array"], params:{}},
    levelOrderTraversal: {f:levelOrderTraversal, tags:["Tree"], params:{}},
    preorderTraversal: {f:preorderTraversal, tags:["Tree"], params:{}},
};

export default algorithmMappings;


