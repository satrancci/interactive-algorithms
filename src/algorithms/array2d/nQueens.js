import store from "../../store";
import { updateIndex, updateMessage, assignVisValues } from "../../actions";
import _ from "lodash";

const nQueens = async () => {

    const BASE_SLEEP_TIME = 200;

    const {n} = store.getState().inputObj;
    console.log(`nQueens received n: ${n}`);

    const isValid = (board, r, c) => {
        for ( let i=0; i<r; i++ ) {
            for ( let j=0; j<n; j++ ) {
                if (board[i][j] === "Q" && (c === j || i+j === r+c || j-i === c-r)) {
                    return false;
                }
            }
        }
        return true;
    }

    const dfs = async (board, r) => {
        if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
        store.dispatch(updateIndex(["j", 0]));
        store.dispatch(updateIndex(["i", r]));
        store.dispatch(updateMessage(`Trying row ${r}`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
        if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
        if (r === n) {
            store.dispatch(updateMessage(`Row ${r} is out of boundaries. Solution FOUND!`));
            await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
            return true;
        }
        for ( let c=0; c<n; c++ ) {
            store.dispatch(updateIndex(["j", c]));
            store.dispatch(updateMessage(`Check if we can place the queen on column ${c} in row ${r}`));
            if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
            await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
            if (isValid(board, r, c)) {
                store.dispatch(updateMessage(`Placement is valid for ${c} on row ${r}. Place the queen!`));
                if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
                await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
                board[r][c] = "Q";
                store.dispatch(assignVisValues(_.cloneDeep(board)));
                await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
                if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
                if (await dfs(board, r+1)) {
                    store.dispatch(updateMessage(`Could solve recursively! Return TRUE!`));
                    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
                    if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
                    return true;
                }
                store.dispatch(updateIndex(["i", r]));
                store.dispatch(updateIndex(["j", c]));
                store.dispatch(updateMessage(`Could not solve recursively. Remove the queen.`));
                await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
                if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
                board[r][c] = ".";
                store.dispatch(assignVisValues(_.cloneDeep(board)));
                await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
                if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
            }
        }
    }

    const board = new Array(n).fill(".").map(() => new Array(n).fill("."));

    store.dispatch(assignVisValues(_.cloneDeep(board)));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

    const sol = await dfs(board, 0);
    if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}

    sol ? store.dispatch(updateMessage(`${n}x${n} Queens puzzle solved!`)) : store.dispatch(updateMessage(`${n}x${n} Queens puzzle has no solution!`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

}

export default nQueens;