import twoSum from './array/twoSum';
import isPalindrome from './array/isPalindrome';
import levelOrderTraversal from './tree/levelOrderTraversal';
import preorderTraversal from './tree/preorderTraversal';

const algorithmMappings = {
    twoSum: {f:twoSum, tags:["Array"], params:{targetVal:''}},
    isPalindrome: {f:isPalindrome, tags:["Array", "LinkedList"], params:{}},
    sudokuSolver: {f:null, tags:["Array"], params:{}},
    levelOrderTraversal: {f:levelOrderTraversal, tags:["Tree"], params:{}},
    preorderTraversal: {f:preorderTraversal, tags:["Tree"], params:{}},
};

export default algorithmMappings;


