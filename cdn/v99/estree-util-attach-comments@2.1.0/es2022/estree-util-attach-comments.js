/* esm.sh - esbuild bundle(estree-util-attach-comments@2.1.0) es2022 production */var a={}.hasOwnProperty;function f(n,e){let c=(e||[]).concat().sort(l);return c.length>0&&m(n,{comments:c,index:0}),n}function m(n,e){if(e.index===e.comments.length)return;let c=[],i=[],o;for(o in n)if(a.call(n,o)){let t=n[o];if(t&&typeof t=="object"&&o!=="comments")if(Array.isArray(t)){let r=-1;for(;++r<t.length;)t[r]&&typeof t[r].type=="string"&&c.push(t[r])}else typeof t.type=="string"&&c.push(t)}c.sort(l),i.push(...u(e,n,!1,{leading:!0,trailing:!1}));let s=-1;for(;++s<c.length;)m(c[s],e);i.push(...u(e,n,!0,{leading:!1,trailing:c.length>0})),i.length>0&&(n.comments=i)}function u(n,e,c,i){let o=[];for(;n.comments[n.index]&&l(n.comments[n.index],e,c)<1;)o.push(Object.assign({},n.comments[n.index++],i));return o}function l(n,e,c){let i=c?"end":"start";return n.range&&e.range?n.range[0]-e.range[c?1:0]:n.loc&&n.loc.start&&e.loc&&e.loc[i]?n.loc.start.line-e.loc[i].line||n.loc.start.column-e.loc[i].column:"start"in n&&i in e?n.start-e[i]:Number.NaN}export{f as attachComments};