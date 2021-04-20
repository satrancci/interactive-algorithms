const joi = require("joi");

const schema = {
  n: joi.object({
    n: joi.number().integer().min(2).max(8).required(),
  })
};



const nQueensValidator = (inputName, value) => {
  //console.log(`nQueensValidator received inputname: ${inputName}, value: ${value}`);
  let res = null;
  switch (inputName) {
      case "n":
        res = schema[inputName].validate({ [inputName]: value});
        return res["error"] === undefined ? [0, res["value"][inputName]] : [1, res["error"]["message"]];
      default:
        return;
  }
};

export default nQueensValidator;