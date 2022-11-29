/* esm.sh - esbuild bundle(parse5@6.0.1/lib/common/foreign-content) es2022 development */
import __parse5_lib_common_html$ from '/cdn/v99/parse5@6.0.1/es2022/lib/common/html.development.js';
import __parse5_lib_tokenizer$ from '/cdn/v99/parse5@6.0.1/es2022/lib/tokenizer.development.js';
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ (x =>
  typeof require !== 'undefined'
    ? require
    : typeof Proxy !== 'undefined'
    ? new Proxy(x, {
        get: (a, b) => (typeof require !== 'undefined' ? require : a)[b]
      })
    : x)(function(x) {
  if (typeof require !== 'undefined') return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) =>
  function __require2() {
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

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/common/foreign-content.js
var require_foreign_content = __commonJS({
  'esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/common/foreign-content.js'(
    exports
  ) {
    'use strict';

    var Tokenizer = __parse5_lib_tokenizer$;
    var HTML = __parse5_lib_common_html$;
    var $ = HTML.TAG_NAMES;
    var NS = HTML.NAMESPACES;
    var ATTRS = HTML.ATTRS;
    var MIME_TYPES = {
      TEXT_HTML: 'text/html',
      APPLICATION_XML: 'application/xhtml+xml'
    };
    var DEFINITION_URL_ATTR = 'definitionurl';
    var ADJUSTED_DEFINITION_URL_ATTR = 'definitionURL';
    var SVG_ATTRS_ADJUSTMENT_MAP = {
      attributename: 'attributeName',
      attributetype: 'attributeType',
      basefrequency: 'baseFrequency',
      baseprofile: 'baseProfile',
      calcmode: 'calcMode',
      clippathunits: 'clipPathUnits',
      diffuseconstant: 'diffuseConstant',
      edgemode: 'edgeMode',
      filterunits: 'filterUnits',
      glyphref: 'glyphRef',
      gradienttransform: 'gradientTransform',
      gradientunits: 'gradientUnits',
      kernelmatrix: 'kernelMatrix',
      kernelunitlength: 'kernelUnitLength',
      keypoints: 'keyPoints',
      keysplines: 'keySplines',
      keytimes: 'keyTimes',
      lengthadjust: 'lengthAdjust',
      limitingconeangle: 'limitingConeAngle',
      markerheight: 'markerHeight',
      markerunits: 'markerUnits',
      markerwidth: 'markerWidth',
      maskcontentunits: 'maskContentUnits',
      maskunits: 'maskUnits',
      numoctaves: 'numOctaves',
      pathlength: 'pathLength',
      patterncontentunits: 'patternContentUnits',
      patterntransform: 'patternTransform',
      patternunits: 'patternUnits',
      pointsatx: 'pointsAtX',
      pointsaty: 'pointsAtY',
      pointsatz: 'pointsAtZ',
      preservealpha: 'preserveAlpha',
      preserveaspectratio: 'preserveAspectRatio',
      primitiveunits: 'primitiveUnits',
      refx: 'refX',
      refy: 'refY',
      repeatcount: 'repeatCount',
      repeatdur: 'repeatDur',
      requiredextensions: 'requiredExtensions',
      requiredfeatures: 'requiredFeatures',
      specularconstant: 'specularConstant',
      specularexponent: 'specularExponent',
      spreadmethod: 'spreadMethod',
      startoffset: 'startOffset',
      stddeviation: 'stdDeviation',
      stitchtiles: 'stitchTiles',
      surfacescale: 'surfaceScale',
      systemlanguage: 'systemLanguage',
      tablevalues: 'tableValues',
      targetx: 'targetX',
      targety: 'targetY',
      textlength: 'textLength',
      viewbox: 'viewBox',
      viewtarget: 'viewTarget',
      xchannelselector: 'xChannelSelector',
      ychannelselector: 'yChannelSelector',
      zoomandpan: 'zoomAndPan'
    };
    var XML_ATTRS_ADJUSTMENT_MAP = {
      'xlink:actuate': {
        prefix: 'xlink',
        name: 'actuate',
        namespace: NS.XLINK
      },
      'xlink:arcrole': {
        prefix: 'xlink',
        name: 'arcrole',
        namespace: NS.XLINK
      },
      'xlink:href': {
        prefix: 'xlink',
        name: 'href',
        namespace: NS.XLINK
      },
      'xlink:role': {
        prefix: 'xlink',
        name: 'role',
        namespace: NS.XLINK
      },
      'xlink:show': {
        prefix: 'xlink',
        name: 'show',
        namespace: NS.XLINK
      },
      'xlink:title': {
        prefix: 'xlink',
        name: 'title',
        namespace: NS.XLINK
      },
      'xlink:type': {
        prefix: 'xlink',
        name: 'type',
        namespace: NS.XLINK
      },
      'xml:base': {
        prefix: 'xml',
        name: 'base',
        namespace: NS.XML
      },
      'xml:lang': {
        prefix: 'xml',
        name: 'lang',
        namespace: NS.XML
      },
      'xml:space': {
        prefix: 'xml',
        name: 'space',
        namespace: NS.XML
      },
      xmlns: {
        prefix: '',
        name: 'xmlns',
        namespace: NS.XMLNS
      },
      'xmlns:xlink': {
        prefix: 'xmlns',
        name: 'xlink',
        namespace: NS.XMLNS
      }
    };
    var SVG_TAG_NAMES_ADJUSTMENT_MAP = (exports.SVG_TAG_NAMES_ADJUSTMENT_MAP = {
      altglyph: 'altGlyph',
      altglyphdef: 'altGlyphDef',
      altglyphitem: 'altGlyphItem',
      animatecolor: 'animateColor',
      animatemotion: 'animateMotion',
      animatetransform: 'animateTransform',
      clippath: 'clipPath',
      feblend: 'feBlend',
      fecolormatrix: 'feColorMatrix',
      fecomponenttransfer: 'feComponentTransfer',
      fecomposite: 'feComposite',
      feconvolvematrix: 'feConvolveMatrix',
      fediffuselighting: 'feDiffuseLighting',
      fedisplacementmap: 'feDisplacementMap',
      fedistantlight: 'feDistantLight',
      feflood: 'feFlood',
      fefunca: 'feFuncA',
      fefuncb: 'feFuncB',
      fefuncg: 'feFuncG',
      fefuncr: 'feFuncR',
      fegaussianblur: 'feGaussianBlur',
      feimage: 'feImage',
      femerge: 'feMerge',
      femergenode: 'feMergeNode',
      femorphology: 'feMorphology',
      feoffset: 'feOffset',
      fepointlight: 'fePointLight',
      fespecularlighting: 'feSpecularLighting',
      fespotlight: 'feSpotLight',
      fetile: 'feTile',
      feturbulence: 'feTurbulence',
      foreignobject: 'foreignObject',
      glyphref: 'glyphRef',
      lineargradient: 'linearGradient',
      radialgradient: 'radialGradient',
      textpath: 'textPath'
    });
    var EXITS_FOREIGN_CONTENT = {
      [$.B]: true,
      [$.BIG]: true,
      [$.BLOCKQUOTE]: true,
      [$.BODY]: true,
      [$.BR]: true,
      [$.CENTER]: true,
      [$.CODE]: true,
      [$.DD]: true,
      [$.DIV]: true,
      [$.DL]: true,
      [$.DT]: true,
      [$.EM]: true,
      [$.EMBED]: true,
      [$.H1]: true,
      [$.H2]: true,
      [$.H3]: true,
      [$.H4]: true,
      [$.H5]: true,
      [$.H6]: true,
      [$.HEAD]: true,
      [$.HR]: true,
      [$.I]: true,
      [$.IMG]: true,
      [$.LI]: true,
      [$.LISTING]: true,
      [$.MENU]: true,
      [$.META]: true,
      [$.NOBR]: true,
      [$.OL]: true,
      [$.P]: true,
      [$.PRE]: true,
      [$.RUBY]: true,
      [$.S]: true,
      [$.SMALL]: true,
      [$.SPAN]: true,
      [$.STRONG]: true,
      [$.STRIKE]: true,
      [$.SUB]: true,
      [$.SUP]: true,
      [$.TABLE]: true,
      [$.TT]: true,
      [$.U]: true,
      [$.UL]: true,
      [$.VAR]: true
    };
    exports.causesExit = function(startTagToken) {
      const tn = startTagToken.tagName;
      const isFontWithAttrs =
        tn === $.FONT &&
        (Tokenizer.getTokenAttr(startTagToken, ATTRS.COLOR) !== null ||
          Tokenizer.getTokenAttr(startTagToken, ATTRS.SIZE) !== null ||
          Tokenizer.getTokenAttr(startTagToken, ATTRS.FACE) !== null);
      return isFontWithAttrs ? true : EXITS_FOREIGN_CONTENT[tn];
    };
    exports.adjustTokenMathMLAttrs = function(token) {
      for (let i = 0; i < token.attrs.length; i++) {
        if (token.attrs[i].name === DEFINITION_URL_ATTR) {
          token.attrs[i].name = ADJUSTED_DEFINITION_URL_ATTR;
          break;
        }
      }
    };
    exports.adjustTokenSVGAttrs = function(token) {
      for (let i = 0; i < token.attrs.length; i++) {
        const adjustedAttrName = SVG_ATTRS_ADJUSTMENT_MAP[token.attrs[i].name];
        if (adjustedAttrName) {
          token.attrs[i].name = adjustedAttrName;
        }
      }
    };
    exports.adjustTokenXMLAttrs = function(token) {
      for (let i = 0; i < token.attrs.length; i++) {
        const adjustedAttrEntry = XML_ATTRS_ADJUSTMENT_MAP[token.attrs[i].name];
        if (adjustedAttrEntry) {
          token.attrs[i].prefix = adjustedAttrEntry.prefix;
          token.attrs[i].name = adjustedAttrEntry.name;
          token.attrs[i].namespace = adjustedAttrEntry.namespace;
        }
      }
    };
    exports.adjustTokenSVGTagName = function(token) {
      const adjustedTagName = SVG_TAG_NAMES_ADJUSTMENT_MAP[token.tagName];
      if (adjustedTagName) {
        token.tagName = adjustedTagName;
      }
    };
    function isMathMLTextIntegrationPoint(tn, ns) {
      return ns === NS.MATHML && (tn === $.MI || tn === $.MO || tn === $.MN || tn === $.MS || tn === $.MTEXT);
    }
    function isHtmlIntegrationPoint(tn, ns, attrs) {
      if (ns === NS.MATHML && tn === $.ANNOTATION_XML) {
        for (let i = 0; i < attrs.length; i++) {
          if (attrs[i].name === ATTRS.ENCODING) {
            const value = attrs[i].value.toLowerCase();
            return value === MIME_TYPES.TEXT_HTML || value === MIME_TYPES.APPLICATION_XML;
          }
        }
      }
      return ns === NS.SVG && (tn === $.FOREIGN_OBJECT || tn === $.DESC || tn === $.TITLE);
    }
    exports.isIntegrationPoint = function(tn, ns, attrs, foreignNS) {
      if ((!foreignNS || foreignNS === NS.HTML) && isHtmlIntegrationPoint(tn, ns, attrs)) {
        return true;
      }
      if ((!foreignNS || foreignNS === NS.MATHML) && isMathMLTextIntegrationPoint(tn, ns)) {
        return true;
      }
      return false;
    };
  }
});

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/mod.js
var __module = __toESM(require_foreign_content());
var {
  causesExit,
  adjustTokenMathMLAttrs,
  adjustTokenSVGAttrs,
  adjustTokenXMLAttrs,
  adjustTokenSVGTagName,
  isIntegrationPoint
} = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export {
  adjustTokenMathMLAttrs,
  adjustTokenSVGAttrs,
  adjustTokenSVGTagName,
  adjustTokenXMLAttrs,
  causesExit,
  mod_default as default,
  isIntegrationPoint
};
