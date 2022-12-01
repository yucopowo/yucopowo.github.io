/* esm.sh - esbuild bundle(micromark-extension-gfm-strikethrough@1.0.4) es2022 development */
// esm-build-e992ef1b8cf515932f18ccad7738c197274757a6-9c4d7fab/node_modules/micromark-extension-gfm-strikethrough/dev/lib/html.js
var gfmStrikethroughHtml = {
  enter: {
    strikethrough() {
      this.tag('<del>');
    }
  },
  exit: {
    strikethrough() {
      this.tag('</del>');
    }
  }
};

// esm-build-e992ef1b8cf515932f18ccad7738c197274757a6-9c4d7fab/node_modules/micromark-extension-gfm-strikethrough/dev/lib/syntax.js
import { ok as assert } from '/cdn/v78/uvu@0.5.3/es2022/assert.development.js';
import { splice } from '/cdn/v78/micromark-util-chunked@1.0.0/es2022/micromark-util-chunked.development.js';
import { classifyCharacter } from '/cdn/v78/micromark-util-classify-character@1.0.0/es2022/micromark-util-classify-character.development.js';
import { resolveAll } from '/cdn/v78/micromark-util-resolve-all@1.0.0/es2022/micromark-util-resolve-all.development.js';
import { codes } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { constants } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/constants.development.js';
import { types } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';
function gfmStrikethrough(options = {}) {
  let single = options.singleTilde;
  const tokenizer = {
    tokenize: tokenizeStrikethrough,
    resolveAll: resolveAllStrikethrough
  };
  if (single === null || single === void 0) {
    single = true;
  }
  return {
    text: {
      [codes.tilde]: tokenizer
    },
    insideSpan: {
      null: [tokenizer]
    },
    attentionMarkers: {
      null: [codes.tilde]
    }
  };
  function resolveAllStrikethrough(events, context) {
    let index = -1;
    while (++index < events.length) {
      if (
        events[index][0] === 'enter' &&
        events[index][1].type === 'strikethroughSequenceTemporary' &&
        events[index][1]._close
      ) {
        let open = index;
        while (open--) {
          if (
            events[open][0] === 'exit' &&
            events[open][1].type === 'strikethroughSequenceTemporary' &&
            events[open][1]._open &&
            events[index][1].end.offset - events[index][1].start.offset ===
              events[open][1].end.offset - events[open][1].start.offset
          ) {
            events[index][1].type = 'strikethroughSequence';
            events[open][1].type = 'strikethroughSequence';
            const strikethrough = {
              type: 'strikethrough',
              start: Object.assign({}, events[open][1].start),
              end: Object.assign({}, events[index][1].end)
            };
            const text = {
              type: 'strikethroughText',
              start: Object.assign({}, events[open][1].end),
              end: Object.assign({}, events[index][1].start)
            };
            const nextEvents = [
              ['enter', strikethrough, context],
              ['enter', events[open][1], context],
              ['exit', events[open][1], context],
              ['enter', text, context]
            ];
            splice(
              nextEvents,
              nextEvents.length,
              0,
              resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + 1, index), context)
            );
            splice(nextEvents, nextEvents.length, 0, [
              ['exit', text, context],
              ['enter', events[index][1], context],
              ['exit', events[index][1], context],
              ['exit', strikethrough, context]
            ]);
            splice(events, open - 1, index - open + 3, nextEvents);
            index = open + nextEvents.length - 2;
            break;
          }
        }
      }
    }
    index = -1;
    while (++index < events.length) {
      if (events[index][1].type === 'strikethroughSequenceTemporary') {
        events[index][1].type = types.data;
      }
    }
    return events;
  }
  function tokenizeStrikethrough(effects, ok, nok) {
    const previous = this.previous;
    const events = this.events;
    let size = 0;
    return start;
    function start(code) {
      assert(code === codes.tilde, 'expected `~`');
      if (previous === codes.tilde && events[events.length - 1][1].type !== types.characterEscape) {
        return nok(code);
      }
      effects.enter('strikethroughSequenceTemporary');
      return more(code);
    }
    function more(code) {
      const before = classifyCharacter(previous);
      if (code === codes.tilde) {
        if (size > 1) return nok(code);
        effects.consume(code);
        size++;
        return more;
      }
      if (size < 2 && !single) return nok(code);
      const token = effects.exit('strikethroughSequenceTemporary');
      const after = classifyCharacter(code);
      token._open = !after || (after === constants.attentionSideAfter && Boolean(before));
      token._close = !before || (before === constants.attentionSideAfter && Boolean(after));
      return ok(code);
    }
  }
}
export { gfmStrikethrough, gfmStrikethroughHtml };
