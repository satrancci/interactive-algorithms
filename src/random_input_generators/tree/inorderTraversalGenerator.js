import { getRandomIntInclusive } from "../utils/inputGeneratorHelpers";
import treeValuesOptions from "./treeValuesOptions";

const inorderTraversalGenerator = () => {
    const n = treeValuesOptions.length;
    const idx = getRandomIntInclusive(0,n-1);
    const retObj = {treeValues: treeValuesOptions[idx]};
    //console.log(`inorderTraversalGenerator retObj: ${JSON.stringify(retObj)}`);
    return retObj;
}

export default inorderTraversalGenerator;

