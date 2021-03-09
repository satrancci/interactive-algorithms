import store from '../store';
import { updateIndex, updateMessage } from '../actions';



const twoSum = async (paramsObj) => {
  const vals = paramsObj["values"];
  const targetVal = paramsObj["targetVal"];
  console.log(`twoSum received values:${vals}, targetVal:${targetVal}`);
  const n = vals.length;
  const m = new Map();
  for (let i = 0; i < n; i++) {
    store.dispatch(updateIndex(["i", i]));
    const complement = targetVal - vals[i];
    store.dispatch(updateMessage(`Complement selected. targetValue-vals[${i}] = ${targetVal}-${vals[i]} = ${complement}`));
    await new Promise((r) => setTimeout(r, 3000));
    if (complement in m) {
      const ans = [m[complement], i];
      store.dispatch(updateMessage(`complement (${complement}) found in the dictionary. Answer: [${ans}]`));
      await new Promise((r) => setTimeout(r, 2000));
      return ans;
    }
    store.dispatch(updateMessage(`complement = targetValue-vals[${i}] = ${targetVal}-${vals[i]}=${complement} not found in the dictionary.`));
    await new Promise((r) => setTimeout(r, 2000));
    m[vals[i]] = i;
  }
  store.dispatch(updateMessage(`A pair that whose sum is equal to ${targetVal} is not found in the array.`));
  return [-1, -1];
};


export default twoSum;