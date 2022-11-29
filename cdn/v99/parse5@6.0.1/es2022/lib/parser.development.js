/* esm.sh - esbuild bundle(parse5@6.0.1/lib/parser) es2022 development */
import __parse5_lib_common_doctype$ from '/cdn/v99/parse5@6.0.1/es2022/lib/common/doctype.development.js';
import __parse5_lib_utils_merge_options$ from '/cdn/v99/parse5@6.0.1/es2022/lib/utils/merge-options.development.js';
import __parse5_lib_tree_adapters_default$ from '/cdn/v99/parse5@6.0.1/es2022/lib/tree-adapters/default.development.js';
import __parse5_lib_utils_mixin$ from '/cdn/v99/parse5@6.0.1/es2022/lib/utils/mixin.development.js';
import __parse5_lib_parser_formatting_element_list$ from '/cdn/v99/parse5@6.0.1/es2022/lib/parser/formatting-element-list.development.js';
import __parse5_lib_common_unicode$ from '/cdn/v99/parse5@6.0.1/es2022/lib/common/unicode.development.js';
import __parse5_lib_common_error_codes$ from '/cdn/v99/parse5@6.0.1/es2022/lib/common/error-codes.development.js';
import __parse5_lib_common_foreign_content$ from '/cdn/v99/parse5@6.0.1/es2022/lib/common/foreign-content.development.js';
import __parse5_lib_extensions_error_reporting_parser_mixin$ from '/cdn/v99/parse5@6.0.1/es2022/lib/extensions/error-reporting/parser-mixin.development.js';
import __parse5_lib_extensions_location_info_parser_mixin$ from '/cdn/v99/parse5@6.0.1/es2022/lib/extensions/location-info/parser-mixin.development.js';
import __parse5_lib_parser_open_element_stack$ from '/cdn/v99/parse5@6.0.1/es2022/lib/parser/open-element-stack.development.js';
import __parse5_lib_tokenizer$ from '/cdn/v99/parse5@6.0.1/es2022/lib/tokenizer.development.js';
import __parse5_lib_common_html$ from '/cdn/v99/parse5@6.0.1/es2022/lib/common/html.development.js';
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

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/parser/index.js
var require_parser = __commonJS({
  'esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/parser/index.js'(
    exports,
    module
  ) {
    'use strict';

    var Tokenizer = __parse5_lib_tokenizer$;
    var OpenElementStack = __parse5_lib_parser_open_element_stack$;
    var FormattingElementList = __parse5_lib_parser_formatting_element_list$;
    var LocationInfoParserMixin = __parse5_lib_extensions_location_info_parser_mixin$;
    var ErrorReportingParserMixin = __parse5_lib_extensions_error_reporting_parser_mixin$;
    var Mixin = __parse5_lib_utils_mixin$;
    var defaultTreeAdapter = __parse5_lib_tree_adapters_default$;
    var mergeOptions = __parse5_lib_utils_merge_options$;
    var doctype = __parse5_lib_common_doctype$;
    var foreignContent = __parse5_lib_common_foreign_content$;
    var ERR = __parse5_lib_common_error_codes$;
    var unicode = __parse5_lib_common_unicode$;
    var HTML = __parse5_lib_common_html$;
    var $ = HTML.TAG_NAMES;
    var NS = HTML.NAMESPACES;
    var ATTRS = HTML.ATTRS;
    var DEFAULT_OPTIONS = {
      scriptingEnabled: true,
      sourceCodeLocationInfo: false,
      onParseError: null,
      treeAdapter: defaultTreeAdapter
    };
    var HIDDEN_INPUT_TYPE = 'hidden';
    var AA_OUTER_LOOP_ITER = 8;
    var AA_INNER_LOOP_ITER = 3;
    var INITIAL_MODE = 'INITIAL_MODE';
    var BEFORE_HTML_MODE = 'BEFORE_HTML_MODE';
    var BEFORE_HEAD_MODE = 'BEFORE_HEAD_MODE';
    var IN_HEAD_MODE = 'IN_HEAD_MODE';
    var IN_HEAD_NO_SCRIPT_MODE = 'IN_HEAD_NO_SCRIPT_MODE';
    var AFTER_HEAD_MODE = 'AFTER_HEAD_MODE';
    var IN_BODY_MODE = 'IN_BODY_MODE';
    var TEXT_MODE = 'TEXT_MODE';
    var IN_TABLE_MODE = 'IN_TABLE_MODE';
    var IN_TABLE_TEXT_MODE = 'IN_TABLE_TEXT_MODE';
    var IN_CAPTION_MODE = 'IN_CAPTION_MODE';
    var IN_COLUMN_GROUP_MODE = 'IN_COLUMN_GROUP_MODE';
    var IN_TABLE_BODY_MODE = 'IN_TABLE_BODY_MODE';
    var IN_ROW_MODE = 'IN_ROW_MODE';
    var IN_CELL_MODE = 'IN_CELL_MODE';
    var IN_SELECT_MODE = 'IN_SELECT_MODE';
    var IN_SELECT_IN_TABLE_MODE = 'IN_SELECT_IN_TABLE_MODE';
    var IN_TEMPLATE_MODE = 'IN_TEMPLATE_MODE';
    var AFTER_BODY_MODE = 'AFTER_BODY_MODE';
    var IN_FRAMESET_MODE = 'IN_FRAMESET_MODE';
    var AFTER_FRAMESET_MODE = 'AFTER_FRAMESET_MODE';
    var AFTER_AFTER_BODY_MODE = 'AFTER_AFTER_BODY_MODE';
    var AFTER_AFTER_FRAMESET_MODE = 'AFTER_AFTER_FRAMESET_MODE';
    var INSERTION_MODE_RESET_MAP = {
      [$.TR]: IN_ROW_MODE,
      [$.TBODY]: IN_TABLE_BODY_MODE,
      [$.THEAD]: IN_TABLE_BODY_MODE,
      [$.TFOOT]: IN_TABLE_BODY_MODE,
      [$.CAPTION]: IN_CAPTION_MODE,
      [$.COLGROUP]: IN_COLUMN_GROUP_MODE,
      [$.TABLE]: IN_TABLE_MODE,
      [$.BODY]: IN_BODY_MODE,
      [$.FRAMESET]: IN_FRAMESET_MODE
    };
    var TEMPLATE_INSERTION_MODE_SWITCH_MAP = {
      [$.CAPTION]: IN_TABLE_MODE,
      [$.COLGROUP]: IN_TABLE_MODE,
      [$.TBODY]: IN_TABLE_MODE,
      [$.TFOOT]: IN_TABLE_MODE,
      [$.THEAD]: IN_TABLE_MODE,
      [$.COL]: IN_COLUMN_GROUP_MODE,
      [$.TR]: IN_TABLE_BODY_MODE,
      [$.TD]: IN_ROW_MODE,
      [$.TH]: IN_ROW_MODE
    };
    var TOKEN_HANDLERS = {
      [INITIAL_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: tokenInInitialMode,
        [Tokenizer.NULL_CHARACTER_TOKEN]: tokenInInitialMode,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: doctypeInInitialMode,
        [Tokenizer.START_TAG_TOKEN]: tokenInInitialMode,
        [Tokenizer.END_TAG_TOKEN]: tokenInInitialMode,
        [Tokenizer.EOF_TOKEN]: tokenInInitialMode
      },
      [BEFORE_HTML_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: tokenBeforeHtml,
        [Tokenizer.NULL_CHARACTER_TOKEN]: tokenBeforeHtml,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagBeforeHtml,
        [Tokenizer.END_TAG_TOKEN]: endTagBeforeHtml,
        [Tokenizer.EOF_TOKEN]: tokenBeforeHtml
      },
      [BEFORE_HEAD_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: tokenBeforeHead,
        [Tokenizer.NULL_CHARACTER_TOKEN]: tokenBeforeHead,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: misplacedDoctype,
        [Tokenizer.START_TAG_TOKEN]: startTagBeforeHead,
        [Tokenizer.END_TAG_TOKEN]: endTagBeforeHead,
        [Tokenizer.EOF_TOKEN]: tokenBeforeHead
      },
      [IN_HEAD_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: tokenInHead,
        [Tokenizer.NULL_CHARACTER_TOKEN]: tokenInHead,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: misplacedDoctype,
        [Tokenizer.START_TAG_TOKEN]: startTagInHead,
        [Tokenizer.END_TAG_TOKEN]: endTagInHead,
        [Tokenizer.EOF_TOKEN]: tokenInHead
      },
      [IN_HEAD_NO_SCRIPT_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: tokenInHeadNoScript,
        [Tokenizer.NULL_CHARACTER_TOKEN]: tokenInHeadNoScript,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: misplacedDoctype,
        [Tokenizer.START_TAG_TOKEN]: startTagInHeadNoScript,
        [Tokenizer.END_TAG_TOKEN]: endTagInHeadNoScript,
        [Tokenizer.EOF_TOKEN]: tokenInHeadNoScript
      },
      [AFTER_HEAD_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: tokenAfterHead,
        [Tokenizer.NULL_CHARACTER_TOKEN]: tokenAfterHead,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: misplacedDoctype,
        [Tokenizer.START_TAG_TOKEN]: startTagAfterHead,
        [Tokenizer.END_TAG_TOKEN]: endTagAfterHead,
        [Tokenizer.EOF_TOKEN]: tokenAfterHead
      },
      [IN_BODY_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: characterInBody,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInBody,
        [Tokenizer.END_TAG_TOKEN]: endTagInBody,
        [Tokenizer.EOF_TOKEN]: eofInBody
      },
      [TEXT_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.NULL_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.COMMENT_TOKEN]: ignoreToken,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: ignoreToken,
        [Tokenizer.END_TAG_TOKEN]: endTagInText,
        [Tokenizer.EOF_TOKEN]: eofInText
      },
      [IN_TABLE_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: characterInTable,
        [Tokenizer.NULL_CHARACTER_TOKEN]: characterInTable,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: characterInTable,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInTable,
        [Tokenizer.END_TAG_TOKEN]: endTagInTable,
        [Tokenizer.EOF_TOKEN]: eofInBody
      },
      [IN_TABLE_TEXT_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: characterInTableText,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInTableText,
        [Tokenizer.COMMENT_TOKEN]: tokenInTableText,
        [Tokenizer.DOCTYPE_TOKEN]: tokenInTableText,
        [Tokenizer.START_TAG_TOKEN]: tokenInTableText,
        [Tokenizer.END_TAG_TOKEN]: tokenInTableText,
        [Tokenizer.EOF_TOKEN]: tokenInTableText
      },
      [IN_CAPTION_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: characterInBody,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInCaption,
        [Tokenizer.END_TAG_TOKEN]: endTagInCaption,
        [Tokenizer.EOF_TOKEN]: eofInBody
      },
      [IN_COLUMN_GROUP_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: tokenInColumnGroup,
        [Tokenizer.NULL_CHARACTER_TOKEN]: tokenInColumnGroup,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInColumnGroup,
        [Tokenizer.END_TAG_TOKEN]: endTagInColumnGroup,
        [Tokenizer.EOF_TOKEN]: eofInBody
      },
      [IN_TABLE_BODY_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: characterInTable,
        [Tokenizer.NULL_CHARACTER_TOKEN]: characterInTable,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: characterInTable,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInTableBody,
        [Tokenizer.END_TAG_TOKEN]: endTagInTableBody,
        [Tokenizer.EOF_TOKEN]: eofInBody
      },
      [IN_ROW_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: characterInTable,
        [Tokenizer.NULL_CHARACTER_TOKEN]: characterInTable,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: characterInTable,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInRow,
        [Tokenizer.END_TAG_TOKEN]: endTagInRow,
        [Tokenizer.EOF_TOKEN]: eofInBody
      },
      [IN_CELL_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: characterInBody,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInCell,
        [Tokenizer.END_TAG_TOKEN]: endTagInCell,
        [Tokenizer.EOF_TOKEN]: eofInBody
      },
      [IN_SELECT_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInSelect,
        [Tokenizer.END_TAG_TOKEN]: endTagInSelect,
        [Tokenizer.EOF_TOKEN]: eofInBody
      },
      [IN_SELECT_IN_TABLE_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInSelectInTable,
        [Tokenizer.END_TAG_TOKEN]: endTagInSelectInTable,
        [Tokenizer.EOF_TOKEN]: eofInBody
      },
      [IN_TEMPLATE_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: characterInBody,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInTemplate,
        [Tokenizer.END_TAG_TOKEN]: endTagInTemplate,
        [Tokenizer.EOF_TOKEN]: eofInTemplate
      },
      [AFTER_BODY_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: tokenAfterBody,
        [Tokenizer.NULL_CHARACTER_TOKEN]: tokenAfterBody,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
        [Tokenizer.COMMENT_TOKEN]: appendCommentToRootHtmlElement,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagAfterBody,
        [Tokenizer.END_TAG_TOKEN]: endTagAfterBody,
        [Tokenizer.EOF_TOKEN]: stopParsing
      },
      [IN_FRAMESET_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInFrameset,
        [Tokenizer.END_TAG_TOKEN]: endTagInFrameset,
        [Tokenizer.EOF_TOKEN]: stopParsing
      },
      [AFTER_FRAMESET_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagAfterFrameset,
        [Tokenizer.END_TAG_TOKEN]: endTagAfterFrameset,
        [Tokenizer.EOF_TOKEN]: stopParsing
      },
      [AFTER_AFTER_BODY_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: tokenAfterAfterBody,
        [Tokenizer.NULL_CHARACTER_TOKEN]: tokenAfterAfterBody,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
        [Tokenizer.COMMENT_TOKEN]: appendCommentToDocument,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagAfterAfterBody,
        [Tokenizer.END_TAG_TOKEN]: tokenAfterAfterBody,
        [Tokenizer.EOF_TOKEN]: stopParsing
      },
      [AFTER_AFTER_FRAMESET_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
        [Tokenizer.COMMENT_TOKEN]: appendCommentToDocument,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagAfterAfterFrameset,
        [Tokenizer.END_TAG_TOKEN]: ignoreToken,
        [Tokenizer.EOF_TOKEN]: stopParsing
      }
    };
    var Parser = class {
      constructor(options) {
        this.options = mergeOptions(DEFAULT_OPTIONS, options);
        this.treeAdapter = this.options.treeAdapter;
        this.pendingScript = null;
        if (this.options.sourceCodeLocationInfo) {
          Mixin.install(this, LocationInfoParserMixin);
        }
        if (this.options.onParseError) {
          Mixin.install(this, ErrorReportingParserMixin, {
            onParseError: this.options.onParseError
          });
        }
      }
      parse(html) {
        const document = this.treeAdapter.createDocument();
        this._bootstrap(document, null);
        this.tokenizer.write(html, true);
        this._runParsingLoop(null);
        return document;
      }
      parseFragment(html, fragmentContext) {
        if (!fragmentContext) {
          fragmentContext = this.treeAdapter.createElement($.TEMPLATE, NS.HTML, []);
        }
        const documentMock = this.treeAdapter.createElement('documentmock', NS.HTML, []);
        this._bootstrap(documentMock, fragmentContext);
        if (this.treeAdapter.getTagName(fragmentContext) === $.TEMPLATE) {
          this._pushTmplInsertionMode(IN_TEMPLATE_MODE);
        }
        this._initTokenizerForFragmentParsing();
        this._insertFakeRootElement();
        this._resetInsertionMode();
        this._findFormInFragmentContext();
        this.tokenizer.write(html, true);
        this._runParsingLoop(null);
        const rootElement = this.treeAdapter.getFirstChild(documentMock);
        const fragment = this.treeAdapter.createDocumentFragment();
        this._adoptNodes(rootElement, fragment);
        return fragment;
      }
      _bootstrap(document, fragmentContext) {
        this.tokenizer = new Tokenizer(this.options);
        this.stopped = false;
        this.insertionMode = INITIAL_MODE;
        this.originalInsertionMode = '';
        this.document = document;
        this.fragmentContext = fragmentContext;
        this.headElement = null;
        this.formElement = null;
        this.openElements = new OpenElementStack(this.document, this.treeAdapter);
        this.activeFormattingElements = new FormattingElementList(this.treeAdapter);
        this.tmplInsertionModeStack = [];
        this.tmplInsertionModeStackTop = -1;
        this.currentTmplInsertionMode = null;
        this.pendingCharacterTokens = [];
        this.hasNonWhitespacePendingCharacterToken = false;
        this.framesetOk = true;
        this.skipNextNewLine = false;
        this.fosterParentingEnabled = false;
      }
      _err() {}
      _runParsingLoop(scriptHandler) {
        while (!this.stopped) {
          this._setupTokenizerCDATAMode();
          const token = this.tokenizer.getNextToken();
          if (token.type === Tokenizer.HIBERNATION_TOKEN) {
            break;
          }
          if (this.skipNextNewLine) {
            this.skipNextNewLine = false;
            if (token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN && token.chars[0] === '\n') {
              if (token.chars.length === 1) {
                continue;
              }
              token.chars = token.chars.substr(1);
            }
          }
          this._processInputToken(token);
          if (scriptHandler && this.pendingScript) {
            break;
          }
        }
      }
      runParsingLoopForCurrentChunk(writeCallback, scriptHandler) {
        this._runParsingLoop(scriptHandler);
        if (scriptHandler && this.pendingScript) {
          const script = this.pendingScript;
          this.pendingScript = null;
          scriptHandler(script);
          return;
        }
        if (writeCallback) {
          writeCallback();
        }
      }
      _setupTokenizerCDATAMode() {
        const current = this._getAdjustedCurrentElement();
        this.tokenizer.allowCDATA =
          current &&
          current !== this.document &&
          this.treeAdapter.getNamespaceURI(current) !== NS.HTML &&
          !this._isIntegrationPoint(current);
      }
      _switchToTextParsing(currentToken, nextTokenizerState) {
        this._insertElement(currentToken, NS.HTML);
        this.tokenizer.state = nextTokenizerState;
        this.originalInsertionMode = this.insertionMode;
        this.insertionMode = TEXT_MODE;
      }
      switchToPlaintextParsing() {
        this.insertionMode = TEXT_MODE;
        this.originalInsertionMode = IN_BODY_MODE;
        this.tokenizer.state = Tokenizer.MODE.PLAINTEXT;
      }
      _getAdjustedCurrentElement() {
        return this.openElements.stackTop === 0 && this.fragmentContext
          ? this.fragmentContext
          : this.openElements.current;
      }
      _findFormInFragmentContext() {
        let node = this.fragmentContext;
        do {
          if (this.treeAdapter.getTagName(node) === $.FORM) {
            this.formElement = node;
            break;
          }
          node = this.treeAdapter.getParentNode(node);
        } while (node);
      }
      _initTokenizerForFragmentParsing() {
        if (this.treeAdapter.getNamespaceURI(this.fragmentContext) === NS.HTML) {
          const tn = this.treeAdapter.getTagName(this.fragmentContext);
          if (tn === $.TITLE || tn === $.TEXTAREA) {
            this.tokenizer.state = Tokenizer.MODE.RCDATA;
          } else if (
            tn === $.STYLE ||
            tn === $.XMP ||
            tn === $.IFRAME ||
            tn === $.NOEMBED ||
            tn === $.NOFRAMES ||
            tn === $.NOSCRIPT
          ) {
            this.tokenizer.state = Tokenizer.MODE.RAWTEXT;
          } else if (tn === $.SCRIPT) {
            this.tokenizer.state = Tokenizer.MODE.SCRIPT_DATA;
          } else if (tn === $.PLAINTEXT) {
            this.tokenizer.state = Tokenizer.MODE.PLAINTEXT;
          }
        }
      }
      _setDocumentType(token) {
        const name = token.name || '';
        const publicId = token.publicId || '';
        const systemId = token.systemId || '';
        this.treeAdapter.setDocumentType(this.document, name, publicId, systemId);
      }
      _attachElementToTree(element) {
        if (this._shouldFosterParentOnInsertion()) {
          this._fosterParentElement(element);
        } else {
          const parent = this.openElements.currentTmplContent || this.openElements.current;
          this.treeAdapter.appendChild(parent, element);
        }
      }
      _appendElement(token, namespaceURI) {
        const element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
        this._attachElementToTree(element);
      }
      _insertElement(token, namespaceURI) {
        const element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
        this._attachElementToTree(element);
        this.openElements.push(element);
      }
      _insertFakeElement(tagName) {
        const element = this.treeAdapter.createElement(tagName, NS.HTML, []);
        this._attachElementToTree(element);
        this.openElements.push(element);
      }
      _insertTemplate(token) {
        const tmpl = this.treeAdapter.createElement(token.tagName, NS.HTML, token.attrs);
        const content = this.treeAdapter.createDocumentFragment();
        this.treeAdapter.setTemplateContent(tmpl, content);
        this._attachElementToTree(tmpl);
        this.openElements.push(tmpl);
      }
      _insertFakeRootElement() {
        const element = this.treeAdapter.createElement($.HTML, NS.HTML, []);
        this.treeAdapter.appendChild(this.openElements.current, element);
        this.openElements.push(element);
      }
      _appendCommentNode(token, parent) {
        const commentNode = this.treeAdapter.createCommentNode(token.data);
        this.treeAdapter.appendChild(parent, commentNode);
      }
      _insertCharacters(token) {
        if (this._shouldFosterParentOnInsertion()) {
          this._fosterParentText(token.chars);
        } else {
          const parent = this.openElements.currentTmplContent || this.openElements.current;
          this.treeAdapter.insertText(parent, token.chars);
        }
      }
      _adoptNodes(donor, recipient) {
        for (let child = this.treeAdapter.getFirstChild(donor); child; child = this.treeAdapter.getFirstChild(donor)) {
          this.treeAdapter.detachNode(child);
          this.treeAdapter.appendChild(recipient, child);
        }
      }
      _shouldProcessTokenInForeignContent(token) {
        const current = this._getAdjustedCurrentElement();
        if (!current || current === this.document) {
          return false;
        }
        const ns = this.treeAdapter.getNamespaceURI(current);
        if (ns === NS.HTML) {
          return false;
        }
        if (
          this.treeAdapter.getTagName(current) === $.ANNOTATION_XML &&
          ns === NS.MATHML &&
          token.type === Tokenizer.START_TAG_TOKEN &&
          token.tagName === $.SVG
        ) {
          return false;
        }
        const isCharacterToken =
          token.type === Tokenizer.CHARACTER_TOKEN ||
          token.type === Tokenizer.NULL_CHARACTER_TOKEN ||
          token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN;
        const isMathMLTextStartTag =
          token.type === Tokenizer.START_TAG_TOKEN && token.tagName !== $.MGLYPH && token.tagName !== $.MALIGNMARK;
        if ((isMathMLTextStartTag || isCharacterToken) && this._isIntegrationPoint(current, NS.MATHML)) {
          return false;
        }
        if (
          (token.type === Tokenizer.START_TAG_TOKEN || isCharacterToken) &&
          this._isIntegrationPoint(current, NS.HTML)
        ) {
          return false;
        }
        return token.type !== Tokenizer.EOF_TOKEN;
      }
      _processToken(token) {
        TOKEN_HANDLERS[this.insertionMode][token.type](this, token);
      }
      _processTokenInBodyMode(token) {
        TOKEN_HANDLERS[IN_BODY_MODE][token.type](this, token);
      }
      _processTokenInForeignContent(token) {
        if (token.type === Tokenizer.CHARACTER_TOKEN) {
          characterInForeignContent(this, token);
        } else if (token.type === Tokenizer.NULL_CHARACTER_TOKEN) {
          nullCharacterInForeignContent(this, token);
        } else if (token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN) {
          insertCharacters(this, token);
        } else if (token.type === Tokenizer.COMMENT_TOKEN) {
          appendComment(this, token);
        } else if (token.type === Tokenizer.START_TAG_TOKEN) {
          startTagInForeignContent(this, token);
        } else if (token.type === Tokenizer.END_TAG_TOKEN) {
          endTagInForeignContent(this, token);
        }
      }
      _processInputToken(token) {
        if (this._shouldProcessTokenInForeignContent(token)) {
          this._processTokenInForeignContent(token);
        } else {
          this._processToken(token);
        }
        if (token.type === Tokenizer.START_TAG_TOKEN && token.selfClosing && !token.ackSelfClosing) {
          this._err(ERR.nonVoidHtmlElementStartTagWithTrailingSolidus);
        }
      }
      _isIntegrationPoint(element, foreignNS) {
        const tn = this.treeAdapter.getTagName(element);
        const ns = this.treeAdapter.getNamespaceURI(element);
        const attrs = this.treeAdapter.getAttrList(element);
        return foreignContent.isIntegrationPoint(tn, ns, attrs, foreignNS);
      }
      _reconstructActiveFormattingElements() {
        const listLength = this.activeFormattingElements.length;
        if (listLength) {
          let unopenIdx = listLength;
          let entry = null;
          do {
            unopenIdx--;
            entry = this.activeFormattingElements.entries[unopenIdx];
            if (entry.type === FormattingElementList.MARKER_ENTRY || this.openElements.contains(entry.element)) {
              unopenIdx++;
              break;
            }
          } while (unopenIdx > 0);
          for (let i = unopenIdx; i < listLength; i++) {
            entry = this.activeFormattingElements.entries[i];
            this._insertElement(entry.token, this.treeAdapter.getNamespaceURI(entry.element));
            entry.element = this.openElements.current;
          }
        }
      }
      _closeTableCell() {
        this.openElements.generateImpliedEndTags();
        this.openElements.popUntilTableCellPopped();
        this.activeFormattingElements.clearToLastMarker();
        this.insertionMode = IN_ROW_MODE;
      }
      _closePElement() {
        this.openElements.generateImpliedEndTagsWithExclusion($.P);
        this.openElements.popUntilTagNamePopped($.P);
      }
      _resetInsertionMode() {
        for (let i = this.openElements.stackTop, last = false; i >= 0; i--) {
          let element = this.openElements.items[i];
          if (i === 0) {
            last = true;
            if (this.fragmentContext) {
              element = this.fragmentContext;
            }
          }
          const tn = this.treeAdapter.getTagName(element);
          const newInsertionMode = INSERTION_MODE_RESET_MAP[tn];
          if (newInsertionMode) {
            this.insertionMode = newInsertionMode;
            break;
          } else if (!last && (tn === $.TD || tn === $.TH)) {
            this.insertionMode = IN_CELL_MODE;
            break;
          } else if (!last && tn === $.HEAD) {
            this.insertionMode = IN_HEAD_MODE;
            break;
          } else if (tn === $.SELECT) {
            this._resetInsertionModeForSelect(i);
            break;
          } else if (tn === $.TEMPLATE) {
            this.insertionMode = this.currentTmplInsertionMode;
            break;
          } else if (tn === $.HTML) {
            this.insertionMode = this.headElement ? AFTER_HEAD_MODE : BEFORE_HEAD_MODE;
            break;
          } else if (last) {
            this.insertionMode = IN_BODY_MODE;
            break;
          }
        }
      }
      _resetInsertionModeForSelect(selectIdx) {
        if (selectIdx > 0) {
          for (let i = selectIdx - 1; i > 0; i--) {
            const ancestor = this.openElements.items[i];
            const tn = this.treeAdapter.getTagName(ancestor);
            if (tn === $.TEMPLATE) {
              break;
            } else if (tn === $.TABLE) {
              this.insertionMode = IN_SELECT_IN_TABLE_MODE;
              return;
            }
          }
        }
        this.insertionMode = IN_SELECT_MODE;
      }
      _pushTmplInsertionMode(mode) {
        this.tmplInsertionModeStack.push(mode);
        this.tmplInsertionModeStackTop++;
        this.currentTmplInsertionMode = mode;
      }
      _popTmplInsertionMode() {
        this.tmplInsertionModeStack.pop();
        this.tmplInsertionModeStackTop--;
        this.currentTmplInsertionMode = this.tmplInsertionModeStack[this.tmplInsertionModeStackTop];
      }
      _isElementCausesFosterParenting(element) {
        const tn = this.treeAdapter.getTagName(element);
        return tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR;
      }
      _shouldFosterParentOnInsertion() {
        return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.current);
      }
      _findFosterParentingLocation() {
        const location = {
          parent: null,
          beforeElement: null
        };
        for (let i = this.openElements.stackTop; i >= 0; i--) {
          const openElement = this.openElements.items[i];
          const tn = this.treeAdapter.getTagName(openElement);
          const ns = this.treeAdapter.getNamespaceURI(openElement);
          if (tn === $.TEMPLATE && ns === NS.HTML) {
            location.parent = this.treeAdapter.getTemplateContent(openElement);
            break;
          } else if (tn === $.TABLE) {
            location.parent = this.treeAdapter.getParentNode(openElement);
            if (location.parent) {
              location.beforeElement = openElement;
            } else {
              location.parent = this.openElements.items[i - 1];
            }
            break;
          }
        }
        if (!location.parent) {
          location.parent = this.openElements.items[0];
        }
        return location;
      }
      _fosterParentElement(element) {
        const location = this._findFosterParentingLocation();
        if (location.beforeElement) {
          this.treeAdapter.insertBefore(location.parent, element, location.beforeElement);
        } else {
          this.treeAdapter.appendChild(location.parent, element);
        }
      }
      _fosterParentText(chars) {
        const location = this._findFosterParentingLocation();
        if (location.beforeElement) {
          this.treeAdapter.insertTextBefore(location.parent, chars, location.beforeElement);
        } else {
          this.treeAdapter.insertText(location.parent, chars);
        }
      }
      _isSpecialElement(element) {
        const tn = this.treeAdapter.getTagName(element);
        const ns = this.treeAdapter.getNamespaceURI(element);
        return HTML.SPECIAL_ELEMENTS[ns][tn];
      }
    };
    module.exports = Parser;
    function aaObtainFormattingElementEntry(p, token) {
      let formattingElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(token.tagName);
      if (formattingElementEntry) {
        if (!p.openElements.contains(formattingElementEntry.element)) {
          p.activeFormattingElements.removeEntry(formattingElementEntry);
          formattingElementEntry = null;
        } else if (!p.openElements.hasInScope(token.tagName)) {
          formattingElementEntry = null;
        }
      } else {
        genericEndTagInBody(p, token);
      }
      return formattingElementEntry;
    }
    function aaObtainFurthestBlock(p, formattingElementEntry) {
      let furthestBlock = null;
      for (let i = p.openElements.stackTop; i >= 0; i--) {
        const element = p.openElements.items[i];
        if (element === formattingElementEntry.element) {
          break;
        }
        if (p._isSpecialElement(element)) {
          furthestBlock = element;
        }
      }
      if (!furthestBlock) {
        p.openElements.popUntilElementPopped(formattingElementEntry.element);
        p.activeFormattingElements.removeEntry(formattingElementEntry);
      }
      return furthestBlock;
    }
    function aaInnerLoop(p, furthestBlock, formattingElement) {
      let lastElement = furthestBlock;
      let nextElement = p.openElements.getCommonAncestor(furthestBlock);
      for (let i = 0, element = nextElement; element !== formattingElement; i++, element = nextElement) {
        nextElement = p.openElements.getCommonAncestor(element);
        const elementEntry = p.activeFormattingElements.getElementEntry(element);
        const counterOverflow = elementEntry && i >= AA_INNER_LOOP_ITER;
        const shouldRemoveFromOpenElements = !elementEntry || counterOverflow;
        if (shouldRemoveFromOpenElements) {
          if (counterOverflow) {
            p.activeFormattingElements.removeEntry(elementEntry);
          }
          p.openElements.remove(element);
        } else {
          element = aaRecreateElementFromEntry(p, elementEntry);
          if (lastElement === furthestBlock) {
            p.activeFormattingElements.bookmark = elementEntry;
          }
          p.treeAdapter.detachNode(lastElement);
          p.treeAdapter.appendChild(element, lastElement);
          lastElement = element;
        }
      }
      return lastElement;
    }
    function aaRecreateElementFromEntry(p, elementEntry) {
      const ns = p.treeAdapter.getNamespaceURI(elementEntry.element);
      const newElement = p.treeAdapter.createElement(elementEntry.token.tagName, ns, elementEntry.token.attrs);
      p.openElements.replace(elementEntry.element, newElement);
      elementEntry.element = newElement;
      return newElement;
    }
    function aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement) {
      if (p._isElementCausesFosterParenting(commonAncestor)) {
        p._fosterParentElement(lastElement);
      } else {
        const tn = p.treeAdapter.getTagName(commonAncestor);
        const ns = p.treeAdapter.getNamespaceURI(commonAncestor);
        if (tn === $.TEMPLATE && ns === NS.HTML) {
          commonAncestor = p.treeAdapter.getTemplateContent(commonAncestor);
        }
        p.treeAdapter.appendChild(commonAncestor, lastElement);
      }
    }
    function aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry) {
      const ns = p.treeAdapter.getNamespaceURI(formattingElementEntry.element);
      const token = formattingElementEntry.token;
      const newElement = p.treeAdapter.createElement(token.tagName, ns, token.attrs);
      p._adoptNodes(furthestBlock, newElement);
      p.treeAdapter.appendChild(furthestBlock, newElement);
      p.activeFormattingElements.insertElementAfterBookmark(newElement, formattingElementEntry.token);
      p.activeFormattingElements.removeEntry(formattingElementEntry);
      p.openElements.remove(formattingElementEntry.element);
      p.openElements.insertAfter(furthestBlock, newElement);
    }
    function callAdoptionAgency(p, token) {
      let formattingElementEntry;
      for (let i = 0; i < AA_OUTER_LOOP_ITER; i++) {
        formattingElementEntry = aaObtainFormattingElementEntry(p, token, formattingElementEntry);
        if (!formattingElementEntry) {
          break;
        }
        const furthestBlock = aaObtainFurthestBlock(p, formattingElementEntry);
        if (!furthestBlock) {
          break;
        }
        p.activeFormattingElements.bookmark = formattingElementEntry;
        const lastElement = aaInnerLoop(p, furthestBlock, formattingElementEntry.element);
        const commonAncestor = p.openElements.getCommonAncestor(formattingElementEntry.element);
        p.treeAdapter.detachNode(lastElement);
        aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement);
        aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry);
      }
    }
    function ignoreToken() {}
    function misplacedDoctype(p) {
      p._err(ERR.misplacedDoctype);
    }
    function appendComment(p, token) {
      p._appendCommentNode(token, p.openElements.currentTmplContent || p.openElements.current);
    }
    function appendCommentToRootHtmlElement(p, token) {
      p._appendCommentNode(token, p.openElements.items[0]);
    }
    function appendCommentToDocument(p, token) {
      p._appendCommentNode(token, p.document);
    }
    function insertCharacters(p, token) {
      p._insertCharacters(token);
    }
    function stopParsing(p) {
      p.stopped = true;
    }
    function doctypeInInitialMode(p, token) {
      p._setDocumentType(token);
      const mode = token.forceQuirks ? HTML.DOCUMENT_MODE.QUIRKS : doctype.getDocumentMode(token);
      if (!doctype.isConforming(token)) {
        p._err(ERR.nonConformingDoctype);
      }
      p.treeAdapter.setDocumentMode(p.document, mode);
      p.insertionMode = BEFORE_HTML_MODE;
    }
    function tokenInInitialMode(p, token) {
      p._err(ERR.missingDoctype, {
        beforeToken: true
      });
      p.treeAdapter.setDocumentMode(p.document, HTML.DOCUMENT_MODE.QUIRKS);
      p.insertionMode = BEFORE_HTML_MODE;
      p._processToken(token);
    }
    function startTagBeforeHtml(p, token) {
      if (token.tagName === $.HTML) {
        p._insertElement(token, NS.HTML);
        p.insertionMode = BEFORE_HEAD_MODE;
      } else {
        tokenBeforeHtml(p, token);
      }
    }
    function endTagBeforeHtml(p, token) {
      const tn = token.tagName;
      if (tn === $.HTML || tn === $.HEAD || tn === $.BODY || tn === $.BR) {
        tokenBeforeHtml(p, token);
      }
    }
    function tokenBeforeHtml(p, token) {
      p._insertFakeRootElement();
      p.insertionMode = BEFORE_HEAD_MODE;
      p._processToken(token);
    }
    function startTagBeforeHead(p, token) {
      const tn = token.tagName;
      if (tn === $.HTML) {
        startTagInBody(p, token);
      } else if (tn === $.HEAD) {
        p._insertElement(token, NS.HTML);
        p.headElement = p.openElements.current;
        p.insertionMode = IN_HEAD_MODE;
      } else {
        tokenBeforeHead(p, token);
      }
    }
    function endTagBeforeHead(p, token) {
      const tn = token.tagName;
      if (tn === $.HEAD || tn === $.BODY || tn === $.HTML || tn === $.BR) {
        tokenBeforeHead(p, token);
      } else {
        p._err(ERR.endTagWithoutMatchingOpenElement);
      }
    }
    function tokenBeforeHead(p, token) {
      p._insertFakeElement($.HEAD);
      p.headElement = p.openElements.current;
      p.insertionMode = IN_HEAD_MODE;
      p._processToken(token);
    }
    function startTagInHead(p, token) {
      const tn = token.tagName;
      if (tn === $.HTML) {
        startTagInBody(p, token);
      } else if (tn === $.BASE || tn === $.BASEFONT || tn === $.BGSOUND || tn === $.LINK || tn === $.META) {
        p._appendElement(token, NS.HTML);
        token.ackSelfClosing = true;
      } else if (tn === $.TITLE) {
        p._switchToTextParsing(token, Tokenizer.MODE.RCDATA);
      } else if (tn === $.NOSCRIPT) {
        if (p.options.scriptingEnabled) {
          p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
        } else {
          p._insertElement(token, NS.HTML);
          p.insertionMode = IN_HEAD_NO_SCRIPT_MODE;
        }
      } else if (tn === $.NOFRAMES || tn === $.STYLE) {
        p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
      } else if (tn === $.SCRIPT) {
        p._switchToTextParsing(token, Tokenizer.MODE.SCRIPT_DATA);
      } else if (tn === $.TEMPLATE) {
        p._insertTemplate(token, NS.HTML);
        p.activeFormattingElements.insertMarker();
        p.framesetOk = false;
        p.insertionMode = IN_TEMPLATE_MODE;
        p._pushTmplInsertionMode(IN_TEMPLATE_MODE);
      } else if (tn === $.HEAD) {
        p._err(ERR.misplacedStartTagForHeadElement);
      } else {
        tokenInHead(p, token);
      }
    }
    function endTagInHead(p, token) {
      const tn = token.tagName;
      if (tn === $.HEAD) {
        p.openElements.pop();
        p.insertionMode = AFTER_HEAD_MODE;
      } else if (tn === $.BODY || tn === $.BR || tn === $.HTML) {
        tokenInHead(p, token);
      } else if (tn === $.TEMPLATE) {
        if (p.openElements.tmplCount > 0) {
          p.openElements.generateImpliedEndTagsThoroughly();
          if (p.openElements.currentTagName !== $.TEMPLATE) {
            p._err(ERR.closingOfElementWithOpenChildElements);
          }
          p.openElements.popUntilTagNamePopped($.TEMPLATE);
          p.activeFormattingElements.clearToLastMarker();
          p._popTmplInsertionMode();
          p._resetInsertionMode();
        } else {
          p._err(ERR.endTagWithoutMatchingOpenElement);
        }
      } else {
        p._err(ERR.endTagWithoutMatchingOpenElement);
      }
    }
    function tokenInHead(p, token) {
      p.openElements.pop();
      p.insertionMode = AFTER_HEAD_MODE;
      p._processToken(token);
    }
    function startTagInHeadNoScript(p, token) {
      const tn = token.tagName;
      if (tn === $.HTML) {
        startTagInBody(p, token);
      } else if (
        tn === $.BASEFONT ||
        tn === $.BGSOUND ||
        tn === $.HEAD ||
        tn === $.LINK ||
        tn === $.META ||
        tn === $.NOFRAMES ||
        tn === $.STYLE
      ) {
        startTagInHead(p, token);
      } else if (tn === $.NOSCRIPT) {
        p._err(ERR.nestedNoscriptInHead);
      } else {
        tokenInHeadNoScript(p, token);
      }
    }
    function endTagInHeadNoScript(p, token) {
      const tn = token.tagName;
      if (tn === $.NOSCRIPT) {
        p.openElements.pop();
        p.insertionMode = IN_HEAD_MODE;
      } else if (tn === $.BR) {
        tokenInHeadNoScript(p, token);
      } else {
        p._err(ERR.endTagWithoutMatchingOpenElement);
      }
    }
    function tokenInHeadNoScript(p, token) {
      const errCode =
        token.type === Tokenizer.EOF_TOKEN ? ERR.openElementsLeftAfterEof : ERR.disallowedContentInNoscriptInHead;
      p._err(errCode);
      p.openElements.pop();
      p.insertionMode = IN_HEAD_MODE;
      p._processToken(token);
    }
    function startTagAfterHead(p, token) {
      const tn = token.tagName;
      if (tn === $.HTML) {
        startTagInBody(p, token);
      } else if (tn === $.BODY) {
        p._insertElement(token, NS.HTML);
        p.framesetOk = false;
        p.insertionMode = IN_BODY_MODE;
      } else if (tn === $.FRAMESET) {
        p._insertElement(token, NS.HTML);
        p.insertionMode = IN_FRAMESET_MODE;
      } else if (
        tn === $.BASE ||
        tn === $.BASEFONT ||
        tn === $.BGSOUND ||
        tn === $.LINK ||
        tn === $.META ||
        tn === $.NOFRAMES ||
        tn === $.SCRIPT ||
        tn === $.STYLE ||
        tn === $.TEMPLATE ||
        tn === $.TITLE
      ) {
        p._err(ERR.abandonedHeadElementChild);
        p.openElements.push(p.headElement);
        startTagInHead(p, token);
        p.openElements.remove(p.headElement);
      } else if (tn === $.HEAD) {
        p._err(ERR.misplacedStartTagForHeadElement);
      } else {
        tokenAfterHead(p, token);
      }
    }
    function endTagAfterHead(p, token) {
      const tn = token.tagName;
      if (tn === $.BODY || tn === $.HTML || tn === $.BR) {
        tokenAfterHead(p, token);
      } else if (tn === $.TEMPLATE) {
        endTagInHead(p, token);
      } else {
        p._err(ERR.endTagWithoutMatchingOpenElement);
      }
    }
    function tokenAfterHead(p, token) {
      p._insertFakeElement($.BODY);
      p.insertionMode = IN_BODY_MODE;
      p._processToken(token);
    }
    function whitespaceCharacterInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._insertCharacters(token);
    }
    function characterInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._insertCharacters(token);
      p.framesetOk = false;
    }
    function htmlStartTagInBody(p, token) {
      if (p.openElements.tmplCount === 0) {
        p.treeAdapter.adoptAttributes(p.openElements.items[0], token.attrs);
      }
    }
    function bodyStartTagInBody(p, token) {
      const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
      if (bodyElement && p.openElements.tmplCount === 0) {
        p.framesetOk = false;
        p.treeAdapter.adoptAttributes(bodyElement, token.attrs);
      }
    }
    function framesetStartTagInBody(p, token) {
      const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
      if (p.framesetOk && bodyElement) {
        p.treeAdapter.detachNode(bodyElement);
        p.openElements.popAllUpToHtmlElement();
        p._insertElement(token, NS.HTML);
        p.insertionMode = IN_FRAMESET_MODE;
      }
    }
    function addressStartTagInBody(p, token) {
      if (p.openElements.hasInButtonScope($.P)) {
        p._closePElement();
      }
      p._insertElement(token, NS.HTML);
    }
    function numberedHeaderStartTagInBody(p, token) {
      if (p.openElements.hasInButtonScope($.P)) {
        p._closePElement();
      }
      const tn = p.openElements.currentTagName;
      if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6) {
        p.openElements.pop();
      }
      p._insertElement(token, NS.HTML);
    }
    function preStartTagInBody(p, token) {
      if (p.openElements.hasInButtonScope($.P)) {
        p._closePElement();
      }
      p._insertElement(token, NS.HTML);
      p.skipNextNewLine = true;
      p.framesetOk = false;
    }
    function formStartTagInBody(p, token) {
      const inTemplate = p.openElements.tmplCount > 0;
      if (!p.formElement || inTemplate) {
        if (p.openElements.hasInButtonScope($.P)) {
          p._closePElement();
        }
        p._insertElement(token, NS.HTML);
        if (!inTemplate) {
          p.formElement = p.openElements.current;
        }
      }
    }
    function listItemStartTagInBody(p, token) {
      p.framesetOk = false;
      const tn = token.tagName;
      for (let i = p.openElements.stackTop; i >= 0; i--) {
        const element = p.openElements.items[i];
        const elementTn = p.treeAdapter.getTagName(element);
        let closeTn = null;
        if (tn === $.LI && elementTn === $.LI) {
          closeTn = $.LI;
        } else if ((tn === $.DD || tn === $.DT) && (elementTn === $.DD || elementTn === $.DT)) {
          closeTn = elementTn;
        }
        if (closeTn) {
          p.openElements.generateImpliedEndTagsWithExclusion(closeTn);
          p.openElements.popUntilTagNamePopped(closeTn);
          break;
        }
        if (elementTn !== $.ADDRESS && elementTn !== $.DIV && elementTn !== $.P && p._isSpecialElement(element)) {
          break;
        }
      }
      if (p.openElements.hasInButtonScope($.P)) {
        p._closePElement();
      }
      p._insertElement(token, NS.HTML);
    }
    function plaintextStartTagInBody(p, token) {
      if (p.openElements.hasInButtonScope($.P)) {
        p._closePElement();
      }
      p._insertElement(token, NS.HTML);
      p.tokenizer.state = Tokenizer.MODE.PLAINTEXT;
    }
    function buttonStartTagInBody(p, token) {
      if (p.openElements.hasInScope($.BUTTON)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped($.BUTTON);
      }
      p._reconstructActiveFormattingElements();
      p._insertElement(token, NS.HTML);
      p.framesetOk = false;
    }
    function aStartTagInBody(p, token) {
      const activeElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName($.A);
      if (activeElementEntry) {
        callAdoptionAgency(p, token);
        p.openElements.remove(activeElementEntry.element);
        p.activeFormattingElements.removeEntry(activeElementEntry);
      }
      p._reconstructActiveFormattingElements();
      p._insertElement(token, NS.HTML);
      p.activeFormattingElements.pushElement(p.openElements.current, token);
    }
    function bStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._insertElement(token, NS.HTML);
      p.activeFormattingElements.pushElement(p.openElements.current, token);
    }
    function nobrStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      if (p.openElements.hasInScope($.NOBR)) {
        callAdoptionAgency(p, token);
        p._reconstructActiveFormattingElements();
      }
      p._insertElement(token, NS.HTML);
      p.activeFormattingElements.pushElement(p.openElements.current, token);
    }
    function appletStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._insertElement(token, NS.HTML);
      p.activeFormattingElements.insertMarker();
      p.framesetOk = false;
    }
    function tableStartTagInBody(p, token) {
      if (
        p.treeAdapter.getDocumentMode(p.document) !== HTML.DOCUMENT_MODE.QUIRKS &&
        p.openElements.hasInButtonScope($.P)
      ) {
        p._closePElement();
      }
      p._insertElement(token, NS.HTML);
      p.framesetOk = false;
      p.insertionMode = IN_TABLE_MODE;
    }
    function areaStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._appendElement(token, NS.HTML);
      p.framesetOk = false;
      token.ackSelfClosing = true;
    }
    function inputStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._appendElement(token, NS.HTML);
      const inputType = Tokenizer.getTokenAttr(token, ATTRS.TYPE);
      if (!inputType || inputType.toLowerCase() !== HIDDEN_INPUT_TYPE) {
        p.framesetOk = false;
      }
      token.ackSelfClosing = true;
    }
    function paramStartTagInBody(p, token) {
      p._appendElement(token, NS.HTML);
      token.ackSelfClosing = true;
    }
    function hrStartTagInBody(p, token) {
      if (p.openElements.hasInButtonScope($.P)) {
        p._closePElement();
      }
      p._appendElement(token, NS.HTML);
      p.framesetOk = false;
      token.ackSelfClosing = true;
    }
    function imageStartTagInBody(p, token) {
      token.tagName = $.IMG;
      areaStartTagInBody(p, token);
    }
    function textareaStartTagInBody(p, token) {
      p._insertElement(token, NS.HTML);
      p.skipNextNewLine = true;
      p.tokenizer.state = Tokenizer.MODE.RCDATA;
      p.originalInsertionMode = p.insertionMode;
      p.framesetOk = false;
      p.insertionMode = TEXT_MODE;
    }
    function xmpStartTagInBody(p, token) {
      if (p.openElements.hasInButtonScope($.P)) {
        p._closePElement();
      }
      p._reconstructActiveFormattingElements();
      p.framesetOk = false;
      p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
    }
    function iframeStartTagInBody(p, token) {
      p.framesetOk = false;
      p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
    }
    function noembedStartTagInBody(p, token) {
      p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
    }
    function selectStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._insertElement(token, NS.HTML);
      p.framesetOk = false;
      if (
        p.insertionMode === IN_TABLE_MODE ||
        p.insertionMode === IN_CAPTION_MODE ||
        p.insertionMode === IN_TABLE_BODY_MODE ||
        p.insertionMode === IN_ROW_MODE ||
        p.insertionMode === IN_CELL_MODE
      ) {
        p.insertionMode = IN_SELECT_IN_TABLE_MODE;
      } else {
        p.insertionMode = IN_SELECT_MODE;
      }
    }
    function optgroupStartTagInBody(p, token) {
      if (p.openElements.currentTagName === $.OPTION) {
        p.openElements.pop();
      }
      p._reconstructActiveFormattingElements();
      p._insertElement(token, NS.HTML);
    }
    function rbStartTagInBody(p, token) {
      if (p.openElements.hasInScope($.RUBY)) {
        p.openElements.generateImpliedEndTags();
      }
      p._insertElement(token, NS.HTML);
    }
    function rtStartTagInBody(p, token) {
      if (p.openElements.hasInScope($.RUBY)) {
        p.openElements.generateImpliedEndTagsWithExclusion($.RTC);
      }
      p._insertElement(token, NS.HTML);
    }
    function menuStartTagInBody(p, token) {
      if (p.openElements.hasInButtonScope($.P)) {
        p._closePElement();
      }
      p._insertElement(token, NS.HTML);
    }
    function mathStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      foreignContent.adjustTokenMathMLAttrs(token);
      foreignContent.adjustTokenXMLAttrs(token);
      if (token.selfClosing) {
        p._appendElement(token, NS.MATHML);
      } else {
        p._insertElement(token, NS.MATHML);
      }
      token.ackSelfClosing = true;
    }
    function svgStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      foreignContent.adjustTokenSVGAttrs(token);
      foreignContent.adjustTokenXMLAttrs(token);
      if (token.selfClosing) {
        p._appendElement(token, NS.SVG);
      } else {
        p._insertElement(token, NS.SVG);
      }
      token.ackSelfClosing = true;
    }
    function genericStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._insertElement(token, NS.HTML);
    }
    function startTagInBody(p, token) {
      const tn = token.tagName;
      switch (tn.length) {
        case 1:
          if (tn === $.I || tn === $.S || tn === $.B || tn === $.U) {
            bStartTagInBody(p, token);
          } else if (tn === $.P) {
            addressStartTagInBody(p, token);
          } else if (tn === $.A) {
            aStartTagInBody(p, token);
          } else {
            genericStartTagInBody(p, token);
          }
          break;
        case 2:
          if (tn === $.DL || tn === $.OL || tn === $.UL) {
            addressStartTagInBody(p, token);
          } else if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6) {
            numberedHeaderStartTagInBody(p, token);
          } else if (tn === $.LI || tn === $.DD || tn === $.DT) {
            listItemStartTagInBody(p, token);
          } else if (tn === $.EM || tn === $.TT) {
            bStartTagInBody(p, token);
          } else if (tn === $.BR) {
            areaStartTagInBody(p, token);
          } else if (tn === $.HR) {
            hrStartTagInBody(p, token);
          } else if (tn === $.RB) {
            rbStartTagInBody(p, token);
          } else if (tn === $.RT || tn === $.RP) {
            rtStartTagInBody(p, token);
          } else if (tn !== $.TH && tn !== $.TD && tn !== $.TR) {
            genericStartTagInBody(p, token);
          }
          break;
        case 3:
          if (tn === $.DIV || tn === $.DIR || tn === $.NAV) {
            addressStartTagInBody(p, token);
          } else if (tn === $.PRE) {
            preStartTagInBody(p, token);
          } else if (tn === $.BIG) {
            bStartTagInBody(p, token);
          } else if (tn === $.IMG || tn === $.WBR) {
            areaStartTagInBody(p, token);
          } else if (tn === $.XMP) {
            xmpStartTagInBody(p, token);
          } else if (tn === $.SVG) {
            svgStartTagInBody(p, token);
          } else if (tn === $.RTC) {
            rbStartTagInBody(p, token);
          } else if (tn !== $.COL) {
            genericStartTagInBody(p, token);
          }
          break;
        case 4:
          if (tn === $.HTML) {
            htmlStartTagInBody(p, token);
          } else if (tn === $.BASE || tn === $.LINK || tn === $.META) {
            startTagInHead(p, token);
          } else if (tn === $.BODY) {
            bodyStartTagInBody(p, token);
          } else if (tn === $.MAIN || tn === $.MENU) {
            addressStartTagInBody(p, token);
          } else if (tn === $.FORM) {
            formStartTagInBody(p, token);
          } else if (tn === $.CODE || tn === $.FONT) {
            bStartTagInBody(p, token);
          } else if (tn === $.NOBR) {
            nobrStartTagInBody(p, token);
          } else if (tn === $.AREA) {
            areaStartTagInBody(p, token);
          } else if (tn === $.MATH) {
            mathStartTagInBody(p, token);
          } else if (tn === $.MENU) {
            menuStartTagInBody(p, token);
          } else if (tn !== $.HEAD) {
            genericStartTagInBody(p, token);
          }
          break;
        case 5:
          if (tn === $.STYLE || tn === $.TITLE) {
            startTagInHead(p, token);
          } else if (tn === $.ASIDE) {
            addressStartTagInBody(p, token);
          } else if (tn === $.SMALL) {
            bStartTagInBody(p, token);
          } else if (tn === $.TABLE) {
            tableStartTagInBody(p, token);
          } else if (tn === $.EMBED) {
            areaStartTagInBody(p, token);
          } else if (tn === $.INPUT) {
            inputStartTagInBody(p, token);
          } else if (tn === $.PARAM || tn === $.TRACK) {
            paramStartTagInBody(p, token);
          } else if (tn === $.IMAGE) {
            imageStartTagInBody(p, token);
          } else if (tn !== $.FRAME && tn !== $.TBODY && tn !== $.TFOOT && tn !== $.THEAD) {
            genericStartTagInBody(p, token);
          }
          break;
        case 6:
          if (tn === $.SCRIPT) {
            startTagInHead(p, token);
          } else if (
            tn === $.CENTER ||
            tn === $.FIGURE ||
            tn === $.FOOTER ||
            tn === $.HEADER ||
            tn === $.HGROUP ||
            tn === $.DIALOG
          ) {
            addressStartTagInBody(p, token);
          } else if (tn === $.BUTTON) {
            buttonStartTagInBody(p, token);
          } else if (tn === $.STRIKE || tn === $.STRONG) {
            bStartTagInBody(p, token);
          } else if (tn === $.APPLET || tn === $.OBJECT) {
            appletStartTagInBody(p, token);
          } else if (tn === $.KEYGEN) {
            areaStartTagInBody(p, token);
          } else if (tn === $.SOURCE) {
            paramStartTagInBody(p, token);
          } else if (tn === $.IFRAME) {
            iframeStartTagInBody(p, token);
          } else if (tn === $.SELECT) {
            selectStartTagInBody(p, token);
          } else if (tn === $.OPTION) {
            optgroupStartTagInBody(p, token);
          } else {
            genericStartTagInBody(p, token);
          }
          break;
        case 7:
          if (tn === $.BGSOUND) {
            startTagInHead(p, token);
          } else if (tn === $.DETAILS || tn === $.ADDRESS || tn === $.ARTICLE || tn === $.SECTION || tn === $.SUMMARY) {
            addressStartTagInBody(p, token);
          } else if (tn === $.LISTING) {
            preStartTagInBody(p, token);
          } else if (tn === $.MARQUEE) {
            appletStartTagInBody(p, token);
          } else if (tn === $.NOEMBED) {
            noembedStartTagInBody(p, token);
          } else if (tn !== $.CAPTION) {
            genericStartTagInBody(p, token);
          }
          break;
        case 8:
          if (tn === $.BASEFONT) {
            startTagInHead(p, token);
          } else if (tn === $.FRAMESET) {
            framesetStartTagInBody(p, token);
          } else if (tn === $.FIELDSET) {
            addressStartTagInBody(p, token);
          } else if (tn === $.TEXTAREA) {
            textareaStartTagInBody(p, token);
          } else if (tn === $.TEMPLATE) {
            startTagInHead(p, token);
          } else if (tn === $.NOSCRIPT) {
            if (p.options.scriptingEnabled) {
              noembedStartTagInBody(p, token);
            } else {
              genericStartTagInBody(p, token);
            }
          } else if (tn === $.OPTGROUP) {
            optgroupStartTagInBody(p, token);
          } else if (tn !== $.COLGROUP) {
            genericStartTagInBody(p, token);
          }
          break;
        case 9:
          if (tn === $.PLAINTEXT) {
            plaintextStartTagInBody(p, token);
          } else {
            genericStartTagInBody(p, token);
          }
          break;
        case 10:
          if (tn === $.BLOCKQUOTE || tn === $.FIGCAPTION) {
            addressStartTagInBody(p, token);
          } else {
            genericStartTagInBody(p, token);
          }
          break;
        default:
          genericStartTagInBody(p, token);
      }
    }
    function bodyEndTagInBody(p) {
      if (p.openElements.hasInScope($.BODY)) {
        p.insertionMode = AFTER_BODY_MODE;
      }
    }
    function htmlEndTagInBody(p, token) {
      if (p.openElements.hasInScope($.BODY)) {
        p.insertionMode = AFTER_BODY_MODE;
        p._processToken(token);
      }
    }
    function addressEndTagInBody(p, token) {
      const tn = token.tagName;
      if (p.openElements.hasInScope(tn)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(tn);
      }
    }
    function formEndTagInBody(p) {
      const inTemplate = p.openElements.tmplCount > 0;
      const formElement = p.formElement;
      if (!inTemplate) {
        p.formElement = null;
      }
      if ((formElement || inTemplate) && p.openElements.hasInScope($.FORM)) {
        p.openElements.generateImpliedEndTags();
        if (inTemplate) {
          p.openElements.popUntilTagNamePopped($.FORM);
        } else {
          p.openElements.remove(formElement);
        }
      }
    }
    function pEndTagInBody(p) {
      if (!p.openElements.hasInButtonScope($.P)) {
        p._insertFakeElement($.P);
      }
      p._closePElement();
    }
    function liEndTagInBody(p) {
      if (p.openElements.hasInListItemScope($.LI)) {
        p.openElements.generateImpliedEndTagsWithExclusion($.LI);
        p.openElements.popUntilTagNamePopped($.LI);
      }
    }
    function ddEndTagInBody(p, token) {
      const tn = token.tagName;
      if (p.openElements.hasInScope(tn)) {
        p.openElements.generateImpliedEndTagsWithExclusion(tn);
        p.openElements.popUntilTagNamePopped(tn);
      }
    }
    function numberedHeaderEndTagInBody(p) {
      if (p.openElements.hasNumberedHeaderInScope()) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilNumberedHeaderPopped();
      }
    }
    function appletEndTagInBody(p, token) {
      const tn = token.tagName;
      if (p.openElements.hasInScope(tn)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(tn);
        p.activeFormattingElements.clearToLastMarker();
      }
    }
    function brEndTagInBody(p) {
      p._reconstructActiveFormattingElements();
      p._insertFakeElement($.BR);
      p.openElements.pop();
      p.framesetOk = false;
    }
    function genericEndTagInBody(p, token) {
      const tn = token.tagName;
      for (let i = p.openElements.stackTop; i > 0; i--) {
        const element = p.openElements.items[i];
        if (p.treeAdapter.getTagName(element) === tn) {
          p.openElements.generateImpliedEndTagsWithExclusion(tn);
          p.openElements.popUntilElementPopped(element);
          break;
        }
        if (p._isSpecialElement(element)) {
          break;
        }
      }
    }
    function endTagInBody(p, token) {
      const tn = token.tagName;
      switch (tn.length) {
        case 1:
          if (tn === $.A || tn === $.B || tn === $.I || tn === $.S || tn === $.U) {
            callAdoptionAgency(p, token);
          } else if (tn === $.P) {
            pEndTagInBody(p, token);
          } else {
            genericEndTagInBody(p, token);
          }
          break;
        case 2:
          if (tn === $.DL || tn === $.UL || tn === $.OL) {
            addressEndTagInBody(p, token);
          } else if (tn === $.LI) {
            liEndTagInBody(p, token);
          } else if (tn === $.DD || tn === $.DT) {
            ddEndTagInBody(p, token);
          } else if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6) {
            numberedHeaderEndTagInBody(p, token);
          } else if (tn === $.BR) {
            brEndTagInBody(p, token);
          } else if (tn === $.EM || tn === $.TT) {
            callAdoptionAgency(p, token);
          } else {
            genericEndTagInBody(p, token);
          }
          break;
        case 3:
          if (tn === $.BIG) {
            callAdoptionAgency(p, token);
          } else if (tn === $.DIR || tn === $.DIV || tn === $.NAV || tn === $.PRE) {
            addressEndTagInBody(p, token);
          } else {
            genericEndTagInBody(p, token);
          }
          break;
        case 4:
          if (tn === $.BODY) {
            bodyEndTagInBody(p, token);
          } else if (tn === $.HTML) {
            htmlEndTagInBody(p, token);
          } else if (tn === $.FORM) {
            formEndTagInBody(p, token);
          } else if (tn === $.CODE || tn === $.FONT || tn === $.NOBR) {
            callAdoptionAgency(p, token);
          } else if (tn === $.MAIN || tn === $.MENU) {
            addressEndTagInBody(p, token);
          } else {
            genericEndTagInBody(p, token);
          }
          break;
        case 5:
          if (tn === $.ASIDE) {
            addressEndTagInBody(p, token);
          } else if (tn === $.SMALL) {
            callAdoptionAgency(p, token);
          } else {
            genericEndTagInBody(p, token);
          }
          break;
        case 6:
          if (
            tn === $.CENTER ||
            tn === $.FIGURE ||
            tn === $.FOOTER ||
            tn === $.HEADER ||
            tn === $.HGROUP ||
            tn === $.DIALOG
          ) {
            addressEndTagInBody(p, token);
          } else if (tn === $.APPLET || tn === $.OBJECT) {
            appletEndTagInBody(p, token);
          } else if (tn === $.STRIKE || tn === $.STRONG) {
            callAdoptionAgency(p, token);
          } else {
            genericEndTagInBody(p, token);
          }
          break;
        case 7:
          if (
            tn === $.ADDRESS ||
            tn === $.ARTICLE ||
            tn === $.DETAILS ||
            tn === $.SECTION ||
            tn === $.SUMMARY ||
            tn === $.LISTING
          ) {
            addressEndTagInBody(p, token);
          } else if (tn === $.MARQUEE) {
            appletEndTagInBody(p, token);
          } else {
            genericEndTagInBody(p, token);
          }
          break;
        case 8:
          if (tn === $.FIELDSET) {
            addressEndTagInBody(p, token);
          } else if (tn === $.TEMPLATE) {
            endTagInHead(p, token);
          } else {
            genericEndTagInBody(p, token);
          }
          break;
        case 10:
          if (tn === $.BLOCKQUOTE || tn === $.FIGCAPTION) {
            addressEndTagInBody(p, token);
          } else {
            genericEndTagInBody(p, token);
          }
          break;
        default:
          genericEndTagInBody(p, token);
      }
    }
    function eofInBody(p, token) {
      if (p.tmplInsertionModeStackTop > -1) {
        eofInTemplate(p, token);
      } else {
        p.stopped = true;
      }
    }
    function endTagInText(p, token) {
      if (token.tagName === $.SCRIPT) {
        p.pendingScript = p.openElements.current;
      }
      p.openElements.pop();
      p.insertionMode = p.originalInsertionMode;
    }
    function eofInText(p, token) {
      p._err(ERR.eofInElementThatCanContainOnlyText);
      p.openElements.pop();
      p.insertionMode = p.originalInsertionMode;
      p._processToken(token);
    }
    function characterInTable(p, token) {
      const curTn = p.openElements.currentTagName;
      if (curTn === $.TABLE || curTn === $.TBODY || curTn === $.TFOOT || curTn === $.THEAD || curTn === $.TR) {
        p.pendingCharacterTokens = [];
        p.hasNonWhitespacePendingCharacterToken = false;
        p.originalInsertionMode = p.insertionMode;
        p.insertionMode = IN_TABLE_TEXT_MODE;
        p._processToken(token);
      } else {
        tokenInTable(p, token);
      }
    }
    function captionStartTagInTable(p, token) {
      p.openElements.clearBackToTableContext();
      p.activeFormattingElements.insertMarker();
      p._insertElement(token, NS.HTML);
      p.insertionMode = IN_CAPTION_MODE;
    }
    function colgroupStartTagInTable(p, token) {
      p.openElements.clearBackToTableContext();
      p._insertElement(token, NS.HTML);
      p.insertionMode = IN_COLUMN_GROUP_MODE;
    }
    function colStartTagInTable(p, token) {
      p.openElements.clearBackToTableContext();
      p._insertFakeElement($.COLGROUP);
      p.insertionMode = IN_COLUMN_GROUP_MODE;
      p._processToken(token);
    }
    function tbodyStartTagInTable(p, token) {
      p.openElements.clearBackToTableContext();
      p._insertElement(token, NS.HTML);
      p.insertionMode = IN_TABLE_BODY_MODE;
    }
    function tdStartTagInTable(p, token) {
      p.openElements.clearBackToTableContext();
      p._insertFakeElement($.TBODY);
      p.insertionMode = IN_TABLE_BODY_MODE;
      p._processToken(token);
    }
    function tableStartTagInTable(p, token) {
      if (p.openElements.hasInTableScope($.TABLE)) {
        p.openElements.popUntilTagNamePopped($.TABLE);
        p._resetInsertionMode();
        p._processToken(token);
      }
    }
    function inputStartTagInTable(p, token) {
      const inputType = Tokenizer.getTokenAttr(token, ATTRS.TYPE);
      if (inputType && inputType.toLowerCase() === HIDDEN_INPUT_TYPE) {
        p._appendElement(token, NS.HTML);
      } else {
        tokenInTable(p, token);
      }
      token.ackSelfClosing = true;
    }
    function formStartTagInTable(p, token) {
      if (!p.formElement && p.openElements.tmplCount === 0) {
        p._insertElement(token, NS.HTML);
        p.formElement = p.openElements.current;
        p.openElements.pop();
      }
    }
    function startTagInTable(p, token) {
      const tn = token.tagName;
      switch (tn.length) {
        case 2:
          if (tn === $.TD || tn === $.TH || tn === $.TR) {
            tdStartTagInTable(p, token);
          } else {
            tokenInTable(p, token);
          }
          break;
        case 3:
          if (tn === $.COL) {
            colStartTagInTable(p, token);
          } else {
            tokenInTable(p, token);
          }
          break;
        case 4:
          if (tn === $.FORM) {
            formStartTagInTable(p, token);
          } else {
            tokenInTable(p, token);
          }
          break;
        case 5:
          if (tn === $.TABLE) {
            tableStartTagInTable(p, token);
          } else if (tn === $.STYLE) {
            startTagInHead(p, token);
          } else if (tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {
            tbodyStartTagInTable(p, token);
          } else if (tn === $.INPUT) {
            inputStartTagInTable(p, token);
          } else {
            tokenInTable(p, token);
          }
          break;
        case 6:
          if (tn === $.SCRIPT) {
            startTagInHead(p, token);
          } else {
            tokenInTable(p, token);
          }
          break;
        case 7:
          if (tn === $.CAPTION) {
            captionStartTagInTable(p, token);
          } else {
            tokenInTable(p, token);
          }
          break;
        case 8:
          if (tn === $.COLGROUP) {
            colgroupStartTagInTable(p, token);
          } else if (tn === $.TEMPLATE) {
            startTagInHead(p, token);
          } else {
            tokenInTable(p, token);
          }
          break;
        default:
          tokenInTable(p, token);
      }
    }
    function endTagInTable(p, token) {
      const tn = token.tagName;
      if (tn === $.TABLE) {
        if (p.openElements.hasInTableScope($.TABLE)) {
          p.openElements.popUntilTagNamePopped($.TABLE);
          p._resetInsertionMode();
        }
      } else if (tn === $.TEMPLATE) {
        endTagInHead(p, token);
      } else if (
        tn !== $.BODY &&
        tn !== $.CAPTION &&
        tn !== $.COL &&
        tn !== $.COLGROUP &&
        tn !== $.HTML &&
        tn !== $.TBODY &&
        tn !== $.TD &&
        tn !== $.TFOOT &&
        tn !== $.TH &&
        tn !== $.THEAD &&
        tn !== $.TR
      ) {
        tokenInTable(p, token);
      }
    }
    function tokenInTable(p, token) {
      const savedFosterParentingState = p.fosterParentingEnabled;
      p.fosterParentingEnabled = true;
      p._processTokenInBodyMode(token);
      p.fosterParentingEnabled = savedFosterParentingState;
    }
    function whitespaceCharacterInTableText(p, token) {
      p.pendingCharacterTokens.push(token);
    }
    function characterInTableText(p, token) {
      p.pendingCharacterTokens.push(token);
      p.hasNonWhitespacePendingCharacterToken = true;
    }
    function tokenInTableText(p, token) {
      let i = 0;
      if (p.hasNonWhitespacePendingCharacterToken) {
        for (; i < p.pendingCharacterTokens.length; i++) {
          tokenInTable(p, p.pendingCharacterTokens[i]);
        }
      } else {
        for (; i < p.pendingCharacterTokens.length; i++) {
          p._insertCharacters(p.pendingCharacterTokens[i]);
        }
      }
      p.insertionMode = p.originalInsertionMode;
      p._processToken(token);
    }
    function startTagInCaption(p, token) {
      const tn = token.tagName;
      if (
        tn === $.CAPTION ||
        tn === $.COL ||
        tn === $.COLGROUP ||
        tn === $.TBODY ||
        tn === $.TD ||
        tn === $.TFOOT ||
        tn === $.TH ||
        tn === $.THEAD ||
        tn === $.TR
      ) {
        if (p.openElements.hasInTableScope($.CAPTION)) {
          p.openElements.generateImpliedEndTags();
          p.openElements.popUntilTagNamePopped($.CAPTION);
          p.activeFormattingElements.clearToLastMarker();
          p.insertionMode = IN_TABLE_MODE;
          p._processToken(token);
        }
      } else {
        startTagInBody(p, token);
      }
    }
    function endTagInCaption(p, token) {
      const tn = token.tagName;
      if (tn === $.CAPTION || tn === $.TABLE) {
        if (p.openElements.hasInTableScope($.CAPTION)) {
          p.openElements.generateImpliedEndTags();
          p.openElements.popUntilTagNamePopped($.CAPTION);
          p.activeFormattingElements.clearToLastMarker();
          p.insertionMode = IN_TABLE_MODE;
          if (tn === $.TABLE) {
            p._processToken(token);
          }
        }
      } else if (
        tn !== $.BODY &&
        tn !== $.COL &&
        tn !== $.COLGROUP &&
        tn !== $.HTML &&
        tn !== $.TBODY &&
        tn !== $.TD &&
        tn !== $.TFOOT &&
        tn !== $.TH &&
        tn !== $.THEAD &&
        tn !== $.TR
      ) {
        endTagInBody(p, token);
      }
    }
    function startTagInColumnGroup(p, token) {
      const tn = token.tagName;
      if (tn === $.HTML) {
        startTagInBody(p, token);
      } else if (tn === $.COL) {
        p._appendElement(token, NS.HTML);
        token.ackSelfClosing = true;
      } else if (tn === $.TEMPLATE) {
        startTagInHead(p, token);
      } else {
        tokenInColumnGroup(p, token);
      }
    }
    function endTagInColumnGroup(p, token) {
      const tn = token.tagName;
      if (tn === $.COLGROUP) {
        if (p.openElements.currentTagName === $.COLGROUP) {
          p.openElements.pop();
          p.insertionMode = IN_TABLE_MODE;
        }
      } else if (tn === $.TEMPLATE) {
        endTagInHead(p, token);
      } else if (tn !== $.COL) {
        tokenInColumnGroup(p, token);
      }
    }
    function tokenInColumnGroup(p, token) {
      if (p.openElements.currentTagName === $.COLGROUP) {
        p.openElements.pop();
        p.insertionMode = IN_TABLE_MODE;
        p._processToken(token);
      }
    }
    function startTagInTableBody(p, token) {
      const tn = token.tagName;
      if (tn === $.TR) {
        p.openElements.clearBackToTableBodyContext();
        p._insertElement(token, NS.HTML);
        p.insertionMode = IN_ROW_MODE;
      } else if (tn === $.TH || tn === $.TD) {
        p.openElements.clearBackToTableBodyContext();
        p._insertFakeElement($.TR);
        p.insertionMode = IN_ROW_MODE;
        p._processToken(token);
      } else if (
        tn === $.CAPTION ||
        tn === $.COL ||
        tn === $.COLGROUP ||
        tn === $.TBODY ||
        tn === $.TFOOT ||
        tn === $.THEAD
      ) {
        if (p.openElements.hasTableBodyContextInTableScope()) {
          p.openElements.clearBackToTableBodyContext();
          p.openElements.pop();
          p.insertionMode = IN_TABLE_MODE;
          p._processToken(token);
        }
      } else {
        startTagInTable(p, token);
      }
    }
    function endTagInTableBody(p, token) {
      const tn = token.tagName;
      if (tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {
        if (p.openElements.hasInTableScope(tn)) {
          p.openElements.clearBackToTableBodyContext();
          p.openElements.pop();
          p.insertionMode = IN_TABLE_MODE;
        }
      } else if (tn === $.TABLE) {
        if (p.openElements.hasTableBodyContextInTableScope()) {
          p.openElements.clearBackToTableBodyContext();
          p.openElements.pop();
          p.insertionMode = IN_TABLE_MODE;
          p._processToken(token);
        }
      } else if (
        (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP) ||
        (tn !== $.HTML && tn !== $.TD && tn !== $.TH && tn !== $.TR)
      ) {
        endTagInTable(p, token);
      }
    }
    function startTagInRow(p, token) {
      const tn = token.tagName;
      if (tn === $.TH || tn === $.TD) {
        p.openElements.clearBackToTableRowContext();
        p._insertElement(token, NS.HTML);
        p.insertionMode = IN_CELL_MODE;
        p.activeFormattingElements.insertMarker();
      } else if (
        tn === $.CAPTION ||
        tn === $.COL ||
        tn === $.COLGROUP ||
        tn === $.TBODY ||
        tn === $.TFOOT ||
        tn === $.THEAD ||
        tn === $.TR
      ) {
        if (p.openElements.hasInTableScope($.TR)) {
          p.openElements.clearBackToTableRowContext();
          p.openElements.pop();
          p.insertionMode = IN_TABLE_BODY_MODE;
          p._processToken(token);
        }
      } else {
        startTagInTable(p, token);
      }
    }
    function endTagInRow(p, token) {
      const tn = token.tagName;
      if (tn === $.TR) {
        if (p.openElements.hasInTableScope($.TR)) {
          p.openElements.clearBackToTableRowContext();
          p.openElements.pop();
          p.insertionMode = IN_TABLE_BODY_MODE;
        }
      } else if (tn === $.TABLE) {
        if (p.openElements.hasInTableScope($.TR)) {
          p.openElements.clearBackToTableRowContext();
          p.openElements.pop();
          p.insertionMode = IN_TABLE_BODY_MODE;
          p._processToken(token);
        }
      } else if (tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {
        if (p.openElements.hasInTableScope(tn) || p.openElements.hasInTableScope($.TR)) {
          p.openElements.clearBackToTableRowContext();
          p.openElements.pop();
          p.insertionMode = IN_TABLE_BODY_MODE;
          p._processToken(token);
        }
      } else if (
        (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP) ||
        (tn !== $.HTML && tn !== $.TD && tn !== $.TH)
      ) {
        endTagInTable(p, token);
      }
    }
    function startTagInCell(p, token) {
      const tn = token.tagName;
      if (
        tn === $.CAPTION ||
        tn === $.COL ||
        tn === $.COLGROUP ||
        tn === $.TBODY ||
        tn === $.TD ||
        tn === $.TFOOT ||
        tn === $.TH ||
        tn === $.THEAD ||
        tn === $.TR
      ) {
        if (p.openElements.hasInTableScope($.TD) || p.openElements.hasInTableScope($.TH)) {
          p._closeTableCell();
          p._processToken(token);
        }
      } else {
        startTagInBody(p, token);
      }
    }
    function endTagInCell(p, token) {
      const tn = token.tagName;
      if (tn === $.TD || tn === $.TH) {
        if (p.openElements.hasInTableScope(tn)) {
          p.openElements.generateImpliedEndTags();
          p.openElements.popUntilTagNamePopped(tn);
          p.activeFormattingElements.clearToLastMarker();
          p.insertionMode = IN_ROW_MODE;
        }
      } else if (tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR) {
        if (p.openElements.hasInTableScope(tn)) {
          p._closeTableCell();
          p._processToken(token);
        }
      } else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP && tn !== $.HTML) {
        endTagInBody(p, token);
      }
    }
    function startTagInSelect(p, token) {
      const tn = token.tagName;
      if (tn === $.HTML) {
        startTagInBody(p, token);
      } else if (tn === $.OPTION) {
        if (p.openElements.currentTagName === $.OPTION) {
          p.openElements.pop();
        }
        p._insertElement(token, NS.HTML);
      } else if (tn === $.OPTGROUP) {
        if (p.openElements.currentTagName === $.OPTION) {
          p.openElements.pop();
        }
        if (p.openElements.currentTagName === $.OPTGROUP) {
          p.openElements.pop();
        }
        p._insertElement(token, NS.HTML);
      } else if (tn === $.INPUT || tn === $.KEYGEN || tn === $.TEXTAREA || tn === $.SELECT) {
        if (p.openElements.hasInSelectScope($.SELECT)) {
          p.openElements.popUntilTagNamePopped($.SELECT);
          p._resetInsertionMode();
          if (tn !== $.SELECT) {
            p._processToken(token);
          }
        }
      } else if (tn === $.SCRIPT || tn === $.TEMPLATE) {
        startTagInHead(p, token);
      }
    }
    function endTagInSelect(p, token) {
      const tn = token.tagName;
      if (tn === $.OPTGROUP) {
        const prevOpenElement = p.openElements.items[p.openElements.stackTop - 1];
        const prevOpenElementTn = prevOpenElement && p.treeAdapter.getTagName(prevOpenElement);
        if (p.openElements.currentTagName === $.OPTION && prevOpenElementTn === $.OPTGROUP) {
          p.openElements.pop();
        }
        if (p.openElements.currentTagName === $.OPTGROUP) {
          p.openElements.pop();
        }
      } else if (tn === $.OPTION) {
        if (p.openElements.currentTagName === $.OPTION) {
          p.openElements.pop();
        }
      } else if (tn === $.SELECT && p.openElements.hasInSelectScope($.SELECT)) {
        p.openElements.popUntilTagNamePopped($.SELECT);
        p._resetInsertionMode();
      } else if (tn === $.TEMPLATE) {
        endTagInHead(p, token);
      }
    }
    function startTagInSelectInTable(p, token) {
      const tn = token.tagName;
      if (
        tn === $.CAPTION ||
        tn === $.TABLE ||
        tn === $.TBODY ||
        tn === $.TFOOT ||
        tn === $.THEAD ||
        tn === $.TR ||
        tn === $.TD ||
        tn === $.TH
      ) {
        p.openElements.popUntilTagNamePopped($.SELECT);
        p._resetInsertionMode();
        p._processToken(token);
      } else {
        startTagInSelect(p, token);
      }
    }
    function endTagInSelectInTable(p, token) {
      const tn = token.tagName;
      if (
        tn === $.CAPTION ||
        tn === $.TABLE ||
        tn === $.TBODY ||
        tn === $.TFOOT ||
        tn === $.THEAD ||
        tn === $.TR ||
        tn === $.TD ||
        tn === $.TH
      ) {
        if (p.openElements.hasInTableScope(tn)) {
          p.openElements.popUntilTagNamePopped($.SELECT);
          p._resetInsertionMode();
          p._processToken(token);
        }
      } else {
        endTagInSelect(p, token);
      }
    }
    function startTagInTemplate(p, token) {
      const tn = token.tagName;
      if (
        tn === $.BASE ||
        tn === $.BASEFONT ||
        tn === $.BGSOUND ||
        tn === $.LINK ||
        tn === $.META ||
        tn === $.NOFRAMES ||
        tn === $.SCRIPT ||
        tn === $.STYLE ||
        tn === $.TEMPLATE ||
        tn === $.TITLE
      ) {
        startTagInHead(p, token);
      } else {
        const newInsertionMode = TEMPLATE_INSERTION_MODE_SWITCH_MAP[tn] || IN_BODY_MODE;
        p._popTmplInsertionMode();
        p._pushTmplInsertionMode(newInsertionMode);
        p.insertionMode = newInsertionMode;
        p._processToken(token);
      }
    }
    function endTagInTemplate(p, token) {
      if (token.tagName === $.TEMPLATE) {
        endTagInHead(p, token);
      }
    }
    function eofInTemplate(p, token) {
      if (p.openElements.tmplCount > 0) {
        p.openElements.popUntilTagNamePopped($.TEMPLATE);
        p.activeFormattingElements.clearToLastMarker();
        p._popTmplInsertionMode();
        p._resetInsertionMode();
        p._processToken(token);
      } else {
        p.stopped = true;
      }
    }
    function startTagAfterBody(p, token) {
      if (token.tagName === $.HTML) {
        startTagInBody(p, token);
      } else {
        tokenAfterBody(p, token);
      }
    }
    function endTagAfterBody(p, token) {
      if (token.tagName === $.HTML) {
        if (!p.fragmentContext) {
          p.insertionMode = AFTER_AFTER_BODY_MODE;
        }
      } else {
        tokenAfterBody(p, token);
      }
    }
    function tokenAfterBody(p, token) {
      p.insertionMode = IN_BODY_MODE;
      p._processToken(token);
    }
    function startTagInFrameset(p, token) {
      const tn = token.tagName;
      if (tn === $.HTML) {
        startTagInBody(p, token);
      } else if (tn === $.FRAMESET) {
        p._insertElement(token, NS.HTML);
      } else if (tn === $.FRAME) {
        p._appendElement(token, NS.HTML);
        token.ackSelfClosing = true;
      } else if (tn === $.NOFRAMES) {
        startTagInHead(p, token);
      }
    }
    function endTagInFrameset(p, token) {
      if (token.tagName === $.FRAMESET && !p.openElements.isRootHtmlElementCurrent()) {
        p.openElements.pop();
        if (!p.fragmentContext && p.openElements.currentTagName !== $.FRAMESET) {
          p.insertionMode = AFTER_FRAMESET_MODE;
        }
      }
    }
    function startTagAfterFrameset(p, token) {
      const tn = token.tagName;
      if (tn === $.HTML) {
        startTagInBody(p, token);
      } else if (tn === $.NOFRAMES) {
        startTagInHead(p, token);
      }
    }
    function endTagAfterFrameset(p, token) {
      if (token.tagName === $.HTML) {
        p.insertionMode = AFTER_AFTER_FRAMESET_MODE;
      }
    }
    function startTagAfterAfterBody(p, token) {
      if (token.tagName === $.HTML) {
        startTagInBody(p, token);
      } else {
        tokenAfterAfterBody(p, token);
      }
    }
    function tokenAfterAfterBody(p, token) {
      p.insertionMode = IN_BODY_MODE;
      p._processToken(token);
    }
    function startTagAfterAfterFrameset(p, token) {
      const tn = token.tagName;
      if (tn === $.HTML) {
        startTagInBody(p, token);
      } else if (tn === $.NOFRAMES) {
        startTagInHead(p, token);
      }
    }
    function nullCharacterInForeignContent(p, token) {
      token.chars = unicode.REPLACEMENT_CHARACTER;
      p._insertCharacters(token);
    }
    function characterInForeignContent(p, token) {
      p._insertCharacters(token);
      p.framesetOk = false;
    }
    function startTagInForeignContent(p, token) {
      if (foreignContent.causesExit(token) && !p.fragmentContext) {
        while (
          p.treeAdapter.getNamespaceURI(p.openElements.current) !== NS.HTML &&
          !p._isIntegrationPoint(p.openElements.current)
        ) {
          p.openElements.pop();
        }
        p._processToken(token);
      } else {
        const current = p._getAdjustedCurrentElement();
        const currentNs = p.treeAdapter.getNamespaceURI(current);
        if (currentNs === NS.MATHML) {
          foreignContent.adjustTokenMathMLAttrs(token);
        } else if (currentNs === NS.SVG) {
          foreignContent.adjustTokenSVGTagName(token);
          foreignContent.adjustTokenSVGAttrs(token);
        }
        foreignContent.adjustTokenXMLAttrs(token);
        if (token.selfClosing) {
          p._appendElement(token, currentNs);
        } else {
          p._insertElement(token, currentNs);
        }
        token.ackSelfClosing = true;
      }
    }
    function endTagInForeignContent(p, token) {
      for (let i = p.openElements.stackTop; i > 0; i--) {
        const element = p.openElements.items[i];
        if (p.treeAdapter.getNamespaceURI(element) === NS.HTML) {
          p._processToken(token);
          break;
        }
        if (p.treeAdapter.getTagName(element).toLowerCase() === token.tagName) {
          p.openElements.popUntilElementPopped(element);
          break;
        }
      }
    }
  }
});

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/mod.js
var __module = __toESM(require_parser());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
