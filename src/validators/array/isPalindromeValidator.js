const Joi = require("joi");

const schema = {
  arr: Joi.object({
    arr: Joi.array().min(1).max(15).required().items(Joi.string().trim().length(1).regex(/[a-z]/))
  })
};


const isPalindromeValidator = (inputName, value) => {
  //console.log(`isPalindromeValidator received inputName: ${inputName}, value: ${value}`);
  let res = null;
  switch (inputName) {
      case "arr":
        let a = value.split(",");
        a = a.length === 1 && a[0] === "" ? [] : a;
        res = schema[inputName].validate({ [inputName]: a});
        return res["error"] === undefined ? [0, res["value"][inputName]] : [1, res["error"]["message"]];
      default:
        return;
  }
};

export default isPalindromeValidator;