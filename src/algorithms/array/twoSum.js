import store from '../../store';
import { updateIndex, updateMessage, assignVisValues } from '../../actions';
import _ from "lodash";

const twoSum = async () => {

  const BASE_SLEEP_TIME = 700;

  const {arr, targetSum} = store.getState().inputObj;
  console.log(`twoSum received arr: ${arr}, ${targetSum}`);

  store.dispatch(assignVisValues(_.cloneDeep(arr)));

  const n = arr.length;
  const m = new Map();
  for (let i = 0; i < n; i++) {
    store.dispatch(updateIndex(["i", i]));
    const complement = targetSum - arr[i];
    store.dispatch(updateMessage(`Complement selected. targetSum-arr[${i}] = ${targetSum}-${arr[i]} = ${complement}`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
    if (complement in m) {
      const ans = [m[complement], i];
      store.dispatch(updateMessage(`Complement (${complement}) found in the dictionary. Indices: [${ans}]`));
      await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
      return ans;
    }
    store.dispatch(updateMessage(`Complement = targetSum-arr[${i}] = ${targetSum}-${arr[i]}=${complement} not found in the dictionary.`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
    m[arr[i]] = i;
  }
  store.dispatch(updateMessage(`A pair whose sum is equal to ${targetSum} is not found in the array.`));
  return [-1, -1];
};


export default twoSum;