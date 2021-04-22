import { getRandomIntInclusive } from "../utils/inputGeneratorHelpers";

const OPTIONS = [
    [[1,2,3,4,5], 15],
    [[1,2,3,4,5], 16],
    [[1,2,3,4,5], 14],
    [[-5,1,2,3,4,5], 12],
    [[1,2,3,4,5], 6],
    [[1,10,20,30,40], 41],
]

const subsetSumGenerator = () => {
    const n = OPTIONS.length;
    const idx = getRandomIntInclusive(0,n-1);
    const [arr, targetSum] = OPTIONS[idx]
    const retObj = {arr, targetSum};
    //console.log(`subsetSumGenerator retObj: ${JSON.stringify(retObj)}`);
    return retObj;
}

export default subsetSumGenerator;