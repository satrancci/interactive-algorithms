import store from "../../store";
import _ from "lodash";

const joi = require("joi");

const schema = {
  "node-value": joi.object({
    "node-value": joi.string().trim().alphanum().min(1).max(3).required(),
  })
};


const treeValuesHelperValidator = (inputName, value) => {
    //console.log(`treeValuesHelperValidator received inputname: ${inputName}, value: ${value}`);
    let [newTree, statusCode, message] = [null, null, null];
    let valueTrimmed = value.trim();
    switch(inputName) {
        case "parent-id":
            newTree = _.cloneDeep(store.getState().treeValues);
            const parID = newTree.root === null ? null : valueTrimmed;
            [statusCode, message] = newTree.insert(parID, null);
            return statusCode === 0 ? [0, valueTrimmed] : [1, message];
        case "node-id":
            newTree = _.cloneDeep(store.getState().treeValues);
            [statusCode, message] = newTree.nodeExists(valueTrimmed);
            //console.log(`node-id check value: ${valueTrimmed}`);
            return statusCode === 0 ? [0, valueTrimmed] : [1, message];
        case "node-value":
            const res = schema[inputName].validate({ [inputName]: value});
            return res["error"] === undefined ? [0, res["value"][inputName]] : [1, res["error"]["message"]];
        default:
            return;
    }

}

export default treeValuesHelperValidator;