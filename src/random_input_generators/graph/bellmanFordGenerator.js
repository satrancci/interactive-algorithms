import { getRandomIntInclusive } from "../utils/inputGeneratorHelpers";
import graphValuesDiffEdgeCostOptions from "./graphValuesDiffEdgeCostOptions";

const bellmanFordGenerator = () => {
    const n = graphValuesDiffEdgeCostOptions.length;
    const idx = getRandomIntInclusive(0,n-1);
    const retObj = {graphValues: graphValuesDiffEdgeCostOptions[idx]};
    //console.log(`bellmanFordGenerator retObj: ${JSON.stringify(retObj)}`);
    return retObj;
}

export default bellmanFordGenerator;