/* esm.sh - esbuild bundle(style-to-object@0.3.0) es2022 production */import __inline_style_parser$ from"/cdn/v99/inline-style-parser@0.1.1/es2022/inline-style-parser.js";var c=Object.create;var l=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var y=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var h=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw new Error("Dynamic require of \""+r+"\" is not supported")});var x=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var b=(r,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of m(e))!g.call(r,a)&&a!==t&&l(r,a,{get:()=>e[a],enumerable:!(o=_(e,a))||o.enumerable});return r};var j=(r,e,t)=>(t=r!=null?c(y(r)):{},b(e||!r||!r.__esModule?l(t,"default",{value:r,enumerable:!0}):t,r));var v=x((k,p)=>{var q=__inline_style_parser$;function I(r,e){var t=null;if(!r||typeof r!="string")return t;for(var o,a=q(r),i=typeof e=="function",n,u,f=0,s=a.length;f<s;f++)o=a[f],n=o.property,u=o.value,i?e(n,u,o):u&&(t||(t={}),t[n]=u);return t}p.exports=I});var O=j(v()),{default:d,...S}=O,w=d!==void 0?d:S;export{w as default};