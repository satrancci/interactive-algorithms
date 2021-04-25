import store from "../../store";
import _ from "lodash";

const joi = require("joi");

const schema = {
  "node-value": joi.object({
    "node-value": joi.string().trim().alphanum().min(1).max(3).required(),
  }),
  "cost": joi.object({
    "cost": joi.number().integer().min(-999).max(999).required(),
  })
};


const graphValuesHelperValidator = (inputName, value) => {
    console.log(`graphValuesHelperValidator received inputname: ${inputName}, value: ${value}`);
    let [newGraph, statusCode, message] = [null, null, null];
    let valueTrimmed = value.trim();
    let res = null;
    switch(inputName) {
        case "node-id":
        case "nodeID1":
        case "nodeID2":
            newGraph = _.cloneDeep(store.getState().graphValues);
            [statusCode, message] = newGraph.nodeExists(valueTrimmed);
            //console.log(`node-id check value: ${valueTrimmed}`);
            return statusCode === 0 ? [0, valueTrimmed] : [1, message];
        case "node-value":
            res = schema[inputName].validate({ [inputName]: value});
            return res["error"] === undefined ? [0, res["value"][inputName]] : [1, res["error"]["message"]];
        case "cost":
            res = schema[inputName].validate({ [inputName]: value});
            return res["error"] === undefined ? [0, res["value"][inputName]] : [1, res["error"]["message"]];
        default:
            return;
    }

}

export default graphValuesHelperValidator;