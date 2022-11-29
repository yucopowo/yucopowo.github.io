/* esm.sh - esbuild bundle(remark-mdx@1.6.22) es2022 development */
import * as ___babel_plugin_syntax_jsx$ from '/cdn/v99/@babel/plugin-syntax-jsx@7.12.1/es2022/plugin-syntax-jsx.development.js';
import { declare as ___babel_helper_plugin_utils$declare } from '/cdn/v99/@babel/helper-plugin-utils@7.20.2/es2022/helper-plugin-utils.development.js';
import ___babel_core$ from '/cdn/v99/@babel/core@7.12.9/es2022/core.development.js';
import ___mdx_js_util$ from '/cdn/v99/@mdx-js/util@1.6.22/es2022/util.development.js';
import __is_alphabetical$ from '/cdn/v99/is-alphabetical@1.0.4/es2022/is-alphabetical.development.js';
import * as ___babel_plugin_proposal_object_rest_spread$ from '/cdn/v99/@babel/plugin-proposal-object-rest-spread@7.12.1/es2022/plugin-proposal-object-rest-spread.development.js';
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

// esm-build-b798a70609c310b8e244af1b7bb2bc5f70360aad-85ac7a91/node_modules/remark-mdx/extract-imports-and-exports.js
var require_extract_imports_and_exports = __commonJS({
  'esm-build-b798a70609c310b8e244af1b7bb2bc5f70360aad-85ac7a91/node_modules/remark-mdx/extract-imports-and-exports.js'(
    exports,
    module
  ) {
    var { transformSync } = ___babel_core$;
    var declare = ___babel_helper_plugin_utils$declare;
    var syntaxJsxPlugin = ___babel_plugin_syntax_jsx$;
    var proposalObjectRestSpreadPlugin = ___babel_plugin_proposal_object_rest_spread$;
    var BabelPluginExtractImportsAndExports = class {
      constructor() {
        const nodes = [];
        this.state = {
          nodes
        };
        this.plugin = declare(api => {
          api.assertVersion(7);
          return {
            visitor: {
              ExportDefaultDeclaration(path) {
                const { start } = path.node;
                nodes.push({
                  type: 'export',
                  start,
                  default: true
                });
              },
              ExportNamedDeclaration(path) {
                const { start } = path.node;
                nodes.push({
                  type: 'export',
                  start
                });
              },
              ExportAllDeclaration(path) {
                const { start } = path.node;
                nodes.push({
                  type: 'export',
                  start
                });
              },
              ImportDeclaration(path) {
                const { start } = path.node;
                if (start === void 0) {
                  return;
                }
                nodes.push({
                  type: 'import',
                  start
                });
              }
            }
          };
        });
      }
    };
    var partitionString = (str, indices) =>
      indices.map((val, i) => {
        return str.slice(val, indices[i + 1]);
      });
    module.exports = (value, vfile) => {
      const instance = new BabelPluginExtractImportsAndExports();
      transformSync(value, {
        plugins: [syntaxJsxPlugin, proposalObjectRestSpreadPlugin, instance.plugin],
        filename: vfile.path,
        configFile: false,
        babelrc: false
      });
      const sortedNodes = instance.state.nodes.sort((a, b) => a.start - b.start);
      const nodeStarts = sortedNodes.map(n => n.start);
      const values = partitionString(value, nodeStarts);
      const allNodes = sortedNodes.map(({ start: _, ...node }, i) => {
        const value2 = values[i];
        return {
          ...node,
          value: value2
        };
      });
      let currType = allNodes[0].type;
      const groupedNodes = allNodes.reduce(
        (acc, curr) => {
          if (curr.default) {
            currType = 'default';
            return [...acc, [curr]];
          }
          if (curr.type === currType) {
            const lastNodes = acc.pop();
            return [...acc, [...lastNodes, curr]];
          }
          currType = curr.type;
          return [...acc, [curr]];
        },
        [[]]
      );
      return groupedNodes
        .filter(a => a.length)
        .reduce((acc, curr) => {
          const node = curr.reduce((acc2, curr2) => ({
            ...acc2,
            value: acc2.value + curr2.value
          }));
          return [...acc, node];
        }, []);
    };
  }
});

// esm-build-b798a70609c310b8e244af1b7bb2bc5f70360aad-85ac7a91/node_modules/remark-mdx/tag.js
var require_tag = __commonJS({
  'esm-build-b798a70609c310b8e244af1b7bb2bc5f70360aad-85ac7a91/node_modules/remark-mdx/tag.js'(exports) {
    var dotAllPolyfill = '[\0-\uFFFF]';
    var attributeName = '[a-zA-Z_:][a-zA-Z0-9:._-]*';
    var unquoted = '[^"\'=<>`\\u0000-\\u0020]+';
    var singleQuoted = "'[^']*'";
    var doubleQuoted = '"[^"]*"';
    var jsProps = '{.*}'.replace('.', dotAllPolyfill);
    var attributeValue = '(?:' + unquoted + '|' + singleQuoted + '|' + doubleQuoted + '|' + jsProps + ')';
    var attribute = '(?:\\s+' + attributeName + '(?:\\s*=\\s*' + attributeValue + ')?)';
    var openTag = '<[A-Za-z]*[A-Za-z0-9\\.\\-]*' + attribute + '*\\s*\\/?>';
    var closeTag = '<\\/[A-Za-z][A-Za-z0-9\\.\\-]*\\s*>';
    var comment = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
    var processing = '<[?].*?[?]>'.replace('.', dotAllPolyfill);
    var declaration = '<![A-Za-z]+\\s+[^>]*>';
    var cdata = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';
    exports.openCloseTag = new RegExp('^(?:' + openTag + '|' + closeTag + ')');
    exports.tag = new RegExp(
      '^(?:' + openTag + '|' + closeTag + '|' + comment + '|' + processing + '|' + declaration + '|' + cdata + ')'
    );
  }
});

// esm-build-b798a70609c310b8e244af1b7bb2bc5f70360aad-85ac7a91/node_modules/remark-mdx/block.js
var require_block = __commonJS({
  'esm-build-b798a70609c310b8e244af1b7bb2bc5f70360aad-85ac7a91/node_modules/remark-mdx/block.js'(exports, module) {
    var { openCloseTag } = require_tag();
    module.exports = blockHtml;
    var tab = '	';
    var space = ' ';
    var lineFeed = '\n';
    var lessThan = '<';
    var rawOpenExpression = /^<(script|pre|style)(?=(\s|>|$))/i;
    var rawCloseExpression = /<\/(script|pre|style)>/i;
    var commentOpenExpression = /^<!--/;
    var commentCloseExpression = /-->/;
    var instructionOpenExpression = /^<\?/;
    var instructionCloseExpression = /\?>/;
    var directiveOpenExpression = /^<![A-Za-z]/;
    var directiveCloseExpression = />/;
    var cdataOpenExpression = /^<!\[CDATA\[/;
    var cdataCloseExpression = /\]\]>/;
    var elementCloseExpression = /^$/;
    var otherElementOpenExpression = new RegExp(openCloseTag.source + '\\s*$');
    var fragmentOpenExpression = /^<>/;
    function blockHtml(eat, value, silent) {
      const blocks = '[a-z\\.]*(\\.){0,1}[a-z][a-z0-9\\.]*';
      const elementOpenExpression = new RegExp('^</?(' + blocks + ')(?=(\\s|/?>|$))', 'i');
      const length = value.length;
      let index = 0;
      let next;
      let line;
      let offset;
      let character;
      let count;
      let sequence;
      let subvalue;
      const sequences = [
        [rawOpenExpression, rawCloseExpression, true],
        [commentOpenExpression, commentCloseExpression, true],
        [instructionOpenExpression, instructionCloseExpression, true],
        [directiveOpenExpression, directiveCloseExpression, true],
        [cdataOpenExpression, cdataCloseExpression, true],
        [elementOpenExpression, elementCloseExpression, true],
        [fragmentOpenExpression, elementCloseExpression, true],
        [otherElementOpenExpression, elementCloseExpression, false]
      ];
      while (index < length) {
        character = value.charAt(index);
        if (character !== tab && character !== space) {
          break;
        }
        index++;
      }
      if (value.charAt(index) !== lessThan) {
        return;
      }
      next = value.indexOf(lineFeed, index + 1);
      next = next === -1 ? length : next;
      line = value.slice(index, next);
      offset = -1;
      count = sequences.length;
      while (++offset < count) {
        if (sequences[offset][0].test(line)) {
          sequence = sequences[offset];
          break;
        }
      }
      if (!sequence) {
        return;
      }
      if (silent) {
        return sequence[2];
      }
      index = next;
      if (!sequence[1].test(line)) {
        while (index < length) {
          next = value.indexOf(lineFeed, index + 1);
          next = next === -1 ? length : next;
          line = value.slice(index + 1, next);
          if (sequence[1].test(line)) {
            if (line) {
              index = next;
            }
            break;
          }
          index = next;
        }
      }
      subvalue = value.slice(0, index);
      return eat(subvalue)({
        type: 'html',
        value: subvalue
      });
    }
  }
});

// esm-build-b798a70609c310b8e244af1b7bb2bc5f70360aad-85ac7a91/node_modules/remark-mdx/index.js
var require_remark_mdx = __commonJS({
  'esm-build-b798a70609c310b8e244af1b7bb2bc5f70360aad-85ac7a91/node_modules/remark-mdx/index.js'(exports, module) {
    var isAlphabetical = __is_alphabetical$;
    var { isImportOrExport, EMPTY_NEWLINE } = ___mdx_js_util$;
    var extractImportsAndExports = require_extract_imports_and_exports();
    var block = require_block();
    var { tag } = require_tag();
    var LESS_THAN = '<';
    var GREATER_THAN = '>';
    var SLASH = '/';
    var EXCLAMATION = '!';
    module.exports = mdx;
    mdx.default = mdx;
    tokenizeEsSyntax.locator = tokenizeEsSyntaxLocator;
    function mdx(_options) {
      const parser = this.Parser;
      const compiler = this.Compiler;
      if (parser && parser.prototype && parser.prototype.blockTokenizers) {
        attachParser(parser);
      }
      if (compiler && compiler.prototype && compiler.prototype.visitors) {
        attachCompiler(compiler);
      }
    }
    function attachParser(parser) {
      const blocks = parser.prototype.blockTokenizers;
      const inlines = parser.prototype.inlineTokenizers;
      const methods = parser.prototype.blockMethods;
      blocks.esSyntax = tokenizeEsSyntax;
      blocks.html = wrap(block);
      inlines.html = wrap(inlines.html, inlineJsx);
      tokenizeEsSyntax.notInBlock = true;
      methods.splice(methods.indexOf('paragraph'), 0, 'esSyntax');
      function wrap(original, customTokenizer) {
        const tokenizer = customTokenizer || tokenizeJsx;
        tokenizer.locator = original.locator;
        return tokenizer;
        function tokenizeJsx() {
          const node = original.apply(this, arguments);
          if (node) {
            node.type = 'jsx';
          }
          return node;
        }
      }
      function inlineJsx(eat, value) {
        if (value.charAt(0) !== LESS_THAN) {
          return;
        }
        const nextChar = value.charAt(1);
        if (nextChar !== GREATER_THAN && nextChar !== SLASH && nextChar !== EXCLAMATION && !isAlphabetical(nextChar)) {
          return;
        }
        const subvalueMatches = value.match(tag);
        if (!subvalueMatches) {
          return;
        }
        const subvalue = subvalueMatches[0];
        return eat(subvalue)({
          type: 'jsx',
          value: subvalue
        });
      }
    }
    function attachCompiler(compiler) {
      const proto = compiler.prototype;
      proto.visitors = Object.assign({}, proto.visitors, {
        import: stringifyEsSyntax,
        export: stringifyEsSyntax,
        jsx: stringifyEsSyntax
      });
    }
    function stringifyEsSyntax(node) {
      return node.value.trim();
    }
    function tokenizeEsSyntax(eat, value) {
      const index = value.indexOf(EMPTY_NEWLINE);
      const subvalue = index !== -1 ? value.slice(0, index) : value;
      if (isImportOrExport(subvalue)) {
        const nodes = extractImportsAndExports(subvalue, this.file);
        nodes.map(node => eat(node.value)(node));
      }
    }
    function tokenizeEsSyntaxLocator(value, _fromIndex) {
      return isImportOrExport(value) ? -1 : 1;
    }
  }
});

// esm-build-b798a70609c310b8e244af1b7bb2bc5f70360aad-85ac7a91/mod.js
var __module = __toESM(require_remark_mdx());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
