import treeValuesHelperValidator from "./treeValuesHelperValidator";

const inorderTraversalValidator = (inputName, value) => {
    //console.log(`inorderTraversalValidator received inputname: ${inputName}, value: ${value}`);
    return treeValuesHelperValidator(inputName, value);
}

export default inorderTraversalValidator;