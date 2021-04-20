const joi = require("joi");

const schema = {
  str1: joi.object({
    str1: joi.string().trim().min(1).max(8).regex(/^[a-z]+$/).required(),
  }),
  str2: joi.object({
    str2: joi.string().trim().min(1).max(8).regex(/^[a-z]+$/).required(),
  }),
};



const editDistanceValidator = (inputName, value) => {
  //console.log(`editDistanceValidator received inputname: ${inputName}, value: ${value}`);
  let res = null;
  switch (inputName) {
      case "str1":
        res = schema[inputName].validate({ [inputName]: value});
        return res["error"] === undefined ? [0, res["value"][inputName]] : [1, res["error"]["message"]];
      case "str2":
        res = schema[inputName].validate({ [inputName]: value});
        return res["error"] === undefined ? [0, res["value"][inputName]] : [1, res["error"]["message"]];
      default:
        return;
  }
};
export default editDistanceValidator;