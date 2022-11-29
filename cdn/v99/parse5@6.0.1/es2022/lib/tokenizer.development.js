/* esm.sh - esbuild bundle(parse5@6.0.1/lib/tokenizer) es2022 development */
import __parse5_lib_tokenizer_preprocessor$ from '/cdn/v99/parse5@6.0.1/es2022/lib/tokenizer/preprocessor.development.js';
import __parse5_lib_common_error_codes$ from '/cdn/v99/parse5@6.0.1/es2022/lib/common/error-codes.development.js';
import __parse5_lib_tokenizer_named_entity_data$ from '/cdn/v99/parse5@6.0.1/es2022/lib/tokenizer/named-entity-data.development.js';
import __parse5_lib_common_unicode$ from '/cdn/v99/parse5@6.0.1/es2022/lib/common/unicode.development.js';
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

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/tokenizer/index.js
var require_tokenizer = __commonJS({
  'esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/tokenizer/index.js'(
    exports,
    module
  ) {
    'use strict';

    var Preprocessor = __parse5_lib_tokenizer_preprocessor$;
    var unicode = __parse5_lib_common_unicode$;
    var neTree = __parse5_lib_tokenizer_named_entity_data$;
    var ERR = __parse5_lib_common_error_codes$;
    var $ = unicode.CODE_POINTS;
    var $$ = unicode.CODE_POINT_SEQUENCES;
    var C1_CONTROLS_REFERENCE_REPLACEMENTS = {
      128: 8364,
      130: 8218,
      131: 402,
      132: 8222,
      133: 8230,
      134: 8224,
      135: 8225,
      136: 710,
      137: 8240,
      138: 352,
      139: 8249,
      140: 338,
      142: 381,
      145: 8216,
      146: 8217,
      147: 8220,
      148: 8221,
      149: 8226,
      150: 8211,
      151: 8212,
      152: 732,
      153: 8482,
      154: 353,
      155: 8250,
      156: 339,
      158: 382,
      159: 376
    };
    var HAS_DATA_FLAG = 1 << 0;
    var DATA_DUPLET_FLAG = 1 << 1;
    var HAS_BRANCHES_FLAG = 1 << 2;
    var MAX_BRANCH_MARKER_VALUE = HAS_DATA_FLAG | DATA_DUPLET_FLAG | HAS_BRANCHES_FLAG;
    var DATA_STATE = 'DATA_STATE';
    var RCDATA_STATE = 'RCDATA_STATE';
    var RAWTEXT_STATE = 'RAWTEXT_STATE';
    var SCRIPT_DATA_STATE = 'SCRIPT_DATA_STATE';
    var PLAINTEXT_STATE = 'PLAINTEXT_STATE';
    var TAG_OPEN_STATE = 'TAG_OPEN_STATE';
    var END_TAG_OPEN_STATE = 'END_TAG_OPEN_STATE';
    var TAG_NAME_STATE = 'TAG_NAME_STATE';
    var RCDATA_LESS_THAN_SIGN_STATE = 'RCDATA_LESS_THAN_SIGN_STATE';
    var RCDATA_END_TAG_OPEN_STATE = 'RCDATA_END_TAG_OPEN_STATE';
    var RCDATA_END_TAG_NAME_STATE = 'RCDATA_END_TAG_NAME_STATE';
    var RAWTEXT_LESS_THAN_SIGN_STATE = 'RAWTEXT_LESS_THAN_SIGN_STATE';
    var RAWTEXT_END_TAG_OPEN_STATE = 'RAWTEXT_END_TAG_OPEN_STATE';
    var RAWTEXT_END_TAG_NAME_STATE = 'RAWTEXT_END_TAG_NAME_STATE';
    var SCRIPT_DATA_LESS_THAN_SIGN_STATE = 'SCRIPT_DATA_LESS_THAN_SIGN_STATE';
    var SCRIPT_DATA_END_TAG_OPEN_STATE = 'SCRIPT_DATA_END_TAG_OPEN_STATE';
    var SCRIPT_DATA_END_TAG_NAME_STATE = 'SCRIPT_DATA_END_TAG_NAME_STATE';
    var SCRIPT_DATA_ESCAPE_START_STATE = 'SCRIPT_DATA_ESCAPE_START_STATE';
    var SCRIPT_DATA_ESCAPE_START_DASH_STATE = 'SCRIPT_DATA_ESCAPE_START_DASH_STATE';
    var SCRIPT_DATA_ESCAPED_STATE = 'SCRIPT_DATA_ESCAPED_STATE';
    var SCRIPT_DATA_ESCAPED_DASH_STATE = 'SCRIPT_DATA_ESCAPED_DASH_STATE';
    var SCRIPT_DATA_ESCAPED_DASH_DASH_STATE = 'SCRIPT_DATA_ESCAPED_DASH_DASH_STATE';
    var SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE = 'SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE';
    var SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE = 'SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE';
    var SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE = 'SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE';
    var SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE';
    var SCRIPT_DATA_DOUBLE_ESCAPED_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPED_STATE';
    var SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE';
    var SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE';
    var SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE';
    var SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE';
    var BEFORE_ATTRIBUTE_NAME_STATE = 'BEFORE_ATTRIBUTE_NAME_STATE';
    var ATTRIBUTE_NAME_STATE = 'ATTRIBUTE_NAME_STATE';
    var AFTER_ATTRIBUTE_NAME_STATE = 'AFTER_ATTRIBUTE_NAME_STATE';
    var BEFORE_ATTRIBUTE_VALUE_STATE = 'BEFORE_ATTRIBUTE_VALUE_STATE';
    var ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE = 'ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE';
    var ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE = 'ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE';
    var ATTRIBUTE_VALUE_UNQUOTED_STATE = 'ATTRIBUTE_VALUE_UNQUOTED_STATE';
    var AFTER_ATTRIBUTE_VALUE_QUOTED_STATE = 'AFTER_ATTRIBUTE_VALUE_QUOTED_STATE';
    var SELF_CLOSING_START_TAG_STATE = 'SELF_CLOSING_START_TAG_STATE';
    var BOGUS_COMMENT_STATE = 'BOGUS_COMMENT_STATE';
    var MARKUP_DECLARATION_OPEN_STATE = 'MARKUP_DECLARATION_OPEN_STATE';
    var COMMENT_START_STATE = 'COMMENT_START_STATE';
    var COMMENT_START_DASH_STATE = 'COMMENT_START_DASH_STATE';
    var COMMENT_STATE = 'COMMENT_STATE';
    var COMMENT_LESS_THAN_SIGN_STATE = 'COMMENT_LESS_THAN_SIGN_STATE';
    var COMMENT_LESS_THAN_SIGN_BANG_STATE = 'COMMENT_LESS_THAN_SIGN_BANG_STATE';
    var COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE = 'COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE';
    var COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE = 'COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE';
    var COMMENT_END_DASH_STATE = 'COMMENT_END_DASH_STATE';
    var COMMENT_END_STATE = 'COMMENT_END_STATE';
    var COMMENT_END_BANG_STATE = 'COMMENT_END_BANG_STATE';
    var DOCTYPE_STATE = 'DOCTYPE_STATE';
    var BEFORE_DOCTYPE_NAME_STATE = 'BEFORE_DOCTYPE_NAME_STATE';
    var DOCTYPE_NAME_STATE = 'DOCTYPE_NAME_STATE';
    var AFTER_DOCTYPE_NAME_STATE = 'AFTER_DOCTYPE_NAME_STATE';
    var AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE = 'AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE';
    var BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE = 'BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE';
    var DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE = 'DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE';
    var DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE = 'DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE';
    var AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE = 'AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE';
    var BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE = 'BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE';
    var AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE = 'AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE';
    var BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE = 'BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE';
    var DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE = 'DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE';
    var DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE = 'DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE';
    var AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE = 'AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE';
    var BOGUS_DOCTYPE_STATE = 'BOGUS_DOCTYPE_STATE';
    var CDATA_SECTION_STATE = 'CDATA_SECTION_STATE';
    var CDATA_SECTION_BRACKET_STATE = 'CDATA_SECTION_BRACKET_STATE';
    var CDATA_SECTION_END_STATE = 'CDATA_SECTION_END_STATE';
    var CHARACTER_REFERENCE_STATE = 'CHARACTER_REFERENCE_STATE';
    var NAMED_CHARACTER_REFERENCE_STATE = 'NAMED_CHARACTER_REFERENCE_STATE';
    var AMBIGUOUS_AMPERSAND_STATE = 'AMBIGUOS_AMPERSAND_STATE';
    var NUMERIC_CHARACTER_REFERENCE_STATE = 'NUMERIC_CHARACTER_REFERENCE_STATE';
    var HEXADEMICAL_CHARACTER_REFERENCE_START_STATE = 'HEXADEMICAL_CHARACTER_REFERENCE_START_STATE';
    var DECIMAL_CHARACTER_REFERENCE_START_STATE = 'DECIMAL_CHARACTER_REFERENCE_START_STATE';
    var HEXADEMICAL_CHARACTER_REFERENCE_STATE = 'HEXADEMICAL_CHARACTER_REFERENCE_STATE';
    var DECIMAL_CHARACTER_REFERENCE_STATE = 'DECIMAL_CHARACTER_REFERENCE_STATE';
    var NUMERIC_CHARACTER_REFERENCE_END_STATE = 'NUMERIC_CHARACTER_REFERENCE_END_STATE';
    function isWhitespace(cp) {
      return cp === $.SPACE || cp === $.LINE_FEED || cp === $.TABULATION || cp === $.FORM_FEED;
    }
    function isAsciiDigit(cp) {
      return cp >= $.DIGIT_0 && cp <= $.DIGIT_9;
    }
    function isAsciiUpper(cp) {
      return cp >= $.LATIN_CAPITAL_A && cp <= $.LATIN_CAPITAL_Z;
    }
    function isAsciiLower(cp) {
      return cp >= $.LATIN_SMALL_A && cp <= $.LATIN_SMALL_Z;
    }
    function isAsciiLetter(cp) {
      return isAsciiLower(cp) || isAsciiUpper(cp);
    }
    function isAsciiAlphaNumeric(cp) {
      return isAsciiLetter(cp) || isAsciiDigit(cp);
    }
    function isAsciiUpperHexDigit(cp) {
      return cp >= $.LATIN_CAPITAL_A && cp <= $.LATIN_CAPITAL_F;
    }
    function isAsciiLowerHexDigit(cp) {
      return cp >= $.LATIN_SMALL_A && cp <= $.LATIN_SMALL_F;
    }
    function isAsciiHexDigit(cp) {
      return isAsciiDigit(cp) || isAsciiUpperHexDigit(cp) || isAsciiLowerHexDigit(cp);
    }
    function toAsciiLowerCodePoint(cp) {
      return cp + 32;
    }
    function toChar(cp) {
      if (cp <= 65535) {
        return String.fromCharCode(cp);
      }
      cp -= 65536;
      return String.fromCharCode(((cp >>> 10) & 1023) | 55296) + String.fromCharCode(56320 | (cp & 1023));
    }
    function toAsciiLowerChar(cp) {
      return String.fromCharCode(toAsciiLowerCodePoint(cp));
    }
    function findNamedEntityTreeBranch(nodeIx, cp) {
      const branchCount = neTree[++nodeIx];
      let lo = ++nodeIx;
      let hi = lo + branchCount - 1;
      while (lo <= hi) {
        const mid = (lo + hi) >>> 1;
        const midCp = neTree[mid];
        if (midCp < cp) {
          lo = mid + 1;
        } else if (midCp > cp) {
          hi = mid - 1;
        } else {
          return neTree[mid + branchCount];
        }
      }
      return -1;
    }
    var Tokenizer = class {
      constructor() {
        this.preprocessor = new Preprocessor();
        this.tokenQueue = [];
        this.allowCDATA = false;
        this.state = DATA_STATE;
        this.returnState = '';
        this.charRefCode = -1;
        this.tempBuff = [];
        this.lastStartTagName = '';
        this.consumedAfterSnapshot = -1;
        this.active = false;
        this.currentCharacterToken = null;
        this.currentToken = null;
        this.currentAttr = null;
      }
      _err() {}
      _errOnNextCodePoint(err) {
        this._consume();
        this._err(err);
        this._unconsume();
      }
      getNextToken() {
        while (!this.tokenQueue.length && this.active) {
          this.consumedAfterSnapshot = 0;
          const cp = this._consume();
          if (!this._ensureHibernation()) {
            this[this.state](cp);
          }
        }
        return this.tokenQueue.shift();
      }
      write(chunk, isLastChunk) {
        this.active = true;
        this.preprocessor.write(chunk, isLastChunk);
      }
      insertHtmlAtCurrentPos(chunk) {
        this.active = true;
        this.preprocessor.insertHtmlAtCurrentPos(chunk);
      }
      _ensureHibernation() {
        if (this.preprocessor.endOfChunkHit) {
          for (; this.consumedAfterSnapshot > 0; this.consumedAfterSnapshot--) {
            this.preprocessor.retreat();
          }
          this.active = false;
          this.tokenQueue.push({
            type: Tokenizer.HIBERNATION_TOKEN
          });
          return true;
        }
        return false;
      }
      _consume() {
        this.consumedAfterSnapshot++;
        return this.preprocessor.advance();
      }
      _unconsume() {
        this.consumedAfterSnapshot--;
        this.preprocessor.retreat();
      }
      _reconsumeInState(state) {
        this.state = state;
        this._unconsume();
      }
      _consumeSequenceIfMatch(pattern, startCp, caseSensitive) {
        let consumedCount = 0;
        let isMatch = true;
        const patternLength = pattern.length;
        let patternPos = 0;
        let cp = startCp;
        let patternCp = void 0;
        for (; patternPos < patternLength; patternPos++) {
          if (patternPos > 0) {
            cp = this._consume();
            consumedCount++;
          }
          if (cp === $.EOF) {
            isMatch = false;
            break;
          }
          patternCp = pattern[patternPos];
          if (cp !== patternCp && (caseSensitive || cp !== toAsciiLowerCodePoint(patternCp))) {
            isMatch = false;
            break;
          }
        }
        if (!isMatch) {
          while (consumedCount--) {
            this._unconsume();
          }
        }
        return isMatch;
      }
      _isTempBufferEqualToScriptString() {
        if (this.tempBuff.length !== $$.SCRIPT_STRING.length) {
          return false;
        }
        for (let i = 0; i < this.tempBuff.length; i++) {
          if (this.tempBuff[i] !== $$.SCRIPT_STRING[i]) {
            return false;
          }
        }
        return true;
      }
      _createStartTagToken() {
        this.currentToken = {
          type: Tokenizer.START_TAG_TOKEN,
          tagName: '',
          selfClosing: false,
          ackSelfClosing: false,
          attrs: []
        };
      }
      _createEndTagToken() {
        this.currentToken = {
          type: Tokenizer.END_TAG_TOKEN,
          tagName: '',
          selfClosing: false,
          attrs: []
        };
      }
      _createCommentToken() {
        this.currentToken = {
          type: Tokenizer.COMMENT_TOKEN,
          data: ''
        };
      }
      _createDoctypeToken(initialName) {
        this.currentToken = {
          type: Tokenizer.DOCTYPE_TOKEN,
          name: initialName,
          forceQuirks: false,
          publicId: null,
          systemId: null
        };
      }
      _createCharacterToken(type, ch) {
        this.currentCharacterToken = {
          type,
          chars: ch
        };
      }
      _createEOFToken() {
        this.currentToken = {
          type: Tokenizer.EOF_TOKEN
        };
      }
      _createAttr(attrNameFirstCh) {
        this.currentAttr = {
          name: attrNameFirstCh,
          value: ''
        };
      }
      _leaveAttrName(toState) {
        if (Tokenizer.getTokenAttr(this.currentToken, this.currentAttr.name) === null) {
          this.currentToken.attrs.push(this.currentAttr);
        } else {
          this._err(ERR.duplicateAttribute);
        }
        this.state = toState;
      }
      _leaveAttrValue(toState) {
        this.state = toState;
      }
      _emitCurrentToken() {
        this._emitCurrentCharacterToken();
        const ct = this.currentToken;
        this.currentToken = null;
        if (ct.type === Tokenizer.START_TAG_TOKEN) {
          this.lastStartTagName = ct.tagName;
        } else if (ct.type === Tokenizer.END_TAG_TOKEN) {
          if (ct.attrs.length > 0) {
            this._err(ERR.endTagWithAttributes);
          }
          if (ct.selfClosing) {
            this._err(ERR.endTagWithTrailingSolidus);
          }
        }
        this.tokenQueue.push(ct);
      }
      _emitCurrentCharacterToken() {
        if (this.currentCharacterToken) {
          this.tokenQueue.push(this.currentCharacterToken);
          this.currentCharacterToken = null;
        }
      }
      _emitEOFToken() {
        this._createEOFToken();
        this._emitCurrentToken();
      }
      _appendCharToCurrentCharacterToken(type, ch) {
        if (this.currentCharacterToken && this.currentCharacterToken.type !== type) {
          this._emitCurrentCharacterToken();
        }
        if (this.currentCharacterToken) {
          this.currentCharacterToken.chars += ch;
        } else {
          this._createCharacterToken(type, ch);
        }
      }
      _emitCodePoint(cp) {
        let type = Tokenizer.CHARACTER_TOKEN;
        if (isWhitespace(cp)) {
          type = Tokenizer.WHITESPACE_CHARACTER_TOKEN;
        } else if (cp === $.NULL) {
          type = Tokenizer.NULL_CHARACTER_TOKEN;
        }
        this._appendCharToCurrentCharacterToken(type, toChar(cp));
      }
      _emitSeveralCodePoints(codePoints) {
        for (let i = 0; i < codePoints.length; i++) {
          this._emitCodePoint(codePoints[i]);
        }
      }
      _emitChars(ch) {
        this._appendCharToCurrentCharacterToken(Tokenizer.CHARACTER_TOKEN, ch);
      }
      _matchNamedCharacterReference(startCp) {
        let result = null;
        let excess = 1;
        let i = findNamedEntityTreeBranch(0, startCp);
        this.tempBuff.push(startCp);
        while (i > -1) {
          const current = neTree[i];
          const inNode = current < MAX_BRANCH_MARKER_VALUE;
          const nodeWithData = inNode && current & HAS_DATA_FLAG;
          if (nodeWithData) {
            result = current & DATA_DUPLET_FLAG ? [neTree[++i], neTree[++i]] : [neTree[++i]];
            excess = 0;
          }
          const cp = this._consume();
          this.tempBuff.push(cp);
          excess++;
          if (cp === $.EOF) {
            break;
          }
          if (inNode) {
            i = current & HAS_BRANCHES_FLAG ? findNamedEntityTreeBranch(i, cp) : -1;
          } else {
            i = cp === current ? ++i : -1;
          }
        }
        while (excess--) {
          this.tempBuff.pop();
          this._unconsume();
        }
        return result;
      }
      _isCharacterReferenceInAttribute() {
        return (
          this.returnState === ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE ||
          this.returnState === ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE ||
          this.returnState === ATTRIBUTE_VALUE_UNQUOTED_STATE
        );
      }
      _isCharacterReferenceAttributeQuirk(withSemicolon) {
        if (!withSemicolon && this._isCharacterReferenceInAttribute()) {
          const nextCp = this._consume();
          this._unconsume();
          return nextCp === $.EQUALS_SIGN || isAsciiAlphaNumeric(nextCp);
        }
        return false;
      }
      _flushCodePointsConsumedAsCharacterReference() {
        if (this._isCharacterReferenceInAttribute()) {
          for (let i = 0; i < this.tempBuff.length; i++) {
            this.currentAttr.value += toChar(this.tempBuff[i]);
          }
        } else {
          this._emitSeveralCodePoints(this.tempBuff);
        }
        this.tempBuff = [];
      }
      [DATA_STATE](cp) {
        this.preprocessor.dropParsedChunk();
        if (cp === $.LESS_THAN_SIGN) {
          this.state = TAG_OPEN_STATE;
        } else if (cp === $.AMPERSAND) {
          this.returnState = DATA_STATE;
          this.state = CHARACTER_REFERENCE_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this._emitCodePoint(cp);
        } else if (cp === $.EOF) {
          this._emitEOFToken();
        } else {
          this._emitCodePoint(cp);
        }
      }
      [RCDATA_STATE](cp) {
        this.preprocessor.dropParsedChunk();
        if (cp === $.AMPERSAND) {
          this.returnState = RCDATA_STATE;
          this.state = CHARACTER_REFERENCE_STATE;
        } else if (cp === $.LESS_THAN_SIGN) {
          this.state = RCDATA_LESS_THAN_SIGN_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._emitEOFToken();
        } else {
          this._emitCodePoint(cp);
        }
      }
      [RAWTEXT_STATE](cp) {
        this.preprocessor.dropParsedChunk();
        if (cp === $.LESS_THAN_SIGN) {
          this.state = RAWTEXT_LESS_THAN_SIGN_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._emitEOFToken();
        } else {
          this._emitCodePoint(cp);
        }
      }
      [SCRIPT_DATA_STATE](cp) {
        this.preprocessor.dropParsedChunk();
        if (cp === $.LESS_THAN_SIGN) {
          this.state = SCRIPT_DATA_LESS_THAN_SIGN_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._emitEOFToken();
        } else {
          this._emitCodePoint(cp);
        }
      }
      [PLAINTEXT_STATE](cp) {
        this.preprocessor.dropParsedChunk();
        if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._emitEOFToken();
        } else {
          this._emitCodePoint(cp);
        }
      }
      [TAG_OPEN_STATE](cp) {
        if (cp === $.EXCLAMATION_MARK) {
          this.state = MARKUP_DECLARATION_OPEN_STATE;
        } else if (cp === $.SOLIDUS) {
          this.state = END_TAG_OPEN_STATE;
        } else if (isAsciiLetter(cp)) {
          this._createStartTagToken();
          this._reconsumeInState(TAG_NAME_STATE);
        } else if (cp === $.QUESTION_MARK) {
          this._err(ERR.unexpectedQuestionMarkInsteadOfTagName);
          this._createCommentToken();
          this._reconsumeInState(BOGUS_COMMENT_STATE);
        } else if (cp === $.EOF) {
          this._err(ERR.eofBeforeTagName);
          this._emitChars('<');
          this._emitEOFToken();
        } else {
          this._err(ERR.invalidFirstCharacterOfTagName);
          this._emitChars('<');
          this._reconsumeInState(DATA_STATE);
        }
      }
      [END_TAG_OPEN_STATE](cp) {
        if (isAsciiLetter(cp)) {
          this._createEndTagToken();
          this._reconsumeInState(TAG_NAME_STATE);
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.missingEndTagName);
          this.state = DATA_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofBeforeTagName);
          this._emitChars('</');
          this._emitEOFToken();
        } else {
          this._err(ERR.invalidFirstCharacterOfTagName);
          this._createCommentToken();
          this._reconsumeInState(BOGUS_COMMENT_STATE);
        }
      }
      [TAG_NAME_STATE](cp) {
        if (isWhitespace(cp)) {
          this.state = BEFORE_ATTRIBUTE_NAME_STATE;
        } else if (cp === $.SOLIDUS) {
          this.state = SELF_CLOSING_START_TAG_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (isAsciiUpper(cp)) {
          this.currentToken.tagName += toAsciiLowerChar(cp);
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentToken.tagName += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInTag);
          this._emitEOFToken();
        } else {
          this.currentToken.tagName += toChar(cp);
        }
      }
      [RCDATA_LESS_THAN_SIGN_STATE](cp) {
        if (cp === $.SOLIDUS) {
          this.tempBuff = [];
          this.state = RCDATA_END_TAG_OPEN_STATE;
        } else {
          this._emitChars('<');
          this._reconsumeInState(RCDATA_STATE);
        }
      }
      [RCDATA_END_TAG_OPEN_STATE](cp) {
        if (isAsciiLetter(cp)) {
          this._createEndTagToken();
          this._reconsumeInState(RCDATA_END_TAG_NAME_STATE);
        } else {
          this._emitChars('</');
          this._reconsumeInState(RCDATA_STATE);
        }
      }
      [RCDATA_END_TAG_NAME_STATE](cp) {
        if (isAsciiUpper(cp)) {
          this.currentToken.tagName += toAsciiLowerChar(cp);
          this.tempBuff.push(cp);
        } else if (isAsciiLower(cp)) {
          this.currentToken.tagName += toChar(cp);
          this.tempBuff.push(cp);
        } else {
          if (this.lastStartTagName === this.currentToken.tagName) {
            if (isWhitespace(cp)) {
              this.state = BEFORE_ATTRIBUTE_NAME_STATE;
              return;
            }
            if (cp === $.SOLIDUS) {
              this.state = SELF_CLOSING_START_TAG_STATE;
              return;
            }
            if (cp === $.GREATER_THAN_SIGN) {
              this.state = DATA_STATE;
              this._emitCurrentToken();
              return;
            }
          }
          this._emitChars('</');
          this._emitSeveralCodePoints(this.tempBuff);
          this._reconsumeInState(RCDATA_STATE);
        }
      }
      [RAWTEXT_LESS_THAN_SIGN_STATE](cp) {
        if (cp === $.SOLIDUS) {
          this.tempBuff = [];
          this.state = RAWTEXT_END_TAG_OPEN_STATE;
        } else {
          this._emitChars('<');
          this._reconsumeInState(RAWTEXT_STATE);
        }
      }
      [RAWTEXT_END_TAG_OPEN_STATE](cp) {
        if (isAsciiLetter(cp)) {
          this._createEndTagToken();
          this._reconsumeInState(RAWTEXT_END_TAG_NAME_STATE);
        } else {
          this._emitChars('</');
          this._reconsumeInState(RAWTEXT_STATE);
        }
      }
      [RAWTEXT_END_TAG_NAME_STATE](cp) {
        if (isAsciiUpper(cp)) {
          this.currentToken.tagName += toAsciiLowerChar(cp);
          this.tempBuff.push(cp);
        } else if (isAsciiLower(cp)) {
          this.currentToken.tagName += toChar(cp);
          this.tempBuff.push(cp);
        } else {
          if (this.lastStartTagName === this.currentToken.tagName) {
            if (isWhitespace(cp)) {
              this.state = BEFORE_ATTRIBUTE_NAME_STATE;
              return;
            }
            if (cp === $.SOLIDUS) {
              this.state = SELF_CLOSING_START_TAG_STATE;
              return;
            }
            if (cp === $.GREATER_THAN_SIGN) {
              this._emitCurrentToken();
              this.state = DATA_STATE;
              return;
            }
          }
          this._emitChars('</');
          this._emitSeveralCodePoints(this.tempBuff);
          this._reconsumeInState(RAWTEXT_STATE);
        }
      }
      [SCRIPT_DATA_LESS_THAN_SIGN_STATE](cp) {
        if (cp === $.SOLIDUS) {
          this.tempBuff = [];
          this.state = SCRIPT_DATA_END_TAG_OPEN_STATE;
        } else if (cp === $.EXCLAMATION_MARK) {
          this.state = SCRIPT_DATA_ESCAPE_START_STATE;
          this._emitChars('<!');
        } else {
          this._emitChars('<');
          this._reconsumeInState(SCRIPT_DATA_STATE);
        }
      }
      [SCRIPT_DATA_END_TAG_OPEN_STATE](cp) {
        if (isAsciiLetter(cp)) {
          this._createEndTagToken();
          this._reconsumeInState(SCRIPT_DATA_END_TAG_NAME_STATE);
        } else {
          this._emitChars('</');
          this._reconsumeInState(SCRIPT_DATA_STATE);
        }
      }
      [SCRIPT_DATA_END_TAG_NAME_STATE](cp) {
        if (isAsciiUpper(cp)) {
          this.currentToken.tagName += toAsciiLowerChar(cp);
          this.tempBuff.push(cp);
        } else if (isAsciiLower(cp)) {
          this.currentToken.tagName += toChar(cp);
          this.tempBuff.push(cp);
        } else {
          if (this.lastStartTagName === this.currentToken.tagName) {
            if (isWhitespace(cp)) {
              this.state = BEFORE_ATTRIBUTE_NAME_STATE;
              return;
            } else if (cp === $.SOLIDUS) {
              this.state = SELF_CLOSING_START_TAG_STATE;
              return;
            } else if (cp === $.GREATER_THAN_SIGN) {
              this._emitCurrentToken();
              this.state = DATA_STATE;
              return;
            }
          }
          this._emitChars('</');
          this._emitSeveralCodePoints(this.tempBuff);
          this._reconsumeInState(SCRIPT_DATA_STATE);
        }
      }
      [SCRIPT_DATA_ESCAPE_START_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = SCRIPT_DATA_ESCAPE_START_DASH_STATE;
          this._emitChars('-');
        } else {
          this._reconsumeInState(SCRIPT_DATA_STATE);
        }
      }
      [SCRIPT_DATA_ESCAPE_START_DASH_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = SCRIPT_DATA_ESCAPED_DASH_DASH_STATE;
          this._emitChars('-');
        } else {
          this._reconsumeInState(SCRIPT_DATA_STATE);
        }
      }
      [SCRIPT_DATA_ESCAPED_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = SCRIPT_DATA_ESCAPED_DASH_STATE;
          this._emitChars('-');
        } else if (cp === $.LESS_THAN_SIGN) {
          this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._err(ERR.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
        } else {
          this._emitCodePoint(cp);
        }
      }
      [SCRIPT_DATA_ESCAPED_DASH_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = SCRIPT_DATA_ESCAPED_DASH_DASH_STATE;
          this._emitChars('-');
        } else if (cp === $.LESS_THAN_SIGN) {
          this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.state = SCRIPT_DATA_ESCAPED_STATE;
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._err(ERR.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
        } else {
          this.state = SCRIPT_DATA_ESCAPED_STATE;
          this._emitCodePoint(cp);
        }
      }
      [SCRIPT_DATA_ESCAPED_DASH_DASH_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this._emitChars('-');
        } else if (cp === $.LESS_THAN_SIGN) {
          this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this.state = SCRIPT_DATA_STATE;
          this._emitChars('>');
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.state = SCRIPT_DATA_ESCAPED_STATE;
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._err(ERR.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
        } else {
          this.state = SCRIPT_DATA_ESCAPED_STATE;
          this._emitCodePoint(cp);
        }
      }
      [SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE](cp) {
        if (cp === $.SOLIDUS) {
          this.tempBuff = [];
          this.state = SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE;
        } else if (isAsciiLetter(cp)) {
          this.tempBuff = [];
          this._emitChars('<');
          this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE);
        } else {
          this._emitChars('<');
          this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
        }
      }
      [SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE](cp) {
        if (isAsciiLetter(cp)) {
          this._createEndTagToken();
          this._reconsumeInState(SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE);
        } else {
          this._emitChars('</');
          this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
        }
      }
      [SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE](cp) {
        if (isAsciiUpper(cp)) {
          this.currentToken.tagName += toAsciiLowerChar(cp);
          this.tempBuff.push(cp);
        } else if (isAsciiLower(cp)) {
          this.currentToken.tagName += toChar(cp);
          this.tempBuff.push(cp);
        } else {
          if (this.lastStartTagName === this.currentToken.tagName) {
            if (isWhitespace(cp)) {
              this.state = BEFORE_ATTRIBUTE_NAME_STATE;
              return;
            }
            if (cp === $.SOLIDUS) {
              this.state = SELF_CLOSING_START_TAG_STATE;
              return;
            }
            if (cp === $.GREATER_THAN_SIGN) {
              this._emitCurrentToken();
              this.state = DATA_STATE;
              return;
            }
          }
          this._emitChars('</');
          this._emitSeveralCodePoints(this.tempBuff);
          this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
        }
      }
      [SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE](cp) {
        if (isWhitespace(cp) || cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN) {
          this.state = this._isTempBufferEqualToScriptString()
            ? SCRIPT_DATA_DOUBLE_ESCAPED_STATE
            : SCRIPT_DATA_ESCAPED_STATE;
          this._emitCodePoint(cp);
        } else if (isAsciiUpper(cp)) {
          this.tempBuff.push(toAsciiLowerCodePoint(cp));
          this._emitCodePoint(cp);
        } else if (isAsciiLower(cp)) {
          this.tempBuff.push(cp);
          this._emitCodePoint(cp);
        } else {
          this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
        }
      }
      [SCRIPT_DATA_DOUBLE_ESCAPED_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE;
          this._emitChars('-');
        } else if (cp === $.LESS_THAN_SIGN) {
          this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;
          this._emitChars('<');
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._err(ERR.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
        } else {
          this._emitCodePoint(cp);
        }
      }
      [SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE;
          this._emitChars('-');
        } else if (cp === $.LESS_THAN_SIGN) {
          this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;
          this._emitChars('<');
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._err(ERR.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
        } else {
          this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
          this._emitCodePoint(cp);
        }
      }
      [SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this._emitChars('-');
        } else if (cp === $.LESS_THAN_SIGN) {
          this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;
          this._emitChars('<');
        } else if (cp === $.GREATER_THAN_SIGN) {
          this.state = SCRIPT_DATA_STATE;
          this._emitChars('>');
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._err(ERR.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
        } else {
          this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
          this._emitCodePoint(cp);
        }
      }
      [SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE](cp) {
        if (cp === $.SOLIDUS) {
          this.tempBuff = [];
          this.state = SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE;
          this._emitChars('/');
        } else {
          this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPED_STATE);
        }
      }
      [SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE](cp) {
        if (isWhitespace(cp) || cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN) {
          this.state = this._isTempBufferEqualToScriptString()
            ? SCRIPT_DATA_ESCAPED_STATE
            : SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
          this._emitCodePoint(cp);
        } else if (isAsciiUpper(cp)) {
          this.tempBuff.push(toAsciiLowerCodePoint(cp));
          this._emitCodePoint(cp);
        } else if (isAsciiLower(cp)) {
          this.tempBuff.push(cp);
          this._emitCodePoint(cp);
        } else {
          this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPED_STATE);
        }
      }
      [BEFORE_ATTRIBUTE_NAME_STATE](cp) {
        if (isWhitespace(cp)) {
          return;
        }
        if (cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN || cp === $.EOF) {
          this._reconsumeInState(AFTER_ATTRIBUTE_NAME_STATE);
        } else if (cp === $.EQUALS_SIGN) {
          this._err(ERR.unexpectedEqualsSignBeforeAttributeName);
          this._createAttr('=');
          this.state = ATTRIBUTE_NAME_STATE;
        } else {
          this._createAttr('');
          this._reconsumeInState(ATTRIBUTE_NAME_STATE);
        }
      }
      [ATTRIBUTE_NAME_STATE](cp) {
        if (isWhitespace(cp) || cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN || cp === $.EOF) {
          this._leaveAttrName(AFTER_ATTRIBUTE_NAME_STATE);
          this._unconsume();
        } else if (cp === $.EQUALS_SIGN) {
          this._leaveAttrName(BEFORE_ATTRIBUTE_VALUE_STATE);
        } else if (isAsciiUpper(cp)) {
          this.currentAttr.name += toAsciiLowerChar(cp);
        } else if (cp === $.QUOTATION_MARK || cp === $.APOSTROPHE || cp === $.LESS_THAN_SIGN) {
          this._err(ERR.unexpectedCharacterInAttributeName);
          this.currentAttr.name += toChar(cp);
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentAttr.name += unicode.REPLACEMENT_CHARACTER;
        } else {
          this.currentAttr.name += toChar(cp);
        }
      }
      [AFTER_ATTRIBUTE_NAME_STATE](cp) {
        if (isWhitespace(cp)) {
          return;
        }
        if (cp === $.SOLIDUS) {
          this.state = SELF_CLOSING_START_TAG_STATE;
        } else if (cp === $.EQUALS_SIGN) {
          this.state = BEFORE_ATTRIBUTE_VALUE_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInTag);
          this._emitEOFToken();
        } else {
          this._createAttr('');
          this._reconsumeInState(ATTRIBUTE_NAME_STATE);
        }
      }
      [BEFORE_ATTRIBUTE_VALUE_STATE](cp) {
        if (isWhitespace(cp)) {
          return;
        }
        if (cp === $.QUOTATION_MARK) {
          this.state = ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE;
        } else if (cp === $.APOSTROPHE) {
          this.state = ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.missingAttributeValue);
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else {
          this._reconsumeInState(ATTRIBUTE_VALUE_UNQUOTED_STATE);
        }
      }
      [ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE](cp) {
        if (cp === $.QUOTATION_MARK) {
          this.state = AFTER_ATTRIBUTE_VALUE_QUOTED_STATE;
        } else if (cp === $.AMPERSAND) {
          this.returnState = ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE;
          this.state = CHARACTER_REFERENCE_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentAttr.value += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInTag);
          this._emitEOFToken();
        } else {
          this.currentAttr.value += toChar(cp);
        }
      }
      [ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE](cp) {
        if (cp === $.APOSTROPHE) {
          this.state = AFTER_ATTRIBUTE_VALUE_QUOTED_STATE;
        } else if (cp === $.AMPERSAND) {
          this.returnState = ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE;
          this.state = CHARACTER_REFERENCE_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentAttr.value += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInTag);
          this._emitEOFToken();
        } else {
          this.currentAttr.value += toChar(cp);
        }
      }
      [ATTRIBUTE_VALUE_UNQUOTED_STATE](cp) {
        if (isWhitespace(cp)) {
          this._leaveAttrValue(BEFORE_ATTRIBUTE_NAME_STATE);
        } else if (cp === $.AMPERSAND) {
          this.returnState = ATTRIBUTE_VALUE_UNQUOTED_STATE;
          this.state = CHARACTER_REFERENCE_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._leaveAttrValue(DATA_STATE);
          this._emitCurrentToken();
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentAttr.value += unicode.REPLACEMENT_CHARACTER;
        } else if (
          cp === $.QUOTATION_MARK ||
          cp === $.APOSTROPHE ||
          cp === $.LESS_THAN_SIGN ||
          cp === $.EQUALS_SIGN ||
          cp === $.GRAVE_ACCENT
        ) {
          this._err(ERR.unexpectedCharacterInUnquotedAttributeValue);
          this.currentAttr.value += toChar(cp);
        } else if (cp === $.EOF) {
          this._err(ERR.eofInTag);
          this._emitEOFToken();
        } else {
          this.currentAttr.value += toChar(cp);
        }
      }
      [AFTER_ATTRIBUTE_VALUE_QUOTED_STATE](cp) {
        if (isWhitespace(cp)) {
          this._leaveAttrValue(BEFORE_ATTRIBUTE_NAME_STATE);
        } else if (cp === $.SOLIDUS) {
          this._leaveAttrValue(SELF_CLOSING_START_TAG_STATE);
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._leaveAttrValue(DATA_STATE);
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInTag);
          this._emitEOFToken();
        } else {
          this._err(ERR.missingWhitespaceBetweenAttributes);
          this._reconsumeInState(BEFORE_ATTRIBUTE_NAME_STATE);
        }
      }
      [SELF_CLOSING_START_TAG_STATE](cp) {
        if (cp === $.GREATER_THAN_SIGN) {
          this.currentToken.selfClosing = true;
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInTag);
          this._emitEOFToken();
        } else {
          this._err(ERR.unexpectedSolidusInTag);
          this._reconsumeInState(BEFORE_ATTRIBUTE_NAME_STATE);
        }
      }
      [BOGUS_COMMENT_STATE](cp) {
        if (cp === $.GREATER_THAN_SIGN) {
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._emitCurrentToken();
          this._emitEOFToken();
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentToken.data += unicode.REPLACEMENT_CHARACTER;
        } else {
          this.currentToken.data += toChar(cp);
        }
      }
      [MARKUP_DECLARATION_OPEN_STATE](cp) {
        if (this._consumeSequenceIfMatch($$.DASH_DASH_STRING, cp, true)) {
          this._createCommentToken();
          this.state = COMMENT_START_STATE;
        } else if (this._consumeSequenceIfMatch($$.DOCTYPE_STRING, cp, false)) {
          this.state = DOCTYPE_STATE;
        } else if (this._consumeSequenceIfMatch($$.CDATA_START_STRING, cp, true)) {
          if (this.allowCDATA) {
            this.state = CDATA_SECTION_STATE;
          } else {
            this._err(ERR.cdataInHtmlContent);
            this._createCommentToken();
            this.currentToken.data = '[CDATA[';
            this.state = BOGUS_COMMENT_STATE;
          }
        } else if (!this._ensureHibernation()) {
          this._err(ERR.incorrectlyOpenedComment);
          this._createCommentToken();
          this._reconsumeInState(BOGUS_COMMENT_STATE);
        }
      }
      [COMMENT_START_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = COMMENT_START_DASH_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.abruptClosingOfEmptyComment);
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else {
          this._reconsumeInState(COMMENT_STATE);
        }
      }
      [COMMENT_START_DASH_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = COMMENT_END_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.abruptClosingOfEmptyComment);
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInComment);
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.data += '-';
          this._reconsumeInState(COMMENT_STATE);
        }
      }
      [COMMENT_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = COMMENT_END_DASH_STATE;
        } else if (cp === $.LESS_THAN_SIGN) {
          this.currentToken.data += '<';
          this.state = COMMENT_LESS_THAN_SIGN_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentToken.data += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInComment);
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.data += toChar(cp);
        }
      }
      [COMMENT_LESS_THAN_SIGN_STATE](cp) {
        if (cp === $.EXCLAMATION_MARK) {
          this.currentToken.data += '!';
          this.state = COMMENT_LESS_THAN_SIGN_BANG_STATE;
        } else if (cp === $.LESS_THAN_SIGN) {
          this.currentToken.data += '!';
        } else {
          this._reconsumeInState(COMMENT_STATE);
        }
      }
      [COMMENT_LESS_THAN_SIGN_BANG_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE;
        } else {
          this._reconsumeInState(COMMENT_STATE);
        }
      }
      [COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE;
        } else {
          this._reconsumeInState(COMMENT_END_DASH_STATE);
        }
      }
      [COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE](cp) {
        if (cp !== $.GREATER_THAN_SIGN && cp !== $.EOF) {
          this._err(ERR.nestedComment);
        }
        this._reconsumeInState(COMMENT_END_STATE);
      }
      [COMMENT_END_DASH_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = COMMENT_END_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInComment);
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.data += '-';
          this._reconsumeInState(COMMENT_STATE);
        }
      }
      [COMMENT_END_STATE](cp) {
        if (cp === $.GREATER_THAN_SIGN) {
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EXCLAMATION_MARK) {
          this.state = COMMENT_END_BANG_STATE;
        } else if (cp === $.HYPHEN_MINUS) {
          this.currentToken.data += '-';
        } else if (cp === $.EOF) {
          this._err(ERR.eofInComment);
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.data += '--';
          this._reconsumeInState(COMMENT_STATE);
        }
      }
      [COMMENT_END_BANG_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.currentToken.data += '--!';
          this.state = COMMENT_END_DASH_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.incorrectlyClosedComment);
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInComment);
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.data += '--!';
          this._reconsumeInState(COMMENT_STATE);
        }
      }
      [DOCTYPE_STATE](cp) {
        if (isWhitespace(cp)) {
          this.state = BEFORE_DOCTYPE_NAME_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._reconsumeInState(BEFORE_DOCTYPE_NAME_STATE);
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this._createDoctypeToken(null);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(ERR.missingWhitespaceBeforeDoctypeName);
          this._reconsumeInState(BEFORE_DOCTYPE_NAME_STATE);
        }
      }
      [BEFORE_DOCTYPE_NAME_STATE](cp) {
        if (isWhitespace(cp)) {
          return;
        }
        if (isAsciiUpper(cp)) {
          this._createDoctypeToken(toAsciiLowerChar(cp));
          this.state = DOCTYPE_NAME_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this._createDoctypeToken(unicode.REPLACEMENT_CHARACTER);
          this.state = DOCTYPE_NAME_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.missingDoctypeName);
          this._createDoctypeToken(null);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this.state = DATA_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this._createDoctypeToken(null);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._createDoctypeToken(toChar(cp));
          this.state = DOCTYPE_NAME_STATE;
        }
      }
      [DOCTYPE_NAME_STATE](cp) {
        if (isWhitespace(cp)) {
          this.state = AFTER_DOCTYPE_NAME_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (isAsciiUpper(cp)) {
          this.currentToken.name += toAsciiLowerChar(cp);
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentToken.name += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.name += toChar(cp);
        }
      }
      [AFTER_DOCTYPE_NAME_STATE](cp) {
        if (isWhitespace(cp)) {
          return;
        }
        if (cp === $.GREATER_THAN_SIGN) {
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else if (this._consumeSequenceIfMatch($$.PUBLIC_STRING, cp, false)) {
          this.state = AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE;
        } else if (this._consumeSequenceIfMatch($$.SYSTEM_STRING, cp, false)) {
          this.state = AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE;
        } else if (!this._ensureHibernation()) {
          this._err(ERR.invalidCharacterSequenceAfterDoctypeName);
          this.currentToken.forceQuirks = true;
          this._reconsumeInState(BOGUS_DOCTYPE_STATE);
        }
      }
      [AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE](cp) {
        if (isWhitespace(cp)) {
          this.state = BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE;
        } else if (cp === $.QUOTATION_MARK) {
          this._err(ERR.missingWhitespaceAfterDoctypePublicKeyword);
          this.currentToken.publicId = '';
          this.state = DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE;
        } else if (cp === $.APOSTROPHE) {
          this._err(ERR.missingWhitespaceAfterDoctypePublicKeyword);
          this.currentToken.publicId = '';
          this.state = DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.missingDoctypePublicIdentifier);
          this.currentToken.forceQuirks = true;
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(ERR.missingQuoteBeforeDoctypePublicIdentifier);
          this.currentToken.forceQuirks = true;
          this._reconsumeInState(BOGUS_DOCTYPE_STATE);
        }
      }
      [BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE](cp) {
        if (isWhitespace(cp)) {
          return;
        }
        if (cp === $.QUOTATION_MARK) {
          this.currentToken.publicId = '';
          this.state = DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE;
        } else if (cp === $.APOSTROPHE) {
          this.currentToken.publicId = '';
          this.state = DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.missingDoctypePublicIdentifier);
          this.currentToken.forceQuirks = true;
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(ERR.missingQuoteBeforeDoctypePublicIdentifier);
          this.currentToken.forceQuirks = true;
          this._reconsumeInState(BOGUS_DOCTYPE_STATE);
        }
      }
      [DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE](cp) {
        if (cp === $.QUOTATION_MARK) {
          this.state = AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentToken.publicId += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.abruptDoctypePublicIdentifier);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this.state = DATA_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.publicId += toChar(cp);
        }
      }
      [DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE](cp) {
        if (cp === $.APOSTROPHE) {
          this.state = AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentToken.publicId += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.abruptDoctypePublicIdentifier);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this.state = DATA_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.publicId += toChar(cp);
        }
      }
      [AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE](cp) {
        if (isWhitespace(cp)) {
          this.state = BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.QUOTATION_MARK) {
          this._err(ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
          this.currentToken.systemId = '';
          this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
        } else if (cp === $.APOSTROPHE) {
          this._err(ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
          this.currentToken.systemId = '';
          this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this._reconsumeInState(BOGUS_DOCTYPE_STATE);
        }
      }
      [BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE](cp) {
        if (isWhitespace(cp)) {
          return;
        }
        if (cp === $.GREATER_THAN_SIGN) {
          this._emitCurrentToken();
          this.state = DATA_STATE;
        } else if (cp === $.QUOTATION_MARK) {
          this.currentToken.systemId = '';
          this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
        } else if (cp === $.APOSTROPHE) {
          this.currentToken.systemId = '';
          this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this._reconsumeInState(BOGUS_DOCTYPE_STATE);
        }
      }
      [AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE](cp) {
        if (isWhitespace(cp)) {
          this.state = BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE;
        } else if (cp === $.QUOTATION_MARK) {
          this._err(ERR.missingWhitespaceAfterDoctypeSystemKeyword);
          this.currentToken.systemId = '';
          this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
        } else if (cp === $.APOSTROPHE) {
          this._err(ERR.missingWhitespaceAfterDoctypeSystemKeyword);
          this.currentToken.systemId = '';
          this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.missingDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this._reconsumeInState(BOGUS_DOCTYPE_STATE);
        }
      }
      [BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE](cp) {
        if (isWhitespace(cp)) {
          return;
        }
        if (cp === $.QUOTATION_MARK) {
          this.currentToken.systemId = '';
          this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
        } else if (cp === $.APOSTROPHE) {
          this.currentToken.systemId = '';
          this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.missingDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this._reconsumeInState(BOGUS_DOCTYPE_STATE);
        }
      }
      [DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE](cp) {
        if (cp === $.QUOTATION_MARK) {
          this.state = AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentToken.systemId += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.abruptDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this.state = DATA_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.systemId += toChar(cp);
        }
      }
      [DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE](cp) {
        if (cp === $.APOSTROPHE) {
          this.state = AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentToken.systemId += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.abruptDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this.state = DATA_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.systemId += toChar(cp);
        }
      }
      [AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE](cp) {
        if (isWhitespace(cp)) {
          return;
        }
        if (cp === $.GREATER_THAN_SIGN) {
          this._emitCurrentToken();
          this.state = DATA_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(ERR.unexpectedCharacterAfterDoctypeSystemIdentifier);
          this._reconsumeInState(BOGUS_DOCTYPE_STATE);
        }
      }
      [BOGUS_DOCTYPE_STATE](cp) {
        if (cp === $.GREATER_THAN_SIGN) {
          this._emitCurrentToken();
          this.state = DATA_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
        } else if (cp === $.EOF) {
          this._emitCurrentToken();
          this._emitEOFToken();
        }
      }
      [CDATA_SECTION_STATE](cp) {
        if (cp === $.RIGHT_SQUARE_BRACKET) {
          this.state = CDATA_SECTION_BRACKET_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInCdata);
          this._emitEOFToken();
        } else {
          this._emitCodePoint(cp);
        }
      }
      [CDATA_SECTION_BRACKET_STATE](cp) {
        if (cp === $.RIGHT_SQUARE_BRACKET) {
          this.state = CDATA_SECTION_END_STATE;
        } else {
          this._emitChars(']');
          this._reconsumeInState(CDATA_SECTION_STATE);
        }
      }
      [CDATA_SECTION_END_STATE](cp) {
        if (cp === $.GREATER_THAN_SIGN) {
          this.state = DATA_STATE;
        } else if (cp === $.RIGHT_SQUARE_BRACKET) {
          this._emitChars(']');
        } else {
          this._emitChars(']]');
          this._reconsumeInState(CDATA_SECTION_STATE);
        }
      }
      [CHARACTER_REFERENCE_STATE](cp) {
        this.tempBuff = [$.AMPERSAND];
        if (cp === $.NUMBER_SIGN) {
          this.tempBuff.push(cp);
          this.state = NUMERIC_CHARACTER_REFERENCE_STATE;
        } else if (isAsciiAlphaNumeric(cp)) {
          this._reconsumeInState(NAMED_CHARACTER_REFERENCE_STATE);
        } else {
          this._flushCodePointsConsumedAsCharacterReference();
          this._reconsumeInState(this.returnState);
        }
      }
      [NAMED_CHARACTER_REFERENCE_STATE](cp) {
        const matchResult = this._matchNamedCharacterReference(cp);
        if (this._ensureHibernation()) {
          this.tempBuff = [$.AMPERSAND];
        } else if (matchResult) {
          const withSemicolon = this.tempBuff[this.tempBuff.length - 1] === $.SEMICOLON;
          if (!this._isCharacterReferenceAttributeQuirk(withSemicolon)) {
            if (!withSemicolon) {
              this._errOnNextCodePoint(ERR.missingSemicolonAfterCharacterReference);
            }
            this.tempBuff = matchResult;
          }
          this._flushCodePointsConsumedAsCharacterReference();
          this.state = this.returnState;
        } else {
          this._flushCodePointsConsumedAsCharacterReference();
          this.state = AMBIGUOUS_AMPERSAND_STATE;
        }
      }
      [AMBIGUOUS_AMPERSAND_STATE](cp) {
        if (isAsciiAlphaNumeric(cp)) {
          if (this._isCharacterReferenceInAttribute()) {
            this.currentAttr.value += toChar(cp);
          } else {
            this._emitCodePoint(cp);
          }
        } else {
          if (cp === $.SEMICOLON) {
            this._err(ERR.unknownNamedCharacterReference);
          }
          this._reconsumeInState(this.returnState);
        }
      }
      [NUMERIC_CHARACTER_REFERENCE_STATE](cp) {
        this.charRefCode = 0;
        if (cp === $.LATIN_SMALL_X || cp === $.LATIN_CAPITAL_X) {
          this.tempBuff.push(cp);
          this.state = HEXADEMICAL_CHARACTER_REFERENCE_START_STATE;
        } else {
          this._reconsumeInState(DECIMAL_CHARACTER_REFERENCE_START_STATE);
        }
      }
      [HEXADEMICAL_CHARACTER_REFERENCE_START_STATE](cp) {
        if (isAsciiHexDigit(cp)) {
          this._reconsumeInState(HEXADEMICAL_CHARACTER_REFERENCE_STATE);
        } else {
          this._err(ERR.absenceOfDigitsInNumericCharacterReference);
          this._flushCodePointsConsumedAsCharacterReference();
          this._reconsumeInState(this.returnState);
        }
      }
      [DECIMAL_CHARACTER_REFERENCE_START_STATE](cp) {
        if (isAsciiDigit(cp)) {
          this._reconsumeInState(DECIMAL_CHARACTER_REFERENCE_STATE);
        } else {
          this._err(ERR.absenceOfDigitsInNumericCharacterReference);
          this._flushCodePointsConsumedAsCharacterReference();
          this._reconsumeInState(this.returnState);
        }
      }
      [HEXADEMICAL_CHARACTER_REFERENCE_STATE](cp) {
        if (isAsciiUpperHexDigit(cp)) {
          this.charRefCode = this.charRefCode * 16 + cp - 55;
        } else if (isAsciiLowerHexDigit(cp)) {
          this.charRefCode = this.charRefCode * 16 + cp - 87;
        } else if (isAsciiDigit(cp)) {
          this.charRefCode = this.charRefCode * 16 + cp - 48;
        } else if (cp === $.SEMICOLON) {
          this.state = NUMERIC_CHARACTER_REFERENCE_END_STATE;
        } else {
          this._err(ERR.missingSemicolonAfterCharacterReference);
          this._reconsumeInState(NUMERIC_CHARACTER_REFERENCE_END_STATE);
        }
      }
      [DECIMAL_CHARACTER_REFERENCE_STATE](cp) {
        if (isAsciiDigit(cp)) {
          this.charRefCode = this.charRefCode * 10 + cp - 48;
        } else if (cp === $.SEMICOLON) {
          this.state = NUMERIC_CHARACTER_REFERENCE_END_STATE;
        } else {
          this._err(ERR.missingSemicolonAfterCharacterReference);
          this._reconsumeInState(NUMERIC_CHARACTER_REFERENCE_END_STATE);
        }
      }
      [NUMERIC_CHARACTER_REFERENCE_END_STATE]() {
        if (this.charRefCode === $.NULL) {
          this._err(ERR.nullCharacterReference);
          this.charRefCode = $.REPLACEMENT_CHARACTER;
        } else if (this.charRefCode > 1114111) {
          this._err(ERR.characterReferenceOutsideUnicodeRange);
          this.charRefCode = $.REPLACEMENT_CHARACTER;
        } else if (unicode.isSurrogate(this.charRefCode)) {
          this._err(ERR.surrogateCharacterReference);
          this.charRefCode = $.REPLACEMENT_CHARACTER;
        } else if (unicode.isUndefinedCodePoint(this.charRefCode)) {
          this._err(ERR.noncharacterCharacterReference);
        } else if (unicode.isControlCodePoint(this.charRefCode) || this.charRefCode === $.CARRIAGE_RETURN) {
          this._err(ERR.controlCharacterReference);
          const replacement = C1_CONTROLS_REFERENCE_REPLACEMENTS[this.charRefCode];
          if (replacement) {
            this.charRefCode = replacement;
          }
        }
        this.tempBuff = [this.charRefCode];
        this._flushCodePointsConsumedAsCharacterReference();
        this._reconsumeInState(this.returnState);
      }
    };
    Tokenizer.CHARACTER_TOKEN = 'CHARACTER_TOKEN';
    Tokenizer.NULL_CHARACTER_TOKEN = 'NULL_CHARACTER_TOKEN';
    Tokenizer.WHITESPACE_CHARACTER_TOKEN = 'WHITESPACE_CHARACTER_TOKEN';
    Tokenizer.START_TAG_TOKEN = 'START_TAG_TOKEN';
    Tokenizer.END_TAG_TOKEN = 'END_TAG_TOKEN';
    Tokenizer.COMMENT_TOKEN = 'COMMENT_TOKEN';
    Tokenizer.DOCTYPE_TOKEN = 'DOCTYPE_TOKEN';
    Tokenizer.EOF_TOKEN = 'EOF_TOKEN';
    Tokenizer.HIBERNATION_TOKEN = 'HIBERNATION_TOKEN';
    Tokenizer.MODE = {
      DATA: DATA_STATE,
      RCDATA: RCDATA_STATE,
      RAWTEXT: RAWTEXT_STATE,
      SCRIPT_DATA: SCRIPT_DATA_STATE,
      PLAINTEXT: PLAINTEXT_STATE
    };
    Tokenizer.getTokenAttr = function(token, attrName) {
      for (let i = token.attrs.length - 1; i >= 0; i--) {
        if (token.attrs[i].name === attrName) {
          return token.attrs[i].value;
        }
      }
      return null;
    };
    module.exports = Tokenizer;
  }
});

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/mod.js
var __module = __toESM(require_tokenizer());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };