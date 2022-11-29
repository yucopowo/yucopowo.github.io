import fs from 'fs';

import { createProcessor } from '../index.js';


let processor = createProcessor({
    path: 'test.mdx',
    format: 'mdx',
    value: '🥳'
});
console.log(processor);

const content = fs.readFileSync('./test.mdx', 'utf-8');

// const ast = processor.parse(content);
//
// console.log( JSON.stringify(ast, null, 2));
const ast = processor.process(content);

console.log( ast );
