/* esm.sh - esbuild bundle(acorn-jsx@5.3.2) es2022 development */
import * as __acorn$ from '/cdn/v99/acorn@8.8.1/es2022/acorn.development.js';
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

// esm-build-648316455f6c9422598f912d5ed047695135ac50-adf3fc5a/node_modules/acorn-jsx/xhtml.js
var require_xhtml = __commonJS({
  'esm-build-648316455f6c9422598f912d5ed047695135ac50-adf3fc5a/node_modules/acorn-jsx/xhtml.js'(exports, module) {
    module.exports = {
      quot: '"',
      amp: '&',
      apos: "'",
      lt: '<',
      gt: '>',
      nbsp: '\xA0',
      iexcl: '\xA1',
      cent: '\xA2',
      pound: '\xA3',
      curren: '\xA4',
      yen: '\xA5',
      brvbar: '\xA6',
      sect: '\xA7',
      uml: '\xA8',
      copy: '\xA9',
      ordf: '\xAA',
      laquo: '\xAB',
      not: '\xAC',
      shy: '\xAD',
      reg: '\xAE',
      macr: '\xAF',
      deg: '\xB0',
      plusmn: '\xB1',
      sup2: '\xB2',
      sup3: '\xB3',
      acute: '\xB4',
      micro: '\xB5',
      para: '\xB6',
      middot: '\xB7',
      cedil: '\xB8',
      sup1: '\xB9',
      ordm: '\xBA',
      raquo: '\xBB',
      frac14: '\xBC',
      frac12: '\xBD',
      frac34: '\xBE',
      iquest: '\xBF',
      Agrave: '\xC0',
      Aacute: '\xC1',
      Acirc: '\xC2',
      Atilde: '\xC3',
      Auml: '\xC4',
      Aring: '\xC5',
      AElig: '\xC6',
      Ccedil: '\xC7',
      Egrave: '\xC8',
      Eacute: '\xC9',
      Ecirc: '\xCA',
      Euml: '\xCB',
      Igrave: '\xCC',
      Iacute: '\xCD',
      Icirc: '\xCE',
      Iuml: '\xCF',
      ETH: '\xD0',
      Ntilde: '\xD1',
      Ograve: '\xD2',
      Oacute: '\xD3',
      Ocirc: '\xD4',
      Otilde: '\xD5',
      Ouml: '\xD6',
      times: '\xD7',
      Oslash: '\xD8',
      Ugrave: '\xD9',
      Uacute: '\xDA',
      Ucirc: '\xDB',
      Uuml: '\xDC',
      Yacute: '\xDD',
      THORN: '\xDE',
      szlig: '\xDF',
      agrave: '\xE0',
      aacute: '\xE1',
      acirc: '\xE2',
      atilde: '\xE3',
      auml: '\xE4',
      aring: '\xE5',
      aelig: '\xE6',
      ccedil: '\xE7',
      egrave: '\xE8',
      eacute: '\xE9',
      ecirc: '\xEA',
      euml: '\xEB',
      igrave: '\xEC',
      iacute: '\xED',
      icirc: '\xEE',
      iuml: '\xEF',
      eth: '\xF0',
      ntilde: '\xF1',
      ograve: '\xF2',
      oacute: '\xF3',
      ocirc: '\xF4',
      otilde: '\xF5',
      ouml: '\xF6',
      divide: '\xF7',
      oslash: '\xF8',
      ugrave: '\xF9',
      uacute: '\xFA',
      ucirc: '\xFB',
      uuml: '\xFC',
      yacute: '\xFD',
      thorn: '\xFE',
      yuml: '\xFF',
      OElig: '\u0152',
      oelig: '\u0153',
      Scaron: '\u0160',
      scaron: '\u0161',
      Yuml: '\u0178',
      fnof: '\u0192',
      circ: '\u02C6',
      tilde: '\u02DC',
      Alpha: '\u0391',
      Beta: '\u0392',
      Gamma: '\u0393',
      Delta: '\u0394',
      Epsilon: '\u0395',
      Zeta: '\u0396',
      Eta: '\u0397',
      Theta: '\u0398',
      Iota: '\u0399',
      Kappa: '\u039A',
      Lambda: '\u039B',
      Mu: '\u039C',
      Nu: '\u039D',
      Xi: '\u039E',
      Omicron: '\u039F',
      Pi: '\u03A0',
      Rho: '\u03A1',
      Sigma: '\u03A3',
      Tau: '\u03A4',
      Upsilon: '\u03A5',
      Phi: '\u03A6',
      Chi: '\u03A7',
      Psi: '\u03A8',
      Omega: '\u03A9',
      alpha: '\u03B1',
      beta: '\u03B2',
      gamma: '\u03B3',
      delta: '\u03B4',
      epsilon: '\u03B5',
      zeta: '\u03B6',
      eta: '\u03B7',
      theta: '\u03B8',
      iota: '\u03B9',
      kappa: '\u03BA',
      lambda: '\u03BB',
      mu: '\u03BC',
      nu: '\u03BD',
      xi: '\u03BE',
      omicron: '\u03BF',
      pi: '\u03C0',
      rho: '\u03C1',
      sigmaf: '\u03C2',
      sigma: '\u03C3',
      tau: '\u03C4',
      upsilon: '\u03C5',
      phi: '\u03C6',
      chi: '\u03C7',
      psi: '\u03C8',
      omega: '\u03C9',
      thetasym: '\u03D1',
      upsih: '\u03D2',
      piv: '\u03D6',
      ensp: '\u2002',
      emsp: '\u2003',
      thinsp: '\u2009',
      zwnj: '\u200C',
      zwj: '\u200D',
      lrm: '\u200E',
      rlm: '\u200F',
      ndash: '\u2013',
      mdash: '\u2014',
      lsquo: '\u2018',
      rsquo: '\u2019',
      sbquo: '\u201A',
      ldquo: '\u201C',
      rdquo: '\u201D',
      bdquo: '\u201E',
      dagger: '\u2020',
      Dagger: '\u2021',
      bull: '\u2022',
      hellip: '\u2026',
      permil: '\u2030',
      prime: '\u2032',
      Prime: '\u2033',
      lsaquo: '\u2039',
      rsaquo: '\u203A',
      oline: '\u203E',
      frasl: '\u2044',
      euro: '\u20AC',
      image: '\u2111',
      weierp: '\u2118',
      real: '\u211C',
      trade: '\u2122',
      alefsym: '\u2135',
      larr: '\u2190',
      uarr: '\u2191',
      rarr: '\u2192',
      darr: '\u2193',
      harr: '\u2194',
      crarr: '\u21B5',
      lArr: '\u21D0',
      uArr: '\u21D1',
      rArr: '\u21D2',
      dArr: '\u21D3',
      hArr: '\u21D4',
      forall: '\u2200',
      part: '\u2202',
      exist: '\u2203',
      empty: '\u2205',
      nabla: '\u2207',
      isin: '\u2208',
      notin: '\u2209',
      ni: '\u220B',
      prod: '\u220F',
      sum: '\u2211',
      minus: '\u2212',
      lowast: '\u2217',
      radic: '\u221A',
      prop: '\u221D',
      infin: '\u221E',
      ang: '\u2220',
      and: '\u2227',
      or: '\u2228',
      cap: '\u2229',
      cup: '\u222A',
      int: '\u222B',
      there4: '\u2234',
      sim: '\u223C',
      cong: '\u2245',
      asymp: '\u2248',
      ne: '\u2260',
      equiv: '\u2261',
      le: '\u2264',
      ge: '\u2265',
      sub: '\u2282',
      sup: '\u2283',
      nsub: '\u2284',
      sube: '\u2286',
      supe: '\u2287',
      oplus: '\u2295',
      otimes: '\u2297',
      perp: '\u22A5',
      sdot: '\u22C5',
      lceil: '\u2308',
      rceil: '\u2309',
      lfloor: '\u230A',
      rfloor: '\u230B',
      lang: '\u2329',
      rang: '\u232A',
      loz: '\u25CA',
      spades: '\u2660',
      clubs: '\u2663',
      hearts: '\u2665',
      diams: '\u2666'
    };
  }
});

// esm-build-648316455f6c9422598f912d5ed047695135ac50-adf3fc5a/node_modules/acorn-jsx/index.js
var require_acorn_jsx = __commonJS({
  'esm-build-648316455f6c9422598f912d5ed047695135ac50-adf3fc5a/node_modules/acorn-jsx/index.js'(exports, module) {
    'use strict';

    var XHTMLEntities = require_xhtml();
    var hexNumber = /^[\da-fA-F]+$/;
    var decimalNumber = /^\d+$/;
    var acornJsxMap = /* @__PURE__ */ new WeakMap();
    function getJsxTokens(acorn) {
      acorn = acorn.Parser.acorn || acorn;
      let acornJsx = acornJsxMap.get(acorn);
      if (!acornJsx) {
        const tt = acorn.tokTypes;
        const TokContext = acorn.TokContext;
        const TokenType = acorn.TokenType;
        const tc_oTag = new TokContext('<tag', false);
        const tc_cTag = new TokContext('</tag', false);
        const tc_expr = new TokContext('<tag>...</tag>', true, true);
        const tokContexts = {
          tc_oTag,
          tc_cTag,
          tc_expr
        };
        const tokTypes2 = {
          jsxName: new TokenType('jsxName'),
          jsxText: new TokenType('jsxText', {
            beforeExpr: true
          }),
          jsxTagStart: new TokenType('jsxTagStart', {
            startsExpr: true
          }),
          jsxTagEnd: new TokenType('jsxTagEnd')
        };
        tokTypes2.jsxTagStart.updateContext = function() {
          this.context.push(tc_expr);
          this.context.push(tc_oTag);
          this.exprAllowed = false;
        };
        tokTypes2.jsxTagEnd.updateContext = function(prevType) {
          let out = this.context.pop();
          if ((out === tc_oTag && prevType === tt.slash) || out === tc_cTag) {
            this.context.pop();
            this.exprAllowed = this.curContext() === tc_expr;
          } else {
            this.exprAllowed = true;
          }
        };
        acornJsx = {
          tokContexts,
          tokTypes: tokTypes2
        };
        acornJsxMap.set(acorn, acornJsx);
      }
      return acornJsx;
    }
    function getQualifiedJSXName(object) {
      if (!object) return object;
      if (object.type === 'JSXIdentifier') return object.name;
      if (object.type === 'JSXNamespacedName') return object.namespace.name + ':' + object.name.name;
      if (object.type === 'JSXMemberExpression')
        return getQualifiedJSXName(object.object) + '.' + getQualifiedJSXName(object.property);
    }
    module.exports = function(options) {
      options = options || {};
      return function(Parser) {
        return plugin(
          {
            allowNamespaces: options.allowNamespaces !== false,
            allowNamespacedObjects: !!options.allowNamespacedObjects
          },
          Parser
        );
      };
    };
    Object.defineProperty(module.exports, 'tokTypes', {
      get: function get_tokTypes() {
        return getJsxTokens(__acorn$).tokTypes;
      },
      configurable: true,
      enumerable: true
    });
    function plugin(options, Parser) {
      const acorn = Parser.acorn || __acorn$;
      const acornJsx = getJsxTokens(acorn);
      const tt = acorn.tokTypes;
      const tok = acornJsx.tokTypes;
      const tokContexts = acorn.tokContexts;
      const tc_oTag = acornJsx.tokContexts.tc_oTag;
      const tc_cTag = acornJsx.tokContexts.tc_cTag;
      const tc_expr = acornJsx.tokContexts.tc_expr;
      const isNewLine = acorn.isNewLine;
      const isIdentifierStart = acorn.isIdentifierStart;
      const isIdentifierChar = acorn.isIdentifierChar;
      return class extends Parser {
        static get acornJsx() {
          return acornJsx;
        }
        jsx_readToken() {
          let out = '',
            chunkStart = this.pos;
          for (;;) {
            if (this.pos >= this.input.length) this.raise(this.start, 'Unterminated JSX contents');
            let ch = this.input.charCodeAt(this.pos);
            switch (ch) {
              case 60:
              case 123:
                if (this.pos === this.start) {
                  if (ch === 60 && this.exprAllowed) {
                    ++this.pos;
                    return this.finishToken(tok.jsxTagStart);
                  }
                  return this.getTokenFromCode(ch);
                }
                out += this.input.slice(chunkStart, this.pos);
                return this.finishToken(tok.jsxText, out);
              case 38:
                out += this.input.slice(chunkStart, this.pos);
                out += this.jsx_readEntity();
                chunkStart = this.pos;
                break;
              case 62:
              case 125:
                this.raise(
                  this.pos,
                  'Unexpected token `' +
                    this.input[this.pos] +
                    '`. Did you mean `' +
                    (ch === 62 ? '&gt;' : '&rbrace;') +
                    '` or `{"' +
                    this.input[this.pos] +
                    '"}`?'
                );
              default:
                if (isNewLine(ch)) {
                  out += this.input.slice(chunkStart, this.pos);
                  out += this.jsx_readNewLine(true);
                  chunkStart = this.pos;
                } else {
                  ++this.pos;
                }
            }
          }
        }
        jsx_readNewLine(normalizeCRLF) {
          let ch = this.input.charCodeAt(this.pos);
          let out;
          ++this.pos;
          if (ch === 13 && this.input.charCodeAt(this.pos) === 10) {
            ++this.pos;
            out = normalizeCRLF ? '\n' : '\r\n';
          } else {
            out = String.fromCharCode(ch);
          }
          if (this.options.locations) {
            ++this.curLine;
            this.lineStart = this.pos;
          }
          return out;
        }
        jsx_readString(quote) {
          let out = '',
            chunkStart = ++this.pos;
          for (;;) {
            if (this.pos >= this.input.length) this.raise(this.start, 'Unterminated string constant');
            let ch = this.input.charCodeAt(this.pos);
            if (ch === quote) break;
            if (ch === 38) {
              out += this.input.slice(chunkStart, this.pos);
              out += this.jsx_readEntity();
              chunkStart = this.pos;
            } else if (isNewLine(ch)) {
              out += this.input.slice(chunkStart, this.pos);
              out += this.jsx_readNewLine(false);
              chunkStart = this.pos;
            } else {
              ++this.pos;
            }
          }
          out += this.input.slice(chunkStart, this.pos++);
          return this.finishToken(tt.string, out);
        }
        jsx_readEntity() {
          let str = '',
            count = 0,
            entity;
          let ch = this.input[this.pos];
          if (ch !== '&') this.raise(this.pos, 'Entity must start with an ampersand');
          let startPos = ++this.pos;
          while (this.pos < this.input.length && count++ < 10) {
            ch = this.input[this.pos++];
            if (ch === ';') {
              if (str[0] === '#') {
                if (str[1] === 'x') {
                  str = str.substr(2);
                  if (hexNumber.test(str)) entity = String.fromCharCode(parseInt(str, 16));
                } else {
                  str = str.substr(1);
                  if (decimalNumber.test(str)) entity = String.fromCharCode(parseInt(str, 10));
                }
              } else {
                entity = XHTMLEntities[str];
              }
              break;
            }
            str += ch;
          }
          if (!entity) {
            this.pos = startPos;
            return '&';
          }
          return entity;
        }
        jsx_readWord() {
          let ch,
            start = this.pos;
          do {
            ch = this.input.charCodeAt(++this.pos);
          } while (isIdentifierChar(ch) || ch === 45);
          return this.finishToken(tok.jsxName, this.input.slice(start, this.pos));
        }
        jsx_parseIdentifier() {
          let node = this.startNode();
          if (this.type === tok.jsxName) node.name = this.value;
          else if (this.type.keyword) node.name = this.type.keyword;
          else this.unexpected();
          this.next();
          return this.finishNode(node, 'JSXIdentifier');
        }
        jsx_parseNamespacedName() {
          let startPos = this.start,
            startLoc = this.startLoc;
          let name = this.jsx_parseIdentifier();
          if (!options.allowNamespaces || !this.eat(tt.colon)) return name;
          var node = this.startNodeAt(startPos, startLoc);
          node.namespace = name;
          node.name = this.jsx_parseIdentifier();
          return this.finishNode(node, 'JSXNamespacedName');
        }
        jsx_parseElementName() {
          if (this.type === tok.jsxTagEnd) return '';
          let startPos = this.start,
            startLoc = this.startLoc;
          let node = this.jsx_parseNamespacedName();
          if (this.type === tt.dot && node.type === 'JSXNamespacedName' && !options.allowNamespacedObjects) {
            this.unexpected();
          }
          while (this.eat(tt.dot)) {
            let newNode = this.startNodeAt(startPos, startLoc);
            newNode.object = node;
            newNode.property = this.jsx_parseIdentifier();
            node = this.finishNode(newNode, 'JSXMemberExpression');
          }
          return node;
        }
        jsx_parseAttributeValue() {
          switch (this.type) {
            case tt.braceL:
              let node = this.jsx_parseExpressionContainer();
              if (node.expression.type === 'JSXEmptyExpression')
                this.raise(node.start, 'JSX attributes must only be assigned a non-empty expression');
              return node;
            case tok.jsxTagStart:
            case tt.string:
              return this.parseExprAtom();
            default:
              this.raise(this.start, 'JSX value should be either an expression or a quoted JSX text');
          }
        }
        jsx_parseEmptyExpression() {
          let node = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
          return this.finishNodeAt(node, 'JSXEmptyExpression', this.start, this.startLoc);
        }
        jsx_parseExpressionContainer() {
          let node = this.startNode();
          this.next();
          node.expression = this.type === tt.braceR ? this.jsx_parseEmptyExpression() : this.parseExpression();
          this.expect(tt.braceR);
          return this.finishNode(node, 'JSXExpressionContainer');
        }
        jsx_parseAttribute() {
          let node = this.startNode();
          if (this.eat(tt.braceL)) {
            this.expect(tt.ellipsis);
            node.argument = this.parseMaybeAssign();
            this.expect(tt.braceR);
            return this.finishNode(node, 'JSXSpreadAttribute');
          }
          node.name = this.jsx_parseNamespacedName();
          node.value = this.eat(tt.eq) ? this.jsx_parseAttributeValue() : null;
          return this.finishNode(node, 'JSXAttribute');
        }
        jsx_parseOpeningElementAt(startPos, startLoc) {
          let node = this.startNodeAt(startPos, startLoc);
          node.attributes = [];
          let nodeName = this.jsx_parseElementName();
          if (nodeName) node.name = nodeName;
          while (this.type !== tt.slash && this.type !== tok.jsxTagEnd) node.attributes.push(this.jsx_parseAttribute());
          node.selfClosing = this.eat(tt.slash);
          this.expect(tok.jsxTagEnd);
          return this.finishNode(node, nodeName ? 'JSXOpeningElement' : 'JSXOpeningFragment');
        }
        jsx_parseClosingElementAt(startPos, startLoc) {
          let node = this.startNodeAt(startPos, startLoc);
          let nodeName = this.jsx_parseElementName();
          if (nodeName) node.name = nodeName;
          this.expect(tok.jsxTagEnd);
          return this.finishNode(node, nodeName ? 'JSXClosingElement' : 'JSXClosingFragment');
        }
        jsx_parseElementAt(startPos, startLoc) {
          let node = this.startNodeAt(startPos, startLoc);
          let children = [];
          let openingElement = this.jsx_parseOpeningElementAt(startPos, startLoc);
          let closingElement = null;
          if (!openingElement.selfClosing) {
            contents: for (;;) {
              switch (this.type) {
                case tok.jsxTagStart:
                  startPos = this.start;
                  startLoc = this.startLoc;
                  this.next();
                  if (this.eat(tt.slash)) {
                    closingElement = this.jsx_parseClosingElementAt(startPos, startLoc);
                    break contents;
                  }
                  children.push(this.jsx_parseElementAt(startPos, startLoc));
                  break;
                case tok.jsxText:
                  children.push(this.parseExprAtom());
                  break;
                case tt.braceL:
                  children.push(this.jsx_parseExpressionContainer());
                  break;
                default:
                  this.unexpected();
              }
            }
            if (getQualifiedJSXName(closingElement.name) !== getQualifiedJSXName(openingElement.name)) {
              this.raise(
                closingElement.start,
                'Expected corresponding JSX closing tag for <' + getQualifiedJSXName(openingElement.name) + '>'
              );
            }
          }
          let fragmentOrElement = openingElement.name ? 'Element' : 'Fragment';
          node['opening' + fragmentOrElement] = openingElement;
          node['closing' + fragmentOrElement] = closingElement;
          node.children = children;
          if (this.type === tt.relational && this.value === '<') {
            this.raise(this.start, 'Adjacent JSX elements must be wrapped in an enclosing tag');
          }
          return this.finishNode(node, 'JSX' + fragmentOrElement);
        }
        jsx_parseText() {
          let node = this.parseLiteral(this.value);
          node.type = 'JSXText';
          return node;
        }
        jsx_parseElement() {
          let startPos = this.start,
            startLoc = this.startLoc;
          this.next();
          return this.jsx_parseElementAt(startPos, startLoc);
        }
        parseExprAtom(refShortHandDefaultPos) {
          if (this.type === tok.jsxText) return this.jsx_parseText();
          else if (this.type === tok.jsxTagStart) return this.jsx_parseElement();
          else return super.parseExprAtom(refShortHandDefaultPos);
        }
        readToken(code) {
          let context = this.curContext();
          if (context === tc_expr) return this.jsx_readToken();
          if (context === tc_oTag || context === tc_cTag) {
            if (isIdentifierStart(code)) return this.jsx_readWord();
            if (code == 62) {
              ++this.pos;
              return this.finishToken(tok.jsxTagEnd);
            }
            if ((code === 34 || code === 39) && context == tc_oTag) return this.jsx_readString(code);
          }
          if (code === 60 && this.exprAllowed && this.input.charCodeAt(this.pos + 1) !== 33) {
            ++this.pos;
            return this.finishToken(tok.jsxTagStart);
          }
          return super.readToken(code);
        }
        updateContext(prevType) {
          if (this.type == tt.braceL) {
            var curContext = this.curContext();
            if (curContext == tc_oTag) this.context.push(tokContexts.b_expr);
            else if (curContext == tc_expr) this.context.push(tokContexts.b_tmpl);
            else super.updateContext(prevType);
            this.exprAllowed = true;
          } else if (this.type === tt.slash && prevType === tok.jsxTagStart) {
            this.context.length -= 2;
            this.context.push(tc_cTag);
            this.exprAllowed = false;
          } else {
            return super.updateContext(prevType);
          }
        }
      };
    }
  }
});

// esm-build-648316455f6c9422598f912d5ed047695135ac50-adf3fc5a/mod.js
var __module = __toESM(require_acorn_jsx());
var { tokTypes } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default, tokTypes };
