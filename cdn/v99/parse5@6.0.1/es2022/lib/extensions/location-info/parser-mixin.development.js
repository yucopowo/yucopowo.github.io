/* esm.sh - esbuild bundle(parse5@6.0.1/lib/extensions/location-info/parser-mixin) es2022 development */
import __parse5_lib_tokenizer$ from '/cdn/v99/parse5@6.0.1/es2022/lib/tokenizer.development.js';
import __parse5_lib_utils_mixin$ from '/cdn/v99/parse5@6.0.1/es2022/lib/utils/mixin.development.js';
import __parse5_lib_common_html$ from '/cdn/v99/parse5@6.0.1/es2022/lib/common/html.development.js';
import __parse5_lib_extensions_location_info_open_element_stack_mixin$ from '/cdn/v99/parse5@6.0.1/es2022/lib/extensions/location-info/open-element-stack-mixin.development.js';
import __parse5_lib_extensions_location_info_tokenizer_mixin$ from '/cdn/v99/parse5@6.0.1/es2022/lib/extensions/location-info/tokenizer-mixin.development.js';
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

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/extensions/location-info/parser-mixin.js
var require_parser_mixin = __commonJS({
  'esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/extensions/location-info/parser-mixin.js'(
    exports,
    module
  ) {
    'use strict';

    var Mixin = __parse5_lib_utils_mixin$;
    var Tokenizer = __parse5_lib_tokenizer$;
    var LocationInfoTokenizerMixin = __parse5_lib_extensions_location_info_tokenizer_mixin$;
    var LocationInfoOpenElementStackMixin = __parse5_lib_extensions_location_info_open_element_stack_mixin$;
    var HTML = __parse5_lib_common_html$;
    var $ = HTML.TAG_NAMES;
    var LocationInfoParserMixin = class extends Mixin {
      constructor(parser) {
        super(parser);
        this.parser = parser;
        this.treeAdapter = this.parser.treeAdapter;
        this.posTracker = null;
        this.lastStartTagToken = null;
        this.lastFosterParentingLocation = null;
        this.currentToken = null;
      }
      _setStartLocation(element) {
        let loc = null;
        if (this.lastStartTagToken) {
          loc = Object.assign({}, this.lastStartTagToken.location);
          loc.startTag = this.lastStartTagToken.location;
        }
        this.treeAdapter.setNodeSourceCodeLocation(element, loc);
      }
      _setEndLocation(element, closingToken) {
        const loc = this.treeAdapter.getNodeSourceCodeLocation(element);
        if (loc) {
          if (closingToken.location) {
            const ctLoc = closingToken.location;
            const tn = this.treeAdapter.getTagName(element);
            const isClosingEndTag = closingToken.type === Tokenizer.END_TAG_TOKEN && tn === closingToken.tagName;
            const endLoc = {};
            if (isClosingEndTag) {
              endLoc.endTag = Object.assign({}, ctLoc);
              endLoc.endLine = ctLoc.endLine;
              endLoc.endCol = ctLoc.endCol;
              endLoc.endOffset = ctLoc.endOffset;
            } else {
              endLoc.endLine = ctLoc.startLine;
              endLoc.endCol = ctLoc.startCol;
              endLoc.endOffset = ctLoc.startOffset;
            }
            this.treeAdapter.updateNodeSourceCodeLocation(element, endLoc);
          }
        }
      }
      _getOverriddenMethods(mxn, orig) {
        return {
          _bootstrap(document, fragmentContext) {
            orig._bootstrap.call(this, document, fragmentContext);
            mxn.lastStartTagToken = null;
            mxn.lastFosterParentingLocation = null;
            mxn.currentToken = null;
            const tokenizerMixin = Mixin.install(this.tokenizer, LocationInfoTokenizerMixin);
            mxn.posTracker = tokenizerMixin.posTracker;
            Mixin.install(this.openElements, LocationInfoOpenElementStackMixin, {
              onItemPop: function(element) {
                mxn._setEndLocation(element, mxn.currentToken);
              }
            });
          },
          _runParsingLoop(scriptHandler) {
            orig._runParsingLoop.call(this, scriptHandler);
            for (let i = this.openElements.stackTop; i >= 0; i--) {
              mxn._setEndLocation(this.openElements.items[i], mxn.currentToken);
            }
          },
          _processTokenInForeignContent(token) {
            mxn.currentToken = token;
            orig._processTokenInForeignContent.call(this, token);
          },
          _processToken(token) {
            mxn.currentToken = token;
            orig._processToken.call(this, token);
            const requireExplicitUpdate =
              token.type === Tokenizer.END_TAG_TOKEN &&
              (token.tagName === $.HTML || (token.tagName === $.BODY && this.openElements.hasInScope($.BODY)));
            if (requireExplicitUpdate) {
              for (let i = this.openElements.stackTop; i >= 0; i--) {
                const element = this.openElements.items[i];
                if (this.treeAdapter.getTagName(element) === token.tagName) {
                  mxn._setEndLocation(element, token);
                  break;
                }
              }
            }
          },
          _setDocumentType(token) {
            orig._setDocumentType.call(this, token);
            const documentChildren = this.treeAdapter.getChildNodes(this.document);
            const cnLength = documentChildren.length;
            for (let i = 0; i < cnLength; i++) {
              const node = documentChildren[i];
              if (this.treeAdapter.isDocumentTypeNode(node)) {
                this.treeAdapter.setNodeSourceCodeLocation(node, token.location);
                break;
              }
            }
          },
          _attachElementToTree(element) {
            mxn._setStartLocation(element);
            mxn.lastStartTagToken = null;
            orig._attachElementToTree.call(this, element);
          },
          _appendElement(token, namespaceURI) {
            mxn.lastStartTagToken = token;
            orig._appendElement.call(this, token, namespaceURI);
          },
          _insertElement(token, namespaceURI) {
            mxn.lastStartTagToken = token;
            orig._insertElement.call(this, token, namespaceURI);
          },
          _insertTemplate(token) {
            mxn.lastStartTagToken = token;
            orig._insertTemplate.call(this, token);
            const tmplContent = this.treeAdapter.getTemplateContent(this.openElements.current);
            this.treeAdapter.setNodeSourceCodeLocation(tmplContent, null);
          },
          _insertFakeRootElement() {
            orig._insertFakeRootElement.call(this);
            this.treeAdapter.setNodeSourceCodeLocation(this.openElements.current, null);
          },
          _appendCommentNode(token, parent) {
            orig._appendCommentNode.call(this, token, parent);
            const children = this.treeAdapter.getChildNodes(parent);
            const commentNode = children[children.length - 1];
            this.treeAdapter.setNodeSourceCodeLocation(commentNode, token.location);
          },
          _findFosterParentingLocation() {
            mxn.lastFosterParentingLocation = orig._findFosterParentingLocation.call(this);
            return mxn.lastFosterParentingLocation;
          },
          _insertCharacters(token) {
            orig._insertCharacters.call(this, token);
            const hasFosterParent = this._shouldFosterParentOnInsertion();
            const parent =
              (hasFosterParent && mxn.lastFosterParentingLocation.parent) ||
              this.openElements.currentTmplContent ||
              this.openElements.current;
            const siblings = this.treeAdapter.getChildNodes(parent);
            const textNodeIdx =
              hasFosterParent && mxn.lastFosterParentingLocation.beforeElement
                ? siblings.indexOf(mxn.lastFosterParentingLocation.beforeElement) - 1
                : siblings.length - 1;
            const textNode = siblings[textNodeIdx];
            const tnLoc = this.treeAdapter.getNodeSourceCodeLocation(textNode);
            if (tnLoc) {
              const { endLine, endCol, endOffset } = token.location;
              this.treeAdapter.updateNodeSourceCodeLocation(textNode, {
                endLine,
                endCol,
                endOffset
              });
            } else {
              this.treeAdapter.setNodeSourceCodeLocation(textNode, token.location);
            }
          }
        };
      }
    };
    module.exports = LocationInfoParserMixin;
  }
});

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/mod.js
var __module = __toESM(require_parser_mixin());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
