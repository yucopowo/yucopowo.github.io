/* esm.sh - esbuild bundle(micromark-extension-mdx-jsx@1.0.3) es2022 development */
// esm-build-f998f6d8b68178cab6eabf73cd484dddbeddbfd9-2a3e71d7/node_modules/micromark-extension-mdx-jsx/dev/lib/syntax.js
import { codes as codes3 } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/codes.development.js';

// esm-build-f998f6d8b68178cab6eabf73cd484dddbeddbfd9-2a3e71d7/node_modules/micromark-extension-mdx-jsx/dev/lib/factory-tag.js
import { ok as assert } from '/cdn/v99/uvu@0.5.6/es2022/assert.development.js';
import {
  start as idStart,
  cont as idCont
} from '/cdn/v99/estree-util-is-identifier-name@2.0.1/es2022/estree-util-is-identifier-name.development.js';
import { factoryMdxExpression } from '/cdn/v99/micromark-factory-mdx-expression@1.0.6/es2022/micromark-factory-mdx-expression.development.js';
import { factorySpace } from '/cdn/v99/micromark-factory-space@1.0.0/es2022/micromark-factory-space.development.js';
import {
  markdownLineEnding,
  markdownLineEndingOrSpace,
  markdownSpace,
  unicodeWhitespace
} from '/cdn/v99/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { constants } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/constants.development.js';
import { types } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/types.development.js';
import { VFileMessage } from '/cdn/v99/vfile-message@3.1.3/es2022/vfile-message.development.js';
var lazyLineEnd = {
  tokenize: tokenizeLazyLineEnd,
  partial: true
};
function factoryTag(
  effects,
  ok,
  nok,
  acorn,
  acornOptions,
  addResult,
  allowLazy,
  tagType,
  tagMarkerType,
  tagClosingMarkerType,
  tagSelfClosingMarker,
  tagNameType,
  tagNamePrimaryType,
  tagNameMemberMarkerType,
  tagNameMemberType,
  tagNamePrefixMarkerType,
  tagNameLocalType,
  tagExpressionAttributeType,
  tagExpressionAttributeMarkerType,
  tagExpressionAttributeValueType,
  tagAttributeType,
  tagAttributeNameType,
  tagAttributeNamePrimaryType,
  tagAttributeNamePrefixMarkerType,
  tagAttributeNameLocalType,
  tagAttributeInitializerMarkerType,
  tagAttributeValueLiteralType,
  tagAttributeValueLiteralMarkerType,
  tagAttributeValueLiteralValueType,
  tagAttributeValueExpressionType,
  tagAttributeValueExpressionMarkerType,
  tagAttributeValueExpressionValueType
) {
  const self = this;
  let returnState;
  let marker;
  let startPoint;
  return start;
  function start(code) {
    assert(code === codes.lessThan, 'expected `<`');
    startPoint = self.now();
    effects.enter(tagType);
    effects.enter(tagMarkerType);
    effects.consume(code);
    effects.exit(tagMarkerType);
    return afterStart;
  }
  function afterStart(code) {
    if (markdownLineEnding(code) || markdownSpace(code)) {
      return nok(code);
    }
    returnState = beforeName;
    return optionalEsWhitespace(code);
  }
  function beforeName(code) {
    if (code === codes.slash) {
      effects.enter(tagClosingMarkerType);
      effects.consume(code);
      effects.exit(tagClosingMarkerType);
      returnState = beforeClosingTagName;
      return optionalEsWhitespace;
    }
    if (code === codes.greaterThan) {
      return tagEnd(code);
    }
    if (code !== codes.eof && idStart(code)) {
      effects.enter(tagNameType);
      effects.enter(tagNamePrimaryType);
      effects.consume(code);
      return primaryName;
    }
    crash(
      code,
      'before name',
      'a character that can start a name, such as a letter, `$`, or `_`' +
        (code === codes.exclamationMark ? ' (note: to create a comment in MDX, use `{/* text */}`)' : '')
    );
  }
  function beforeClosingTagName(code) {
    if (code === codes.greaterThan) {
      return tagEnd(code);
    }
    if (code !== codes.eof && idStart(code)) {
      effects.enter(tagNameType);
      effects.enter(tagNamePrimaryType);
      effects.consume(code);
      return primaryName;
    }
    crash(
      code,
      'before name',
      'a character that can start a name, such as a letter, `$`, or `_`' +
        (code === codes.asterisk || code === codes.slash
          ? ' (note: JS comments in JSX tags are not supported in MDX)'
          : '')
    );
  }
  function primaryName(code) {
    if (code === codes.dash || (code !== codes.eof && idCont(code))) {
      effects.consume(code);
      return primaryName;
    }
    if (
      code === codes.dot ||
      code === codes.slash ||
      code === codes.colon ||
      code === codes.greaterThan ||
      code === codes.leftCurlyBrace ||
      markdownLineEndingOrSpace(code) ||
      unicodeWhitespace(code)
    ) {
      effects.exit(tagNamePrimaryType);
      returnState = afterPrimaryName;
      return optionalEsWhitespace(code);
    }
    crash(
      code,
      'in name',
      'a name character such as letters, digits, `$`, or `_`; whitespace before attributes; or the end of the tag' +
        (code === codes.atSign ? ' (note: to create a link in MDX, use `[text](url)`)' : '')
    );
  }
  function afterPrimaryName(code) {
    if (code === codes.dot) {
      effects.enter(tagNameMemberMarkerType);
      effects.consume(code);
      effects.exit(tagNameMemberMarkerType);
      returnState = beforeMemberName;
      return optionalEsWhitespace;
    }
    if (code === codes.colon) {
      effects.enter(tagNamePrefixMarkerType);
      effects.consume(code);
      effects.exit(tagNamePrefixMarkerType);
      returnState = beforeLocalName;
      return optionalEsWhitespace;
    }
    if (
      code === codes.slash ||
      code === codes.greaterThan ||
      code === codes.leftCurlyBrace ||
      (code !== codes.eof && idStart(code))
    ) {
      effects.exit(tagNameType);
      return beforeAttribute(code);
    }
    crash(
      code,
      'after name',
      'a character that can start an attribute name, such as a letter, `$`, or `_`; whitespace before attributes; or the end of the tag'
    );
  }
  function beforeMemberName(code) {
    if (code !== codes.eof && idStart(code)) {
      effects.enter(tagNameMemberType);
      effects.consume(code);
      return memberName;
    }
    crash(
      code,
      'before member name',
      'a character that can start an attribute name, such as a letter, `$`, or `_`; whitespace before attributes; or the end of the tag'
    );
  }
  function memberName(code) {
    if (code === codes.dash || (code !== codes.eof && idCont(code))) {
      effects.consume(code);
      return memberName;
    }
    if (
      code === codes.dot ||
      code === codes.slash ||
      code === codes.greaterThan ||
      code === codes.leftCurlyBrace ||
      markdownLineEndingOrSpace(code) ||
      unicodeWhitespace(code)
    ) {
      effects.exit(tagNameMemberType);
      returnState = afterMemberName;
      return optionalEsWhitespace(code);
    }
    crash(
      code,
      'in member name',
      'a name character such as letters, digits, `$`, or `_`; whitespace before attributes; or the end of the tag' +
        (code === codes.atSign ? ' (note: to create a link in MDX, use `[text](url)`)' : '')
    );
  }
  function afterMemberName(code) {
    if (code === codes.dot) {
      effects.enter(tagNameMemberMarkerType);
      effects.consume(code);
      effects.exit(tagNameMemberMarkerType);
      returnState = beforeMemberName;
      return optionalEsWhitespace;
    }
    if (
      code === codes.slash ||
      code === codes.greaterThan ||
      code === codes.leftCurlyBrace ||
      (code !== codes.eof && idStart(code))
    ) {
      effects.exit(tagNameType);
      return beforeAttribute(code);
    }
    crash(
      code,
      'after member name',
      'a character that can start an attribute name, such as a letter, `$`, or `_`; whitespace before attributes; or the end of the tag'
    );
  }
  function beforeLocalName(code) {
    if (code !== codes.eof && idStart(code)) {
      effects.enter(tagNameLocalType);
      effects.consume(code);
      return localName;
    }
    crash(
      code,
      'before local name',
      'a character that can start a name, such as a letter, `$`, or `_`' +
        (code === codes.plusSign || (code !== null && code > codes.dot && code < codes.colon)
          ? ' (note: to create a link in MDX, use `[text](url)`)'
          : '')
    );
  }
  function localName(code) {
    if (code === codes.dash || (code !== codes.eof && idCont(code))) {
      effects.consume(code);
      return localName;
    }
    if (
      code === codes.slash ||
      code === codes.greaterThan ||
      code === codes.leftCurlyBrace ||
      markdownLineEndingOrSpace(code) ||
      unicodeWhitespace(code)
    ) {
      effects.exit(tagNameLocalType);
      returnState = afterLocalName;
      return optionalEsWhitespace(code);
    }
    crash(
      code,
      'in local name',
      'a name character such as letters, digits, `$`, or `_`; whitespace before attributes; or the end of the tag'
    );
  }
  function afterLocalName(code) {
    if (
      code === codes.slash ||
      code === codes.greaterThan ||
      code === codes.leftCurlyBrace ||
      (code !== codes.eof && idStart(code))
    ) {
      effects.exit(tagNameType);
      return beforeAttribute(code);
    }
    crash(
      code,
      'after local name',
      'a character that can start an attribute name, such as a letter, `$`, or `_`; whitespace before attributes; or the end of the tag'
    );
  }
  function beforeAttribute(code) {
    if (code === codes.slash) {
      effects.enter(tagSelfClosingMarker);
      effects.consume(code);
      effects.exit(tagSelfClosingMarker);
      returnState = selfClosing;
      return optionalEsWhitespace;
    }
    if (code === codes.greaterThan) {
      return tagEnd(code);
    }
    if (code === codes.leftCurlyBrace) {
      assert(startPoint, 'expected `startPoint` to be defined');
      return factoryMdxExpression.call(
        self,
        effects,
        afterAttributeExpression,
        tagExpressionAttributeType,
        tagExpressionAttributeMarkerType,
        tagExpressionAttributeValueType,
        acorn,
        acornOptions,
        addResult,
        true,
        false,
        allowLazy,
        startPoint.column
      )(code);
    }
    if (code !== codes.eof && idStart(code)) {
      effects.enter(tagAttributeType);
      effects.enter(tagAttributeNameType);
      effects.enter(tagAttributeNamePrimaryType);
      effects.consume(code);
      return attributePrimaryName;
    }
    crash(
      code,
      'before attribute name',
      'a character that can start an attribute name, such as a letter, `$`, or `_`; whitespace before attributes; or the end of the tag'
    );
  }
  function afterAttributeExpression(code) {
    returnState = beforeAttribute;
    return optionalEsWhitespace(code);
  }
  function attributePrimaryName(code) {
    if (code === codes.dash || (code !== codes.eof && idCont(code))) {
      effects.consume(code);
      return attributePrimaryName;
    }
    if (
      code === codes.slash ||
      code === codes.colon ||
      code === codes.equalsTo ||
      code === codes.greaterThan ||
      code === codes.leftCurlyBrace ||
      markdownLineEndingOrSpace(code) ||
      unicodeWhitespace(code)
    ) {
      effects.exit(tagAttributeNamePrimaryType);
      returnState = afterAttributePrimaryName;
      return optionalEsWhitespace(code);
    }
    crash(
      code,
      'in attribute name',
      'an attribute name character such as letters, digits, `$`, or `_`; `=` to initialize a value; whitespace before attributes; or the end of the tag'
    );
  }
  function afterAttributePrimaryName(code) {
    if (code === codes.colon) {
      effects.enter(tagAttributeNamePrefixMarkerType);
      effects.consume(code);
      effects.exit(tagAttributeNamePrefixMarkerType);
      returnState = beforeAttributeLocalName;
      return optionalEsWhitespace;
    }
    if (code === codes.equalsTo) {
      effects.exit(tagAttributeNameType);
      effects.enter(tagAttributeInitializerMarkerType);
      effects.consume(code);
      effects.exit(tagAttributeInitializerMarkerType);
      returnState = beforeAttributeValue;
      return optionalEsWhitespace;
    }
    if (
      code === codes.slash ||
      code === codes.greaterThan ||
      code === codes.leftCurlyBrace ||
      markdownLineEndingOrSpace(code) ||
      unicodeWhitespace(code) ||
      (code !== codes.eof && idStart(code))
    ) {
      effects.exit(tagAttributeNameType);
      effects.exit(tagAttributeType);
      returnState = beforeAttribute;
      return optionalEsWhitespace(code);
    }
    crash(
      code,
      'after attribute name',
      'a character that can start an attribute name, such as a letter, `$`, or `_`; `=` to initialize a value; or the end of the tag'
    );
  }
  function beforeAttributeLocalName(code) {
    if (code !== codes.eof && idStart(code)) {
      effects.enter(tagAttributeNameLocalType);
      effects.consume(code);
      return attributeLocalName;
    }
    crash(
      code,
      'before local attribute name',
      'a character that can start an attribute name, such as a letter, `$`, or `_`; `=` to initialize a value; or the end of the tag'
    );
  }
  function attributeLocalName(code) {
    if (code === codes.dash || (code !== codes.eof && idCont(code))) {
      effects.consume(code);
      return attributeLocalName;
    }
    if (
      code === codes.slash ||
      code === codes.equalsTo ||
      code === codes.greaterThan ||
      code === codes.leftCurlyBrace ||
      markdownLineEndingOrSpace(code) ||
      unicodeWhitespace(code)
    ) {
      effects.exit(tagAttributeNameLocalType);
      effects.exit(tagAttributeNameType);
      returnState = afterAttributeLocalName;
      return optionalEsWhitespace(code);
    }
    crash(
      code,
      'in local attribute name',
      'an attribute name character such as letters, digits, `$`, or `_`; `=` to initialize a value; whitespace before attributes; or the end of the tag'
    );
  }
  function afterAttributeLocalName(code) {
    if (code === codes.equalsTo) {
      effects.enter(tagAttributeInitializerMarkerType);
      effects.consume(code);
      effects.exit(tagAttributeInitializerMarkerType);
      returnState = beforeAttributeValue;
      return optionalEsWhitespace;
    }
    if (
      code === codes.slash ||
      code === codes.greaterThan ||
      code === codes.leftCurlyBrace ||
      (code !== codes.eof && idStart(code))
    ) {
      effects.exit(tagAttributeType);
      return beforeAttribute(code);
    }
    crash(
      code,
      'after local attribute name',
      'a character that can start an attribute name, such as a letter, `$`, or `_`; `=` to initialize a value; or the end of the tag'
    );
  }
  function beforeAttributeValue(code) {
    if (code === codes.quotationMark || code === codes.apostrophe) {
      effects.enter(tagAttributeValueLiteralType);
      effects.enter(tagAttributeValueLiteralMarkerType);
      effects.consume(code);
      effects.exit(tagAttributeValueLiteralMarkerType);
      marker = code;
      return attributeValueQuotedStart;
    }
    if (code === codes.leftCurlyBrace) {
      assert(startPoint, 'expected `startPoint` to be defined');
      return factoryMdxExpression.call(
        self,
        effects,
        afterAttributeValueExpression,
        tagAttributeValueExpressionType,
        tagAttributeValueExpressionMarkerType,
        tagAttributeValueExpressionValueType,
        acorn,
        acornOptions,
        addResult,
        false,
        false,
        allowLazy,
        startPoint.column
      )(code);
    }
    crash(
      code,
      'before attribute value',
      'a character that can start an attribute value, such as `"`, `\'`, or `{`' +
        (code === codes.lessThan
          ? ' (note: to use an element or fragment as a prop value in MDX, use `{<element />}`)'
          : '')
    );
  }
  function afterAttributeValueExpression(code) {
    effects.exit(tagAttributeType);
    returnState = beforeAttribute;
    return optionalEsWhitespace(code);
  }
  function attributeValueQuotedStart(code) {
    assert(marker !== void 0, 'expected `marker` to be defined');
    if (code === codes.eof) {
      crash(code, 'in attribute value', 'a corresponding closing quote `' + String.fromCharCode(marker) + '`');
    }
    if (code === marker) {
      effects.enter(tagAttributeValueLiteralMarkerType);
      effects.consume(code);
      effects.exit(tagAttributeValueLiteralMarkerType);
      effects.exit(tagAttributeValueLiteralType);
      effects.exit(tagAttributeType);
      marker = void 0;
      returnState = beforeAttribute;
      return optionalEsWhitespace;
    }
    if (markdownLineEnding(code)) {
      returnState = attributeValueQuotedStart;
      return optionalEsWhitespace(code);
    }
    effects.enter(tagAttributeValueLiteralValueType);
    return attributeValueQuoted(code);
  }
  function attributeValueQuoted(code) {
    if (code === codes.eof || code === marker || markdownLineEnding(code)) {
      effects.exit(tagAttributeValueLiteralValueType);
      return attributeValueQuotedStart(code);
    }
    effects.consume(code);
    return attributeValueQuoted;
  }
  function selfClosing(code) {
    if (code === codes.greaterThan) {
      return tagEnd(code);
    }
    crash(
      code,
      'after self-closing slash',
      '`>` to end the tag' +
        (code === codes.asterisk || code === codes.slash
          ? ' (note: JS comments in JSX tags are not supported in MDX)'
          : '')
    );
  }
  function tagEnd(code) {
    assert(code === codes.greaterThan, 'expected `>`');
    effects.enter(tagMarkerType);
    effects.consume(code);
    effects.exit(tagMarkerType);
    effects.exit(tagType);
    return ok;
  }
  function optionalEsWhitespace(code) {
    if (markdownLineEnding(code)) {
      if (allowLazy) {
        effects.enter(types.lineEnding);
        effects.consume(code);
        effects.exit(types.lineEnding);
        return factorySpace(effects, optionalEsWhitespace, types.linePrefix, constants.tabSize);
      }
      return effects.attempt(
        lazyLineEnd,
        factorySpace(effects, optionalEsWhitespace, types.linePrefix, constants.tabSize),
        crashEol
      )(code);
    }
    if (markdownSpace(code) || unicodeWhitespace(code)) {
      effects.enter('esWhitespace');
      return optionalEsWhitespaceContinue(code);
    }
    return returnState(code);
  }
  function optionalEsWhitespaceContinue(code) {
    if (markdownLineEnding(code) || !(markdownSpace(code) || unicodeWhitespace(code))) {
      effects.exit('esWhitespace');
      return optionalEsWhitespace(code);
    }
    effects.consume(code);
    return optionalEsWhitespaceContinue;
  }
  function crashEol() {
    throw new VFileMessage(
      'Unexpected lazy line in container, expected line to be prefixed with `>` when in a block quote, whitespace when in a list, etc',
      self.now(),
      'micromark-extension-mdx-jsx:unexpected-eof'
    );
  }
  function crash(code, at, expect) {
    throw new VFileMessage(
      'Unexpected ' +
        (code === codes.eof
          ? 'end of file'
          : 'character `' +
            (code === codes.graveAccent ? '` ` `' : String.fromCharCode(code)) +
            '` (' +
            serializeCharCode(code) +
            ')') +
        ' ' +
        at +
        ', expected ' +
        expect,
      self.now(),
      'micromark-extension-mdx-jsx:unexpected-' + (code === codes.eof ? 'eof' : 'character')
    );
  }
}
function tokenizeLazyLineEnd(effects, ok, nok) {
  const self = this;
  return start;
  function start(code) {
    assert(markdownLineEnding(code), 'expected eol');
    effects.enter(types.lineEnding);
    effects.consume(code);
    effects.exit(types.lineEnding);
    return lineStart;
  }
  function lineStart(code) {
    return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
  }
}
function serializeCharCode(code) {
  return (
    'U+' +
    code
      .toString(constants.numericBaseHexadecimal)
      .toUpperCase()
      .padStart(4, '0')
  );
}

// esm-build-f998f6d8b68178cab6eabf73cd484dddbeddbfd9-2a3e71d7/node_modules/micromark-extension-mdx-jsx/dev/lib/jsx-text.js
function jsxText(acorn, acornOptions, addResult) {
  return {
    tokenize: tokenizeJsxText
  };
  function tokenizeJsxText(effects, ok, nok) {
    return factoryTag.call(
      this,
      effects,
      ok,
      nok,
      acorn,
      acornOptions,
      addResult,
      true,
      'mdxJsxTextTag',
      'mdxJsxTextTagMarker',
      'mdxJsxTextTagClosingMarker',
      'mdxJsxTextTagSelfClosingMarker',
      'mdxJsxTextTagName',
      'mdxJsxTextTagNamePrimary',
      'mdxJsxTextTagNameMemberMarker',
      'mdxJsxTextTagNameMember',
      'mdxJsxTextTagNamePrefixMarker',
      'mdxJsxTextTagNameLocal',
      'mdxJsxTextTagExpressionAttribute',
      'mdxJsxTextTagExpressionAttributeMarker',
      'mdxJsxTextTagExpressionAttributeValue',
      'mdxJsxTextTagAttribute',
      'mdxJsxTextTagAttributeName',
      'mdxJsxTextTagAttributeNamePrimary',
      'mdxJsxTextTagAttributeNamePrefixMarker',
      'mdxJsxTextTagAttributeNameLocal',
      'mdxJsxTextTagAttributeInitializerMarker',
      'mdxJsxTextTagAttributeValueLiteral',
      'mdxJsxTextTagAttributeValueLiteralMarker',
      'mdxJsxTextTagAttributeValueLiteralValue',
      'mdxJsxTextTagAttributeValueExpression',
      'mdxJsxTextTagAttributeValueExpressionMarker',
      'mdxJsxTextTagAttributeValueExpressionValue'
    );
  }
}

// esm-build-f998f6d8b68178cab6eabf73cd484dddbeddbfd9-2a3e71d7/node_modules/micromark-extension-mdx-jsx/dev/lib/jsx-flow.js
import { ok as assert2 } from '/cdn/v99/uvu@0.5.6/es2022/assert.development.js';
import { factorySpace as factorySpace2 } from '/cdn/v99/micromark-factory-space@1.0.0/es2022/micromark-factory-space.development.js';
import { markdownLineEnding as markdownLineEnding2 } from '/cdn/v99/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes as codes2 } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { types as types2 } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/types.development.js';
function jsxFlow(acorn, acornOptions, addResult) {
  return {
    tokenize: tokenizeJsxFlow,
    concrete: true
  };
  function tokenizeJsxFlow(effects, ok, nok) {
    const self = this;
    return start;
    function start(code) {
      assert2(code === codes2.lessThan, 'expected `<`');
      return factoryTag.call(
        self,
        effects,
        factorySpace2(effects, after, types2.whitespace),
        nok,
        acorn,
        acornOptions,
        addResult,
        false,
        'mdxJsxFlowTag',
        'mdxJsxFlowTagMarker',
        'mdxJsxFlowTagClosingMarker',
        'mdxJsxFlowTagSelfClosingMarker',
        'mdxJsxFlowTagName',
        'mdxJsxFlowTagNamePrimary',
        'mdxJsxFlowTagNameMemberMarker',
        'mdxJsxFlowTagNameMember',
        'mdxJsxFlowTagNamePrefixMarker',
        'mdxJsxFlowTagNameLocal',
        'mdxJsxFlowTagExpressionAttribute',
        'mdxJsxFlowTagExpressionAttributeMarker',
        'mdxJsxFlowTagExpressionAttributeValue',
        'mdxJsxFlowTagAttribute',
        'mdxJsxFlowTagAttributeName',
        'mdxJsxFlowTagAttributeNamePrimary',
        'mdxJsxFlowTagAttributeNamePrefixMarker',
        'mdxJsxFlowTagAttributeNameLocal',
        'mdxJsxFlowTagAttributeInitializerMarker',
        'mdxJsxFlowTagAttributeValueLiteral',
        'mdxJsxFlowTagAttributeValueLiteralMarker',
        'mdxJsxFlowTagAttributeValueLiteralValue',
        'mdxJsxFlowTagAttributeValueExpression',
        'mdxJsxFlowTagAttributeValueExpressionMarker',
        'mdxJsxFlowTagAttributeValueExpressionValue'
      )(code);
    }
    function after(code) {
      return code === codes2.lessThan
        ? start(code)
        : code === codes2.eof || markdownLineEnding2(code)
        ? ok(code)
        : nok(code);
    }
  }
}

// esm-build-f998f6d8b68178cab6eabf73cd484dddbeddbfd9-2a3e71d7/node_modules/micromark-extension-mdx-jsx/dev/lib/syntax.js
function mdxJsx(options = {}) {
  const acorn = options.acorn;
  let acornOptions;
  if (acorn) {
    if (!acorn.parse || !acorn.parseExpressionAt) {
      throw new Error('Expected a proper `acorn` instance passed in as `options.acorn`');
    }
    acornOptions = Object.assign(
      {
        ecmaVersion: 2020,
        sourceType: 'module'
      },
      options.acornOptions,
      {
        locations: true
      }
    );
  } else if (options.acornOptions || options.addResult) {
    throw new Error('Expected an `acorn` instance passed in as `options.acorn`');
  }
  return {
    flow: {
      [codes3.lessThan]: jsxFlow(acorn, acornOptions, options.addResult)
    },
    text: {
      [codes3.lessThan]: jsxText(acorn, acornOptions, options.addResult)
    }
  };
}
export { mdxJsx };
