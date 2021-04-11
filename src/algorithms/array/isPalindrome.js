import store from '../../store';
import { updateIndex, updateMessage } from '../../actions';

const isPalindrome = async (paramsObj) => {
   // need to add support for two or more indices!
   const values = paramsObj["values"];
   console.log('isPalindrome() received values:', values);
   const s = values.join("");
   console.log('isPalindrome() received s:', s);
   let l = 0;
   store.dispatch(updateIndex(["l", l]));
   store.dispatch(updateMessage(`Left pointer has been set to index ${l}`));
   await new Promise((r) => setTimeout(r, 1000));
   let r = s.length-1;
   store.dispatch(updateIndex(["r", r]));
   store.dispatch(updateMessage(`Right pointer has been set to index ${r}`));
   await new Promise((r) => setTimeout(r, 1000));
   while (l < r) {
       store.dispatch(updateMessage(`Comparing values at s[l] and s[r]: ${s[l]}===${s[r]}`));
       await new Promise((r) => setTimeout(r, 1000));
       if (s[l] !== s[r]) {
           store.dispatch(updateMessage(`Values are not equal. Returning FALSE`));
           await new Promise((r) => setTimeout(r, 1000));
           return false;
       }
       store.dispatch(updateMessage(`Values are equal. Incrementing l and decrementing r...`));
       await new Promise((r) => setTimeout(r, 1000));
       l += 1;
       store.dispatch(updateIndex(["l", l]));
       r -= 1;
       store.dispatch(updateIndex(["r", r]));
       store.dispatch(updateMessage(`l is now ${l} and r is ${r}...`));
       await new Promise((r) => setTimeout(r, 3000));
   }
   store.dispatch(updateMessage(`The string is a palindrome. Returning TRUE`));
   await new Promise((r) => setTimeout(r, 1000));
   return true;
};

export default isPalindrome;