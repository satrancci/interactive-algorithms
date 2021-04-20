const Joi = require("joi");

const schema = {
  str: Joi.object({
    str: Joi.string().trim().min(1).max(15).regex(/^[a-z]+$/).required()
  })
};


const isPalindromeValidator = (inputName, value) => {
  //console.log(`isPalindromeValidator received inputName: ${inputName}, value: ${value}`);
  let res = null;
  switch (inputName) {
      case "str":
        res = schema[inputName].validate({ [inputName]: value});
        return res["error"] === undefined ? [0, res["value"][inputName]] : [1, res["error"]["message"]];
      default:
        return;
  }
};

export default isPalindromeValidator;