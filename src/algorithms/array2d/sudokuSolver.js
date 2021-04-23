import store from "../../store";
import { updateIndex, updateMessage, assignVisValues } from "../../actions";
import _ from "lodash";

const BOARD_SIZE = 9;


const sudokuSolver = async () => {

  const BASE_SLEEP_TIME = 100;

  const {sudokuBoard} = store.getState().inputObj;
  console.log(`sudokuSolver received sudokuBoard: ${sudokuBoard}`);

  store.dispatch(assignVisValues(_.cloneDeep(sudokuBoard)));

  const isFull = (sudokuBoard) => _.flatten(sudokuBoard).filter(x => x === ".").length === 0;
  
  const isValid = (x, y, num, sudokuBoard) => {
      for ( let i=0; i<BOARD_SIZE; i++ ) {
          if (sudokuBoard[x][i] === num || sudokuBoard[i][y] === num || sudokuBoard[3*(Math.floor(x/3))+Math.floor(i/3)][3*(Math.floor(y/3))+i%3] === num) {
              return false;
          }
      }
      return true;
  }

  const solve = async (sudokuBoard) => {
      for ( let i=0; i<BOARD_SIZE; i++ ) {
          for ( let j=0; j<BOARD_SIZE; j++ ) {
              if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
              store.dispatch(updateIndex(["i", i]));
              store.dispatch(updateIndex(["j", j]));
              if (sudokuBoard[i][j] === ".") {
                  store.dispatch(updateMessage(`Cell [${i}][${j}] is empty`));
                  await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
                  for ( let num=1; num<10; num++ ) {
                      if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
                      store.dispatch(updateMessage(`Try ${num}`));
                      await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
                      if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
                      const numStr = num.toString();
                      if (isValid(i,j, numStr, sudokuBoard)) {
                          store.dispatch(updateMessage(`${num} is valid, so place it!`));
                          sudokuBoard[i][j] = numStr;
                          store.dispatch(assignVisValues(_.cloneDeep(sudokuBoard)));
                          await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
                          if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}

                          store.dispatch(updateMessage(`Try to solve recursively.`));
                          await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
                          if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
                          if (await solve(sudokuBoard)) {
                              store.dispatch(updateMessage(`Could solve recursively. Return TRUE`));
                              await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
                              if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
                              return true;
                          }
                          store.dispatch(updateMessage(`Could not solve recursively. Backtrack.`));
                          sudokuBoard[i][j] = ".";
                          store.dispatch(assignVisValues(_.cloneDeep(sudokuBoard)));
                          store.dispatch(updateIndex(["i", i]));
                          store.dispatch(updateIndex(["j", j]));
                          await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
                          if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
                      }
                      if (num === 9) {
                          store.dispatch(updateMessage(`Tried all numbers for this cell, but neither worked. Backtrack.`));
                          store.dispatch(updateIndex(["i", i]));
                          store.dispatch(updateIndex(["j", j]));
                          await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
                          if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
                          return false;
                      }
                  }
              }
          }
      }
      store.dispatch(updateMessage(`Check if there are any empty cells in the sudokuBoard`));
      await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
      if (!store.getState().isVisualizing) {throw new Error("Cancel event detected");}
      return isFull(sudokuBoard);
  }

  await solve(sudokuBoard);
  
  store.dispatch(updateMessage("Sudoku solved!"));
  await new Promise((r) => setTimeout(r, BASE_SLEEP_TIME * store.getState().visualizationSpeed));
};

export default sudokuSolver;
