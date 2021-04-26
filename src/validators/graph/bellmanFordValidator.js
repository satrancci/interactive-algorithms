import graphValuesHelperValidator from "./graphValuesHelperValidator";

const bellmanFordValidator = (inputName, value) => {
    //console.log(`bellmanFordValidator received inputname: ${inputName}, value: ${value}`);
    return graphValuesHelperValidator(inputName, value);
}

export default bellmanFordValidator;