/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/rsl) es2022 development */
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])(
          (mod = {
            exports: {}
          }).exports,
          mod
        ),
      mod.exports
    );
  };
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, 'default', {
          value: mod,
          enumerable: true
        })
      : target,
    mod
  )
);

// esm-build-8e256a43394b8d33cb7de566646e1cd6e0a3d3fb-3d79a2f7/node_modules/highlight.js/lib/languages/rsl.js
var require_rsl = __commonJS({
  'esm-build-8e256a43394b8d33cb7de566646e1cd6e0a3d3fb-3d79a2f7/node_modules/highlight.js/lib/languages/rsl.js'(
    exports,
    module
  ) {
    function rsl(hljs) {
      return {
        name: 'RenderMan RSL',
        keywords: {
          keyword: 'float color point normal vector matrix while for if do return else break extern continue',
          built_in:
            'abs acos ambient area asin atan atmosphere attribute calculatenormal ceil cellnoise clamp comp concat cos degrees depth Deriv diffuse distance Du Dv environment exp faceforward filterstep floor format fresnel incident length lightsource log match max min mod noise normalize ntransform opposite option phong pnoise pow printf ptlined radians random reflect refract renderinfo round setcomp setxcomp setycomp setzcomp shadow sign sin smoothstep specular specularbrdf spline sqrt step tan texture textureinfo trace transform vtransform xcomp ycomp zcomp'
        },
        illegal: '</',
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.APOS_STRING_MODE,
          hljs.C_NUMBER_MODE,
          {
            className: 'meta',
            begin: '#',
            end: '$'
          },
          {
            className: 'class',
            beginKeywords: 'surface displacement light volume imager',
            end: '\\('
          },
          {
            beginKeywords: 'illuminate illuminance gather',
            end: '\\('
          }
        ]
      };
    }
    module.exports = rsl;
  }
});

// esm-build-8e256a43394b8d33cb7de566646e1cd6e0a3d3fb-3d79a2f7/mod.js
var __module = __toESM(require_rsl());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
