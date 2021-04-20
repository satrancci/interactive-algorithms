import treeValuesHelperValidator from "./treeValuesHelperValidator";

const postorderTraversalValidator = (inputName, value) => {
    //console.log(`postorderTraversalValidator received inputname: ${inputName}, value: ${value}`);
    return treeValuesHelperValidator(inputName, value);
}

export default postorderTraversalValidator;