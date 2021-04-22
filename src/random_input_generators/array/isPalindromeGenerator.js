import { getRandomIntInclusive } from "../utils/inputGeneratorHelpers";

const OPTIONS = [
    "abcdcba",
    "aaaaa",
    "abba",
    "dcbnmmnbcd",
    "ababababababa",
    "abbcbbba"
]

const isPalindromeGenerator = () => {
    const n = OPTIONS.length;
    const idx = getRandomIntInclusive(0,n-1);
    const retObj = {"str": OPTIONS[idx]};
    //console.log(`isPalindromeGenerator retObj: ${JSON.stringify(retObj)}`);
    return retObj;
}

export default isPalindromeGenerator;