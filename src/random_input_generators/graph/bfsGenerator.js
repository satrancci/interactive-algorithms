import { getRandomIntInclusive } from "../utils/inputGeneratorHelpers";
import graphValuesEqualEdgeCostOptions from "./graphValuesEqualEdgeCostOptions";

const bfsGenerator = () => {
    const n = graphValuesEqualEdgeCostOptions.length;
    const idx = getRandomIntInclusive(0,n-1);
    const retObj = {graphValues: graphValuesEqualEdgeCostOptions[idx]};
    //console.log(`bfsGenerator retObj: ${JSON.stringify(retObj)}`);
    return retObj;
}

export default bfsGenerator;