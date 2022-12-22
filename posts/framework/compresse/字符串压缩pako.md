# [pako]

```javascript {demo type=module}
import * as pako from 'https://esm.sh/pako';
import * as _Mock from 'https://esm.sh/mockjs';
const Mock = _Mock.default;

const products = [];

for(let i=0;i<100;i++) {

    products.push({
        name: Mock.mock('@title'),
        mode: Mock.mock('@title'),
        desc: Mock.mock('@paragraph'),
    });

}



const originString = JSON.stringify(products);

const compressed = pako.deflate(originString);


console.log('originString=', originString.length);
console.log('compressedString=', compressed.length);

let binaryString = pako.gzip(originString);
console.log('binaryString=', binaryString.length);

const restored = JSON.parse(pako.inflate(compressed, { to: 'string' }));

console.log(restored);

```




[pako]: http://nodeca.github.io/pako/
