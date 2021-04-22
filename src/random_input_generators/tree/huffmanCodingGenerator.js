import { getRandomIntInclusive } from "../utils/inputGeneratorHelpers";

const OPTIONS = [
    "aaaaaaaaaabbbbbcccddddeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffgghhhhhhhhhhhhhhhhhhhhhhhhhh",
    "aaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbccccdddddddddddddddddddddddddddddddddddddddddddd",
    "aaaaaaaaaaaaaaaaaaaaaaabbccccccccccddddddddddeeeeeeeeefffffffgggggghhhh",
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbccccccccccccccccccddddddd",
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbcccccddddddddddeeeeeeeeeeeffffffffffff"
]

const huffmanCodingGenerator = () => {
    const n = OPTIONS.length;
    const idx = getRandomIntInclusive(0,n-1);
    const retObj = {"str": OPTIONS[idx]};
    //console.log(`huffmanCodingGenerator retObj: ${JSON.stringify(retObj)}`);
    return retObj;
}

export default huffmanCodingGenerator;