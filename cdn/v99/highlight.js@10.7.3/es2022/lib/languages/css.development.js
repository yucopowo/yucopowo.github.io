/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/css) es2022 development */
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

// esm-build-90b82fb972e5f424ad29b8fcc46dbe4399db1f3f-a78f1cb9/node_modules/highlight.js/lib/languages/css.js
var require_css = __commonJS({
  'esm-build-90b82fb972e5f424ad29b8fcc46dbe4399db1f3f-a78f1cb9/node_modules/highlight.js/lib/languages/css.js'(
    exports,
    module
  ) {
    var MODES = hljs => {
      return {
        IMPORTANT: {
          className: 'meta',
          begin: '!important'
        },
        HEXCOLOR: {
          className: 'number',
          begin: '#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})'
        },
        ATTRIBUTE_SELECTOR_MODE: {
          className: 'selector-attr',
          begin: /\[/,
          end: /\]/,
          illegal: '$',
          contains: [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE]
        }
      };
    };
    var TAGS = [
      'a',
      'abbr',
      'address',
      'article',
      'aside',
      'audio',
      'b',
      'blockquote',
      'body',
      'button',
      'canvas',
      'caption',
      'cite',
      'code',
      'dd',
      'del',
      'details',
      'dfn',
      'div',
      'dl',
      'dt',
      'em',
      'fieldset',
      'figcaption',
      'figure',
      'footer',
      'form',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'header',
      'hgroup',
      'html',
      'i',
      'iframe',
      'img',
      'input',
      'ins',
      'kbd',
      'label',
      'legend',
      'li',
      'main',
      'mark',
      'menu',
      'nav',
      'object',
      'ol',
      'p',
      'q',
      'quote',
      'samp',
      'section',
      'span',
      'strong',
      'summary',
      'sup',
      'table',
      'tbody',
      'td',
      'textarea',
      'tfoot',
      'th',
      'thead',
      'time',
      'tr',
      'ul',
      'var',
      'video'
    ];
    var MEDIA_FEATURES = [
      'any-hover',
      'any-pointer',
      'aspect-ratio',
      'color',
      'color-gamut',
      'color-index',
      'device-aspect-ratio',
      'device-height',
      'device-width',
      'display-mode',
      'forced-colors',
      'grid',
      'height',
      'hover',
      'inverted-colors',
      'monochrome',
      'orientation',
      'overflow-block',
      'overflow-inline',
      'pointer',
      'prefers-color-scheme',
      'prefers-contrast',
      'prefers-reduced-motion',
      'prefers-reduced-transparency',
      'resolution',
      'scan',
      'scripting',
      'update',
      'width',
      'min-width',
      'max-width',
      'min-height',
      'max-height'
    ];
    var PSEUDO_CLASSES = [
      'active',
      'any-link',
      'blank',
      'checked',
      'current',
      'default',
      'defined',
      'dir',
      'disabled',
      'drop',
      'empty',
      'enabled',
      'first',
      'first-child',
      'first-of-type',
      'fullscreen',
      'future',
      'focus',
      'focus-visible',
      'focus-within',
      'has',
      'host',
      'host-context',
      'hover',
      'indeterminate',
      'in-range',
      'invalid',
      'is',
      'lang',
      'last-child',
      'last-of-type',
      'left',
      'link',
      'local-link',
      'not',
      'nth-child',
      'nth-col',
      'nth-last-child',
      'nth-last-col',
      'nth-last-of-type',
      'nth-of-type',
      'only-child',
      'only-of-type',
      'optional',
      'out-of-range',
      'past',
      'placeholder-shown',
      'read-only',
      'read-write',
      'required',
      'right',
      'root',
      'scope',
      'target',
      'target-within',
      'user-invalid',
      'valid',
      'visited',
      'where'
    ];
    var PSEUDO_ELEMENTS = [
      'after',
      'backdrop',
      'before',
      'cue',
      'cue-region',
      'first-letter',
      'first-line',
      'grammar-error',
      'marker',
      'part',
      'placeholder',
      'selection',
      'slotted',
      'spelling-error'
    ];
    var ATTRIBUTES = [
      'align-content',
      'align-items',
      'align-self',
      'animation',
      'animation-delay',
      'animation-direction',
      'animation-duration',
      'animation-fill-mode',
      'animation-iteration-count',
      'animation-name',
      'animation-play-state',
      'animation-timing-function',
      'auto',
      'backface-visibility',
      'background',
      'background-attachment',
      'background-clip',
      'background-color',
      'background-image',
      'background-origin',
      'background-position',
      'background-repeat',
      'background-size',
      'border',
      'border-bottom',
      'border-bottom-color',
      'border-bottom-left-radius',
      'border-bottom-right-radius',
      'border-bottom-style',
      'border-bottom-width',
      'border-collapse',
      'border-color',
      'border-image',
      'border-image-outset',
      'border-image-repeat',
      'border-image-slice',
      'border-image-source',
      'border-image-width',
      'border-left',
      'border-left-color',
      'border-left-style',
      'border-left-width',
      'border-radius',
      'border-right',
      'border-right-color',
      'border-right-style',
      'border-right-width',
      'border-spacing',
      'border-style',
      'border-top',
      'border-top-color',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-top-style',
      'border-top-width',
      'border-width',
      'bottom',
      'box-decoration-break',
      'box-shadow',
      'box-sizing',
      'break-after',
      'break-before',
      'break-inside',
      'caption-side',
      'clear',
      'clip',
      'clip-path',
      'color',
      'column-count',
      'column-fill',
      'column-gap',
      'column-rule',
      'column-rule-color',
      'column-rule-style',
      'column-rule-width',
      'column-span',
      'column-width',
      'columns',
      'content',
      'counter-increment',
      'counter-reset',
      'cursor',
      'direction',
      'display',
      'empty-cells',
      'filter',
      'flex',
      'flex-basis',
      'flex-direction',
      'flex-flow',
      'flex-grow',
      'flex-shrink',
      'flex-wrap',
      'float',
      'font',
      'font-display',
      'font-family',
      'font-feature-settings',
      'font-kerning',
      'font-language-override',
      'font-size',
      'font-size-adjust',
      'font-smoothing',
      'font-stretch',
      'font-style',
      'font-variant',
      'font-variant-ligatures',
      'font-variation-settings',
      'font-weight',
      'height',
      'hyphens',
      'icon',
      'image-orientation',
      'image-rendering',
      'image-resolution',
      'ime-mode',
      'inherit',
      'initial',
      'justify-content',
      'left',
      'letter-spacing',
      'line-height',
      'list-style',
      'list-style-image',
      'list-style-position',
      'list-style-type',
      'margin',
      'margin-bottom',
      'margin-left',
      'margin-right',
      'margin-top',
      'marks',
      'mask',
      'max-height',
      'max-width',
      'min-height',
      'min-width',
      'nav-down',
      'nav-index',
      'nav-left',
      'nav-right',
      'nav-up',
      'none',
      'normal',
      'object-fit',
      'object-position',
      'opacity',
      'order',
      'orphans',
      'outline',
      'outline-color',
      'outline-offset',
      'outline-style',
      'outline-width',
      'overflow',
      'overflow-wrap',
      'overflow-x',
      'overflow-y',
      'padding',
      'padding-bottom',
      'padding-left',
      'padding-right',
      'padding-top',
      'page-break-after',
      'page-break-before',
      'page-break-inside',
      'perspective',
      'perspective-origin',
      'pointer-events',
      'position',
      'quotes',
      'resize',
      'right',
      'src',
      'tab-size',
      'table-layout',
      'text-align',
      'text-align-last',
      'text-decoration',
      'text-decoration-color',
      'text-decoration-line',
      'text-decoration-style',
      'text-indent',
      'text-overflow',
      'text-rendering',
      'text-shadow',
      'text-transform',
      'text-underline-position',
      'top',
      'transform',
      'transform-origin',
      'transform-style',
      'transition',
      'transition-delay',
      'transition-duration',
      'transition-property',
      'transition-timing-function',
      'unicode-bidi',
      'vertical-align',
      'visibility',
      'white-space',
      'widows',
      'width',
      'word-break',
      'word-spacing',
      'word-wrap',
      'z-index'
    ].reverse();
    function source(re) {
      if (!re) return null;
      if (typeof re === 'string') return re;
      return re.source;
    }
    function lookahead(re) {
      return concat('(?=', re, ')');
    }
    function concat(...args) {
      const joined = args.map(x => source(x)).join('');
      return joined;
    }
    function css(hljs) {
      const modes = MODES(hljs);
      const FUNCTION_DISPATCH = {
        className: 'built_in',
        begin: /[\w-]+(?=\()/
      };
      const VENDOR_PREFIX = {
        begin: /-(webkit|moz|ms|o)-(?=[a-z])/
      };
      const AT_MODIFIERS = 'and or not only';
      const AT_PROPERTY_RE = /@-?\w[\w]*(-\w+)*/;
      const IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
      const STRINGS = [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE];
      return {
        name: 'CSS',
        case_insensitive: true,
        illegal: /[=|'\$]/,
        keywords: {
          keyframePosition: 'from to'
        },
        classNameAliases: {
          keyframePosition: 'selector-tag'
        },
        contains: [
          hljs.C_BLOCK_COMMENT_MODE,
          VENDOR_PREFIX,
          hljs.CSS_NUMBER_MODE,
          {
            className: 'selector-id',
            begin: /#[A-Za-z0-9_-]+/,
            relevance: 0
          },
          {
            className: 'selector-class',
            begin: '\\.' + IDENT_RE,
            relevance: 0
          },
          modes.ATTRIBUTE_SELECTOR_MODE,
          {
            className: 'selector-pseudo',
            variants: [
              {
                begin: ':(' + PSEUDO_CLASSES.join('|') + ')'
              },
              {
                begin: '::(' + PSEUDO_ELEMENTS.join('|') + ')'
              }
            ]
          },
          {
            className: 'attribute',
            begin: '\\b(' + ATTRIBUTES.join('|') + ')\\b'
          },
          {
            begin: ':',
            end: '[;}]',
            contains: [
              modes.HEXCOLOR,
              modes.IMPORTANT,
              hljs.CSS_NUMBER_MODE,
              ...STRINGS,
              {
                begin: /(url|data-uri)\(/,
                end: /\)/,
                relevance: 0,
                keywords: {
                  built_in: 'url data-uri'
                },
                contains: [
                  {
                    className: 'string',
                    begin: /[^)]/,
                    endsWithParent: true,
                    excludeEnd: true
                  }
                ]
              },
              FUNCTION_DISPATCH
            ]
          },
          {
            begin: lookahead(/@/),
            end: '[{;]',
            relevance: 0,
            illegal: /:/,
            contains: [
              {
                className: 'keyword',
                begin: AT_PROPERTY_RE
              },
              {
                begin: /\s/,
                endsWithParent: true,
                excludeEnd: true,
                relevance: 0,
                keywords: {
                  $pattern: /[a-z-]+/,
                  keyword: AT_MODIFIERS,
                  attribute: MEDIA_FEATURES.join(' ')
                },
                contains: [
                  {
                    begin: /[a-z-]+(?=:)/,
                    className: 'attribute'
                  },
                  ...STRINGS,
                  hljs.CSS_NUMBER_MODE
                ]
              }
            ]
          },
          {
            className: 'selector-tag',
            begin: '\\b(' + TAGS.join('|') + ')\\b'
          }
        ]
      };
    }
    module.exports = css;
  }
});

// esm-build-90b82fb972e5f424ad29b8fcc46dbe4399db1f3f-a78f1cb9/mod.js
var __module = __toESM(require_css());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
