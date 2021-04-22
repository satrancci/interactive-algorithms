import { getRandomIntInclusive } from "../utils/inputGeneratorHelpers";

const OPTIONS = [0,1,2,3,4,5,6];

const fibonacciGenerator = () => {
    const n = OPTIONS.length;
    const idx = getRandomIntInclusive(0,n-1);
    const retObj = {n: OPTIONS[idx]};
    console.log(`fibonacciGenerator retObj: ${JSON.stringify(retObj)}`);
    return retObj;
}

export default fibonacciGenerator;