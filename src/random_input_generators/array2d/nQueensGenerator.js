import { getRandomIntInclusive } from "../utils/inputGeneratorHelpers";

const OPTIONS = [2,3,4,5,6,7,8];

const nQueensGenerator = () => {
    const n = OPTIONS.length;
    const idx = getRandomIntInclusive(0,n-1);
    const retObj = {n: OPTIONS[idx]};
    //console.log(`nQueensGenerator retObj: ${JSON.stringify(retObj)}`);
    return retObj;
}

export default nQueensGenerator;