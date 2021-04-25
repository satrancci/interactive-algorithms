import graphValuesHelperValidator from "./graphValuesHelperValidator";

const dijkstraValidator = (inputName, value) => {
    //console.log(`dijkstraValidator received inputname: ${inputName}, value: ${value}`);
    return graphValuesHelperValidator(inputName, value);
}

export default dijkstraValidator;