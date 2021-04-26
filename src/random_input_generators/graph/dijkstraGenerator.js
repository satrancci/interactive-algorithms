import { getRandomIntInclusive } from "../utils/inputGeneratorHelpers";
import graphValuesDiffEdgeCostOptions from "./graphValuesDiffEdgeCostOptions";

const dijkstraGenerator = () => {
    const n = graphValuesDiffEdgeCostOptions.length;
    const idx = getRandomIntInclusive(0,n-1);
    const retObj = {graphValues: graphValuesDiffEdgeCostOptions[idx]};
    //console.log(`dijkstraGenerator retObj: ${JSON.stringify(retObj)}`);
    return retObj;
}

export default dijkstraGenerator;