const joi = require("joi");

const schema = {
  sudokuBoard: joi.object({
    sudokuBoard: joi.string().length(81).regex(/^[1-9.]+$/).required(),
  })
};



const sudokuSolverValidator = (inputName, value) => {
  //console.log(`sudokuSolverValidator received inputname: ${inputName}, value: ${value}`);
  let res = null;
  switch (inputName) {
      case "sudokuBoard":
        res = schema[inputName].validate({ [inputName]: value});
        if (res["error"] !== undefined) {return [1, res["error"]["message"]];}
        const arr2d = res["value"][inputName].split("").reduce((rows, key, index) => (index % 9 === 0 ? rows.push([key]) : rows[rows.length-1].push(key)) && rows, []); // one-liner from https://stackoverflow.com/questions/4492385/how-to-convert-simple-array-into-two-dimensional-array-matrix-with-javascript
        return [0, arr2d];
      default:
        return;
  }
}

export default sudokuSolverValidator;