import { getRandomIntInclusive } from "../utils/inputGeneratorHelpers";

const OPTIONS = [
    ["abc", "xyz"],
    ["hello", "world"],
    ["abc", "abb"],
    ["chess", "checkers"],
    ["ice", "cream"]
]

const editDistanceGenerator = () => {
    const n = OPTIONS.length;
    const idx = getRandomIntInclusive(0,n-1);
    const [str1, str2] = OPTIONS[idx];
    const retObj = {str1, str2};
    //console.log(`editDistanceGenerator retObj: ${JSON.stringify(retObj)}`);
    return retObj;
}

export default editDistanceGenerator;