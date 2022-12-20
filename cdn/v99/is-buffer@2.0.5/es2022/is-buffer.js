/* esm.sh - esbuild bundle(is-buffer@2.0.5) es2022 production */var l=Object.create;var n=Object.defineProperty;var i=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var _=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty;var p=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports);var m=(r,t,u,f)=>{if(t&&typeof t=="object"||typeof t=="function")for(let e of d(t))!a.call(r,e)&&e!==u&&n(r,e,{get:()=>t[e],enumerable:!(f=i(t,e))||f.enumerable});return r};var B=(r,t,u)=>(u=r!=null?l(_(r)):{},m(t||!r||!r.__esModule?n(u,"default",{value:r,enumerable:!0}):u,r));var s=p((h,o)=>{o.exports=function(t){return t!=null&&t.constructor!=null&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}});var x=B(s()),{default:c,...y}=x,k=c!==void 0?c:y;export{k as default};/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */