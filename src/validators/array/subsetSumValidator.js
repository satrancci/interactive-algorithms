const Joi = require("joi");

const schema = {
  arr: Joi.object({
    arr: Joi.array().min(2).max(7).required().items(Joi.number())
  }),
  targetSum: Joi.object({
    targetSum: Joi.number().required(),
  }),
};

const subsetSumValidator = (inputName, value) => {
  console.log(`subsetSumValidator received inputName: ${inputName}, value: ${value}`);
  let res = null;
  switch (inputName) {
      case "arr":
        let a = value.split(",");
        a = a.length === 1 && a[0] === "" ? [] : a;
        res = schema[inputName].validate({ [inputName]: a});
        return res["error"] === undefined ? [0, res["value"][inputName]] : [1, res["error"]["message"]];
      case "targetSum":
        res = schema[inputName].validate({ [inputName]: value});
        return res["error"] === undefined ? [0, res["value"][inputName]] : [1, res["error"]["message"]];
      default:
        return;
  }
};

export default subsetSumValidator;;