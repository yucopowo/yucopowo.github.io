/* esm.sh - esbuild bundle(inline-style-parser@0.1.1) es2022 production */var L=Object.create;var l=Object.defineProperty;var P=Object.getOwnPropertyDescriptor;var X=Object.getOwnPropertyNames;var M=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty;var C=(n,a)=>()=>(a||n((a={exports:{}}).exports,a),a.exports);var x=(n,a,t,i)=>{if(a&&typeof a=="object"||typeof a=="function")for(let o of X(a))!S.call(n,o)&&o!==t&&l(n,o,{get:()=>a[o],enumerable:!(i=P(a,o))||i.enumerable});return n};var W=(n,a,t)=>(t=n!=null?L(M(n)):{},x(a||!n||!n.__esModule?l(t,"default",{value:n,enumerable:!0}):t,n));var g=C((B,T)=>{var _=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Y=/\n/g,D=/^\s*/,F=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,H=/^:\s*/,b=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,z=/^[;\s]*/,K=/^\s+|\s+$/g,U=`
`,R="/",d="*",u="",V="comment",$="declaration";T.exports=function(n,a){if(typeof n!="string")throw new TypeError("First argument must be a string");if(!n)return[];a=a||{};var t=1,i=1;function o(e){var r=e.match(Y);r&&(t+=r.length);var c=e.lastIndexOf(U);i=~c?e.length-c:i+e.length}function v(){var e={line:t,column:i};return function(r){return r.position=new E(e),m(),r}}function E(e){this.start=e,this.end={line:t,column:i},this.source=a.source}E.prototype.content=n;var N=[];function s(e){var r=new Error(a.source+":"+t+":"+i+": "+e);if(r.reason=e,r.filename=a.source,r.line=t,r.column=i,r.source=n,a.silent)N.push(r);else throw r}function f(e){var r=e.exec(n);if(!!r){var c=r[0];return o(c),n=n.slice(c.length),r}}function m(){f(D)}function h(e){var r;for(e=e||[];r=p();)r!==!1&&e.push(r);return e}function p(){var e=v();if(!(R!=n.charAt(0)||d!=n.charAt(1))){for(var r=2;u!=n.charAt(r)&&(d!=n.charAt(r)||R!=n.charAt(r+1));)++r;if(r+=2,u===n.charAt(r-1))return s("End of comment missing");var c=n.slice(2,r-2);return i+=2,o(c),n=n.slice(r),i+=2,e({type:V,comment:c})}}function O(){var e=v(),r=f(F);if(!!r){if(p(),!f(H))return s("property missing ':'");var c=f(b),I=e({type:$,property:A(r[0].replace(_,u)),value:c?A(c[0].replace(_,u)):u});return f(z),I}}function G(){var e=[];h(e);for(var r;r=O();)r!==!1&&(e.push(r),h(e));return e}return m(),G()};function A(n){return n?n.replace(K,u):u}});var j=W(g()),{default:w,...k}=j,J=w!==void 0?w:k;export{J as default};