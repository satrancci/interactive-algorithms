import graphValuesHelperValidator from "./graphValuesHelperValidator";

const dfsValidator = (inputName, value) => {
    //console.log(`dfsValidator received inputname: ${inputName}, value: ${value}`);
    return graphValuesHelperValidator(inputName, value);
}

export default dfsValidator;