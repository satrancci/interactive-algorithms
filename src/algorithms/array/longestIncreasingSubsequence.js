import store from "../../store";
import { updateIndex, updateMessage, assignVisValues } from "../../actions";
import _ from "lodash";


const longestIncreasingSubsequence = async (paramsObj) => {

    const BASE_SLEEP_TIME = 700;

    const {arr} = store.getState().inputObj;
    console.log(`longestIncreasingSubsequence received arr: ${arr}`);

    const n = arr.length;

    const dp = new Array(n).fill(1);

    store.dispatch(assignVisValues(_.cloneDeep(dp)));

    let maxLength = 1;

    for (let curIdx=1; curIdx<n;curIdx++) {
        store.dispatch(updateIndex(["curIdx", curIdx]));
        store.dispatch(updateMessage(`curIdx: ${curIdx}`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
        for (let prevIdx=0;prevIdx<curIdx;prevIdx++) {
            store.dispatch(updateIndex(["prevIdx", prevIdx]));
            store.dispatch(updateMessage(`prevIdx: ${prevIdx}`));
            await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

            store.dispatch(updateMessage(`Check arr[curIdx] > arr[prevIdx] && dp[curIdx] <= dp[prevIdx]:  ${arr[curIdx]}>${arr[prevIdx]} && ${dp[curIdx]}<=${dp[prevIdx]}`));
            await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

            if (arr[curIdx] > arr[prevIdx] && dp[curIdx] <= dp[prevIdx]) {
                store.dispatch(updateMessage(`arr[curIdx] > arr[prevIdx] && dp[curIdx] <= dp[prevIdx] evaluated to TRUE`));
                await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

                store.dispatch(updateMessage(`Set dp[curIdx] = dp[prevIdx] + 1;`));
                dp[curIdx] = dp[prevIdx] + 1;
                store.dispatch(assignVisValues(_.cloneDeep(dp)));
                await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

                store.dispatch(updateMessage(`Run maxLength = max(maxLength, dp[curIdx]): max(${maxLength}, ${dp[curIdx]})`));
                maxLength = Math.max(maxLength, dp[curIdx]);
                await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
            }
        }
    }

    store.dispatch(updateMessage(`Completed. Length of LIS for arr=[${arr}] is ${maxLength}.`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    return maxLength;
    
};

export default longestIncreasingSubsequence;