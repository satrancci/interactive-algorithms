import treeValuesHelperValidator from "./treeValuesHelperValidator";

const preorderTraversalValidator = (inputName, value) => {
    //console.log(`preorderTraversalValidator received inputname: ${inputName}, value: ${value}`);
    return treeValuesHelperValidator(inputName, value);
}

export default preorderTraversalValidator;