import store from '../../store';
import { updateIndex, updateMessage, assignVisValues } from '../../actions';
import _ from "lodash";

const isPalindrome = async () => {

   const BASE_SLEEP_TIME = 700;

   const {arr} = store.getState().inputObj;
   console.log(`isPalindrome received arr: ${arr}`);

   store.dispatch(assignVisValues(_.cloneDeep(arr)));
   
   let l = 0;
   store.dispatch(updateIndex(["l", l]));
   store.dispatch(updateMessage(`Left pointer has been set to index ${l}`));
   await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
   let r = arr.length-1;
   store.dispatch(updateIndex(["r", r]));
   store.dispatch(updateMessage(`Right pointer has been set to index ${r}`));
   await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
   while (l < r) {
       store.dispatch(updateMessage(`Comparing values at arr[l] and arr[r]: ${arr[l]}===${arr[r]}`));
       await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
       if (arr[l] !== arr[r]) {
           store.dispatch(updateMessage(`Values are not equal. Returning FALSE`));
           await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
           return false;
       }
       store.dispatch(updateMessage(`Values are equal. Incrementing l and decrementing r...`));
       await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
       l += 1;
       store.dispatch(updateIndex(["l", l]));
       r -= 1;
       store.dispatch(updateIndex(["r", r]));
       store.dispatch(updateMessage(`l is now ${l} and r is ${r}...`));
       await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
   }
   store.dispatch(updateMessage(`The string is a palindrome. Returning TRUE`));
   await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
   return true;
};

export default isPalindrome;