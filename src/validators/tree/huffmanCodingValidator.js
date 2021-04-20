import _ from "lodash";
const joi = require("joi");


const schema = {
  str: joi.object({
    str: joi.string().trim().min(2).max(100).regex(/^[a-z]+$/).required(),
  })
};


const huffmanCodingValidator = (inputName, value) => {
  //console.log(`huffmanCodingValidator received inputname: ${inputName}, value: ${value}`);
  let res = null;
  switch (inputName) {
      case "str":
        res = schema[inputName].validate({ [inputName]: value});
        if (res["error"] !== undefined) {return [1, res["error"]["message"]];}
        const validatedStr = res["value"][inputName];
        const freqsN = Object.keys(_.countBy(validatedStr)).length;
        const uniqueCharsLowerLimit = 2;
        const uniqueCharsUpperLimit = 8;
        if (freqsN > uniqueCharsUpperLimit) {
            return [1, `String should have no more than ${uniqueCharsUpperLimit} unique characters.`];
        }
        if (freqsN < uniqueCharsLowerLimit) {
            return [1, `String should have at least ${uniqueCharsLowerLimit} unique characters.`];
        }
        return [0, validatedStr];
      default:
        return;
  }
}

export default huffmanCodingValidator;