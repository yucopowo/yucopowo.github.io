/* esm.sh - esbuild bundle(hast-util-raw@6.0.1) es2022 development */
import __html_void_elements$ from '/cdn/v99/html-void-elements@1.0.5/es2022/html-void-elements.development.js';
import __hast_util_to_parse5$ from '/cdn/v99/hast-util-to-parse5@6.0.0/es2022/hast-util-to-parse5.development.js';
import __hast_util_from_parse5$ from '/cdn/v99/hast-util-from-parse5@6.0.1/es2022/hast-util-from-parse5.development.js';
import __unist_util_position$ from '/cdn/v99/unist-util-position@3.1.0/es2022/unist-util-position.development.js';
import __parse5_lib_parser$ from '/cdn/v99/parse5@6.0.1/es2022/lib/parser.development.js';
import __xtend$ from '/cdn/v99/xtend@4.0.2/es2022/xtend.development.js';
import __zwitch$ from '/cdn/v99/zwitch@1.0.5/es2022/zwitch.development.js';
import __web_namespaces$ from '/cdn/v99/web-namespaces@1.1.4/es2022/web-namespaces.development.js';
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

// esm-build-6f210b912928999b8301ded90edd9c2ae109acea-128f0db8/node_modules/hast-util-raw/index.js
var require_hast_util_raw = __commonJS({
  'esm-build-6f210b912928999b8301ded90edd9c2ae109acea-128f0db8/node_modules/hast-util-raw/index.js'(exports, module) {
    'use strict';

    var Parser = __parse5_lib_parser$;
    var pos = __unist_util_position$;
    var fromParse5 = __hast_util_from_parse5$;
    var toParse5 = __hast_util_to_parse5$;
    var voids = __html_void_elements$;
    var ns = __web_namespaces$;
    var zwitch = __zwitch$;
    var xtend = __xtend$;
    module.exports = wrap;
    var inTemplateMode = 'IN_TEMPLATE_MODE';
    var dataState = 'DATA_STATE';
    var characterToken = 'CHARACTER_TOKEN';
    var startTagToken = 'START_TAG_TOKEN';
    var endTagToken = 'END_TAG_TOKEN';
    var commentToken = 'COMMENT_TOKEN';
    var doctypeToken = 'DOCTYPE_TOKEN';
    var parseOptions = {
      sourceCodeLocationInfo: true,
      scriptingEnabled: false
    };
    function wrap(tree, file) {
      var parser = new Parser(parseOptions);
      var one = zwitch('type');
      var tokenizer;
      var preprocessor;
      var posTracker;
      var locationTracker;
      var result;
      one.handlers.root = root;
      one.handlers.element = element;
      one.handlers.text = text;
      one.handlers.comment = comment;
      one.handlers.doctype = doctype;
      one.handlers.raw = raw;
      one.unknown = unknown;
      result = fromParse5(documentMode(tree) ? document() : fragment(), file);
      if (tree.type !== 'root' && result.children.length === 1) {
        return result.children[0];
      }
      return result;
      function fragment() {
        var context;
        var mock;
        var doc;
        context = {
          nodeName: 'template',
          tagName: 'template',
          attrs: [],
          namespaceURI: ns.html,
          childNodes: []
        };
        mock = {
          nodeName: 'documentmock',
          tagName: 'documentmock',
          attrs: [],
          namespaceURI: ns.html,
          childNodes: []
        };
        doc = {
          nodeName: '#document-fragment',
          childNodes: []
        };
        parser._bootstrap(mock, context);
        parser._pushTmplInsertionMode(inTemplateMode);
        parser._initTokenizerForFragmentParsing();
        parser._insertFakeRootElement();
        parser._resetInsertionMode();
        parser._findFormInFragmentContext();
        tokenizer = parser.tokenizer;
        preprocessor = tokenizer.preprocessor;
        locationTracker = tokenizer.__mixins[0];
        posTracker = locationTracker.posTracker;
        one(tree);
        parser._adoptNodes(mock.childNodes[0], doc);
        return doc;
      }
      function document() {
        var doc = parser.treeAdapter.createDocument();
        parser._bootstrap(doc, null);
        tokenizer = parser.tokenizer;
        preprocessor = tokenizer.preprocessor;
        locationTracker = tokenizer.__mixins[0];
        posTracker = locationTracker.posTracker;
        one(tree);
        return doc;
      }
      function all(nodes) {
        var length = 0;
        var index = -1;
        if (nodes) {
          length = nodes.length;
        }
        while (++index < length) {
          one(nodes[index]);
        }
      }
      function root(node) {
        all(node.children);
      }
      function element(node) {
        var empty = voids.indexOf(node.tagName) !== -1;
        parser._processToken(startTag(node), ns.html);
        all(node.children);
        if (!empty) {
          parser._processToken(endTag(node));
          tokenizer.state = dataState;
        }
      }
      function text(node) {
        parser._processToken({
          type: characterToken,
          chars: node.value,
          location: createParse5Location(node)
        });
      }
      function doctype(node) {
        var p5 = toParse5(node);
        parser._processToken({
          type: doctypeToken,
          name: p5.name,
          forceQuirks: false,
          publicId: p5.publicId,
          systemId: p5.systemId,
          location: createParse5Location(node)
        });
      }
      function comment(node) {
        parser._processToken({
          type: commentToken,
          data: node.value,
          location: createParse5Location(node)
        });
      }
      function raw(node) {
        var start = pos.start(node);
        var line = start.line || 1;
        var column = start.column || 1;
        var offset = start.offset || 0;
        var token;
        preprocessor.html = null;
        preprocessor.endOfChunkHit = false;
        preprocessor.lastChunkWritten = false;
        preprocessor.lastCharPos = -1;
        preprocessor.pos = -1;
        posTracker.droppedBufferSize = 0;
        posTracker.line = line;
        posTracker.col = 1;
        posTracker.offset = 0;
        posTracker.lineStartPos = -column + 1;
        posTracker.droppedBufferSize = offset;
        locationTracker.currentAttrLocation = null;
        locationTracker.ctLoc = createParse5Location(node);
        tokenizer.write(node.value);
        parser._runParsingLoop(null);
        token = tokenizer.currentCharacterToken;
        if (token) {
          token.location.endLine = posTracker.line;
          token.location.endCol = posTracker.col + 1;
          token.location.endOffset = posTracker.offset + 1;
          parser._processToken(token);
        }
        tokenizer.currentToken = null;
        tokenizer.currentCharacterToken = null;
        tokenizer.currentAttr = null;
      }
    }
    function startTag(node) {
      var location = createParse5Location(node);
      location.startTag = xtend(location);
      return {
        type: startTagToken,
        tagName: node.tagName,
        selfClosing: false,
        attrs: attributes(node),
        location
      };
    }
    function attributes(node) {
      return toParse5({
        tagName: node.tagName,
        type: 'element',
        properties: node.properties
      }).attrs;
    }
    function endTag(node) {
      var location = createParse5Location(node);
      location.endTag = xtend(location);
      return {
        type: endTagToken,
        tagName: node.tagName,
        attrs: [],
        location
      };
    }
    function unknown(node) {
      throw new Error('Cannot compile `' + node.type + '` node');
    }
    function documentMode(node) {
      var head = node.type === 'root' ? node.children[0] : node;
      return head && (head.type === 'doctype' || head.tagName === 'html');
    }
    function createParse5Location(node) {
      var start = pos.start(node);
      var end = pos.end(node);
      return {
        startLine: start.line,
        startCol: start.column,
        startOffset: start.offset,
        endLine: end.line,
        endCol: end.column,
        endOffset: end.offset
      };
    }
  }
});

// esm-build-6f210b912928999b8301ded90edd9c2ae109acea-128f0db8/mod.js
var __module = __toESM(require_hast_util_raw());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
