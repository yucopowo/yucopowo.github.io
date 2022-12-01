/* esm.sh - esbuild bundle(micromark-extension-gfm-footnote@1.0.4) es2022 development */
// esm-build-830e4d4a85e5f1f6b6205f3a043a0fb9ebc280af-83c95b8e/node_modules/micromark-extension-gfm-footnote/dev/lib/syntax.js
import { ok as assert } from '/cdn/v78/uvu@0.5.3/es2022/assert.development.js';
import { blankLine } from '/cdn/v78/micromark-core-commonmark@1.0.6/es2022/micromark-core-commonmark.development.js';
import { factorySpace } from '/cdn/v78/micromark-factory-space@1.0.0/es2022/micromark-factory-space.development.js';
import {
  markdownLineEnding,
  markdownLineEndingOrSpace
} from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { constants } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/constants.development.js';
import { normalizeIdentifier } from '/cdn/v78/micromark-util-normalize-identifier@1.0.0/es2022/micromark-util-normalize-identifier.development.js';
import { types } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';
var indent = {
  tokenize: tokenizeIndent,
  partial: true
};
function gfmFootnote() {
  return {
    document: {
      [codes.leftSquareBracket]: {
        tokenize: tokenizeDefinitionStart,
        continuation: {
          tokenize: tokenizeDefinitionContinuation
        },
        exit: gfmFootnoteDefinitionEnd
      }
    },
    text: {
      [codes.leftSquareBracket]: {
        tokenize: tokenizeGfmFootnoteCall
      },
      [codes.rightSquareBracket]: {
        add: 'after',
        tokenize: tokenizePotentialGfmFootnoteCall,
        resolveTo: resolveToPotentialGfmFootnoteCall
      }
    }
  };
}
function tokenizePotentialGfmFootnoteCall(effects, ok, nok) {
  const self = this;
  let index = self.events.length;
  const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
  let labelStart;
  while (index--) {
    const token = self.events[index][1];
    if (token.type === types.labelImage) {
      labelStart = token;
      break;
    }
    if (
      token.type === 'gfmFootnoteCall' ||
      token.type === types.labelLink ||
      token.type === types.label ||
      token.type === types.image ||
      token.type === types.link
    ) {
      break;
    }
  }
  return start;
  function start(code) {
    assert(code === codes.rightSquareBracket, 'expected `]`');
    if (!labelStart || !labelStart._balanced) {
      return nok(code);
    }
    const id = normalizeIdentifier(
      self.sliceSerialize({
        start: labelStart.end,
        end: self.now()
      })
    );
    if (id.charCodeAt(0) !== codes.caret || !defined.includes(id.slice(1))) {
      return nok(code);
    }
    effects.enter('gfmFootnoteCallLabelMarker');
    effects.consume(code);
    effects.exit('gfmFootnoteCallLabelMarker');
    return ok(code);
  }
}
function resolveToPotentialGfmFootnoteCall(events, context) {
  let index = events.length;
  let labelStart;
  while (index--) {
    if (events[index][1].type === types.labelImage && events[index][0] === 'enter') {
      labelStart = events[index][1];
      break;
    }
  }
  assert(labelStart, 'expected `labelStart` to resolve');
  events[index + 1][1].type = types.data;
  events[index + 3][1].type = 'gfmFootnoteCallLabelMarker';
  const call = {
    type: 'gfmFootnoteCall',
    start: Object.assign({}, events[index + 3][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  const marker = {
    type: 'gfmFootnoteCallMarker',
    start: Object.assign({}, events[index + 3][1].end),
    end: Object.assign({}, events[index + 3][1].end)
  };
  marker.end.column++;
  marker.end.offset++;
  marker.end._bufferIndex++;
  const string = {
    type: 'gfmFootnoteCallString',
    start: Object.assign({}, marker.end),
    end: Object.assign({}, events[events.length - 1][1].start)
  };
  const chunk = {
    type: types.chunkString,
    contentType: 'string',
    start: Object.assign({}, string.start),
    end: Object.assign({}, string.end)
  };
  const replacement = [
    events[index + 1],
    events[index + 2],
    ['enter', call, context],
    events[index + 3],
    events[index + 4],
    ['enter', marker, context],
    ['exit', marker, context],
    ['enter', string, context],
    ['enter', chunk, context],
    ['exit', chunk, context],
    ['exit', string, context],
    events[events.length - 2],
    events[events.length - 1],
    ['exit', call, context]
  ];
  events.splice(index, events.length - index + 1, ...replacement);
  return events;
}
function tokenizeGfmFootnoteCall(effects, ok, nok) {
  const self = this;
  const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
  let size = 0;
  let data;
  return start;
  function start(code) {
    assert(code === codes.leftSquareBracket, 'expected `[`');
    effects.enter('gfmFootnoteCall');
    effects.enter('gfmFootnoteCallLabelMarker');
    effects.consume(code);
    effects.exit('gfmFootnoteCallLabelMarker');
    return callStart;
  }
  function callStart(code) {
    if (code !== codes.caret) return nok(code);
    effects.enter('gfmFootnoteCallMarker');
    effects.consume(code);
    effects.exit('gfmFootnoteCallMarker');
    effects.enter('gfmFootnoteCallString');
    effects.enter('chunkString').contentType = 'string';
    return callData;
  }
  function callData(code) {
    let token;
    if (code === codes.eof || code === codes.leftSquareBracket || size++ > constants.linkReferenceSizeMax) {
      return nok(code);
    }
    if (code === codes.rightSquareBracket) {
      if (!data) {
        return nok(code);
      }
      effects.exit('chunkString');
      token = effects.exit('gfmFootnoteCallString');
      return defined.includes(normalizeIdentifier(self.sliceSerialize(token))) ? end(code) : nok(code);
    }
    effects.consume(code);
    if (!markdownLineEndingOrSpace(code)) {
      data = true;
    }
    return code === codes.backslash ? callEscape : callData;
  }
  function callEscape(code) {
    if (code === codes.leftSquareBracket || code === codes.backslash || code === codes.rightSquareBracket) {
      effects.consume(code);
      size++;
      return callData;
    }
    return callData(code);
  }
  function end(code) {
    assert(code === codes.rightSquareBracket, 'expected `]`');
    effects.enter('gfmFootnoteCallLabelMarker');
    effects.consume(code);
    effects.exit('gfmFootnoteCallLabelMarker');
    effects.exit('gfmFootnoteCall');
    return ok;
  }
}
function tokenizeDefinitionStart(effects, ok, nok) {
  const self = this;
  const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
  let identifier;
  let size = 0;
  let data;
  return start;
  function start(code) {
    assert(code === codes.leftSquareBracket, 'expected `[`');
    effects.enter('gfmFootnoteDefinition')._container = true;
    effects.enter('gfmFootnoteDefinitionLabel');
    effects.enter('gfmFootnoteDefinitionLabelMarker');
    effects.consume(code);
    effects.exit('gfmFootnoteDefinitionLabelMarker');
    return labelStart;
  }
  function labelStart(code) {
    if (code === codes.caret) {
      effects.enter('gfmFootnoteDefinitionMarker');
      effects.consume(code);
      effects.exit('gfmFootnoteDefinitionMarker');
      effects.enter('gfmFootnoteDefinitionLabelString');
      return atBreak;
    }
    return nok(code);
  }
  function atBreak(code) {
    let token;
    if (code === codes.eof || code === codes.leftSquareBracket || size > constants.linkReferenceSizeMax) {
      return nok(code);
    }
    if (code === codes.rightSquareBracket) {
      if (!data) {
        return nok(code);
      }
      token = effects.exit('gfmFootnoteDefinitionLabelString');
      identifier = normalizeIdentifier(self.sliceSerialize(token));
      effects.enter('gfmFootnoteDefinitionLabelMarker');
      effects.consume(code);
      effects.exit('gfmFootnoteDefinitionLabelMarker');
      effects.exit('gfmFootnoteDefinitionLabel');
      return labelAfter;
    }
    if (markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      size++;
      return atBreak;
    }
    effects.enter('chunkString').contentType = 'string';
    return label(code);
  }
  function label(code) {
    if (
      code === codes.eof ||
      markdownLineEnding(code) ||
      code === codes.leftSquareBracket ||
      code === codes.rightSquareBracket ||
      size > constants.linkReferenceSizeMax
    ) {
      effects.exit('chunkString');
      return atBreak(code);
    }
    if (!markdownLineEndingOrSpace(code)) {
      data = true;
    }
    size++;
    effects.consume(code);
    return code === codes.backslash ? labelEscape : label;
  }
  function labelEscape(code) {
    if (code === codes.leftSquareBracket || code === codes.backslash || code === codes.rightSquareBracket) {
      effects.consume(code);
      size++;
      return label;
    }
    return label(code);
  }
  function labelAfter(code) {
    if (code === codes.colon) {
      effects.enter('definitionMarker');
      effects.consume(code);
      effects.exit('definitionMarker');
      return factorySpace(effects, done, 'gfmFootnoteDefinitionWhitespace');
    }
    return nok(code);
  }
  function done(code) {
    if (!defined.includes(identifier)) {
      defined.push(identifier);
    }
    return ok(code);
  }
}
function tokenizeDefinitionContinuation(effects, ok, nok) {
  return effects.check(blankLine, ok, effects.attempt(indent, ok, nok));
}
function gfmFootnoteDefinitionEnd(effects) {
  effects.exit('gfmFootnoteDefinition');
}
function tokenizeIndent(effects, ok, nok) {
  const self = this;
  return factorySpace(effects, afterPrefix, 'gfmFootnoteDefinitionIndent', constants.tabSize + 1);
  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return tail &&
      tail[1].type === 'gfmFootnoteDefinitionIndent' &&
      tail[2].sliceSerialize(tail[1], true).length === constants.tabSize
      ? ok(code)
      : nok(code);
  }
}

// esm-build-830e4d4a85e5f1f6b6205f3a043a0fb9ebc280af-83c95b8e/node_modules/micromark-extension-gfm-footnote/dev/lib/html.js
import { ok as assert2 } from '/cdn/v78/uvu@0.5.3/es2022/assert.development.js';
import { normalizeIdentifier as normalizeIdentifier2 } from '/cdn/v78/micromark-util-normalize-identifier@1.0.0/es2022/micromark-util-normalize-identifier.development.js';
import { sanitizeUri } from '/cdn/v78/micromark-util-sanitize-uri@1.0.0/es2022/micromark-util-sanitize-uri.development.js';
var own = {}.hasOwnProperty;
function gfmFootnoteHtml(options = {}) {
  const label = options.label || 'Footnotes';
  const backLabel = options.backLabel || 'Back to content';
  const clobberPrefix =
    options.clobberPrefix === void 0 || options.clobberPrefix === null ? 'user-content-' : options.clobberPrefix;
  return {
    enter: {
      gfmFootnoteDefinition() {
        const stack = this.getData('tightStack');
        stack.push(false);
      },
      gfmFootnoteDefinitionLabelString() {
        this.buffer();
      },
      gfmFootnoteCallString() {
        this.buffer();
      }
    },
    exit: {
      gfmFootnoteDefinition() {
        let definitions = this.getData('gfmFootnoteDefinitions');
        const footnoteStack = this.getData('gfmFootnoteDefinitionStack');
        const tightStack = this.getData('tightStack');
        const current = footnoteStack.pop();
        const value = this.resume();
        assert2(current, 'expected to be in a footnote');
        if (!definitions) {
          this.setData('gfmFootnoteDefinitions', (definitions = {}));
        }
        if (!own.call(definitions, current)) definitions[current] = value;
        tightStack.pop();
        this.setData('slurpOneLineEnding', true);
        this.setData('lastWasTag');
      },
      gfmFootnoteDefinitionLabelString(token) {
        let footnoteStack = this.getData('gfmFootnoteDefinitionStack');
        if (!footnoteStack) {
          this.setData('gfmFootnoteDefinitionStack', (footnoteStack = []));
        }
        footnoteStack.push(normalizeIdentifier2(this.sliceSerialize(token)));
        this.resume();
        this.buffer();
      },
      gfmFootnoteCallString(token) {
        let calls = this.getData('gfmFootnoteCallOrder');
        let counts = this.getData('gfmFootnoteCallCounts');
        const id = normalizeIdentifier2(this.sliceSerialize(token));
        let counter;
        this.resume();
        if (!calls) this.setData('gfmFootnoteCallOrder', (calls = []));
        if (!counts) this.setData('gfmFootnoteCallCounts', (counts = {}));
        const index = calls.indexOf(id);
        const safeId = sanitizeUri(id.toLowerCase());
        if (index === -1) {
          calls.push(id);
          counts[id] = 1;
          counter = calls.length;
        } else {
          counts[id]++;
          counter = index + 1;
        }
        const reuseCounter = counts[id];
        this.tag(
          '<sup><a href="#' +
            clobberPrefix +
            'fn-' +
            safeId +
            '" id="' +
            clobberPrefix +
            'fnref-' +
            safeId +
            (reuseCounter > 1 ? '-' + reuseCounter : '') +
            '" data-footnote-ref="" aria-describedby="footnote-label">' +
            String(counter) +
            '</a></sup>'
        );
      },
      null() {
        const calls = this.getData('gfmFootnoteCallOrder') || [];
        const counts = this.getData('gfmFootnoteCallCounts') || {};
        const definitions = this.getData('gfmFootnoteDefinitions') || {};
        let index = -1;
        if (calls.length > 0) {
          this.lineEndingIfNeeded();
          this.tag('<section data-footnotes="" class="footnotes"><h2 id="footnote-label" class="sr-only">');
          this.raw(this.encode(label));
          this.tag('</h2>');
          this.lineEndingIfNeeded();
          this.tag('<ol>');
        }
        while (++index < calls.length) {
          const id = calls[index];
          const safeId = sanitizeUri(id.toLowerCase());
          let referenceIndex = 0;
          const references = [];
          while (++referenceIndex <= counts[id]) {
            references.push(
              '<a href="#' +
                clobberPrefix +
                'fnref-' +
                safeId +
                (referenceIndex > 1 ? '-' + referenceIndex : '') +
                '" data-footnote-backref="" class="data-footnote-backref" aria-label="' +
                this.encode(backLabel) +
                '">\u21A9' +
                (referenceIndex > 1 ? '<sup>' + referenceIndex + '</sup>' : '') +
                '</a>'
            );
          }
          const reference = references.join(' ');
          let injected = false;
          this.lineEndingIfNeeded();
          this.tag('<li id="' + clobberPrefix + 'fn-' + safeId + '">');
          this.lineEndingIfNeeded();
          this.tag(
            definitions[id].replace(/<\/p>(?:\r?\n|\r)?$/, $0 => {
              injected = true;
              return ' ' + reference + $0;
            })
          );
          if (!injected) {
            this.lineEndingIfNeeded();
            this.tag(reference);
          }
          this.lineEndingIfNeeded();
          this.tag('</li>');
        }
        if (calls.length > 0) {
          this.lineEndingIfNeeded();
          this.tag('</ol>');
          this.lineEndingIfNeeded();
          this.tag('</section>');
        }
      }
    }
  };
}
export { gfmFootnote, gfmFootnoteHtml };
