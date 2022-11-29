/* esm.sh - esbuild bundle(parse5@6.0.1/lib/common/html) es2022 development */
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

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/common/html.js
var require_html = __commonJS({
  'esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/common/html.js'(exports) {
    'use strict';

    var NS = (exports.NAMESPACES = {
      HTML: 'http://www.w3.org/1999/xhtml',
      MATHML: 'http://www.w3.org/1998/Math/MathML',
      SVG: 'http://www.w3.org/2000/svg',
      XLINK: 'http://www.w3.org/1999/xlink',
      XML: 'http://www.w3.org/XML/1998/namespace',
      XMLNS: 'http://www.w3.org/2000/xmlns/'
    });
    exports.ATTRS = {
      TYPE: 'type',
      ACTION: 'action',
      ENCODING: 'encoding',
      PROMPT: 'prompt',
      NAME: 'name',
      COLOR: 'color',
      FACE: 'face',
      SIZE: 'size'
    };
    exports.DOCUMENT_MODE = {
      NO_QUIRKS: 'no-quirks',
      QUIRKS: 'quirks',
      LIMITED_QUIRKS: 'limited-quirks'
    };
    var $ = (exports.TAG_NAMES = {
      A: 'a',
      ADDRESS: 'address',
      ANNOTATION_XML: 'annotation-xml',
      APPLET: 'applet',
      AREA: 'area',
      ARTICLE: 'article',
      ASIDE: 'aside',
      B: 'b',
      BASE: 'base',
      BASEFONT: 'basefont',
      BGSOUND: 'bgsound',
      BIG: 'big',
      BLOCKQUOTE: 'blockquote',
      BODY: 'body',
      BR: 'br',
      BUTTON: 'button',
      CAPTION: 'caption',
      CENTER: 'center',
      CODE: 'code',
      COL: 'col',
      COLGROUP: 'colgroup',
      DD: 'dd',
      DESC: 'desc',
      DETAILS: 'details',
      DIALOG: 'dialog',
      DIR: 'dir',
      DIV: 'div',
      DL: 'dl',
      DT: 'dt',
      EM: 'em',
      EMBED: 'embed',
      FIELDSET: 'fieldset',
      FIGCAPTION: 'figcaption',
      FIGURE: 'figure',
      FONT: 'font',
      FOOTER: 'footer',
      FOREIGN_OBJECT: 'foreignObject',
      FORM: 'form',
      FRAME: 'frame',
      FRAMESET: 'frameset',
      H1: 'h1',
      H2: 'h2',
      H3: 'h3',
      H4: 'h4',
      H5: 'h5',
      H6: 'h6',
      HEAD: 'head',
      HEADER: 'header',
      HGROUP: 'hgroup',
      HR: 'hr',
      HTML: 'html',
      I: 'i',
      IMG: 'img',
      IMAGE: 'image',
      INPUT: 'input',
      IFRAME: 'iframe',
      KEYGEN: 'keygen',
      LABEL: 'label',
      LI: 'li',
      LINK: 'link',
      LISTING: 'listing',
      MAIN: 'main',
      MALIGNMARK: 'malignmark',
      MARQUEE: 'marquee',
      MATH: 'math',
      MENU: 'menu',
      META: 'meta',
      MGLYPH: 'mglyph',
      MI: 'mi',
      MO: 'mo',
      MN: 'mn',
      MS: 'ms',
      MTEXT: 'mtext',
      NAV: 'nav',
      NOBR: 'nobr',
      NOFRAMES: 'noframes',
      NOEMBED: 'noembed',
      NOSCRIPT: 'noscript',
      OBJECT: 'object',
      OL: 'ol',
      OPTGROUP: 'optgroup',
      OPTION: 'option',
      P: 'p',
      PARAM: 'param',
      PLAINTEXT: 'plaintext',
      PRE: 'pre',
      RB: 'rb',
      RP: 'rp',
      RT: 'rt',
      RTC: 'rtc',
      RUBY: 'ruby',
      S: 's',
      SCRIPT: 'script',
      SECTION: 'section',
      SELECT: 'select',
      SOURCE: 'source',
      SMALL: 'small',
      SPAN: 'span',
      STRIKE: 'strike',
      STRONG: 'strong',
      STYLE: 'style',
      SUB: 'sub',
      SUMMARY: 'summary',
      SUP: 'sup',
      TABLE: 'table',
      TBODY: 'tbody',
      TEMPLATE: 'template',
      TEXTAREA: 'textarea',
      TFOOT: 'tfoot',
      TD: 'td',
      TH: 'th',
      THEAD: 'thead',
      TITLE: 'title',
      TR: 'tr',
      TRACK: 'track',
      TT: 'tt',
      U: 'u',
      UL: 'ul',
      SVG: 'svg',
      VAR: 'var',
      WBR: 'wbr',
      XMP: 'xmp'
    });
    exports.SPECIAL_ELEMENTS = {
      [NS.HTML]: {
        [$.ADDRESS]: true,
        [$.APPLET]: true,
        [$.AREA]: true,
        [$.ARTICLE]: true,
        [$.ASIDE]: true,
        [$.BASE]: true,
        [$.BASEFONT]: true,
        [$.BGSOUND]: true,
        [$.BLOCKQUOTE]: true,
        [$.BODY]: true,
        [$.BR]: true,
        [$.BUTTON]: true,
        [$.CAPTION]: true,
        [$.CENTER]: true,
        [$.COL]: true,
        [$.COLGROUP]: true,
        [$.DD]: true,
        [$.DETAILS]: true,
        [$.DIR]: true,
        [$.DIV]: true,
        [$.DL]: true,
        [$.DT]: true,
        [$.EMBED]: true,
        [$.FIELDSET]: true,
        [$.FIGCAPTION]: true,
        [$.FIGURE]: true,
        [$.FOOTER]: true,
        [$.FORM]: true,
        [$.FRAME]: true,
        [$.FRAMESET]: true,
        [$.H1]: true,
        [$.H2]: true,
        [$.H3]: true,
        [$.H4]: true,
        [$.H5]: true,
        [$.H6]: true,
        [$.HEAD]: true,
        [$.HEADER]: true,
        [$.HGROUP]: true,
        [$.HR]: true,
        [$.HTML]: true,
        [$.IFRAME]: true,
        [$.IMG]: true,
        [$.INPUT]: true,
        [$.LI]: true,
        [$.LINK]: true,
        [$.LISTING]: true,
        [$.MAIN]: true,
        [$.MARQUEE]: true,
        [$.MENU]: true,
        [$.META]: true,
        [$.NAV]: true,
        [$.NOEMBED]: true,
        [$.NOFRAMES]: true,
        [$.NOSCRIPT]: true,
        [$.OBJECT]: true,
        [$.OL]: true,
        [$.P]: true,
        [$.PARAM]: true,
        [$.PLAINTEXT]: true,
        [$.PRE]: true,
        [$.SCRIPT]: true,
        [$.SECTION]: true,
        [$.SELECT]: true,
        [$.SOURCE]: true,
        [$.STYLE]: true,
        [$.SUMMARY]: true,
        [$.TABLE]: true,
        [$.TBODY]: true,
        [$.TD]: true,
        [$.TEMPLATE]: true,
        [$.TEXTAREA]: true,
        [$.TFOOT]: true,
        [$.TH]: true,
        [$.THEAD]: true,
        [$.TITLE]: true,
        [$.TR]: true,
        [$.TRACK]: true,
        [$.UL]: true,
        [$.WBR]: true,
        [$.XMP]: true
      },
      [NS.MATHML]: {
        [$.MI]: true,
        [$.MO]: true,
        [$.MN]: true,
        [$.MS]: true,
        [$.MTEXT]: true,
        [$.ANNOTATION_XML]: true
      },
      [NS.SVG]: {
        [$.TITLE]: true,
        [$.FOREIGN_OBJECT]: true,
        [$.DESC]: true
      }
    };
  }
});

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/mod.js
var __module = __toESM(require_html());
var { ATTRS, DOCUMENT_MODE, SPECIAL_ELEMENTS } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { ATTRS, DOCUMENT_MODE, SPECIAL_ELEMENTS, mod_default as default };
