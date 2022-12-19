
// function c(x) {
//     return x & 0xFFFFFFFF;
// }
// console.log(c(0xFFFFFFFF)); // -1
// console.log(c(0xFF112233 )); // -15654349
// console.log(c(0x00000000 )); // 0
// (0xFFFFFFFF-15654349).toString(16)


const a = 255;
const r = 17;
const g = 34;
const b = 51;
const color = ((a & 0xff) << 24) | ((r & 0xff) << 16) | ((g & 0xff) << 8) | (b & 0xff);

console.log(color)
