import graphValuesHelperValidator from "./graphValuesHelperValidator";

const bfsValidator = (inputName, value) => {
    //console.log(`bfsValidator received inputname: ${inputName}, value: ${value}`);
    return graphValuesHelperValidator(inputName, value);
}

export default bfsValidator;