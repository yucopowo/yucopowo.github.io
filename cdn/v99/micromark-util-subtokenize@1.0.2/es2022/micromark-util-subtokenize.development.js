/* esm.sh - esbuild bundle(micromark-util-subtokenize@1.0.2) es2022 development */
// esm-build-0d3f60a2b7b0a93a267134b83fd6d153d53283d4-c5c0eb52/node_modules/micromark-util-subtokenize/dev/index.js
import { ok as assert } from '/cdn/v99/uvu@0.5.6/es2022/assert.development.js';
import { splice } from '/cdn/v99/micromark-util-chunked@1.0.0/es2022/micromark-util-chunked.development.js';
import { codes } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { types } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/types.development.js';
function subtokenize(events) {
  const jumps = {};
  let index = -1;
  let event;
  let lineIndex;
  let otherIndex;
  let otherEvent;
  let parameters;
  let subevents;
  let more;
  while (++index < events.length) {
    while (index in jumps) {
      index = jumps[index];
    }
    event = events[index];
    if (index && event[1].type === types.chunkFlow && events[index - 1][1].type === types.listItemPrefix) {
      assert(event[1]._tokenizer, 'expected `_tokenizer` on subtokens');
      subevents = event[1]._tokenizer.events;
      otherIndex = 0;
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === types.lineEndingBlank) {
        otherIndex += 2;
      }
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === types.content) {
        while (++otherIndex < subevents.length) {
          if (subevents[otherIndex][1].type === types.content) {
            break;
          }
          if (subevents[otherIndex][1].type === types.chunkText) {
            subevents[otherIndex][1]._isInFirstContentOfListItem = true;
            otherIndex++;
          }
        }
      }
    }
    if (event[0] === 'enter') {
      if (event[1].contentType) {
        Object.assign(jumps, subcontent(events, index));
        index = jumps[index];
        more = true;
      }
    } else if (event[1]._container) {
      otherIndex = index;
      lineIndex = void 0;
      while (otherIndex--) {
        otherEvent = events[otherIndex];
        if (otherEvent[1].type === types.lineEnding || otherEvent[1].type === types.lineEndingBlank) {
          if (otherEvent[0] === 'enter') {
            if (lineIndex) {
              events[lineIndex][1].type = types.lineEndingBlank;
            }
            otherEvent[1].type = types.lineEnding;
            lineIndex = otherIndex;
          }
        } else {
          break;
        }
      }
      if (lineIndex) {
        event[1].end = Object.assign({}, events[lineIndex][1].start);
        parameters = events.slice(lineIndex, index);
        parameters.unshift(event);
        splice(events, lineIndex, index - lineIndex + 1, parameters);
      }
    }
  }
  return !more;
}
function subcontent(events, eventIndex) {
  const token = events[eventIndex][1];
  const context = events[eventIndex][2];
  let startPosition = eventIndex - 1;
  const startPositions = [];
  assert(token.contentType, 'expected `contentType` on subtokens');
  const tokenizer = token._tokenizer || context.parser[token.contentType](token.start);
  const childEvents = tokenizer.events;
  const jumps = [];
  const gaps = {};
  let stream;
  let previous;
  let index = -1;
  let current = token;
  let adjust = 0;
  let start = 0;
  const breaks = [start];
  while (current) {
    while (events[++startPosition][1] !== current) {}
    assert(!previous || current.previous === previous, 'expected previous to match');
    assert(!previous || previous.next === current, 'expected next to match');
    startPositions.push(startPosition);
    if (!current._tokenizer) {
      stream = context.sliceStream(current);
      if (!current.next) {
        stream.push(codes.eof);
      }
      if (previous) {
        tokenizer.defineSkip(current.start);
      }
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = true;
      }
      tokenizer.write(stream);
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = void 0;
      }
    }
    previous = current;
    current = current.next;
  }
  current = token;
  while (++index < childEvents.length) {
    if (
      childEvents[index][0] === 'exit' &&
      childEvents[index - 1][0] === 'enter' &&
      childEvents[index][1].type === childEvents[index - 1][1].type &&
      childEvents[index][1].start.line !== childEvents[index][1].end.line
    ) {
      assert(current, 'expected a current token');
      start = index + 1;
      breaks.push(start);
      current._tokenizer = void 0;
      current.previous = void 0;
      current = current.next;
    }
  }
  tokenizer.events = [];
  if (current) {
    current._tokenizer = void 0;
    current.previous = void 0;
    assert(!current.next, 'expected no next token');
  } else {
    breaks.pop();
  }
  index = breaks.length;
  while (index--) {
    const slice = childEvents.slice(breaks[index], breaks[index + 1]);
    const start2 = startPositions.pop();
    assert(start2 !== void 0, 'expected a start position when splicing');
    jumps.unshift([start2, start2 + slice.length - 1]);
    splice(events, start2, 2, slice);
  }
  index = -1;
  while (++index < jumps.length) {
    gaps[adjust + jumps[index][0]] = adjust + jumps[index][1];
    adjust += jumps[index][1] - jumps[index][0] - 1;
  }
  return gaps;
}
export { subtokenize };
