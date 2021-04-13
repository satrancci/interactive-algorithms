import store from "../../store";
import { addValue, updateIndex, updateMessage } from "../../actions";

import _ from "lodash";

const BOARD_SIZE = 9;


const sudokuSolver = async (paramsObj) => {

  const BASE_SLEEP_TIME = 100;

  //const vals = paramsObj["values"];
  //console.log(`sudokuSolver received values:${vals}`);

  const matrix = [
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."]    
];

  for (let i = 0; i < matrix.length; i++) {
    store.dispatch(addValue(matrix[i]));
  }


  const isFull = (matrix) => _.flatten(matrix).filter(x => x === ".").length === 0;
  
  const isValid = (x, y, num, matrix) => {
      for ( let i=0; i<BOARD_SIZE; i++ ) {
          if (matrix[x][i] === num || matrix[i][y] === num || matrix[3*(Math.floor(x/3))+Math.floor(i/3)][3*(Math.floor(y/3))+i%3] === num) {
              return false;
          }
      }
      return true;
  }

  const solve = async (matrix) => {
      for ( let i=0; i<BOARD_SIZE; i++ ) {
          for ( let j=0; j<BOARD_SIZE; j++ ) {
              store.dispatch(updateIndex(["i", i]));
              store.dispatch(updateIndex(["j", j]));
              if (matrix[i][j] === ".") {
                  store.dispatch(updateMessage(`Cell [${i}][${j}] is empty`));
                  await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
                  for ( let num=1; num<10; num++ ) {
                      store.dispatch(updateMessage(`Try ${num}`));
                      await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
                      const numStr = num.toString();
                      if (isValid(i,j, numStr, matrix)) {
                          store.dispatch(updateMessage(`${num} is valid, so place it!`));
                          matrix[i][j] = numStr;
                          await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));

                          store.dispatch(updateMessage(`Try to solve recursively.`));
                          await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
                          if (await solve(matrix)) {
                              store.dispatch(updateMessage(`Could solve recursively. Return TRUE`));
                              await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
                              return true;
                          }
                          store.dispatch(updateMessage(`Could not solve recursively. Backtrack.`));
                          matrix[i][j] = ".";
                          store.dispatch(updateIndex(["i", i]));
                          store.dispatch(updateIndex(["j", j]));
                          await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
                      }
                      if (num === 9) {
                          store.dispatch(updateMessage(`Tried all numbers for this cell, but neither worked. Backtrack.`));
                          store.dispatch(updateIndex(["i", i]));
                          store.dispatch(updateIndex(["j", j]));
                          await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
                          return false;
                      }
                  }
              }
          }
      }
      store.dispatch(updateMessage(`Check if there are any empty cells in the matrix`));
      await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
      return isFull(matrix);
  }

  await solve(matrix);
  store.dispatch(updateMessage("Sudoku solved!"));
  await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
};

export default sudokuSolver;
