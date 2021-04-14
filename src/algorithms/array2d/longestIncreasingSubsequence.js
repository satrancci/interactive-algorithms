import store from "../../store";
import { addValue, updateIndex, updateAtIndex, updateMessage } from "../../actions";


const longestIncreasingSubsequence = async (paramsObj) => {

    const BASE_SLEEP_TIME = 700;
    // get values from paramsObj later, for now hard-coded
    const values = [10,9,2,5,3,7,101,18];

    const n = values.length;

    const dp = new Array(n).fill(1);
    for (let i = 0; i < dp.length; i++) {
        store.dispatch(addValue(dp[i]));
    };

    store.dispatch(updateMessage(`For now, dp algorithms runs on the hard-coded values=[${values}]`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

    let maxLength = 1;

    for (let curIdx=1; curIdx<n;curIdx++) {
        store.dispatch(updateIndex(["curIdx", curIdx]));
        store.dispatch(updateMessage(`curIdx: ${curIdx}`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
        for (let prevIdx=0;prevIdx<curIdx;prevIdx++) {
            store.dispatch(updateIndex(["prevIdx", prevIdx]));
            store.dispatch(updateMessage(`prevIdx: ${prevIdx}`));
            await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

            store.dispatch(updateMessage(`Check values[curIdx] > values[prevIdx] && dp[curIdx] <= dp[prevIdx]:  ${values[curIdx]}>${values[prevIdx]} && ${dp[curIdx]}<=${dp[prevIdx]}`));
            await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

            if (values[curIdx] > values[prevIdx] && dp[curIdx] <= dp[prevIdx]) {
                store.dispatch(updateMessage(`values[curIdx] > values[prevIdx] && dp[curIdx] <= dp[prevIdx] evaluated to TRUE`));
                await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

                store.dispatch(updateMessage(`Set dp[curIdx] = dp[prevIdx] + 1;`));
                dp[curIdx] = dp[prevIdx] + 1;
                store.dispatch(updateAtIndex(curIdx, dp[curIdx]));
                await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

                store.dispatch(updateMessage(`Run maxLength = max(maxLength, dp[curIdx]): max(${maxLength}, ${dp[curIdx]})`));
                maxLength = Math.max(maxLength, dp[curIdx]);
                await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
            }
        }
    }

    store.dispatch(updateMessage(`Completed. Length of LIS for values=[${values}] is ${maxLength}.`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    return maxLength;
    
};

export default longestIncreasingSubsequence;