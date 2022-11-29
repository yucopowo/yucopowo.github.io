/* esm.sh - esbuild bundle(parse5@6.0.1/lib/common/error-codes) es2022 development */
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

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/common/error-codes.js
var require_error_codes = __commonJS({
  'esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/common/error-codes.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = {
      controlCharacterInInputStream: 'control-character-in-input-stream',
      noncharacterInInputStream: 'noncharacter-in-input-stream',
      surrogateInInputStream: 'surrogate-in-input-stream',
      nonVoidHtmlElementStartTagWithTrailingSolidus: 'non-void-html-element-start-tag-with-trailing-solidus',
      endTagWithAttributes: 'end-tag-with-attributes',
      endTagWithTrailingSolidus: 'end-tag-with-trailing-solidus',
      unexpectedSolidusInTag: 'unexpected-solidus-in-tag',
      unexpectedNullCharacter: 'unexpected-null-character',
      unexpectedQuestionMarkInsteadOfTagName: 'unexpected-question-mark-instead-of-tag-name',
      invalidFirstCharacterOfTagName: 'invalid-first-character-of-tag-name',
      unexpectedEqualsSignBeforeAttributeName: 'unexpected-equals-sign-before-attribute-name',
      missingEndTagName: 'missing-end-tag-name',
      unexpectedCharacterInAttributeName: 'unexpected-character-in-attribute-name',
      unknownNamedCharacterReference: 'unknown-named-character-reference',
      missingSemicolonAfterCharacterReference: 'missing-semicolon-after-character-reference',
      unexpectedCharacterAfterDoctypeSystemIdentifier: 'unexpected-character-after-doctype-system-identifier',
      unexpectedCharacterInUnquotedAttributeValue: 'unexpected-character-in-unquoted-attribute-value',
      eofBeforeTagName: 'eof-before-tag-name',
      eofInTag: 'eof-in-tag',
      missingAttributeValue: 'missing-attribute-value',
      missingWhitespaceBetweenAttributes: 'missing-whitespace-between-attributes',
      missingWhitespaceAfterDoctypePublicKeyword: 'missing-whitespace-after-doctype-public-keyword',
      missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers:
        'missing-whitespace-between-doctype-public-and-system-identifiers',
      missingWhitespaceAfterDoctypeSystemKeyword: 'missing-whitespace-after-doctype-system-keyword',
      missingQuoteBeforeDoctypePublicIdentifier: 'missing-quote-before-doctype-public-identifier',
      missingQuoteBeforeDoctypeSystemIdentifier: 'missing-quote-before-doctype-system-identifier',
      missingDoctypePublicIdentifier: 'missing-doctype-public-identifier',
      missingDoctypeSystemIdentifier: 'missing-doctype-system-identifier',
      abruptDoctypePublicIdentifier: 'abrupt-doctype-public-identifier',
      abruptDoctypeSystemIdentifier: 'abrupt-doctype-system-identifier',
      cdataInHtmlContent: 'cdata-in-html-content',
      incorrectlyOpenedComment: 'incorrectly-opened-comment',
      eofInScriptHtmlCommentLikeText: 'eof-in-script-html-comment-like-text',
      eofInDoctype: 'eof-in-doctype',
      nestedComment: 'nested-comment',
      abruptClosingOfEmptyComment: 'abrupt-closing-of-empty-comment',
      eofInComment: 'eof-in-comment',
      incorrectlyClosedComment: 'incorrectly-closed-comment',
      eofInCdata: 'eof-in-cdata',
      absenceOfDigitsInNumericCharacterReference: 'absence-of-digits-in-numeric-character-reference',
      nullCharacterReference: 'null-character-reference',
      surrogateCharacterReference: 'surrogate-character-reference',
      characterReferenceOutsideUnicodeRange: 'character-reference-outside-unicode-range',
      controlCharacterReference: 'control-character-reference',
      noncharacterCharacterReference: 'noncharacter-character-reference',
      missingWhitespaceBeforeDoctypeName: 'missing-whitespace-before-doctype-name',
      missingDoctypeName: 'missing-doctype-name',
      invalidCharacterSequenceAfterDoctypeName: 'invalid-character-sequence-after-doctype-name',
      duplicateAttribute: 'duplicate-attribute',
      nonConformingDoctype: 'non-conforming-doctype',
      missingDoctype: 'missing-doctype',
      misplacedDoctype: 'misplaced-doctype',
      endTagWithoutMatchingOpenElement: 'end-tag-without-matching-open-element',
      closingOfElementWithOpenChildElements: 'closing-of-element-with-open-child-elements',
      disallowedContentInNoscriptInHead: 'disallowed-content-in-noscript-in-head',
      openElementsLeftAfterEof: 'open-elements-left-after-eof',
      abandonedHeadElementChild: 'abandoned-head-element-child',
      misplacedStartTagForHeadElement: 'misplaced-start-tag-for-head-element',
      nestedNoscriptInHead: 'nested-noscript-in-head',
      eofInElementThatCanContainOnlyText: 'eof-in-element-that-can-contain-only-text'
    };
  }
});

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/mod.js
var __module = __toESM(require_error_codes());
var {
  controlCharacterInInputStream,
  noncharacterInInputStream,
  surrogateInInputStream,
  nonVoidHtmlElementStartTagWithTrailingSolidus,
  endTagWithAttributes,
  endTagWithTrailingSolidus,
  unexpectedSolidusInTag,
  unexpectedNullCharacter,
  unexpectedQuestionMarkInsteadOfTagName,
  invalidFirstCharacterOfTagName,
  unexpectedEqualsSignBeforeAttributeName,
  missingEndTagName,
  unexpectedCharacterInAttributeName,
  unknownNamedCharacterReference,
  missingSemicolonAfterCharacterReference,
  unexpectedCharacterAfterDoctypeSystemIdentifier,
  unexpectedCharacterInUnquotedAttributeValue,
  eofBeforeTagName,
  eofInTag,
  missingAttributeValue,
  missingWhitespaceBetweenAttributes,
  missingWhitespaceAfterDoctypePublicKeyword,
  missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers,
  missingWhitespaceAfterDoctypeSystemKeyword,
  missingQuoteBeforeDoctypePublicIdentifier,
  missingQuoteBeforeDoctypeSystemIdentifier,
  missingDoctypePublicIdentifier,
  missingDoctypeSystemIdentifier,
  abruptDoctypePublicIdentifier,
  abruptDoctypeSystemIdentifier,
  cdataInHtmlContent,
  incorrectlyOpenedComment,
  eofInScriptHtmlCommentLikeText,
  eofInDoctype,
  nestedComment,
  abruptClosingOfEmptyComment,
  eofInComment,
  incorrectlyClosedComment,
  eofInCdata,
  absenceOfDigitsInNumericCharacterReference,
  nullCharacterReference,
  surrogateCharacterReference,
  characterReferenceOutsideUnicodeRange,
  controlCharacterReference,
  noncharacterCharacterReference,
  missingWhitespaceBeforeDoctypeName,
  missingDoctypeName,
  invalidCharacterSequenceAfterDoctypeName,
  duplicateAttribute,
  nonConformingDoctype,
  missingDoctype,
  misplacedDoctype,
  endTagWithoutMatchingOpenElement,
  closingOfElementWithOpenChildElements,
  disallowedContentInNoscriptInHead,
  openElementsLeftAfterEof,
  abandonedHeadElementChild,
  misplacedStartTagForHeadElement,
  nestedNoscriptInHead,
  eofInElementThatCanContainOnlyText
} = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export {
  abandonedHeadElementChild,
  abruptClosingOfEmptyComment,
  abruptDoctypePublicIdentifier,
  abruptDoctypeSystemIdentifier,
  absenceOfDigitsInNumericCharacterReference,
  cdataInHtmlContent,
  characterReferenceOutsideUnicodeRange,
  closingOfElementWithOpenChildElements,
  controlCharacterInInputStream,
  controlCharacterReference,
  mod_default as default,
  disallowedContentInNoscriptInHead,
  duplicateAttribute,
  endTagWithAttributes,
  endTagWithTrailingSolidus,
  endTagWithoutMatchingOpenElement,
  eofBeforeTagName,
  eofInCdata,
  eofInComment,
  eofInDoctype,
  eofInElementThatCanContainOnlyText,
  eofInScriptHtmlCommentLikeText,
  eofInTag,
  incorrectlyClosedComment,
  incorrectlyOpenedComment,
  invalidCharacterSequenceAfterDoctypeName,
  invalidFirstCharacterOfTagName,
  misplacedDoctype,
  misplacedStartTagForHeadElement,
  missingAttributeValue,
  missingDoctype,
  missingDoctypeName,
  missingDoctypePublicIdentifier,
  missingDoctypeSystemIdentifier,
  missingEndTagName,
  missingQuoteBeforeDoctypePublicIdentifier,
  missingQuoteBeforeDoctypeSystemIdentifier,
  missingSemicolonAfterCharacterReference,
  missingWhitespaceAfterDoctypePublicKeyword,
  missingWhitespaceAfterDoctypeSystemKeyword,
  missingWhitespaceBeforeDoctypeName,
  missingWhitespaceBetweenAttributes,
  missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers,
  nestedComment,
  nestedNoscriptInHead,
  nonConformingDoctype,
  nonVoidHtmlElementStartTagWithTrailingSolidus,
  noncharacterCharacterReference,
  noncharacterInInputStream,
  nullCharacterReference,
  openElementsLeftAfterEof,
  surrogateCharacterReference,
  surrogateInInputStream,
  unexpectedCharacterAfterDoctypeSystemIdentifier,
  unexpectedCharacterInAttributeName,
  unexpectedCharacterInUnquotedAttributeValue,
  unexpectedEqualsSignBeforeAttributeName,
  unexpectedNullCharacter,
  unexpectedQuestionMarkInsteadOfTagName,
  unexpectedSolidusInTag,
  unknownNamedCharacterReference
};
