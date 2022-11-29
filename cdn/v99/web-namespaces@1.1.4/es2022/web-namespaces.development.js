/* esm.sh - esbuild bundle(web-namespaces@1.1.4) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-2c41bf13700cc7675cf729c7346cc034f3a3cbe5-3bc3012e/node_modules/web-namespaces/index.json
var web_namespaces_exports = {};
__export(web_namespaces_exports, {
  default: () => web_namespaces_default,
  html: () => html,
  mathml: () => mathml,
  svg: () => svg,
  xlink: () => xlink,
  xml: () => xml,
  xmlns: () => xmlns
});
var html = 'http://www.w3.org/1999/xhtml';
var mathml = 'http://www.w3.org/1998/Math/MathML';
var svg = 'http://www.w3.org/2000/svg';
var xlink = 'http://www.w3.org/1999/xlink';
var xml = 'http://www.w3.org/XML/1998/namespace';
var xmlns = 'http://www.w3.org/2000/xmlns/';
var web_namespaces_default = {
  html,
  mathml,
  svg,
  xlink,
  xml,
  xmlns
};

// esm-build-2c41bf13700cc7675cf729c7346cc034f3a3cbe5-3bc3012e/mod.js
var { html: html2, mathml: mathml2, svg: svg2, xlink: xlink2, xml: xml2, xmlns: xmlns2 } = web_namespaces_exports;
var { default: __default, ...__rest } = web_namespaces_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export {
  mod_default as default,
  html2 as html,
  mathml2 as mathml,
  svg2 as svg,
  xlink2 as xlink,
  xml2 as xml,
  xmlns2 as xmlns
};
