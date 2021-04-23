import store from '../../store';
import { updateIndex, updateMessage, assignVisValues } from '../../actions';
import _ from "lodash";

const subsetSum = async () => {

  const {arr, targetSum} = store.getState().inputObj;
  console.log(`subsetSum received arr: ${arr}, ${targetSum}`);

  store.dispatch(assignVisValues(_.cloneDeep(arr)));

  const subsetExists = await subsetSumHelper(arr, targetSum);
  subsetExists ? store.dispatch(updateMessage(`Completed. Subset that sums to ${targetSum} exists in [${arr}].`)) : store.dispatch(updateMessage(`Completed. Subset that sums to ${targetSum} does NOT exist in [${arr}].`));
}

const subsetSumHelper = async (arr, targetSum) => {

    const BASE_SLEEP_TIME = 500;

    store.dispatch(assignVisValues(_.cloneDeep(arr)));
    store.dispatch(updateIndex(["i", 0]));
    store.dispatch(updateMessage(`targetSum: ${targetSum}`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
    if (targetSum === 0) {
        store.dispatch(updateMessage(`targetSum is 0. Return TRUE!`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
        if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
        return true;
    }
    if (targetSum < 0) {
        store.dispatch(updateMessage(`targetSum is negative. Return FALSE!`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
        if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
        return false;
    }
    if (arr.length === 0) {
        store.dispatch(updateMessage(`Array is empty, but targetSum is not 0. Return FALSE!`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
        if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
        return false;
    }

    const arrWith = _.cloneDeep(arr.slice(1));
    const arrWithout = _.cloneDeep(arr.slice(1));
    const val = arr[0];
    store.dispatch(updateMessage(`We have two options: to take or not to take ${val} and recurse`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
    store.dispatch(updateMessage(`Choice 1: Let's TAKE ${arr[0]}. Recursive call: subsetSum([${arr.slice(1)}]), ${targetSum-val}`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
    const resWith = await subsetSumHelper(arrWith, targetSum-val);
    if (resWith) {
        store.dispatch(assignVisValues(_.cloneDeep(arr)));
        store.dispatch(updateMessage(`Subset exists. Returning TRUE...`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
        if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
        return true;
    }
    store.dispatch(updateMessage(`Returning...`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
    store.dispatch(assignVisValues(_.cloneDeep(arr)));

    store.dispatch(updateMessage(`Choice 2: Let's NOT take ${arr[0]}. Recursive call: subsetSum([${arr.slice(1)}]), ${targetSum}`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
    const resWithout = await subsetSumHelper(arrWithout, targetSum);
    if (resWithout) {
        store.dispatch(assignVisValues(_.cloneDeep(arr)));
        store.dispatch(updateMessage(`Subset exists. Returning TRUE...`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
        if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
        return true;
    }
    store.dispatch(updateMessage(`Returning...`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
    store.dispatch(assignVisValues(_.cloneDeep(arr)));
    return false;

}

export default subsetSum;