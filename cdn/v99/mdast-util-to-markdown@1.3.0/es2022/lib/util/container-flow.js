/* esm.sh - esbuild bundle(mdast-util-to-markdown@1.3.0/lib/util/container-flow.js) es2022 production */import{track as a}from"/cdn/v99/mdast-util-to-markdown@1.3.0/es2022/lib/util/track.js";function b(s,e,h){let t=e.indexStack,l=s.children||[],u=a(h),o=[],n=-1;for(t.push(-1);++n<l.length;){let r=l[n];t[t.length-1]=n,o.push(u.move(e.handle(r,s,e,{before:`
`,after:`
`,...u.current()}))),r.type!=="list"&&(e.bulletLastUsed=void 0),n<l.length-1&&o.push(u.move(c(r,l[n+1])))}return t.pop(),o.join("");function c(r,d){let f=e.join.length;for(;f--;){let i=e.join[f](r,d,s,e);if(i===!0||i===1)break;if(typeof i=="number")return`
`.repeat(1+i);if(i===!1)return`

<!---->

`}return`

`}}export{b as containerFlow};