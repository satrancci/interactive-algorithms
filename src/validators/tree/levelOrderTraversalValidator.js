import treeValuesHelperValidator from "./treeValuesHelperValidator";

const levelOrderTraversalValidator = (inputName, value) => {
    //console.log(`levelOrderTraversalValidator received inputname: ${inputName}, value: ${value}`);
    return treeValuesHelperValidator(inputName, value);
}

export default levelOrderTraversalValidator;