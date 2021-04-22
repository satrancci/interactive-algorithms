import { getRandomIntInclusive } from "../utils/inputGeneratorHelpers";

const OPTIONS = [
    [[1,2,3,4,5], 9],
    [[1,2,3,4,5], 10],
    [[-5,1,2,3,4,5], 0],
    [[1,5,10,15,20,25,30,100], 101],
    [[5,2,3,4,1,], 4]
]

const twoSumGenerator = () => {
    const n = OPTIONS.length;
    const idx = getRandomIntInclusive(0,n-1);
    const [arr, targetSum] = OPTIONS[idx]
    const retObj = {arr, targetSum};
    // console.log(`twoSumGenerator retObj: ${JSON.stringify(retObj)}`);
    return retObj;
}

export default twoSumGenerator;