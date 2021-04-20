const joi = require("joi");

const schema = {
  n: joi.object({
    n: joi.number().integer().min(0).max(6).required(),
  })
};



const fibonaccivalidator = (inputName, value) => {
  console.log(`fibonacciValidator received inputname: ${inputName}, value: ${value}`);
  let res = null;
  switch (inputName) {
      case "n":
        res = schema[inputName].validate({ [inputName]: value});
        return res["error"] === undefined ? [0, res["value"][inputName]] : [1, res["error"]["message"]];
      default:
        return;
  }
};

export default fibonaccivalidator;