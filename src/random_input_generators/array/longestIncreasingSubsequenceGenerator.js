import { getRandomIntInclusive } from "../utils/inputGeneratorHelpers";

const OPTIONS = [
    [1,2,3,4,5],
    [1,0,-1,2,-3,3,-5,4],
    [-1,0,0,-2,1,2,3],
    [0,-1,2,-5,10,-5,15],
    [2,4,1,3,6,5,8,7,10,9]
]

const longestIncreasingSubsequenceGenerator = () => {
    const n = OPTIONS.length;
    const idx = getRandomIntInclusive(0,n-1);
    const retObj = {"arr": OPTIONS[idx]};
    // console.log(`longestIncreasingSubsequenceGenerator retObj: ${JSON.stringify(retObj)}`);
    return retObj;
}

export default longestIncreasingSubsequenceGenerator;