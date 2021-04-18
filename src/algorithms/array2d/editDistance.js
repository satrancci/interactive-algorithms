import store from "../../store";
import { updateIndex, updateMessage, assignVisValues } from "../../actions";
import _ from "lodash";


const editDistance = async () => {

    const BASE_SLEEP_TIME = 700;

    const {str1, str2} = store.getState().inputObj;
    console.log(`editDistance received str1: ${str1}, str2: ${str2}`);

    const m = str1.length;
    const n = str2.length;

    const dp = _.range(m+1).map(() => _.times(n+1));
    store.dispatch(assignVisValues(_.cloneDeep(dp)));

    store.dispatch(updateMessage(`len(COLUMNS) = len(str2)+1 = len("${str2}")+1 = ${str2.length+1}`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

    store.dispatch(updateMessage(`Each COLUMN corresponds to "", ${str2.split("").join(", ")}`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

    store.dispatch(updateMessage(`len(ROWS) = len(str1)+1 = len("${str1}")+1 = ${str1.length+1}`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

    store.dispatch(updateMessage(`Each ROW corresponds to "", ${str1.split("").join(", ")}`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

    store.dispatch(updateMessage(`Set BASE CASE for "" for str2 (COLUMN 0)`));

    for ( let r=1; r<m+1; r++ ) {
        dp[r][0] = r;
        store.dispatch(updateIndex(["i", r]));
        store.dispatch(updateIndex(["j", 0]));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed / 2));
        store.dispatch(assignVisValues(_.cloneDeep(dp)));
    }

    store.dispatch(updateMessage(`Now iterate and fill in the dp matrix starting from dp[1][1]`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

    store.dispatch(updateMessage(`At each step we will compare three values: ← ↑ ↖ and take the minimum`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    
    for ( let r=1; r<m+1; r++ ) {
        for ( let c=1; c<n+1; c++ ) {
            store.dispatch(updateIndex(["i", r]));
            store.dispatch(updateIndex(["j", c]));
            store.dispatch(updateMessage(`Compare ← ↑ ↖ from dp[${r}][${c}]`));
            await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed / 2));
            const left = dp[r][c-1];
            const top = dp[r-1][c];
            const diag = dp[r-1][c-1];
            store.dispatch(updateMessage(`← is dp[${r}][${c-1}]=${left}, ↑ is dp[${r-1}][${c}]=${top} and ↖ is dp[${r-1}][${c-1}]=${diag}`));
            await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
            const minVal = Math.min(left, diag, top);
            store.dispatch(updateMessage(`minVal = min(${left}, ${top}, ${diag}) = ${minVal}`));
            await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
            store.dispatch(updateMessage(`Are str1[r-1] and str2[c-1] equal? str1[${r-1}] === str2[${c-1}] => ${str1[r-1]}===${str2[c-1]} => ${str1[r-1] === str2[c-1]}`));
            await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
            const areEqual = str1[r-1] === str2[c-1];
            if (areEqual) {
                store.dispatch(updateMessage(`Equal, so set dp[r][c] = ↖ value => dp[${r}][${c}]=${diag}`));
                await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed / 2));
                dp[r][c] = diag;
            } else {
                store.dispatch(updateMessage(`Not equal, so set dp[r][c] = minVal+1 => dp[${r}][${c}]=${minVal+1}`));
                await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed / 2));
                dp[r][c] = minVal + 1;
            }
            store.dispatch(assignVisValues(_.cloneDeep(dp)));
            await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
        }
    }
    store.dispatch(assignVisValues(_.cloneDeep(dp)));
    const res = dp[m][n];
    store.dispatch(updateMessage(`Completed: Edit Distance between "${str1}" and "${str2}" is ${res}`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
    return res;

}

export default editDistance;