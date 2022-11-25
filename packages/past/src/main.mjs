// import * as vue from 'vue';
// import { VueLive as _VueLive } from "vue-live";
// export const Vue = vue;
// export const VueLive = _VueLive;
// export default {
//
// };

import fs from 'fs';
// import mdast from "./mdast.mjs";
import past from "./past.mjs";

const m = fs.readFileSync('./test.md', 'utf-8');

console.time('parse===');

const ast = past(m, {
    html: true
});

console.timeEnd('parse===');

// console.log(ast);
console.log(

    JSON.stringify(ast, null, 2)

);
