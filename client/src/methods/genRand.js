export default function genRand() {
    const min = 1000000;
    const max = 9999999;
    const rand = Math.floor(min + Math.random() * (max - min));
    return rand;
}

