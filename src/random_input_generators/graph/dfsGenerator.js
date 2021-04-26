import { getRandomIntInclusive } from "../utils/inputGeneratorHelpers";
import graphValuesEqualEdgeCostOptions from "./graphValuesEqualEdgeCostOptions";

const dfsGenerator = () => {
    const n = graphValuesEqualEdgeCostOptions.length;
    const idx = getRandomIntInclusive(0,n-1);
    const retObj = {graphValues: graphValuesEqualEdgeCostOptions[idx]};
    //console.log(`dfsGenerator retObj: ${JSON.stringify(retObj)}`);
    return retObj;
}

export default dfsGenerator;