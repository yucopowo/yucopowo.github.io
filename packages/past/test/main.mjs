// import * as vue from 'vue';
// import { VueLive as _VueLive } from "vue-live";
// export const Vue = vue;
// export const VueLive = _VueLive;
// export default {
//
// };

import fs from 'fs';
// import mdast from "./mdast.mjs";
import past from "../src/past.mjs";

const m = fs.readFileSync('./1.mdx', 'utf-8');

console.time('parse===');

const ast = past(m, {
    html: true,
    mdx: true,
});

console.timeEnd('parse===');

// console.log(ast);
console.log(

    JSON.stringify(ast, null, 2)

);
