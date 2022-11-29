/* esm.sh - esbuild bundle(micromark@3.1.0/lib/parse.js) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-32de6abb4a2cfed7b983ec43a91eb296b65529fc-99709865/node_modules/micromark/dev/lib/parse.js
import { combineExtensions } from '/cdn/v99/micromark-util-combine-extensions@1.0.0/es2022/micromark-util-combine-extensions.development.js';

// esm-build-32de6abb4a2cfed7b983ec43a91eb296b65529fc-99709865/node_modules/micromark/dev/lib/initialize/content.js
import { ok as assert } from '/cdn/v99/uvu@0.5.6/es2022/assert.development.js';
import { factorySpace } from '/cdn/v99/micromark-factory-space@1.0.0/es2022/micromark-factory-space.development.js';
import { markdownLineEnding } from '/cdn/v99/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { constants } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/constants.development.js';
import { types } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/types.development.js';
var content = {
  tokenize: initializeContent
};
function initializeContent(effects) {
  const contentStart = effects.attempt(
    this.parser.constructs.contentInitial,
    afterContentStartConstruct,
    paragraphInitial
  );
  let previous;
  return contentStart;
  function afterContentStartConstruct(code) {
    assert(code === codes.eof || markdownLineEnding(code), 'expected eol or eof');
    if (code === codes.eof) {
      effects.consume(code);
      return;
    }
    effects.enter(types.lineEnding);
    effects.consume(code);
    effects.exit(types.lineEnding);
    return factorySpace(effects, contentStart, types.linePrefix);
  }
  function paragraphInitial(code) {
    assert(code !== codes.eof && !markdownLineEnding(code), 'expected anything other than a line ending or EOF');
    effects.enter(types.paragraph);
    return lineStart(code);
  }
  function lineStart(code) {
    const token = effects.enter(types.chunkText, {
      contentType: constants.contentTypeText,
      previous
    });
    if (previous) {
      previous.next = token;
    }
    previous = token;
    return data(code);
  }
  function data(code) {
    if (code === codes.eof) {
      effects.exit(types.chunkText);
      effects.exit(types.paragraph);
      effects.consume(code);
      return;
    }
    if (markdownLineEnding(code)) {
      effects.consume(code);
      effects.exit(types.chunkText);
      return lineStart;
    }
    effects.consume(code);
    return data;
  }
}

// esm-build-32de6abb4a2cfed7b983ec43a91eb296b65529fc-99709865/node_modules/micromark/dev/lib/initialize/document.js
import { ok as assert2 } from '/cdn/v99/uvu@0.5.6/es2022/assert.development.js';
import { factorySpace as factorySpace2 } from '/cdn/v99/micromark-factory-space@1.0.0/es2022/micromark-factory-space.development.js';
import { markdownLineEnding as markdownLineEnding2 } from '/cdn/v99/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes as codes2 } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { constants as constants2 } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/constants.development.js';
import { types as types2 } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/types.development.js';
import { splice } from '/cdn/v99/micromark-util-chunked@1.0.0/es2022/micromark-util-chunked.development.js';
var document = {
  tokenize: initializeDocument
};
var containerConstruct = {
  tokenize: tokenizeContainer
};
function initializeDocument(effects) {
  const self = this;
  const stack = [];
  let continued = 0;
  let childFlow;
  let childToken;
  let lineStartOffset;
  return start;
  function start(code) {
    if (continued < stack.length) {
      const item = stack[continued];
      self.containerState = item[1];
      assert2(item[0].continuation, 'expected `continuation` to be defined on container construct');
      return effects.attempt(item[0].continuation, documentContinue, checkNewContainers)(code);
    }
    return checkNewContainers(code);
  }
  function documentContinue(code) {
    assert2(self.containerState, 'expected `containerState` to be defined after continuation');
    continued++;
    if (self.containerState._closeFlow) {
      self.containerState._closeFlow = void 0;
      if (childFlow) {
        closeFlow();
      }
      const indexBeforeExits = self.events.length;
      let indexBeforeFlow = indexBeforeExits;
      let point;
      while (indexBeforeFlow--) {
        if (self.events[indexBeforeFlow][0] === 'exit' && self.events[indexBeforeFlow][1].type === types2.chunkFlow) {
          point = self.events[indexBeforeFlow][1].end;
          break;
        }
      }
      assert2(point, 'could not find previous flow chunk');
      exitContainers(continued);
      let index = indexBeforeExits;
      while (index < self.events.length) {
        self.events[index][1].end = Object.assign({}, point);
        index++;
      }
      splice(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits));
      self.events.length = index;
      return checkNewContainers(code);
    }
    return start(code);
  }
  function checkNewContainers(code) {
    if (continued === stack.length) {
      if (!childFlow) {
        return documentContinued(code);
      }
      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
        return flowStart(code);
      }
      self.interrupt = Boolean(childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack);
    }
    self.containerState = {};
    return effects.check(containerConstruct, thereIsANewContainer, thereIsNoNewContainer)(code);
  }
  function thereIsANewContainer(code) {
    if (childFlow) closeFlow();
    exitContainers(continued);
    return documentContinued(code);
  }
  function thereIsNoNewContainer(code) {
    self.parser.lazy[self.now().line] = continued !== stack.length;
    lineStartOffset = self.now().offset;
    return flowStart(code);
  }
  function documentContinued(code) {
    self.containerState = {};
    return effects.attempt(containerConstruct, containerContinue, flowStart)(code);
  }
  function containerContinue(code) {
    assert2(self.currentConstruct, 'expected `currentConstruct` to be defined on tokenizer');
    assert2(self.containerState, 'expected `containerState` to be defined on tokenizer');
    continued++;
    stack.push([self.currentConstruct, self.containerState]);
    return documentContinued(code);
  }
  function flowStart(code) {
    if (code === codes2.eof) {
      if (childFlow) closeFlow();
      exitContainers(0);
      effects.consume(code);
      return;
    }
    childFlow = childFlow || self.parser.flow(self.now());
    effects.enter(types2.chunkFlow, {
      contentType: constants2.contentTypeFlow,
      previous: childToken,
      _tokenizer: childFlow
    });
    return flowContinue(code);
  }
  function flowContinue(code) {
    if (code === codes2.eof) {
      writeToChild(effects.exit(types2.chunkFlow), true);
      exitContainers(0);
      effects.consume(code);
      return;
    }
    if (markdownLineEnding2(code)) {
      effects.consume(code);
      writeToChild(effects.exit(types2.chunkFlow));
      continued = 0;
      self.interrupt = void 0;
      return start;
    }
    effects.consume(code);
    return flowContinue;
  }
  function writeToChild(token, eof) {
    assert2(childFlow, 'expected `childFlow` to be defined when continuing');
    const stream = self.sliceStream(token);
    if (eof) stream.push(null);
    token.previous = childToken;
    if (childToken) childToken.next = token;
    childToken = token;
    childFlow.defineSkip(token.start);
    childFlow.write(stream);
    if (self.parser.lazy[token.start.line]) {
      let index = childFlow.events.length;
      while (index--) {
        if (
          childFlow.events[index][1].start.offset < lineStartOffset &&
          (!childFlow.events[index][1].end || childFlow.events[index][1].end.offset > lineStartOffset)
        ) {
          return;
        }
      }
      const indexBeforeExits = self.events.length;
      let indexBeforeFlow = indexBeforeExits;
      let seen;
      let point;
      while (indexBeforeFlow--) {
        if (self.events[indexBeforeFlow][0] === 'exit' && self.events[indexBeforeFlow][1].type === types2.chunkFlow) {
          if (seen) {
            point = self.events[indexBeforeFlow][1].end;
            break;
          }
          seen = true;
        }
      }
      assert2(point, 'could not find previous flow chunk');
      exitContainers(continued);
      index = indexBeforeExits;
      while (index < self.events.length) {
        self.events[index][1].end = Object.assign({}, point);
        index++;
      }
      splice(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits));
      self.events.length = index;
    }
  }
  function exitContainers(size) {
    let index = stack.length;
    while (index-- > size) {
      const entry = stack[index];
      self.containerState = entry[1];
      assert2(entry[0].exit, 'expected `exit` to be defined on container construct');
      entry[0].exit.call(self, effects);
    }
    stack.length = size;
  }
  function closeFlow() {
    assert2(self.containerState, 'expected `containerState` to be defined when closing flow');
    assert2(childFlow, 'expected `childFlow` to be defined when closing it');
    childFlow.write([codes2.eof]);
    childToken = void 0;
    childFlow = void 0;
    self.containerState._closeFlow = void 0;
  }
}
function tokenizeContainer(effects, ok, nok) {
  return factorySpace2(
    effects,
    effects.attempt(this.parser.constructs.document, ok, nok),
    types2.linePrefix,
    this.parser.constructs.disable.null.includes('codeIndented') ? void 0 : constants2.tabSize
  );
}

// esm-build-32de6abb4a2cfed7b983ec43a91eb296b65529fc-99709865/node_modules/micromark/dev/lib/initialize/flow.js
import { ok as assert3 } from '/cdn/v99/uvu@0.5.6/es2022/assert.development.js';
import {
  blankLine,
  content as content2
} from '/cdn/v99/micromark-core-commonmark@1.0.6/es2022/micromark-core-commonmark.development.js';
import { factorySpace as factorySpace3 } from '/cdn/v99/micromark-factory-space@1.0.0/es2022/micromark-factory-space.development.js';
import { markdownLineEnding as markdownLineEnding3 } from '/cdn/v99/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes as codes3 } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { types as types3 } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/types.development.js';
var flow = {
  tokenize: initializeFlow
};
function initializeFlow(effects) {
  const self = this;
  const initial = effects.attempt(
    blankLine,
    atBlankEnding,
    effects.attempt(
      this.parser.constructs.flowInitial,
      afterConstruct,
      factorySpace3(
        effects,
        effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt(content2, afterConstruct)),
        types3.linePrefix
      )
    )
  );
  return initial;
  function atBlankEnding(code) {
    assert3(code === codes3.eof || markdownLineEnding3(code), 'expected eol or eof');
    if (code === codes3.eof) {
      effects.consume(code);
      return;
    }
    effects.enter(types3.lineEndingBlank);
    effects.consume(code);
    effects.exit(types3.lineEndingBlank);
    self.currentConstruct = void 0;
    return initial;
  }
  function afterConstruct(code) {
    assert3(code === codes3.eof || markdownLineEnding3(code), 'expected eol or eof');
    if (code === codes3.eof) {
      effects.consume(code);
      return;
    }
    effects.enter(types3.lineEnding);
    effects.consume(code);
    effects.exit(types3.lineEnding);
    self.currentConstruct = void 0;
    return initial;
  }
}

// esm-build-32de6abb4a2cfed7b983ec43a91eb296b65529fc-99709865/node_modules/micromark/dev/lib/initialize/text.js
import { codes as codes4 } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { constants as constants3 } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/constants.development.js';
import { types as types4 } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/types.development.js';
var resolver = {
  resolveAll: createResolver()
};
var string = initializeFactory('string');
var text = initializeFactory('text');
function initializeFactory(field) {
  return {
    tokenize: initializeText,
    resolveAll: createResolver(field === 'text' ? resolveAllLineSuffixes : void 0)
  };
  function initializeText(effects) {
    const self = this;
    const constructs = this.parser.constructs[field];
    const text3 = effects.attempt(constructs, start, notText);
    return start;
    function start(code) {
      return atBreak(code) ? text3(code) : notText(code);
    }
    function notText(code) {
      if (code === codes4.eof) {
        effects.consume(code);
        return;
      }
      effects.enter(types4.data);
      effects.consume(code);
      return data;
    }
    function data(code) {
      if (atBreak(code)) {
        effects.exit(types4.data);
        return text3(code);
      }
      effects.consume(code);
      return data;
    }
    function atBreak(code) {
      if (code === codes4.eof) {
        return true;
      }
      const list2 = constructs[code];
      let index = -1;
      if (list2) {
        while (++index < list2.length) {
          const item = list2[index];
          if (!item.previous || item.previous.call(self, self.previous)) {
            return true;
          }
        }
      }
      return false;
    }
  }
}
function createResolver(extraResolver) {
  return resolveAllText;
  function resolveAllText(events, context) {
    let index = -1;
    let enter;
    while (++index <= events.length) {
      if (enter === void 0) {
        if (events[index] && events[index][1].type === types4.data) {
          enter = index;
          index++;
        }
      } else if (!events[index] || events[index][1].type !== types4.data) {
        if (index !== enter + 2) {
          events[enter][1].end = events[index - 1][1].end;
          events.splice(enter + 2, index - enter - 2);
          index = enter + 2;
        }
        enter = void 0;
      }
    }
    return extraResolver ? extraResolver(events, context) : events;
  }
}
function resolveAllLineSuffixes(events, context) {
  let eventIndex = 0;
  while (++eventIndex <= events.length) {
    if (
      (eventIndex === events.length || events[eventIndex][1].type === types4.lineEnding) &&
      events[eventIndex - 1][1].type === types4.data
    ) {
      const data = events[eventIndex - 1][1];
      const chunks = context.sliceStream(data);
      let index = chunks.length;
      let bufferIndex = -1;
      let size = 0;
      let tabs;
      while (index--) {
        const chunk = chunks[index];
        if (typeof chunk === 'string') {
          bufferIndex = chunk.length;
          while (chunk.charCodeAt(bufferIndex - 1) === codes4.space) {
            size++;
            bufferIndex--;
          }
          if (bufferIndex) break;
          bufferIndex = -1;
        } else if (chunk === codes4.horizontalTab) {
          tabs = true;
          size++;
        } else if (chunk === codes4.virtualSpace) {
        } else {
          index++;
          break;
        }
      }
      if (size) {
        const token = {
          type:
            eventIndex === events.length || tabs || size < constants3.hardBreakPrefixSizeMin
              ? types4.lineSuffix
              : types4.hardBreakTrailing,
          start: {
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size,
            _index: data.start._index + index,
            _bufferIndex: index ? bufferIndex : data.start._bufferIndex + bufferIndex
          },
          end: Object.assign({}, data.end)
        };
        data.end = Object.assign({}, token.start);
        if (data.start.offset === data.end.offset) {
          Object.assign(data, token);
        } else {
          events.splice(eventIndex, 0, ['enter', token, context], ['exit', token, context]);
          eventIndex += 2;
        }
      }
      eventIndex++;
    }
  }
  return events;
}

// esm-build-32de6abb4a2cfed7b983ec43a91eb296b65529fc-99709865/node_modules/micromark/dev/lib/create-tokenizer.js
import { ok as assert4 } from '/cdn/v99/uvu@0.5.6/es2022/assert.development.js';
import createDebug from '/cdn/v99/debug@4.3.4/es2022/debug.development.js';
import { markdownLineEnding as markdownLineEnding4 } from '/cdn/v99/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import {
  push,
  splice as splice2
} from '/cdn/v99/micromark-util-chunked@1.0.0/es2022/micromark-util-chunked.development.js';
import { resolveAll } from '/cdn/v99/micromark-util-resolve-all@1.0.0/es2022/micromark-util-resolve-all.development.js';
import { codes as codes5 } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { values } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/values.development.js';
var debug = createDebug('micromark');
function createTokenizer(parser, initialize, from) {
  let point = Object.assign(
    from
      ? Object.assign({}, from)
      : {
          line: 1,
          column: 1,
          offset: 0
        },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  let consumed = true;
  const effects = {
    consume,
    enter,
    exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: codes5.eof,
    code: codes5.eof,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  let expectedCode;
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== codes5.eof) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
    debug('position: define skip: `%j`', point);
  }
  function main() {
    let chunkIndex;
    while (point._index < chunks.length) {
      const chunk = chunks[point._index];
      if (typeof chunk === 'string') {
        chunkIndex = point._index;
        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }
        while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code) {
    assert4(consumed === true, 'expected character to be consumed');
    consumed = void 0;
    debug('main: passing `%s` to %s', code, state && state.name);
    expectedCode = code;
    assert4(typeof state === 'function', 'expected state');
    state = state(code);
  }
  function consume(code) {
    assert4(code === expectedCode, 'expected given code to equal expected code');
    debug('consume: `%s`', code);
    assert4(
      consumed === void 0,
      'expected code to not have been consumed: this might be because `return x(code)` instead of `return x` was used'
    );
    assert4(
      code === null
        ? context.events.length === 0 || context.events[context.events.length - 1][0] === 'exit'
        : context.events[context.events.length - 1][0] === 'enter',
      'expected last token to be open'
    );
    if (markdownLineEnding4(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === codes5.carriageReturnLineFeed ? 2 : 1;
      accountForPotentialSkip();
      debug('position: after eol: `%j`', point);
    } else if (code !== codes5.virtualSpace) {
      point.column++;
      point.offset++;
    }
    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++;
      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    }
    context.previous = code;
    consumed = true;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    assert4(typeof type === 'string', 'expected string type');
    assert4(type.length > 0, 'expected non-empty string');
    debug('enter: `%s`', type);
    context.events.push(['enter', token, context]);
    stack.push(token);
    return token;
  }
  function exit(type) {
    assert4(typeof type === 'string', 'expected string type');
    assert4(type.length > 0, 'expected non-empty string');
    const token = stack.pop();
    assert4(token, 'cannot close w/o open tokens');
    token.end = now();
    assert4(type === token.type, 'expected exit token to match current token');
    assert4(
      !(token.start._index === token.end._index && token.start._bufferIndex === token.end._bufferIndex),
      'expected non-empty token (`' + type + '`)'
    );
    debug('exit: `%s`', token.type);
    context.events.push(['exit', token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs)
        ? handleListOfConstructs(constructs)
        : 'tokenize' in constructs
        ? handleListOfConstructs([constructs])
        : handleMapOfConstructs(constructs);
      function handleMapOfConstructs(map) {
        return start;
        function start(code) {
          const def = code !== null && map[code];
          const all = code !== null && map.null;
          const list2 = [
            ...(Array.isArray(def) ? def : def ? [def] : []),
            ...(Array.isArray(all) ? all : all ? [all] : [])
          ];
          return handleListOfConstructs(list2)(code);
        }
      }
      function handleListOfConstructs(list2) {
        listOfConstructs = list2;
        constructIndex = 0;
        if (list2.length === 0) {
          assert4(bogusState, 'expected `bogusState` to be given');
          return bogusState;
        }
        return handleConstruct(list2[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok(code);
          }
          return construct.tokenize.call(
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok,
            nok
          )(code);
        }
      }
      function ok(code) {
        assert4(code === expectedCode, 'expected code');
        consumed = true;
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code) {
        assert4(code === expectedCode, 'expected code');
        consumed = true;
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice2(
        context.events,
        from2,
        context.events.length - from2,
        construct.resolve(context.events.slice(from2), context)
      );
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
    assert4(
      construct.partial || context.events.length === 0 || context.events[context.events.length - 1][0] === 'exit',
      'expected last token to end'
    );
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
      debug('position: restore: `%j`', point);
    }
  }
  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    assert4(endBufferIndex > -1, 'expected non-negative end buffer index');
    assert4(startBufferIndex > -1, 'expected non-negative start buffer index');
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index = -1;
  const result = [];
  let atTab;
  while (++index < chunks.length) {
    const chunk = chunks[index];
    let value;
    if (typeof chunk === 'string') {
      value = chunk;
    } else
      switch (chunk) {
        case codes5.carriageReturn: {
          value = values.cr;
          break;
        }
        case codes5.lineFeed: {
          value = values.lf;
          break;
        }
        case codes5.carriageReturnLineFeed: {
          value = values.cr + values.lf;
          break;
        }
        case codes5.horizontalTab: {
          value = expandTabs ? values.space : values.ht;
          break;
        }
        case codes5.virtualSpace: {
          if (!expandTabs && atTab) continue;
          value = values.space;
          break;
        }
        default: {
          assert4(typeof chunk === 'number', 'expected number');
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === codes5.horizontalTab;
    result.push(value);
  }
  return result.join('');
}

// esm-build-32de6abb4a2cfed7b983ec43a91eb296b65529fc-99709865/node_modules/micromark/dev/lib/constructs.js
var constructs_exports = {};
__export(constructs_exports, {
  attentionMarkers: () => attentionMarkers,
  contentInitial: () => contentInitial,
  disable: () => disable,
  document: () => document2,
  flow: () => flow2,
  flowInitial: () => flowInitial,
  insideSpan: () => insideSpan,
  string: () => string2,
  text: () => text2
});
import {
  attention,
  autolink,
  blockQuote,
  characterEscape,
  characterReference,
  codeFenced,
  codeIndented,
  codeText,
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
} from '/cdn/v99/micromark-core-commonmark@1.0.6/es2022/micromark-core-commonmark.development.js';
import { codes as codes6 } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/codes.development.js';
var document2 = {
  [codes6.asterisk]: list,
  [codes6.plusSign]: list,
  [codes6.dash]: list,
  [codes6.digit0]: list,
  [codes6.digit1]: list,
  [codes6.digit2]: list,
  [codes6.digit3]: list,
  [codes6.digit4]: list,
  [codes6.digit5]: list,
  [codes6.digit6]: list,
  [codes6.digit7]: list,
  [codes6.digit8]: list,
  [codes6.digit9]: list,
  [codes6.greaterThan]: blockQuote
};
var contentInitial = {
  [codes6.leftSquareBracket]: definition
};
var flowInitial = {
  [codes6.horizontalTab]: codeIndented,
  [codes6.virtualSpace]: codeIndented,
  [codes6.space]: codeIndented
};
var flow2 = {
  [codes6.numberSign]: headingAtx,
  [codes6.asterisk]: thematicBreak,
  [codes6.dash]: [setextUnderline, thematicBreak],
  [codes6.lessThan]: htmlFlow,
  [codes6.equalsTo]: setextUnderline,
  [codes6.underscore]: thematicBreak,
  [codes6.graveAccent]: codeFenced,
  [codes6.tilde]: codeFenced
};
var string2 = {
  [codes6.ampersand]: characterReference,
  [codes6.backslash]: characterEscape
};
var text2 = {
  [codes6.carriageReturn]: lineEnding,
  [codes6.lineFeed]: lineEnding,
  [codes6.carriageReturnLineFeed]: lineEnding,
  [codes6.exclamationMark]: labelStartImage,
  [codes6.ampersand]: characterReference,
  [codes6.asterisk]: attention,
  [codes6.lessThan]: [autolink, htmlText],
  [codes6.leftSquareBracket]: labelStartLink,
  [codes6.backslash]: [hardBreakEscape, characterEscape],
  [codes6.rightSquareBracket]: labelEnd,
  [codes6.underscore]: attention,
  [codes6.graveAccent]: codeText
};
var insideSpan = {
  null: [attention, resolver]
};
var attentionMarkers = {
  null: [codes6.asterisk, codes6.underscore]
};
var disable = {
  null: []
};

// esm-build-32de6abb4a2cfed7b983ec43a91eb296b65529fc-99709865/node_modules/micromark/dev/lib/parse.js
function parse(options = {}) {
  const constructs = combineExtensions([constructs_exports].concat(options.extensions || []));
  const parser = {
    defined: [],
    lazy: {},
    constructs,
    content: create(content),
    document: create(document),
    flow: create(flow),
    string: create(string),
    text: create(text)
  };
  return parser;
  function create(initial) {
    return creator;
    function creator(from) {
      return createTokenizer(parser, initial, from);
    }
  }
}
export { parse };