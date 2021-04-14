import store from "../../store";
import { addValue, updateIndex, updateMessage } from "../../actions";


const nQueens = async (paramsObj) => {

    const BASE_SLEEP_TIME = 200;
    // get N from paramsObj later, for now hard-coded
    const n = 8;

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
        store.dispatch(updateIndex(["j", 0]));
        store.dispatch(updateIndex(["i", r]));
        store.dispatch(updateMessage(`Trying row ${r}`));
        await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
        if (r === n) {
            store.dispatch(updateMessage(`Row ${r} is out of boundaries. Solution FOUND!`));
            await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
            return true;
        }
        for ( let c=0; c<n; c++ ) {
            store.dispatch(updateIndex(["j", c]));
            store.dispatch(updateMessage(`Check if we can place the queen on column ${c} in row ${r}`));
            await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
            if (isValid(board, r, c)) {
                store.dispatch(updateMessage(`Placement is valid for ${c} on row ${r}. Place the queen!`));
                await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
                board[r][c] = "Q";
                await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
                if (await dfs(board, r+1)) {
                    store.dispatch(updateMessage(`Could solve recursively! Return TRUE!`));
                    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
                    return true;
                }
                store.dispatch(updateIndex(["i", r]));
                store.dispatch(updateIndex(["j", c]));
                store.dispatch(updateMessage(`Could not solve recursively. Remove the queen.`));
                await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
                board[r][c] = ".";
                await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
            }
        }
    }

    const board = new Array(n).fill(".").map(() => new Array(n).fill("."));

    for (let i = 0; i < board.length; i++) {
        store.dispatch(addValue(board[i]));
    };
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

    const sol = await dfs(board, 0);

    sol ? store.dispatch(updateMessage(`${n}x${n} Queens puzzle solved!`)) : store.dispatch(updateMessage(`${n}x${n} Queens puzzle has no solution!`));
    await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));


}

export default nQueens;