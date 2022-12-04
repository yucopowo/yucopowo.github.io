/* esm.sh - esbuild bundle(micromark-core-commonmark@1.0.6) es2022 development */
// esm-build-2ce069682b34dceccb2ef7318d32f63e17705ed4-b4f1caad/node_modules/micromark-core-commonmark/dev/lib/attention.js
import { ok as assert } from '/cdn/v78/uvu@0.5.3/es2022/assert.development.js';
import { push, splice } from '/cdn/v78/micromark-util-chunked@1.0.0/es2022/micromark-util-chunked.development.js';
import { classifyCharacter } from '/cdn/v78/micromark-util-classify-character@1.0.0/es2022/micromark-util-classify-character.development.js';
import { resolveAll } from '/cdn/v78/micromark-util-resolve-all@1.0.0/es2022/micromark-util-resolve-all.development.js';
import { codes } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { constants } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/constants.development.js';
import { types } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';
var attention = {
  name: 'attention',
  tokenize: tokenizeAttention,
  resolveAll: resolveAllAttention
};
function resolveAllAttention(events, context) {
  let index = -1;
  let open;
  let group;
  let text;
  let openingSequence;
  let closingSequence;
  let use;
  let nextEvents;
  let offset;
  while (++index < events.length) {
    if (events[index][0] === 'enter' && events[index][1].type === 'attentionSequence' && events[index][1]._close) {
      open = index;
      while (open--) {
        if (
          events[open][0] === 'exit' &&
          events[open][1].type === 'attentionSequence' &&
          events[open][1]._open &&
          context.sliceSerialize(events[open][1]).charCodeAt(0) ===
            context.sliceSerialize(events[index][1]).charCodeAt(0)
        ) {
          if (
            (events[open][1]._close || events[index][1]._open) &&
            (events[index][1].end.offset - events[index][1].start.offset) % 3 &&
            !(
              (events[open][1].end.offset -
                events[open][1].start.offset +
                events[index][1].end.offset -
                events[index][1].start.offset) %
              3
            )
          ) {
            continue;
          }
          use =
            events[open][1].end.offset - events[open][1].start.offset > 1 &&
            events[index][1].end.offset - events[index][1].start.offset > 1
              ? 2
              : 1;
          const start = Object.assign({}, events[open][1].end);
          const end = Object.assign({}, events[index][1].start);
          movePoint(start, -use);
          movePoint(end, use);
          openingSequence = {
            type: use > 1 ? types.strongSequence : types.emphasisSequence,
            start,
            end: Object.assign({}, events[open][1].end)
          };
          closingSequence = {
            type: use > 1 ? types.strongSequence : types.emphasisSequence,
            start: Object.assign({}, events[index][1].start),
            end
          };
          text = {
            type: use > 1 ? types.strongText : types.emphasisText,
            start: Object.assign({}, events[open][1].end),
            end: Object.assign({}, events[index][1].start)
          };
          group = {
            type: use > 1 ? types.strong : types.emphasis,
            start: Object.assign({}, openingSequence.start),
            end: Object.assign({}, closingSequence.end)
          };
          events[open][1].end = Object.assign({}, openingSequence.start);
          events[index][1].start = Object.assign({}, closingSequence.end);
          nextEvents = [];
          if (events[open][1].end.offset - events[open][1].start.offset) {
            nextEvents = push(nextEvents, [
              ['enter', events[open][1], context],
              ['exit', events[open][1], context]
            ]);
          }
          nextEvents = push(nextEvents, [
            ['enter', group, context],
            ['enter', openingSequence, context],
            ['exit', openingSequence, context],
            ['enter', text, context]
          ]);
          nextEvents = push(
            nextEvents,
            resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + 1, index), context)
          );
          nextEvents = push(nextEvents, [
            ['exit', text, context],
            ['enter', closingSequence, context],
            ['exit', closingSequence, context],
            ['exit', group, context]
          ]);
          if (events[index][1].end.offset - events[index][1].start.offset) {
            offset = 2;
            nextEvents = push(nextEvents, [
              ['enter', events[index][1], context],
              ['exit', events[index][1], context]
            ]);
          } else {
            offset = 0;
          }
          splice(events, open - 1, index - open + 3, nextEvents);
          index = open + nextEvents.length - offset - 2;
          break;
        }
      }
    }
  }
  index = -1;
  while (++index < events.length) {
    if (events[index][1].type === 'attentionSequence') {
      events[index][1].type = 'data';
    }
  }
  return events;
}
function tokenizeAttention(effects, ok) {
  const attentionMarkers = this.parser.constructs.attentionMarkers.null;
  const previous2 = this.previous;
  const before = classifyCharacter(previous2);
  let marker;
  return start;
  function start(code) {
    assert(code === codes.asterisk || code === codes.underscore, 'expected asterisk or underscore');
    effects.enter('attentionSequence');
    marker = code;
    return sequence(code);
  }
  function sequence(code) {
    if (code === marker) {
      effects.consume(code);
      return sequence;
    }
    const token = effects.exit('attentionSequence');
    const after = classifyCharacter(code);
    const open = !after || (after === constants.characterGroupPunctuation && before) || attentionMarkers.includes(code);
    const close =
      !before || (before === constants.characterGroupPunctuation && after) || attentionMarkers.includes(previous2);
    token._open = Boolean(marker === codes.asterisk ? open : open && (before || !close));
    token._close = Boolean(marker === codes.asterisk ? close : close && (after || !open));
    return ok(code);
  }
}
function movePoint(point, offset) {
  point.column += offset;
  point.offset += offset;
  point._bufferIndex += offset;
}

// esm-build-2ce069682b34dceccb2ef7318d32f63e17705ed4-b4f1caad/node_modules/micromark-core-commonmark/dev/lib/autolink.js
import { ok as assert2 } from '/cdn/v78/uvu@0.5.3/es2022/assert.development.js';
import {
  asciiAlpha,
  asciiAlphanumeric,
  asciiAtext,
  asciiControl
} from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes as codes2 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { constants as constants2 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/constants.development.js';
import { types as types2 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';
var autolink = {
  name: 'autolink',
  tokenize: tokenizeAutolink
};
function tokenizeAutolink(effects, ok, nok) {
  let size = 1;
  return start;
  function start(code) {
    assert2(code === codes2.lessThan, 'expected `<`');
    effects.enter(types2.autolink);
    effects.enter(types2.autolinkMarker);
    effects.consume(code);
    effects.exit(types2.autolinkMarker);
    effects.enter(types2.autolinkProtocol);
    return open;
  }
  function open(code) {
    if (asciiAlpha(code)) {
      effects.consume(code);
      return schemeOrEmailAtext;
    }
    return asciiAtext(code) ? emailAtext(code) : nok(code);
  }
  function schemeOrEmailAtext(code) {
    return code === codes2.plusSign || code === codes2.dash || code === codes2.dot || asciiAlphanumeric(code)
      ? schemeInsideOrEmailAtext(code)
      : emailAtext(code);
  }
  function schemeInsideOrEmailAtext(code) {
    if (code === codes2.colon) {
      effects.consume(code);
      return urlInside;
    }
    if (
      (code === codes2.plusSign || code === codes2.dash || code === codes2.dot || asciiAlphanumeric(code)) &&
      size++ < constants2.autolinkSchemeSizeMax
    ) {
      effects.consume(code);
      return schemeInsideOrEmailAtext;
    }
    return emailAtext(code);
  }
  function urlInside(code) {
    if (code === codes2.greaterThan) {
      effects.exit(types2.autolinkProtocol);
      return end(code);
    }
    if (code === codes2.eof || code === codes2.space || code === codes2.lessThan || asciiControl(code)) {
      return nok(code);
    }
    effects.consume(code);
    return urlInside;
  }
  function emailAtext(code) {
    if (code === codes2.atSign) {
      effects.consume(code);
      size = 0;
      return emailAtSignOrDot;
    }
    if (asciiAtext(code)) {
      effects.consume(code);
      return emailAtext;
    }
    return nok(code);
  }
  function emailAtSignOrDot(code) {
    return asciiAlphanumeric(code) ? emailLabel(code) : nok(code);
  }
  function emailLabel(code) {
    if (code === codes2.dot) {
      effects.consume(code);
      size = 0;
      return emailAtSignOrDot;
    }
    if (code === codes2.greaterThan) {
      effects.exit(types2.autolinkProtocol).type = types2.autolinkEmail;
      return end(code);
    }
    return emailValue(code);
  }
  function emailValue(code) {
    if ((code === codes2.dash || asciiAlphanumeric(code)) && size++ < constants2.autolinkDomainSizeMax) {
      effects.consume(code);
      return code === codes2.dash ? emailValue : emailLabel;
    }
    return nok(code);
  }
  function end(code) {
    assert2(code === codes2.greaterThan, 'expected `>`');
    effects.enter(types2.autolinkMarker);
    effects.consume(code);
    effects.exit(types2.autolinkMarker);
    effects.exit(types2.autolink);
    return ok;
  }
}

// esm-build-2ce069682b34dceccb2ef7318d32f63e17705ed4-b4f1caad/node_modules/micromark-core-commonmark/dev/lib/blank-line.js
import { factorySpace } from '/cdn/v78/micromark-factory-space@1.0.0/es2022/micromark-factory-space.development.js';
import { markdownLineEnding } from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes as codes3 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { types as types3 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';
var blankLine = {
  tokenize: tokenizeBlankLine,
  partial: true
};
function tokenizeBlankLine(effects, ok, nok) {
  return factorySpace(effects, afterWhitespace, types3.linePrefix);
  function afterWhitespace(code) {
    return code === codes3.eof || markdownLineEnding(code) ? ok(code) : nok(code);
  }
}

// esm-build-2ce069682b34dceccb2ef7318d32f63e17705ed4-b4f1caad/node_modules/micromark-core-commonmark/dev/lib/block-quote.js
import { ok as assert3 } from '/cdn/v78/uvu@0.5.3/es2022/assert.development.js';
import { factorySpace as factorySpace2 } from '/cdn/v78/micromark-factory-space@1.0.0/es2022/micromark-factory-space.development.js';
import { markdownSpace } from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes as codes4 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { constants as constants3 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/constants.development.js';
import { types as types4 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';
var blockQuote = {
  name: 'blockQuote',
  tokenize: tokenizeBlockQuoteStart,
  continuation: {
    tokenize: tokenizeBlockQuoteContinuation
  },
  exit
};
function tokenizeBlockQuoteStart(effects, ok, nok) {
  const self = this;
  return start;
  function start(code) {
    if (code === codes4.greaterThan) {
      const state = self.containerState;
      assert3(state, 'expected `containerState` to be defined in container');
      if (!state.open) {
        effects.enter(types4.blockQuote, {
          _container: true
        });
        state.open = true;
      }
      effects.enter(types4.blockQuotePrefix);
      effects.enter(types4.blockQuoteMarker);
      effects.consume(code);
      effects.exit(types4.blockQuoteMarker);
      return after;
    }
    return nok(code);
  }
  function after(code) {
    if (markdownSpace(code)) {
      effects.enter(types4.blockQuotePrefixWhitespace);
      effects.consume(code);
      effects.exit(types4.blockQuotePrefixWhitespace);
      effects.exit(types4.blockQuotePrefix);
      return ok;
    }
    effects.exit(types4.blockQuotePrefix);
    return ok(code);
  }
}
function tokenizeBlockQuoteContinuation(effects, ok, nok) {
  return factorySpace2(
    effects,
    effects.attempt(blockQuote, ok, nok),
    types4.linePrefix,
    this.parser.constructs.disable.null.includes('codeIndented') ? void 0 : constants3.tabSize
  );
}
function exit(effects) {
  effects.exit(types4.blockQuote);
}

// esm-build-2ce069682b34dceccb2ef7318d32f63e17705ed4-b4f1caad/node_modules/micromark-core-commonmark/dev/lib/character-escape.js
import { ok as assert4 } from '/cdn/v78/uvu@0.5.3/es2022/assert.development.js';
import { asciiPunctuation } from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes as codes5 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { types as types5 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';
var characterEscape = {
  name: 'characterEscape',
  tokenize: tokenizeCharacterEscape
};
function tokenizeCharacterEscape(effects, ok, nok) {
  return start;
  function start(code) {
    assert4(code === codes5.backslash, 'expected `\\`');
    effects.enter(types5.characterEscape);
    effects.enter(types5.escapeMarker);
    effects.consume(code);
    effects.exit(types5.escapeMarker);
    return open;
  }
  function open(code) {
    if (asciiPunctuation(code)) {
      effects.enter(types5.characterEscapeValue);
      effects.consume(code);
      effects.exit(types5.characterEscapeValue);
      effects.exit(types5.characterEscape);
      return ok;
    }
    return nok(code);
  }
}

// esm-build-2ce069682b34dceccb2ef7318d32f63e17705ed4-b4f1caad/node_modules/micromark-core-commonmark/dev/lib/character-reference.js
import { ok as assert5 } from '/cdn/v78/uvu@0.5.3/es2022/assert.development.js';
import { decodeNamedCharacterReference } from '/cdn/v78/decode-named-character-reference@1.0.1/es2022/decode-named-character-reference.development.js';
import {
  asciiAlphanumeric as asciiAlphanumeric2,
  asciiDigit,
  asciiHexDigit
} from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes as codes6 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { constants as constants4 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/constants.development.js';
import { types as types6 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';
var characterReference = {
  name: 'characterReference',
  tokenize: tokenizeCharacterReference
};
function tokenizeCharacterReference(effects, ok, nok) {
  const self = this;
  let size = 0;
  let max;
  let test;
  return start;
  function start(code) {
    assert5(code === codes6.ampersand, 'expected `&`');
    effects.enter(types6.characterReference);
    effects.enter(types6.characterReferenceMarker);
    effects.consume(code);
    effects.exit(types6.characterReferenceMarker);
    return open;
  }
  function open(code) {
    if (code === codes6.numberSign) {
      effects.enter(types6.characterReferenceMarkerNumeric);
      effects.consume(code);
      effects.exit(types6.characterReferenceMarkerNumeric);
      return numeric;
    }
    effects.enter(types6.characterReferenceValue);
    max = constants4.characterReferenceNamedSizeMax;
    test = asciiAlphanumeric2;
    return value(code);
  }
  function numeric(code) {
    if (code === codes6.uppercaseX || code === codes6.lowercaseX) {
      effects.enter(types6.characterReferenceMarkerHexadecimal);
      effects.consume(code);
      effects.exit(types6.characterReferenceMarkerHexadecimal);
      effects.enter(types6.characterReferenceValue);
      max = constants4.characterReferenceHexadecimalSizeMax;
      test = asciiHexDigit;
      return value;
    }
    effects.enter(types6.characterReferenceValue);
    max = constants4.characterReferenceDecimalSizeMax;
    test = asciiDigit;
    return value(code);
  }
  function value(code) {
    let token;
    if (code === codes6.semicolon && size) {
      token = effects.exit(types6.characterReferenceValue);
      if (test === asciiAlphanumeric2 && !decodeNamedCharacterReference(self.sliceSerialize(token))) {
        return nok(code);
      }
      effects.enter(types6.characterReferenceMarker);
      effects.consume(code);
      effects.exit(types6.characterReferenceMarker);
      effects.exit(types6.characterReference);
      return ok;
    }
    if (test(code) && size++ < max) {
      effects.consume(code);
      return value;
    }
    return nok(code);
  }
}

// esm-build-2ce069682b34dceccb2ef7318d32f63e17705ed4-b4f1caad/node_modules/micromark-core-commonmark/dev/lib/code-fenced.js
import { ok as assert6 } from '/cdn/v78/uvu@0.5.3/es2022/assert.development.js';
import { factorySpace as factorySpace3 } from '/cdn/v78/micromark-factory-space@1.0.0/es2022/micromark-factory-space.development.js';
import {
  markdownLineEnding as markdownLineEnding2,
  markdownLineEndingOrSpace
} from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes as codes7 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { constants as constants5 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/constants.development.js';
import { types as types7 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';
var codeFenced = {
  name: 'codeFenced',
  tokenize: tokenizeCodeFenced,
  concrete: true
};
function tokenizeCodeFenced(effects, ok, nok) {
  const self = this;
  const closingFenceConstruct = {
    tokenize: tokenizeClosingFence,
    partial: true
  };
  const nonLazyLine = {
    tokenize: tokenizeNonLazyLine,
    partial: true
  };
  const tail = this.events[this.events.length - 1];
  const initialPrefix = tail && tail[1].type === types7.linePrefix ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let sizeOpen = 0;
  let marker;
  return start;
  function start(code) {
    assert6(code === codes7.graveAccent || code === codes7.tilde, 'expected `` ` `` or `~`');
    effects.enter(types7.codeFenced);
    effects.enter(types7.codeFencedFence);
    effects.enter(types7.codeFencedFenceSequence);
    marker = code;
    return sequenceOpen(code);
  }
  function sequenceOpen(code) {
    if (code === marker) {
      effects.consume(code);
      sizeOpen++;
      return sequenceOpen;
    }
    effects.exit(types7.codeFencedFenceSequence);
    return sizeOpen < constants5.codeFencedSequenceSizeMin
      ? nok(code)
      : factorySpace3(effects, infoOpen, types7.whitespace)(code);
  }
  function infoOpen(code) {
    if (code === codes7.eof || markdownLineEnding2(code)) {
      return openAfter(code);
    }
    effects.enter(types7.codeFencedFenceInfo);
    effects.enter(types7.chunkString, {
      contentType: constants5.contentTypeString
    });
    return info(code);
  }
  function info(code) {
    if (code === codes7.eof || markdownLineEndingOrSpace(code)) {
      effects.exit(types7.chunkString);
      effects.exit(types7.codeFencedFenceInfo);
      return factorySpace3(effects, infoAfter, types7.whitespace)(code);
    }
    if (code === codes7.graveAccent && code === marker) return nok(code);
    effects.consume(code);
    return info;
  }
  function infoAfter(code) {
    if (code === codes7.eof || markdownLineEnding2(code)) {
      return openAfter(code);
    }
    effects.enter(types7.codeFencedFenceMeta);
    effects.enter(types7.chunkString, {
      contentType: constants5.contentTypeString
    });
    return meta(code);
  }
  function meta(code) {
    if (code === codes7.eof || markdownLineEnding2(code)) {
      effects.exit(types7.chunkString);
      effects.exit(types7.codeFencedFenceMeta);
      return openAfter(code);
    }
    if (code === codes7.graveAccent && code === marker) return nok(code);
    effects.consume(code);
    return meta;
  }
  function openAfter(code) {
    effects.exit(types7.codeFencedFence);
    return self.interrupt ? ok(code) : contentStart(code);
  }
  function contentStart(code) {
    if (code === codes7.eof) {
      return after(code);
    }
    if (markdownLineEnding2(code)) {
      return effects.attempt(
        nonLazyLine,
        effects.attempt(
          closingFenceConstruct,
          after,
          initialPrefix ? factorySpace3(effects, contentStart, types7.linePrefix, initialPrefix + 1) : contentStart
        ),
        after
      )(code);
    }
    effects.enter(types7.codeFlowValue);
    return contentContinue(code);
  }
  function contentContinue(code) {
    if (code === codes7.eof || markdownLineEnding2(code)) {
      effects.exit(types7.codeFlowValue);
      return contentStart(code);
    }
    effects.consume(code);
    return contentContinue;
  }
  function after(code) {
    effects.exit(types7.codeFenced);
    return ok(code);
  }
  function tokenizeNonLazyLine(effects2, ok2, nok2) {
    const self2 = this;
    return start2;
    function start2(code) {
      assert6(markdownLineEnding2(code), 'expected eol');
      effects2.enter(types7.lineEnding);
      effects2.consume(code);
      effects2.exit(types7.lineEnding);
      return lineStart;
    }
    function lineStart(code) {
      return self2.parser.lazy[self2.now().line] ? nok2(code) : ok2(code);
    }
  }
  function tokenizeClosingFence(effects2, ok2, nok2) {
    let size = 0;
    return factorySpace3(
      effects2,
      closingSequenceStart,
      types7.linePrefix,
      this.parser.constructs.disable.null.includes('codeIndented') ? void 0 : constants5.tabSize
    );
    function closingSequenceStart(code) {
      effects2.enter(types7.codeFencedFence);
      effects2.enter(types7.codeFencedFenceSequence);
      return closingSequence(code);
    }
    function closingSequence(code) {
      if (code === marker) {
        effects2.consume(code);
        size++;
        return closingSequence;
      }
      if (size < sizeOpen) return nok2(code);
      effects2.exit(types7.codeFencedFenceSequence);
      return factorySpace3(effects2, closingSequenceEnd, types7.whitespace)(code);
    }
    function closingSequenceEnd(code) {
      if (code === codes7.eof || markdownLineEnding2(code)) {
        effects2.exit(types7.codeFencedFence);
        return ok2(code);
      }
      return nok2(code);
    }
  }
}

// esm-build-2ce069682b34dceccb2ef7318d32f63e17705ed4-b4f1caad/node_modules/micromark-core-commonmark/dev/lib/code-indented.js
import { factorySpace as factorySpace4 } from '/cdn/v78/micromark-factory-space@1.0.0/es2022/micromark-factory-space.development.js';
import { markdownLineEnding as markdownLineEnding3 } from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes as codes8 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { constants as constants6 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/constants.development.js';
import { types as types8 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';
var codeIndented = {
  name: 'codeIndented',
  tokenize: tokenizeCodeIndented
};
var indentedContent = {
  tokenize: tokenizeIndentedContent,
  partial: true
};
function tokenizeCodeIndented(effects, ok, nok) {
  const self = this;
  return start;
  function start(code) {
    effects.enter(types8.codeIndented);
    return factorySpace4(effects, afterStartPrefix, types8.linePrefix, constants6.tabSize + 1)(code);
  }
  function afterStartPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return tail &&
      tail[1].type === types8.linePrefix &&
      tail[2].sliceSerialize(tail[1], true).length >= constants6.tabSize
      ? afterPrefix(code)
      : nok(code);
  }
  function afterPrefix(code) {
    if (code === codes8.eof) {
      return after(code);
    }
    if (markdownLineEnding3(code)) {
      return effects.attempt(indentedContent, afterPrefix, after)(code);
    }
    effects.enter(types8.codeFlowValue);
    return content2(code);
  }
  function content2(code) {
    if (code === codes8.eof || markdownLineEnding3(code)) {
      effects.exit(types8.codeFlowValue);
      return afterPrefix(code);
    }
    effects.consume(code);
    return content2;
  }
  function after(code) {
    effects.exit(types8.codeIndented);
    return ok(code);
  }
}
function tokenizeIndentedContent(effects, ok, nok) {
  const self = this;
  return start;
  function start(code) {
    if (self.parser.lazy[self.now().line]) {
      return nok(code);
    }
    if (markdownLineEnding3(code)) {
      effects.enter(types8.lineEnding);
      effects.consume(code);
      effects.exit(types8.lineEnding);
      return start;
    }
    return factorySpace4(effects, afterPrefix, types8.linePrefix, constants6.tabSize + 1)(code);
  }
  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return tail &&
      tail[1].type === types8.linePrefix &&
      tail[2].sliceSerialize(tail[1], true).length >= constants6.tabSize
      ? ok(code)
      : markdownLineEnding3(code)
      ? start(code)
      : nok(code);
  }
}

// esm-build-2ce069682b34dceccb2ef7318d32f63e17705ed4-b4f1caad/node_modules/micromark-core-commonmark/dev/lib/code-text.js
import { ok as assert7 } from '/cdn/v78/uvu@0.5.3/es2022/assert.development.js';
import { markdownLineEnding as markdownLineEnding4 } from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes as codes9 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { types as types9 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';
var codeText = {
  name: 'codeText',
  tokenize: tokenizeCodeText,
  resolve: resolveCodeText,
  previous
};
function resolveCodeText(events) {
  let tailExitIndex = events.length - 4;
  let headEnterIndex = 3;
  let index;
  let enter;
  if (
    (events[headEnterIndex][1].type === types9.lineEnding || events[headEnterIndex][1].type === 'space') &&
    (events[tailExitIndex][1].type === types9.lineEnding || events[tailExitIndex][1].type === 'space')
  ) {
    index = headEnterIndex;
    while (++index < tailExitIndex) {
      if (events[index][1].type === types9.codeTextData) {
        events[headEnterIndex][1].type = types9.codeTextPadding;
        events[tailExitIndex][1].type = types9.codeTextPadding;
        headEnterIndex += 2;
        tailExitIndex -= 2;
        break;
      }
    }
  }
  index = headEnterIndex - 1;
  tailExitIndex++;
  while (++index <= tailExitIndex) {
    if (enter === void 0) {
      if (index !== tailExitIndex && events[index][1].type !== types9.lineEnding) {
        enter = index;
      }
    } else if (index === tailExitIndex || events[index][1].type === types9.lineEnding) {
      events[enter][1].type = types9.codeTextData;
      if (index !== enter + 2) {
        events[enter][1].end = events[index - 1][1].end;
        events.splice(enter + 2, index - enter - 2);
        tailExitIndex -= index - enter - 2;
        index = enter + 2;
      }
      enter = void 0;
    }
  }
  return events;
}
function previous(code) {
  return code !== codes9.graveAccent || this.events[this.events.length - 1][1].type === types9.characterEscape;
}
function tokenizeCodeText(effects, ok, nok) {
  const self = this;
  let sizeOpen = 0;
  let size;
  let token;
  return start;
  function start(code) {
    assert7(code === codes9.graveAccent, 'expected `` ` ``');
    assert7(previous.call(self, self.previous), 'expected correct previous');
    effects.enter(types9.codeText);
    effects.enter(types9.codeTextSequence);
    return openingSequence(code);
  }
  function openingSequence(code) {
    if (code === codes9.graveAccent) {
      effects.consume(code);
      sizeOpen++;
      return openingSequence;
    }
    effects.exit(types9.codeTextSequence);
    return gap(code);
  }
  function gap(code) {
    if (code === codes9.eof) {
      return nok(code);
    }
    if (code === codes9.graveAccent) {
      token = effects.enter(types9.codeTextSequence);
      size = 0;
      return closingSequence(code);
    }
    if (code === codes9.space) {
      effects.enter('space');
      effects.consume(code);
      effects.exit('space');
      return gap;
    }
    if (markdownLineEnding4(code)) {
      effects.enter(types9.lineEnding);
      effects.consume(code);
      effects.exit(types9.lineEnding);
      return gap;
    }
    effects.enter(types9.codeTextData);
    return data(code);
  }
  function data(code) {
    if (code === codes9.eof || code === codes9.space || code === codes9.graveAccent || markdownLineEnding4(code)) {
      effects.exit(types9.codeTextData);
      return gap(code);
    }
    effects.consume(code);
    return data;
  }
  function closingSequence(code) {
    if (code === codes9.graveAccent) {
      effects.consume(code);
      size++;
      return closingSequence;
    }
    if (size === sizeOpen) {
      effects.exit(types9.codeTextSequence);
      effects.exit(types9.codeText);
      return ok(code);
    }
    token.type = types9.codeTextData;
    return data(code);
  }
}

// esm-build-2ce069682b34dceccb2ef7318d32f63e17705ed4-b4f1caad/node_modules/micromark-core-commonmark/dev/lib/content.js
import { ok as assert8 } from '/cdn/v78/uvu@0.5.3/es2022/assert.development.js';
import { factorySpace as factorySpace5 } from '/cdn/v78/micromark-factory-space@1.0.0/es2022/micromark-factory-space.development.js';
import { markdownLineEnding as markdownLineEnding5 } from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { subtokenize } from '/cdn/v78/micromark-util-subtokenize@1.0.2/es2022/micromark-util-subtokenize.development.js';
import { codes as codes10 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { constants as constants7 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/constants.development.js';
import { types as types10 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';
var content = {
  tokenize: tokenizeContent,
  resolve: resolveContent
};
var continuationConstruct = {
  tokenize: tokenizeContinuation,
  partial: true
};
function resolveContent(events) {
  subtokenize(events);
  return events;
}
function tokenizeContent(effects, ok) {
  let previous2;
  return start;
  function start(code) {
    assert8(code !== codes10.eof && !markdownLineEnding5(code), 'expected no eof or eol');
    effects.enter(types10.content);
    previous2 = effects.enter(types10.chunkContent, {
      contentType: constants7.contentTypeContent
    });
    return data(code);
  }
  function data(code) {
    if (code === codes10.eof) {
      return contentEnd(code);
    }
    if (markdownLineEnding5(code)) {
      return effects.check(continuationConstruct, contentContinue, contentEnd)(code);
    }
    effects.consume(code);
    return data;
  }
  function contentEnd(code) {
    effects.exit(types10.chunkContent);
    effects.exit(types10.content);
    return ok(code);
  }
  function contentContinue(code) {
    assert8(markdownLineEnding5(code), 'expected eol');
    effects.consume(code);
    effects.exit(types10.chunkContent);
    previous2.next = effects.enter(types10.chunkContent, {
      contentType: constants7.contentTypeContent,
      previous: previous2
    });
    previous2 = previous2.next;
    return data;
  }
}
function tokenizeContinuation(effects, ok, nok) {
  const self = this;
  return startLookahead;
  function startLookahead(code) {
    assert8(markdownLineEnding5(code), 'expected a line ending');
    effects.exit(types10.chunkContent);
    effects.enter(types10.lineEnding);
    effects.consume(code);
    effects.exit(types10.lineEnding);
    return factorySpace5(effects, prefixed, types10.linePrefix);
  }
  function prefixed(code) {
    if (code === codes10.eof || markdownLineEnding5(code)) {
      return nok(code);
    }
    const tail = self.events[self.events.length - 1];
    if (
      !self.parser.constructs.disable.null.includes('codeIndented') &&
      tail &&
      tail[1].type === types10.linePrefix &&
      tail[2].sliceSerialize(tail[1], true).length >= constants7.tabSize
    ) {
      return ok(code);
    }
    return effects.interrupt(self.parser.constructs.flow, nok, ok)(code);
  }
}

// esm-build-2ce069682b34dceccb2ef7318d32f63e17705ed4-b4f1caad/node_modules/micromark-core-commonmark/dev/lib/definition.js
import { ok as assert9 } from '/cdn/v78/uvu@0.5.3/es2022/assert.development.js';
import { factoryDestination } from '/cdn/v78/micromark-factory-destination@1.0.0/es2022/micromark-factory-destination.development.js';
import { factoryLabel } from '/cdn/v78/micromark-factory-label@1.0.2/es2022/micromark-factory-label.development.js';
import { factorySpace as factorySpace6 } from '/cdn/v78/micromark-factory-space@1.0.0/es2022/micromark-factory-space.development.js';
import { factoryTitle } from '/cdn/v78/micromark-factory-title@1.0.2/es2022/micromark-factory-title.development.js';
import { factoryWhitespace } from '/cdn/v78/micromark-factory-whitespace@1.0.0/es2022/micromark-factory-whitespace.development.js';
import { normalizeIdentifier } from '/cdn/v78/micromark-util-normalize-identifier@1.0.0/es2022/micromark-util-normalize-identifier.development.js';
import {
  markdownLineEnding as markdownLineEnding6,
  markdownLineEndingOrSpace as markdownLineEndingOrSpace2
} from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes as codes11 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { types as types11 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';
var definition = {
  name: 'definition',
  tokenize: tokenizeDefinition
};
var titleConstruct = {
  tokenize: tokenizeTitle,
  partial: true
};
function tokenizeDefinition(effects, ok, nok) {
  const self = this;
  let identifier;
  return start;
  function start(code) {
    assert9(code === codes11.leftSquareBracket, 'expected `[`');
    effects.enter(types11.definition);
    return factoryLabel.call(
      self,
      effects,
      labelAfter,
      nok,
      types11.definitionLabel,
      types11.definitionLabelMarker,
      types11.definitionLabelString
    )(code);
  }
  function labelAfter(code) {
    identifier = normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1));
    if (code === codes11.colon) {
      effects.enter(types11.definitionMarker);
      effects.consume(code);
      effects.exit(types11.definitionMarker);
      return factoryWhitespace(
        effects,
        factoryDestination(
          effects,
          effects.attempt(
            titleConstruct,
            factorySpace6(effects, after, types11.whitespace),
            factorySpace6(effects, after, types11.whitespace)
          ),
          nok,
          types11.definitionDestination,
          types11.definitionDestinationLiteral,
          types11.definitionDestinationLiteralMarker,
          types11.definitionDestinationRaw,
          types11.definitionDestinationString
        )
      );
    }
    return nok(code);
  }
  function after(code) {
    if (code === codes11.eof || markdownLineEnding6(code)) {
      effects.exit(types11.definition);
      if (!self.parser.defined.includes(identifier)) {
        self.parser.defined.push(identifier);
      }
      return ok(code);
    }
    return nok(code);
  }
}
function tokenizeTitle(effects, ok, nok) {
  return start;
  function start(code) {
    return markdownLineEndingOrSpace2(code) ? factoryWhitespace(effects, before)(code) : nok(code);
  }
  function before(code) {
    if (code === codes11.quotationMark || code === codes11.apostrophe || code === codes11.leftParenthesis) {
      return factoryTitle(
        effects,
        factorySpace6(effects, after, types11.whitespace),
        nok,
        types11.definitionTitle,
        types11.definitionTitleMarker,
        types11.definitionTitleString
      )(code);
    }
    return nok(code);
  }
  function after(code) {
    return code === codes11.eof || markdownLineEnding6(code) ? ok(code) : nok(code);
  }
}

// esm-build-2ce069682b34dceccb2ef7318d32f63e17705ed4-b4f1caad/node_modules/micromark-core-commonmark/dev/lib/hard-break-escape.js
import { ok as assert10 } from '/cdn/v78/uvu@0.5.3/es2022/assert.development.js';
import { markdownLineEnding as markdownLineEnding7 } from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes as codes12 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { types as types12 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';
var hardBreakEscape = {
  name: 'hardBreakEscape',
  tokenize: tokenizeHardBreakEscape
};
function tokenizeHardBreakEscape(effects, ok, nok) {
  return start;
  function start(code) {
    assert10(code === codes12.backslash, 'expected `\\`');
    effects.enter(types12.hardBreakEscape);
    effects.enter(types12.escapeMarker);
    effects.consume(code);
    return open;
  }
  function open(code) {
    if (markdownLineEnding7(code)) {
      effects.exit(types12.escapeMarker);
      effects.exit(types12.hardBreakEscape);
      return ok(code);
    }
    return nok(code);
  }
}

// esm-build-2ce069682b34dceccb2ef7318d32f63e17705ed4-b4f1caad/node_modules/micromark-core-commonmark/dev/lib/heading-atx.js
import { ok as assert11 } from '/cdn/v78/uvu@0.5.3/es2022/assert.development.js';
import { factorySpace as factorySpace7 } from '/cdn/v78/micromark-factory-space@1.0.0/es2022/micromark-factory-space.development.js';
import {
  markdownLineEnding as markdownLineEnding8,
  markdownLineEndingOrSpace as markdownLineEndingOrSpace3,
  markdownSpace as markdownSpace2
} from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { splice as splice2 } from '/cdn/v78/micromark-util-chunked@1.0.0/es2022/micromark-util-chunked.development.js';
import { codes as codes13 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { constants as constants8 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/constants.development.js';
import { types as types13 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';
var headingAtx = {
  name: 'headingAtx',
  tokenize: tokenizeHeadingAtx,
  resolve: resolveHeadingAtx
};
function resolveHeadingAtx(events, context) {
  let contentEnd = events.length - 2;
  let contentStart = 3;
  let content2;
  let text;
  if (events[contentStart][1].type === types13.whitespace) {
    contentStart += 2;
  }
  if (contentEnd - 2 > contentStart && events[contentEnd][1].type === types13.whitespace) {
    contentEnd -= 2;
  }
  if (
    events[contentEnd][1].type === types13.atxHeadingSequence &&
    (contentStart === contentEnd - 1 ||
      (contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === types13.whitespace))
  ) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
  }
  if (contentEnd > contentStart) {
    content2 = {
      type: types13.atxHeadingText,
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end
    };
    text = {
      type: types13.chunkText,
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end,
      contentType: constants8.contentTypeText
    };
    splice2(events, contentStart, contentEnd - contentStart + 1, [
      ['enter', content2, context],
      ['enter', text, context],
      ['exit', text, context],
      ['exit', content2, context]
    ]);
  }
  return events;
}
function tokenizeHeadingAtx(effects, ok, nok) {
  const self = this;
  let size = 0;
  return start;
  function start(code) {
    assert11(code === codes13.numberSign, 'expected `#`');
    effects.enter(types13.atxHeading);
    effects.enter(types13.atxHeadingSequence);
    return fenceOpenInside(code);
  }
  function fenceOpenInside(code) {
    if (code === codes13.numberSign && size++ < constants8.atxHeadingOpeningFenceSizeMax) {
      effects.consume(code);
      return fenceOpenInside;
    }
    if (code === codes13.eof || markdownLineEndingOrSpace3(code)) {
      effects.exit(types13.atxHeadingSequence);
      return self.interrupt ? ok(code) : headingBreak(code);
    }
    return nok(code);
  }
  function headingBreak(code) {
    if (code === codes13.numberSign) {
      effects.enter(types13.atxHeadingSequence);
      return sequence(code);
    }
    if (code === codes13.eof || markdownLineEnding8(code)) {
      effects.exit(types13.atxHeading);
      return ok(code);
    }
    if (markdownSpace2(code)) {
      return factorySpace7(effects, headingBreak, types13.whitespace)(code);
    }
    effects.enter(types13.atxHeadingText);
    return data(code);
  }
  function sequence(code) {
    if (code === codes13.numberSign) {
      effects.consume(code);
      return sequence;
    }
    effects.exit(types13.atxHeadingSequence);
    return headingBreak(code);
  }
  function data(code) {
    if (code === codes13.eof || code === codes13.numberSign || markdownLineEndingOrSpace3(code)) {
      effects.exit(types13.atxHeadingText);
      return headingBreak(code);
    }
    effects.consume(code);
    return data;
  }
}

// esm-build-2ce069682b34dceccb2ef7318d32f63e17705ed4-b4f1caad/node_modules/micromark-core-commonmark/dev/lib/html-flow.js
import { ok as assert12 } from '/cdn/v78/uvu@0.5.3/es2022/assert.development.js';
import {
  asciiAlpha as asciiAlpha2,
  asciiAlphanumeric as asciiAlphanumeric3,
  markdownLineEnding as markdownLineEnding9,
  markdownLineEndingOrSpace as markdownLineEndingOrSpace4,
  markdownSpace as markdownSpace3
} from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import {
  htmlBlockNames,
  htmlRawNames
} from '/cdn/v78/micromark-util-html-tag-name@1.0.0/es2022/micromark-util-html-tag-name.development.js';
import { codes as codes14 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { constants as constants9 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/constants.development.js';
import { types as types14 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';
var htmlFlow = {
  name: 'htmlFlow',
  tokenize: tokenizeHtmlFlow,
  resolveTo: resolveToHtmlFlow,
  concrete: true
};
var nextBlankConstruct = {
  tokenize: tokenizeNextBlank,
  partial: true
};
function resolveToHtmlFlow(events) {
  let index = events.length;
  while (index--) {
    if (events[index][0] === 'enter' && events[index][1].type === types14.htmlFlow) {
      break;
    }
  }
  if (index > 1 && events[index - 2][1].type === types14.linePrefix) {
    events[index][1].start = events[index - 2][1].start;
    events[index + 1][1].start = events[index - 2][1].start;
    events.splice(index - 2, 2);
  }
  return events;
}
function tokenizeHtmlFlow(effects, ok, nok) {
  const self = this;
  let kind;
  let startTag;
  let buffer;
  let index;
  let marker;
  return start;
  function start(code) {
    assert12(code === codes14.lessThan, 'expected `<`');
    effects.enter(types14.htmlFlow);
    effects.enter(types14.htmlFlowData);
    effects.consume(code);
    return open;
  }
  function open(code) {
    if (code === codes14.exclamationMark) {
      effects.consume(code);
      return declarationStart;
    }
    if (code === codes14.slash) {
      effects.consume(code);
      return tagCloseStart;
    }
    if (code === codes14.questionMark) {
      effects.consume(code);
      kind = constants9.htmlInstruction;
      return self.interrupt ? ok : continuationDeclarationInside;
    }
    if (asciiAlpha2(code)) {
      effects.consume(code);
      buffer = String.fromCharCode(code);
      startTag = true;
      return tagName;
    }
    return nok(code);
  }
  function declarationStart(code) {
    if (code === codes14.dash) {
      effects.consume(code);
      kind = constants9.htmlComment;
      return commentOpenInside;
    }
    if (code === codes14.leftSquareBracket) {
      effects.consume(code);
      kind = constants9.htmlCdata;
      buffer = constants9.cdataOpeningString;
      index = 0;
      return cdataOpenInside;
    }
    if (asciiAlpha2(code)) {
      effects.consume(code);
      kind = constants9.htmlDeclaration;
      return self.interrupt ? ok : continuationDeclarationInside;
    }
    return nok(code);
  }
  function commentOpenInside(code) {
    if (code === codes14.dash) {
      effects.consume(code);
      return self.interrupt ? ok : continuationDeclarationInside;
    }
    return nok(code);
  }
  function cdataOpenInside(code) {
    if (code === buffer.charCodeAt(index++)) {
      effects.consume(code);
      return index === buffer.length ? (self.interrupt ? ok : continuation) : cdataOpenInside;
    }
    return nok(code);
  }
  function tagCloseStart(code) {
    if (asciiAlpha2(code)) {
      effects.consume(code);
      buffer = String.fromCharCode(code);
      return tagName;
    }
    return nok(code);
  }
  function tagName(code) {
    if (
      code === codes14.eof ||
      code === codes14.slash ||
      code === codes14.greaterThan ||
      markdownLineEndingOrSpace4(code)
    ) {
      if (code !== codes14.slash && startTag && htmlRawNames.includes(buffer.toLowerCase())) {
        kind = constants9.htmlRaw;
        return self.interrupt ? ok(code) : continuation(code);
      }
      if (htmlBlockNames.includes(buffer.toLowerCase())) {
        kind = constants9.htmlBasic;
        if (code === codes14.slash) {
          effects.consume(code);
          return basicSelfClosing;
        }
        return self.interrupt ? ok(code) : continuation(code);
      }
      kind = constants9.htmlComplete;
      return self.interrupt && !self.parser.lazy[self.now().line]
        ? nok(code)
        : startTag
        ? completeAttributeNameBefore(code)
        : completeClosingTagAfter(code);
    }
    if (code === codes14.dash || asciiAlphanumeric3(code)) {
      effects.consume(code);
      buffer += String.fromCharCode(code);
      return tagName;
    }
    return nok(code);
  }
  function basicSelfClosing(code) {
    if (code === codes14.greaterThan) {
      effects.consume(code);
      return self.interrupt ? ok : continuation;
    }
    return nok(code);
  }
  function completeClosingTagAfter(code) {
    if (markdownSpace3(code)) {
      effects.consume(code);
      return completeClosingTagAfter;
    }
    return completeEnd(code);
  }
  function completeAttributeNameBefore(code) {
    if (code === codes14.slash) {
      effects.consume(code);
      return completeEnd;
    }
    if (code === codes14.colon || code === codes14.underscore || asciiAlpha2(code)) {
      effects.consume(code);
      return completeAttributeName;
    }
    if (markdownSpace3(code)) {
      effects.consume(code);
      return completeAttributeNameBefore;
    }
    return completeEnd(code);
  }
  function completeAttributeName(code) {
    if (
      code === codes14.dash ||
      code === codes14.dot ||
      code === codes14.colon ||
      code === codes14.underscore ||
      asciiAlphanumeric3(code)
    ) {
      effects.consume(code);
      return completeAttributeName;
    }
    return completeAttributeNameAfter(code);
  }
  function completeAttributeNameAfter(code) {
    if (code === codes14.equalsTo) {
      effects.consume(code);
      return completeAttributeValueBefore;
    }
    if (markdownSpace3(code)) {
      effects.consume(code);
      return completeAttributeNameAfter;
    }
    return completeAttributeNameBefore(code);
  }
  function completeAttributeValueBefore(code) {
    if (
      code === codes14.eof ||
      code === codes14.lessThan ||
      code === codes14.equalsTo ||
      code === codes14.greaterThan ||
      code === codes14.graveAccent
    ) {
      return nok(code);
    }
    if (code === codes14.quotationMark || code === codes14.apostrophe) {
      effects.consume(code);
      marker = code;
      return completeAttributeValueQuoted;
    }
    if (markdownSpace3(code)) {
      effects.consume(code);
      return completeAttributeValueBefore;
    }
    marker = null;
    return completeAttributeValueUnquoted(code);
  }
  function completeAttributeValueQuoted(code) {
    if (code === codes14.eof || markdownLineEnding9(code)) {
      return nok(code);
    }
    if (code === marker) {
      effects.consume(code);
      return completeAttributeValueQuotedAfter;
    }
    effects.consume(code);
    return completeAttributeValueQuoted;
  }
  function completeAttributeValueUnquoted(code) {
    if (
      code === codes14.eof ||
      code === codes14.quotationMark ||
      code === codes14.apostrophe ||
      code === codes14.lessThan ||
      code === codes14.equalsTo ||
      code === codes14.greaterThan ||
      code === codes14.graveAccent ||
      markdownLineEndingOrSpace4(code)
    ) {
      return completeAttributeNameAfter(code);
    }
    effects.consume(code);
    return completeAttributeValueUnquoted;
  }
  function completeAttributeValueQuotedAfter(code) {
    if (code === codes14.slash || code === codes14.greaterThan || markdownSpace3(code)) {
      return completeAttributeNameBefore(code);
    }
    return nok(code);
  }
  function completeEnd(code) {
    if (code === codes14.greaterThan) {
      effects.consume(code);
      return completeAfter;
    }
    return nok(code);
  }
  function completeAfter(code) {
    if (markdownSpace3(code)) {
      effects.consume(code);
      return completeAfter;
    }
    return code === codes14.eof || markdownLineEnding9(code) ? continuation(code) : nok(code);
  }
  function continuation(code) {
    if (code === codes14.dash && kind === constants9.htmlComment) {
      effects.consume(code);
      return continuationCommentInside;
    }
    if (code === codes14.lessThan && kind === constants9.htmlRaw) {
      effects.consume(code);
      return continuationRawTagOpen;
    }
    if (code === codes14.greaterThan && kind === constants9.htmlDeclaration) {
      effects.consume(code);
      return continuationClose;
    }
    if (code === codes14.questionMark && kind === constants9.htmlInstruction) {
      effects.consume(code);
      return continuationDeclarationInside;
    }
    if (code === codes14.rightSquareBracket && kind === constants9.htmlCdata) {
      effects.consume(code);
      return continuationCharacterDataInside;
    }
    if (markdownLineEnding9(code) && (kind === constants9.htmlBasic || kind === constants9.htmlComplete)) {
      return effects.check(nextBlankConstruct, continuationClose, continuationAtLineEnding)(code);
    }
    if (code === codes14.eof || markdownLineEnding9(code)) {
      return continuationAtLineEnding(code);
    }
    effects.consume(code);
    return continuation;
  }
  function continuationAtLineEnding(code) {
    effects.exit(types14.htmlFlowData);
    return htmlContinueStart(code);
  }
  function htmlContinueStart(code) {
    if (code === codes14.eof) {
      return done(code);
    }
    if (markdownLineEnding9(code)) {
      return effects.attempt(
        {
          tokenize: htmlLineEnd,
          partial: true
        },
        htmlContinueStart,
        done
      )(code);
    }
    effects.enter(types14.htmlFlowData);
    return continuation(code);
  }
  function htmlLineEnd(effects2, ok2, nok2) {
    return start2;
    function start2(code) {
      assert12(markdownLineEnding9(code), 'expected eol');
      effects2.enter(types14.lineEnding);
      effects2.consume(code);
      effects2.exit(types14.lineEnding);
      return lineStart;
    }
    function lineStart(code) {
      return self.parser.lazy[self.now().line] ? nok2(code) : ok2(code);
    }
  }
  function continuationCommentInside(code) {
    if (code === codes14.dash) {
      effects.consume(code);
      return continuationDeclarationInside;
    }
    return continuation(code);
  }
  function continuationRawTagOpen(code) {
    if (code === codes14.slash) {
      effects.consume(code);
      buffer = '';
      return continuationRawEndTag;
    }
    return continuation(code);
  }
  function continuationRawEndTag(code) {
    if (code === codes14.greaterThan && htmlRawNames.includes(buffer.toLowerCase())) {
      effects.consume(code);
      return continuationClose;
    }
    if (asciiAlpha2(code) && buffer.length < constants9.htmlRawSizeMax) {
      effects.consume(code);
      buffer += String.fromCharCode(code);
      return continuationRawEndTag;
    }
    return continuation(code);
  }
  function continuationCharacterDataInside(code) {
    if (code === codes14.rightSquareBracket) {
      effects.consume(code);
      return continuationDeclarationInside;
    }
    return continuation(code);
  }
  function continuationDeclarationInside(code) {
    if (code === codes14.greaterThan) {
      effects.consume(code);
      return continuationClose;
    }
    if (code === codes14.dash && kind === constants9.htmlComment) {
      effects.consume(code);
      return continuationDeclarationInside;
    }
    return continuation(code);
  }
  function continuationClose(code) {
    if (code === codes14.eof || markdownLineEnding9(code)) {
      effects.exit(types14.htmlFlowData);
      return done(code);
    }
    effects.consume(code);
    return continuationClose;
  }
  function done(code) {
    effects.exit(types14.htmlFlow);
    return ok(code);
  }
}
function tokenizeNextBlank(effects, ok, nok) {
  return start;
  function start(code) {
    assert12(markdownLineEnding9(code), 'expected a line ending');
    effects.exit(types14.htmlFlowData);
    effects.enter(types14.lineEndingBlank);
    effects.consume(code);
    effects.exit(types14.lineEndingBlank);
    return effects.attempt(blankLine, ok, nok);
  }
}

// esm-build-2ce069682b34dceccb2ef7318d32f63e17705ed4-b4f1caad/node_modules/micromark-core-commonmark/dev/lib/html-text.js
import { ok as assert13 } from '/cdn/v78/uvu@0.5.3/es2022/assert.development.js';
import { factorySpace as factorySpace8 } from '/cdn/v78/micromark-factory-space@1.0.0/es2022/micromark-factory-space.development.js';
import {
  asciiAlpha as asciiAlpha3,
  asciiAlphanumeric as asciiAlphanumeric4,
  markdownLineEnding as markdownLineEnding10,
  markdownLineEndingOrSpace as markdownLineEndingOrSpace5,
  markdownSpace as markdownSpace4
} from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes as codes15 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { constants as constants10 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/constants.development.js';
import { types as types15 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';
var htmlText = {
  name: 'htmlText',
  tokenize: tokenizeHtmlText
};
function tokenizeHtmlText(effects, ok, nok) {
  const self = this;
  let marker;
  let buffer;
  let index;
  let returnState;
  return start;
  function start(code) {
    assert13(code === codes15.lessThan, 'expected `<`');
    effects.enter(types15.htmlText);
    effects.enter(types15.htmlTextData);
    effects.consume(code);
    return open;
  }
  function open(code) {
    if (code === codes15.exclamationMark) {
      effects.consume(code);
      return declarationOpen;
    }
    if (code === codes15.slash) {
      effects.consume(code);
      return tagCloseStart;
    }
    if (code === codes15.questionMark) {
      effects.consume(code);
      return instruction;
    }
    if (asciiAlpha3(code)) {
      effects.consume(code);
      return tagOpen;
    }
    return nok(code);
  }
  function declarationOpen(code) {
    if (code === codes15.dash) {
      effects.consume(code);
      return commentOpen;
    }
    if (code === codes15.leftSquareBracket) {
      effects.consume(code);
      buffer = constants10.cdataOpeningString;
      index = 0;
      return cdataOpen;
    }
    if (asciiAlpha3(code)) {
      effects.consume(code);
      return declaration;
    }
    return nok(code);
  }
  function commentOpen(code) {
    if (code === codes15.dash) {
      effects.consume(code);
      return commentStart;
    }
    return nok(code);
  }
  function commentStart(code) {
    if (code === codes15.eof || code === codes15.greaterThan) {
      return nok(code);
    }
    if (code === codes15.dash) {
      effects.consume(code);
      return commentStartDash;
    }
    return comment(code);
  }
  function commentStartDash(code) {
    if (code === codes15.eof || code === codes15.greaterThan) {
      return nok(code);
    }
    return comment(code);
  }
  function comment(code) {
    if (code === codes15.eof) {
      return nok(code);
    }
    if (code === codes15.dash) {
      effects.consume(code);
      return commentClose;
    }
    if (markdownLineEnding10(code)) {
      returnState = comment;
      return atLineEnding(code);
    }
    effects.consume(code);
    return comment;
  }
  function commentClose(code) {
    if (code === codes15.dash) {
      effects.consume(code);
      return end;
    }
    return comment(code);
  }
  function cdataOpen(code) {
    if (code === buffer.charCodeAt(index++)) {
      effects.consume(code);
      return index === buffer.length ? cdata : cdataOpen;
    }
    return nok(code);
  }
  function cdata(code) {
    if (code === codes15.eof) {
      return nok(code);
    }
    if (code === codes15.rightSquareBracket) {
      effects.consume(code);
      return cdataClose;
    }
    if (markdownLineEnding10(code)) {
      returnState = cdata;
      return atLineEnding(code);
    }
    effects.consume(code);
    return cdata;
  }
  function cdataClose(code) {
    if (code === codes15.rightSquareBracket) {
      effects.consume(code);
      return cdataEnd;
    }
    return cdata(code);
  }
  function cdataEnd(code) {
    if (code === codes15.greaterThan) {
      return end(code);
    }
    if (code === codes15.rightSquareBracket) {
      effects.consume(code);
      return cdataEnd;
    }
    return cdata(code);
  }
  function declaration(code) {
    if (code === codes15.eof || code === codes15.greaterThan) {
      return end(code);
    }
    if (markdownLineEnding10(code)) {
      returnState = declaration;
      return atLineEnding(code);
    }
    effects.consume(code);
    return declaration;
  }
  function instruction(code) {
    if (code === codes15.eof) {
      return nok(code);
    }
    if (code === codes15.questionMark) {
      effects.consume(code);
      return instructionClose;
    }
    if (markdownLineEnding10(code)) {
      returnState = instruction;
      return atLineEnding(code);
    }
    effects.consume(code);
    return instruction;
  }
  function instructionClose(code) {
    return code === codes15.greaterThan ? end(code) : instruction(code);
  }
  function tagCloseStart(code) {
    if (asciiAlpha3(code)) {
      effects.consume(code);
      return tagClose;
    }
    return nok(code);
  }
  function tagClose(code) {
    if (code === codes15.dash || asciiAlphanumeric4(code)) {
      effects.consume(code);
      return tagClose;
    }
    return tagCloseBetween(code);
  }
  function tagCloseBetween(code) {
    if (markdownLineEnding10(code)) {
      returnState = tagCloseBetween;
      return atLineEnding(code);
    }
    if (markdownSpace4(code)) {
      effects.consume(code);
      return tagCloseBetween;
    }
    return end(code);
  }
  function tagOpen(code) {
    if (code === codes15.dash || asciiAlphanumeric4(code)) {
      effects.consume(code);
      return tagOpen;
    }
    if (code === codes15.slash || code === codes15.greaterThan || markdownLineEndingOrSpace5(code)) {
      return tagOpenBetween(code);
    }
    return nok(code);
  }
  function tagOpenBetween(code) {
    if (code === codes15.slash) {
      effects.consume(code);
      return end;
    }
    if (code === codes15.colon || code === codes15.underscore || asciiAlpha3(code)) {
      effects.consume(code);
      return tagOpenAttributeName;
    }
    if (markdownLineEnding10(code)) {
      returnState = tagOpenBetween;
      return atLineEnding(code);
    }
    if (markdownSpace4(code)) {
      effects.consume(code);
      return tagOpenBetween;
    }
    return end(code);
  }
  function tagOpenAttributeName(code) {
    if (
      code === codes15.dash ||
      code === codes15.dot ||
      code === codes15.colon ||
      code === codes15.underscore ||
      asciiAlphanumeric4(code)
    ) {
      effects.consume(code);
      return tagOpenAttributeName;
    }
    return tagOpenAttributeNameAfter(code);
  }
  function tagOpenAttributeNameAfter(code) {
    if (code === codes15.equalsTo) {
      effects.consume(code);
      return tagOpenAttributeValueBefore;
    }
    if (markdownLineEnding10(code)) {
      returnState = tagOpenAttributeNameAfter;
      return atLineEnding(code);
    }
    if (markdownSpace4(code)) {
      effects.consume(code);
      return tagOpenAttributeNameAfter;
    }
    return tagOpenBetween(code);
  }
  function tagOpenAttributeValueBefore(code) {
    if (
      code === codes15.eof ||
      code === codes15.lessThan ||
      code === codes15.equalsTo ||
      code === codes15.greaterThan ||
      code === codes15.graveAccent
    ) {
      return nok(code);
    }
    if (code === codes15.quotationMark || code === codes15.apostrophe) {
      effects.consume(code);
      marker = code;
      return tagOpenAttributeValueQuoted;
    }
    if (markdownLineEnding10(code)) {
      returnState = tagOpenAttributeValueBefore;
      return atLineEnding(code);
    }
    if (markdownSpace4(code)) {
      effects.consume(code);
      return tagOpenAttributeValueBefore;
    }
    effects.consume(code);
    marker = void 0;
    return tagOpenAttributeValueUnquoted;
  }
  function tagOpenAttributeValueQuoted(code) {
    if (code === marker) {
      effects.consume(code);
      return tagOpenAttributeValueQuotedAfter;
    }
    if (code === codes15.eof) {
      return nok(code);
    }
    if (markdownLineEnding10(code)) {
      returnState = tagOpenAttributeValueQuoted;
      return atLineEnding(code);
    }
    effects.consume(code);
    return tagOpenAttributeValueQuoted;
  }
  function tagOpenAttributeValueQuotedAfter(code) {
    if (code === codes15.greaterThan || code === codes15.slash || markdownLineEndingOrSpace5(code)) {
      return tagOpenBetween(code);
    }
    return nok(code);
  }
  function tagOpenAttributeValueUnquoted(code) {
    if (
      code === codes15.eof ||
      code === codes15.quotationMark ||
      code === codes15.apostrophe ||
      code === codes15.lessThan ||
      code === codes15.equalsTo ||
      code === codes15.graveAccent
    ) {
      return nok(code);
    }
    if (code === codes15.greaterThan || markdownLineEndingOrSpace5(code)) {
      return tagOpenBetween(code);
    }
    effects.consume(code);
    return tagOpenAttributeValueUnquoted;
  }
  function atLineEnding(code) {
    assert13(returnState, 'expected return state');
    assert13(markdownLineEnding10(code), 'expected eol');
    effects.exit(types15.htmlTextData);
    effects.enter(types15.lineEnding);
    effects.consume(code);
    effects.exit(types15.lineEnding);
    return factorySpace8(
      effects,
      afterPrefix,
      types15.linePrefix,
      self.parser.constructs.disable.null.includes('codeIndented') ? void 0 : constants10.tabSize
    );
  }
  function afterPrefix(code) {
    effects.enter(types15.htmlTextData);
    return returnState(code);
  }
  function end(code) {
    if (code === codes15.greaterThan) {
      effects.consume(code);
      effects.exit(types15.htmlTextData);
      effects.exit(types15.htmlText);
      return ok;
    }
    return nok(code);
  }
}

// esm-build-2ce069682b34dceccb2ef7318d32f63e17705ed4-b4f1caad/node_modules/micromark-core-commonmark/dev/lib/label-end.js
import { ok as assert14 } from '/cdn/v78/uvu@0.5.3/es2022/assert.development.js';
import { factoryDestination as factoryDestination2 } from '/cdn/v78/micromark-factory-destination@1.0.0/es2022/micromark-factory-destination.development.js';
import { factoryLabel as factoryLabel2 } from '/cdn/v78/micromark-factory-label@1.0.2/es2022/micromark-factory-label.development.js';
import { factoryTitle as factoryTitle2 } from '/cdn/v78/micromark-factory-title@1.0.2/es2022/micromark-factory-title.development.js';
import { factoryWhitespace as factoryWhitespace2 } from '/cdn/v78/micromark-factory-whitespace@1.0.0/es2022/micromark-factory-whitespace.development.js';
import { markdownLineEndingOrSpace as markdownLineEndingOrSpace6 } from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import {
  push as push2,
  splice as splice3
} from '/cdn/v78/micromark-util-chunked@1.0.0/es2022/micromark-util-chunked.development.js';
import { normalizeIdentifier as normalizeIdentifier2 } from '/cdn/v78/micromark-util-normalize-identifier@1.0.0/es2022/micromark-util-normalize-identifier.development.js';
import { resolveAll as resolveAll2 } from '/cdn/v78/micromark-util-resolve-all@1.0.0/es2022/micromark-util-resolve-all.development.js';
import { codes as codes16 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { constants as constants11 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/constants.development.js';
import { types as types16 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';
var labelEnd = {
  name: 'labelEnd',
  tokenize: tokenizeLabelEnd,
  resolveTo: resolveToLabelEnd,
  resolveAll: resolveAllLabelEnd
};
var resourceConstruct = {
  tokenize: tokenizeResource
};
var fullReferenceConstruct = {
  tokenize: tokenizeFullReference
};
var collapsedReferenceConstruct = {
  tokenize: tokenizeCollapsedReference
};
function resolveAllLabelEnd(events) {
  let index = -1;
  let token;
  while (++index < events.length) {
    token = events[index][1];
    if (token.type === types16.labelImage || token.type === types16.labelLink || token.type === types16.labelEnd) {
      events.splice(index + 1, token.type === types16.labelImage ? 4 : 2);
      token.type = types16.data;
      index++;
    }
  }
  return events;
}
function resolveToLabelEnd(events, context) {
  let index = events.length;
  let offset = 0;
  let token;
  let open;
  let close;
  let media;
  while (index--) {
    token = events[index][1];
    if (open) {
      if (token.type === types16.link || (token.type === types16.labelLink && token._inactive)) {
        break;
      }
      if (events[index][0] === 'enter' && token.type === types16.labelLink) {
        token._inactive = true;
      }
    } else if (close) {
      if (
        events[index][0] === 'enter' &&
        (token.type === types16.labelImage || token.type === types16.labelLink) &&
        !token._balanced
      ) {
        open = index;
        if (token.type !== types16.labelLink) {
          offset = 2;
          break;
        }
      }
    } else if (token.type === types16.labelEnd) {
      close = index;
    }
  }
  assert14(open !== void 0, '`open` is supposed to be found');
  assert14(close !== void 0, '`close` is supposed to be found');
  const group = {
    type: events[open][1].type === types16.labelLink ? types16.link : types16.image,
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  const label = {
    type: types16.label,
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[close][1].end)
  };
  const text = {
    type: types16.labelText,
    start: Object.assign({}, events[open + offset + 2][1].end),
    end: Object.assign({}, events[close - 2][1].start)
  };
  media = [
    ['enter', group, context],
    ['enter', label, context]
  ];
  media = push2(media, events.slice(open + 1, open + offset + 3));
  media = push2(media, [['enter', text, context]]);
  media = push2(
    media,
    resolveAll2(context.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context)
  );
  media = push2(media, [['exit', text, context], events[close - 2], events[close - 1], ['exit', label, context]]);
  media = push2(media, events.slice(close + 1));
  media = push2(media, [['exit', group, context]]);
  splice3(events, open, events.length, media);
  return events;
}
function tokenizeLabelEnd(effects, ok, nok) {
  const self = this;
  let index = self.events.length;
  let labelStart;
  let defined;
  while (index--) {
    if (
      (self.events[index][1].type === types16.labelImage || self.events[index][1].type === types16.labelLink) &&
      !self.events[index][1]._balanced
    ) {
      labelStart = self.events[index][1];
      break;
    }
  }
  return start;
  function start(code) {
    assert14(code === codes16.rightSquareBracket, 'expected `]`');
    if (!labelStart) {
      return nok(code);
    }
    if (labelStart._inactive) return balanced(code);
    defined = self.parser.defined.includes(
      normalizeIdentifier2(
        self.sliceSerialize({
          start: labelStart.end,
          end: self.now()
        })
      )
    );
    effects.enter(types16.labelEnd);
    effects.enter(types16.labelMarker);
    effects.consume(code);
    effects.exit(types16.labelMarker);
    effects.exit(types16.labelEnd);
    return afterLabelEnd;
  }
  function afterLabelEnd(code) {
    if (code === codes16.leftParenthesis) {
      return effects.attempt(resourceConstruct, ok, defined ? ok : balanced)(code);
    }
    if (code === codes16.leftSquareBracket) {
      return effects.attempt(
        fullReferenceConstruct,
        ok,
        defined ? effects.attempt(collapsedReferenceConstruct, ok, balanced) : balanced
      )(code);
    }
    return defined ? ok(code) : balanced(code);
  }
  function balanced(code) {
    labelStart._balanced = true;
    return nok(code);
  }
}
function tokenizeResource(effects, ok, nok) {
  return start;
  function start(code) {
    assert14(code === codes16.leftParenthesis, 'expected left paren');
    effects.enter(types16.resource);
    effects.enter(types16.resourceMarker);
    effects.consume(code);
    effects.exit(types16.resourceMarker);
    return factoryWhitespace2(effects, open);
  }
  function open(code) {
    if (code === codes16.rightParenthesis) {
      return end(code);
    }
    return factoryDestination2(
      effects,
      destinationAfter,
      nok,
      types16.resourceDestination,
      types16.resourceDestinationLiteral,
      types16.resourceDestinationLiteralMarker,
      types16.resourceDestinationRaw,
      types16.resourceDestinationString,
      constants11.linkResourceDestinationBalanceMax
    )(code);
  }
  function destinationAfter(code) {
    return markdownLineEndingOrSpace6(code) ? factoryWhitespace2(effects, between)(code) : end(code);
  }
  function between(code) {
    if (code === codes16.quotationMark || code === codes16.apostrophe || code === codes16.leftParenthesis) {
      return factoryTitle2(
        effects,
        factoryWhitespace2(effects, end),
        nok,
        types16.resourceTitle,
        types16.resourceTitleMarker,
        types16.resourceTitleString
      )(code);
    }
    return end(code);
  }
  function end(code) {
    if (code === codes16.rightParenthesis) {
      effects.enter(types16.resourceMarker);
      effects.consume(code);
      effects.exit(types16.resourceMarker);
      effects.exit(types16.resource);
      return ok;
    }
    return nok(code);
  }
}
function tokenizeFullReference(effects, ok, nok) {
  const self = this;
  return start;
  function start(code) {
    assert14(code === codes16.leftSquareBracket, 'expected left bracket');
    return factoryLabel2.call(
      self,
      effects,
      afterLabel,
      nok,
      types16.reference,
      types16.referenceMarker,
      types16.referenceString
    )(code);
  }
  function afterLabel(code) {
    return self.parser.defined.includes(
      normalizeIdentifier2(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1))
    )
      ? ok(code)
      : nok(code);
  }
}
function tokenizeCollapsedReference(effects, ok, nok) {
  return start;
  function start(code) {
    assert14(code === codes16.leftSquareBracket, 'expected left bracket');
    effects.enter(types16.reference);
    effects.enter(types16.referenceMarker);
    effects.consume(code);
    effects.exit(types16.referenceMarker);
    return open;
  }
  function open(code) {
    if (code === codes16.rightSquareBracket) {
      effects.enter(types16.referenceMarker);
      effects.consume(code);
      effects.exit(types16.referenceMarker);
      effects.exit(types16.reference);
      return ok;
    }
    return nok(code);
  }
}

// esm-build-2ce069682b34dceccb2ef7318d32f63e17705ed4-b4f1caad/node_modules/micromark-core-commonmark/dev/lib/label-start-image.js
import { ok as assert15 } from '/cdn/v78/uvu@0.5.3/es2022/assert.development.js';
import { codes as codes17 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { types as types17 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';
var labelStartImage = {
  name: 'labelStartImage',
  tokenize: tokenizeLabelStartImage,
  resolveAll: labelEnd.resolveAll
};
function tokenizeLabelStartImage(effects, ok, nok) {
  const self = this;
  return start;
  function start(code) {
    assert15(code === codes17.exclamationMark, 'expected `!`');
    effects.enter(types17.labelImage);
    effects.enter(types17.labelImageMarker);
    effects.consume(code);
    effects.exit(types17.labelImageMarker);
    return open;
  }
  function open(code) {
    if (code === codes17.leftSquareBracket) {
      effects.enter(types17.labelMarker);
      effects.consume(code);
      effects.exit(types17.labelMarker);
      effects.exit(types17.labelImage);
      return after;
    }
    return nok(code);
  }
  function after(code) {
    return code === codes17.caret && '_hiddenFootnoteSupport' in self.parser.constructs ? nok(code) : ok(code);
  }
}

// esm-build-2ce069682b34dceccb2ef7318d32f63e17705ed4-b4f1caad/node_modules/micromark-core-commonmark/dev/lib/label-start-link.js
import { ok as assert16 } from '/cdn/v78/uvu@0.5.3/es2022/assert.development.js';
import { codes as codes18 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { types as types18 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';
var labelStartLink = {
  name: 'labelStartLink',
  tokenize: tokenizeLabelStartLink,
  resolveAll: labelEnd.resolveAll
};
function tokenizeLabelStartLink(effects, ok, nok) {
  const self = this;
  return start;
  function start(code) {
    assert16(code === codes18.leftSquareBracket, 'expected `[`');
    effects.enter(types18.labelLink);
    effects.enter(types18.labelMarker);
    effects.consume(code);
    effects.exit(types18.labelMarker);
    effects.exit(types18.labelLink);
    return after;
  }
  function after(code) {
    return code === codes18.caret && '_hiddenFootnoteSupport' in self.parser.constructs ? nok(code) : ok(code);
  }
}

// esm-build-2ce069682b34dceccb2ef7318d32f63e17705ed4-b4f1caad/node_modules/micromark-core-commonmark/dev/lib/line-ending.js
import { ok as assert17 } from '/cdn/v78/uvu@0.5.3/es2022/assert.development.js';
import { factorySpace as factorySpace9 } from '/cdn/v78/micromark-factory-space@1.0.0/es2022/micromark-factory-space.development.js';
import { markdownLineEnding as markdownLineEnding11 } from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { types as types19 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';
var lineEnding = {
  name: 'lineEnding',
  tokenize: tokenizeLineEnding
};
function tokenizeLineEnding(effects, ok) {
  return start;
  function start(code) {
    assert17(markdownLineEnding11(code), 'expected eol');
    effects.enter(types19.lineEnding);
    effects.consume(code);
    effects.exit(types19.lineEnding);
    return factorySpace9(effects, ok, types19.linePrefix);
  }
}

// esm-build-2ce069682b34dceccb2ef7318d32f63e17705ed4-b4f1caad/node_modules/micromark-core-commonmark/dev/lib/list.js
import { ok as assert19 } from '/cdn/v78/uvu@0.5.3/es2022/assert.development.js';
import { factorySpace as factorySpace11 } from '/cdn/v78/micromark-factory-space@1.0.0/es2022/micromark-factory-space.development.js';
import {
  asciiDigit as asciiDigit2,
  markdownSpace as markdownSpace6
} from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes as codes20 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { constants as constants13 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/constants.development.js';
import { types as types21 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';

// esm-build-2ce069682b34dceccb2ef7318d32f63e17705ed4-b4f1caad/node_modules/micromark-core-commonmark/dev/lib/thematic-break.js
import { ok as assert18 } from '/cdn/v78/uvu@0.5.3/es2022/assert.development.js';
import { factorySpace as factorySpace10 } from '/cdn/v78/micromark-factory-space@1.0.0/es2022/micromark-factory-space.development.js';
import {
  markdownLineEnding as markdownLineEnding12,
  markdownSpace as markdownSpace5
} from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes as codes19 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { constants as constants12 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/constants.development.js';
import { types as types20 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';
var thematicBreak = {
  name: 'thematicBreak',
  tokenize: tokenizeThematicBreak
};
function tokenizeThematicBreak(effects, ok, nok) {
  let size = 0;
  let marker;
  return start;
  function start(code) {
    assert18(
      code === codes19.asterisk || code === codes19.dash || code === codes19.underscore,
      'expected `*`, `-`, or `_`'
    );
    effects.enter(types20.thematicBreak);
    marker = code;
    return atBreak(code);
  }
  function atBreak(code) {
    if (code === marker) {
      effects.enter(types20.thematicBreakSequence);
      return sequence(code);
    }
    if (markdownSpace5(code)) {
      return factorySpace10(effects, atBreak, types20.whitespace)(code);
    }
    if (size < constants12.thematicBreakMarkerCountMin || (code !== codes19.eof && !markdownLineEnding12(code))) {
      return nok(code);
    }
    effects.exit(types20.thematicBreak);
    return ok(code);
  }
  function sequence(code) {
    if (code === marker) {
      effects.consume(code);
      size++;
      return sequence;
    }
    effects.exit(types20.thematicBreakSequence);
    return atBreak(code);
  }
}

// esm-build-2ce069682b34dceccb2ef7318d32f63e17705ed4-b4f1caad/node_modules/micromark-core-commonmark/dev/lib/list.js
var list = {
  name: 'list',
  tokenize: tokenizeListStart,
  continuation: {
    tokenize: tokenizeListContinuation
  },
  exit: tokenizeListEnd
};
var listItemPrefixWhitespaceConstruct = {
  tokenize: tokenizeListItemPrefixWhitespace,
  partial: true
};
var indentConstruct = {
  tokenize: tokenizeIndent,
  partial: true
};
function tokenizeListStart(effects, ok, nok) {
  const self = this;
  const tail = self.events[self.events.length - 1];
  let initialSize = tail && tail[1].type === types21.linePrefix ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let size = 0;
  return start;
  function start(code) {
    const kind =
      self.containerState.type ||
      (code === codes20.asterisk || code === codes20.plusSign || code === codes20.dash
        ? types21.listUnordered
        : types21.listOrdered);
    if (
      kind === types21.listUnordered
        ? !self.containerState.marker || code === self.containerState.marker
        : asciiDigit2(code)
    ) {
      if (!self.containerState.type) {
        self.containerState.type = kind;
        effects.enter(kind, {
          _container: true
        });
      }
      if (kind === types21.listUnordered) {
        effects.enter(types21.listItemPrefix);
        return code === codes20.asterisk || code === codes20.dash
          ? effects.check(thematicBreak, nok, atMarker)(code)
          : atMarker(code);
      }
      if (!self.interrupt || code === codes20.digit1) {
        effects.enter(types21.listItemPrefix);
        effects.enter(types21.listItemValue);
        return inside(code);
      }
    }
    return nok(code);
  }
  function inside(code) {
    if (asciiDigit2(code) && ++size < constants13.listItemValueSizeMax) {
      effects.consume(code);
      return inside;
    }
    if (
      (!self.interrupt || size < 2) &&
      (self.containerState.marker
        ? code === self.containerState.marker
        : code === codes20.rightParenthesis || code === codes20.dot)
    ) {
      effects.exit(types21.listItemValue);
      return atMarker(code);
    }
    return nok(code);
  }
  function atMarker(code) {
    assert19(code !== codes20.eof, 'eof (`null`) is not a marker');
    effects.enter(types21.listItemMarker);
    effects.consume(code);
    effects.exit(types21.listItemMarker);
    self.containerState.marker = self.containerState.marker || code;
    return effects.check(
      blankLine,
      self.interrupt ? nok : onBlank,
      effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix)
    );
  }
  function onBlank(code) {
    self.containerState.initialBlankLine = true;
    initialSize++;
    return endOfPrefix(code);
  }
  function otherPrefix(code) {
    if (markdownSpace6(code)) {
      effects.enter(types21.listItemPrefixWhitespace);
      effects.consume(code);
      effects.exit(types21.listItemPrefixWhitespace);
      return endOfPrefix;
    }
    return nok(code);
  }
  function endOfPrefix(code) {
    self.containerState.size = initialSize + self.sliceSerialize(effects.exit(types21.listItemPrefix), true).length;
    return ok(code);
  }
}
function tokenizeListContinuation(effects, ok, nok) {
  const self = this;
  self.containerState._closeFlow = void 0;
  return effects.check(blankLine, onBlank, notBlank);
  function onBlank(code) {
    self.containerState.furtherBlankLines =
      self.containerState.furtherBlankLines || self.containerState.initialBlankLine;
    return factorySpace11(effects, ok, types21.listItemIndent, self.containerState.size + 1)(code);
  }
  function notBlank(code) {
    if (self.containerState.furtherBlankLines || !markdownSpace6(code)) {
      self.containerState.furtherBlankLines = void 0;
      self.containerState.initialBlankLine = void 0;
      return notInCurrentItem(code);
    }
    self.containerState.furtherBlankLines = void 0;
    self.containerState.initialBlankLine = void 0;
    return effects.attempt(indentConstruct, ok, notInCurrentItem)(code);
  }
  function notInCurrentItem(code) {
    self.containerState._closeFlow = true;
    self.interrupt = void 0;
    return factorySpace11(
      effects,
      effects.attempt(list, ok, nok),
      types21.linePrefix,
      self.parser.constructs.disable.null.includes('codeIndented') ? void 0 : constants13.tabSize
    )(code);
  }
}
function tokenizeIndent(effects, ok, nok) {
  const self = this;
  return factorySpace11(effects, afterPrefix, types21.listItemIndent, self.containerState.size + 1);
  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return tail &&
      tail[1].type === types21.listItemIndent &&
      tail[2].sliceSerialize(tail[1], true).length === self.containerState.size
      ? ok(code)
      : nok(code);
  }
}
function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type);
}
function tokenizeListItemPrefixWhitespace(effects, ok, nok) {
  const self = this;
  return factorySpace11(
    effects,
    afterPrefix,
    types21.listItemPrefixWhitespace,
    self.parser.constructs.disable.null.includes('codeIndented') ? void 0 : constants13.tabSize + 1
  );
  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return !markdownSpace6(code) && tail && tail[1].type === types21.listItemPrefixWhitespace ? ok(code) : nok(code);
  }
}

// esm-build-2ce069682b34dceccb2ef7318d32f63e17705ed4-b4f1caad/node_modules/micromark-core-commonmark/dev/lib/setext-underline.js
import { ok as assert20 } from '/cdn/v78/uvu@0.5.3/es2022/assert.development.js';
import { factorySpace as factorySpace12 } from '/cdn/v78/micromark-factory-space@1.0.0/es2022/micromark-factory-space.development.js';
import { markdownLineEnding as markdownLineEnding13 } from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes as codes21 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { types as types22 } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';
var setextUnderline = {
  name: 'setextUnderline',
  tokenize: tokenizeSetextUnderline,
  resolveTo: resolveToSetextUnderline
};
function resolveToSetextUnderline(events, context) {
  let index = events.length;
  let content2;
  let text;
  let definition2;
  while (index--) {
    if (events[index][0] === 'enter') {
      if (events[index][1].type === types22.content) {
        content2 = index;
        break;
      }
      if (events[index][1].type === types22.paragraph) {
        text = index;
      }
    } else {
      if (events[index][1].type === types22.content) {
        events.splice(index, 1);
      }
      if (!definition2 && events[index][1].type === types22.definition) {
        definition2 = index;
      }
    }
  }
  assert20(text !== void 0, 'expected a `text` index to be found');
  assert20(content2 !== void 0, 'expected a `text` index to be found');
  const heading = {
    type: types22.setextHeading,
    start: Object.assign({}, events[text][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  events[text][1].type = types22.setextHeadingText;
  if (definition2) {
    events.splice(text, 0, ['enter', heading, context]);
    events.splice(definition2 + 1, 0, ['exit', events[content2][1], context]);
    events[content2][1].end = Object.assign({}, events[definition2][1].end);
  } else {
    events[content2][1] = heading;
  }
  events.push(['exit', heading, context]);
  return events;
}
function tokenizeSetextUnderline(effects, ok, nok) {
  const self = this;
  let index = self.events.length;
  let marker;
  let paragraph;
  while (index--) {
    if (
      self.events[index][1].type !== types22.lineEnding &&
      self.events[index][1].type !== types22.linePrefix &&
      self.events[index][1].type !== types22.content
    ) {
      paragraph = self.events[index][1].type === types22.paragraph;
      break;
    }
  }
  return start;
  function start(code) {
    assert20(code === codes21.dash || code === codes21.equalsTo, 'expected `=` or `-`');
    if (!self.parser.lazy[self.now().line] && (self.interrupt || paragraph)) {
      effects.enter(types22.setextHeadingLine);
      effects.enter(types22.setextHeadingLineSequence);
      marker = code;
      return closingSequence(code);
    }
    return nok(code);
  }
  function closingSequence(code) {
    if (code === marker) {
      effects.consume(code);
      return closingSequence;
    }
    effects.exit(types22.setextHeadingLineSequence);
    return factorySpace12(effects, closingSequenceEnd, types22.lineSuffix)(code);
  }
  function closingSequenceEnd(code) {
    if (code === codes21.eof || markdownLineEnding13(code)) {
      effects.exit(types22.setextHeadingLine);
      return ok(code);
    }
    return nok(code);
  }
}
export {
  attention,
  autolink,
  blankLine,
  blockQuote,
  characterEscape,
  characterReference,
  codeFenced,
  codeIndented,
  codeText,
  content,
  definition,
  hardBreakEscape,
  headingAtx,
  htmlFlow,
  htmlText,
  labelEnd,
  labelStartImage,
  labelStartLink,
  lineEnding,
  list,
  setextUnderline,
  thematicBreak
};