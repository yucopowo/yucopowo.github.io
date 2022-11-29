/* esm.sh - esbuild bundle(mdast-util-from-markdown@1.2.0) es2022 development */
// esm-build-7465493743e96682153b4f1fb1f7d4151b809647-aa7e7d1a/node_modules/mdast-util-from-markdown/dev/lib/index.js
import { ok as assert } from '/cdn/v99/uvu@0.5.6/es2022/assert.development.js';
import { toString } from '/cdn/v99/mdast-util-to-string@3.1.0/es2022/mdast-util-to-string.development.js';
import { parse } from '/cdn/v99/micromark@3.1.0/es2022/lib/parse.development.js';
import { preprocess } from '/cdn/v99/micromark@3.1.0/es2022/lib/preprocess.development.js';
import { postprocess } from '/cdn/v99/micromark@3.1.0/es2022/lib/postprocess.development.js';
import { decodeNumericCharacterReference } from '/cdn/v99/micromark-util-decode-numeric-character-reference@1.0.0/es2022/micromark-util-decode-numeric-character-reference.development.js';
import { decodeString } from '/cdn/v99/micromark-util-decode-string@1.0.2/es2022/micromark-util-decode-string.development.js';
import { normalizeIdentifier } from '/cdn/v99/micromark-util-normalize-identifier@1.0.0/es2022/micromark-util-normalize-identifier.development.js';
import { codes } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { constants } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/constants.development.js';
import { types } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/types.development.js';
import { decodeNamedCharacterReference } from '/cdn/v99/decode-named-character-reference@1.0.2/es2022/decode-named-character-reference.development.js';
import { stringifyPosition } from '/cdn/v99/unist-util-stringify-position@3.0.2/es2022/unist-util-stringify-position.development.js';
var own = {}.hasOwnProperty;
var fromMarkdown = function(value, encoding, options) {
  if (typeof encoding !== 'string') {
    options = encoding;
    encoding = void 0;
  }
  return compiler(options)(
    postprocess(
      parse(options)
        .document()
        .write(preprocess()(value, encoding, true))
    )
  );
};
function compiler(options = {}) {
  const config = configure(
    {
      transforms: [],
      canContainEols: ['emphasis', 'fragment', 'heading', 'paragraph', 'strong'],
      enter: {
        autolink: opener(link),
        autolinkProtocol: onenterdata,
        autolinkEmail: onenterdata,
        atxHeading: opener(heading),
        blockQuote: opener(blockQuote),
        characterEscape: onenterdata,
        characterReference: onenterdata,
        codeFenced: opener(codeFlow),
        codeFencedFenceInfo: buffer,
        codeFencedFenceMeta: buffer,
        codeIndented: opener(codeFlow, buffer),
        codeText: opener(codeText, buffer),
        codeTextData: onenterdata,
        data: onenterdata,
        codeFlowValue: onenterdata,
        definition: opener(definition),
        definitionDestinationString: buffer,
        definitionLabelString: buffer,
        definitionTitleString: buffer,
        emphasis: opener(emphasis),
        hardBreakEscape: opener(hardBreak),
        hardBreakTrailing: opener(hardBreak),
        htmlFlow: opener(html, buffer),
        htmlFlowData: onenterdata,
        htmlText: opener(html, buffer),
        htmlTextData: onenterdata,
        image: opener(image),
        label: buffer,
        link: opener(link),
        listItem: opener(listItem),
        listItemValue: onenterlistitemvalue,
        listOrdered: opener(list, onenterlistordered),
        listUnordered: opener(list),
        paragraph: opener(paragraph),
        reference: onenterreference,
        referenceString: buffer,
        resourceDestinationString: buffer,
        resourceTitleString: buffer,
        setextHeading: opener(heading),
        strong: opener(strong),
        thematicBreak: opener(thematicBreak)
      },
      exit: {
        atxHeading: closer(),
        atxHeadingSequence: onexitatxheadingsequence,
        autolink: closer(),
        autolinkEmail: onexitautolinkemail,
        autolinkProtocol: onexitautolinkprotocol,
        blockQuote: closer(),
        characterEscapeValue: onexitdata,
        characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
        characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
        characterReferenceValue: onexitcharacterreferencevalue,
        codeFenced: closer(onexitcodefenced),
        codeFencedFence: onexitcodefencedfence,
        codeFencedFenceInfo: onexitcodefencedfenceinfo,
        codeFencedFenceMeta: onexitcodefencedfencemeta,
        codeFlowValue: onexitdata,
        codeIndented: closer(onexitcodeindented),
        codeText: closer(onexitcodetext),
        codeTextData: onexitdata,
        data: onexitdata,
        definition: closer(),
        definitionDestinationString: onexitdefinitiondestinationstring,
        definitionLabelString: onexitdefinitionlabelstring,
        definitionTitleString: onexitdefinitiontitlestring,
        emphasis: closer(),
        hardBreakEscape: closer(onexithardbreak),
        hardBreakTrailing: closer(onexithardbreak),
        htmlFlow: closer(onexithtmlflow),
        htmlFlowData: onexitdata,
        htmlText: closer(onexithtmltext),
        htmlTextData: onexitdata,
        image: closer(onexitimage),
        label: onexitlabel,
        labelText: onexitlabeltext,
        lineEnding: onexitlineending,
        link: closer(onexitlink),
        listItem: closer(),
        listOrdered: closer(),
        listUnordered: closer(),
        paragraph: closer(),
        referenceString: onexitreferencestring,
        resourceDestinationString: onexitresourcedestinationstring,
        resourceTitleString: onexitresourcetitlestring,
        resource: onexitresource,
        setextHeading: closer(onexitsetextheading),
        setextHeadingLineSequence: onexitsetextheadinglinesequence,
        setextHeadingText: onexitsetextheadingtext,
        strong: closer(),
        thematicBreak: closer()
      }
    },
    options.mdastExtensions || []
  );
  const data = {};
  return compile;
  function compile(events) {
    let tree = {
      type: 'root',
      children: []
    };
    const stack = [tree];
    const tokenStack = [];
    const listStack = [];
    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit,
      buffer,
      resume,
      setData,
      getData
    };
    let index = -1;
    while (++index < events.length) {
      if (events[index][1].type === types.listOrdered || events[index][1].type === types.listUnordered) {
        if (events[index][0] === 'enter') {
          listStack.push(index);
        } else {
          const tail = listStack.pop();
          assert(typeof tail === 'number', 'expected list ot be open');
          index = prepareList(events, tail, index);
        }
      }
    }
    index = -1;
    while (++index < events.length) {
      const handler = config[events[index][0]];
      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          Object.assign(
            {
              sliceSerialize: events[index][2].sliceSerialize
            },
            context
          ),
          events[index][1]
        );
      }
    }
    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point(
        events.length > 0
          ? events[0][1].start
          : {
              line: 1,
              column: 1,
              offset: 0
            }
      ),
      end: point(
        events.length > 0
          ? events[events.length - 2][1].end
          : {
              line: 1,
              column: 1,
              offset: 0
            }
      )
    };
    index = -1;
    while (++index < config.transforms.length) {
      tree = config.transforms[index](tree) || tree;
    }
    return tree;
  }
  function prepareList(events, start, length) {
    let index = start - 1;
    let containerBalance = -1;
    let listSpread = false;
    let listItem2;
    let lineIndex;
    let firstBlankLineIndex;
    let atMarker;
    while (++index <= length) {
      const event = events[index];
      if (
        event[1].type === types.listUnordered ||
        event[1].type === types.listOrdered ||
        event[1].type === types.blockQuote
      ) {
        if (event[0] === 'enter') {
          containerBalance++;
        } else {
          containerBalance--;
        }
        atMarker = void 0;
      } else if (event[1].type === types.lineEndingBlank) {
        if (event[0] === 'enter') {
          if (listItem2 && !atMarker && !containerBalance && !firstBlankLineIndex) {
            firstBlankLineIndex = index;
          }
          atMarker = void 0;
        }
      } else if (
        event[1].type === types.linePrefix ||
        event[1].type === types.listItemValue ||
        event[1].type === types.listItemMarker ||
        event[1].type === types.listItemPrefix ||
        event[1].type === types.listItemPrefixWhitespace
      ) {
      } else {
        atMarker = void 0;
      }
      if (
        (!containerBalance && event[0] === 'enter' && event[1].type === types.listItemPrefix) ||
        (containerBalance === -1 &&
          event[0] === 'exit' &&
          (event[1].type === types.listUnordered || event[1].type === types.listOrdered))
      ) {
        if (listItem2) {
          let tailIndex = index;
          lineIndex = void 0;
          while (tailIndex--) {
            const tailEvent = events[tailIndex];
            if (tailEvent[1].type === types.lineEnding || tailEvent[1].type === types.lineEndingBlank) {
              if (tailEvent[0] === 'exit') continue;
              if (lineIndex) {
                events[lineIndex][1].type = types.lineEndingBlank;
                listSpread = true;
              }
              tailEvent[1].type = types.lineEnding;
              lineIndex = tailIndex;
            } else if (
              tailEvent[1].type === types.linePrefix ||
              tailEvent[1].type === types.blockQuotePrefix ||
              tailEvent[1].type === types.blockQuotePrefixWhitespace ||
              tailEvent[1].type === types.blockQuoteMarker ||
              tailEvent[1].type === types.listItemIndent
            ) {
            } else {
              break;
            }
          }
          if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
            listItem2._spread = true;
          }
          listItem2.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end);
          events.splice(lineIndex || index, 0, ['exit', listItem2, event[2]]);
          index++;
          length++;
        }
        if (event[1].type === types.listItemPrefix) {
          listItem2 = {
            type: 'listItem',
            _spread: false,
            start: Object.assign({}, event[1].start)
          };
          events.splice(index, 0, ['enter', listItem2, event[2]]);
          index++;
          length++;
          firstBlankLineIndex = void 0;
          atMarker = true;
        }
      }
    }
    events[start][1]._spread = listSpread;
    return length;
  }
  function setData(key, value) {
    data[key] = value;
  }
  function getData(key) {
    return data[key];
  }
  function point(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter.call(this, create(token), token);
      if (and) and.call(this, token);
    }
  }
  function buffer() {
    this.stack.push({
      type: 'fragment',
      children: []
    });
  }
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    assert(parent, 'expected `parent`');
    assert('children' in parent, 'expected `parent`');
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]);
    node.position = {
      start: point(token.start)
    };
    return node;
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and) and.call(this, token);
      exit.call(this, token);
    }
  }
  function exit(token, onExitError) {
    const node = this.stack.pop();
    assert(node, 'expected `node`');
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error(
        'Cannot close `' +
          token.type +
          '` (' +
          stringifyPosition({
            start: token.start,
            end: token.end
          }) +
          '): it\u2019s not open'
      );
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    assert(node.type !== 'fragment', 'unexpected fragment `exit`ed');
    assert(node.position, 'expected `position` to be defined');
    node.position.end = point(token.end);
    return node;
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterlistordered() {
    setData('expectingFirstListItemValue', true);
  }
  function onenterlistitemvalue(token) {
    if (getData('expectingFirstListItemValue')) {
      const ancestor = this.stack[this.stack.length - 2];
      ancestor.start = Number.parseInt(this.sliceSerialize(token), constants.numericBaseDecimal);
      setData('expectingFirstListItemValue');
    }
  }
  function onexitcodefencedfenceinfo() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.lang = data2;
  }
  function onexitcodefencedfencemeta() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.meta = data2;
  }
  function onexitcodefencedfence() {
    if (getData('flowCodeInside')) return;
    this.buffer();
    setData('flowCodeInside', true);
  }
  function onexitcodefenced() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '');
    setData('flowCodeInside');
  }
  function onexitcodeindented() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2.replace(/(\r?\n|\r)$/g, '');
  }
  function onexitdefinitionlabelstring(token) {
    const label = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.label = label;
    node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  function onexitdefinitiontitlestring() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.title = data2;
  }
  function onexitdefinitiondestinationstring() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.url = data2;
  }
  function onexitatxheadingsequence(token) {
    const node = this.stack[this.stack.length - 1];
    if (!node.depth) {
      const depth = this.sliceSerialize(token).length;
      assert(
        depth === 1 || depth === 2 || depth === 3 || depth === 4 || depth === 5 || depth === 6,
        'expected `depth` between `1` and `6`'
      );
      node.depth = depth;
    }
  }
  function onexitsetextheadingtext() {
    setData('setextHeadingSlurpLineEnding', true);
  }
  function onexitsetextheadinglinesequence(token) {
    const node = this.stack[this.stack.length - 1];
    node.depth = this.sliceSerialize(token).charCodeAt(0) === codes.equalsTo ? 1 : 2;
  }
  function onexitsetextheading() {
    setData('setextHeadingSlurpLineEnding');
  }
  function onenterdata(token) {
    const parent = this.stack[this.stack.length - 1];
    let tail = parent.children[parent.children.length - 1];
    if (!tail || tail.type !== 'text') {
      tail = text();
      tail.position = {
        start: point(token.start)
      };
      parent.children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    assert(tail, 'expected a `node` to be on the stack');
    assert('value' in tail, 'expected a `literal` to be on the stack');
    assert(tail.position, 'expected `node` to have an open position');
    tail.value += this.sliceSerialize(token);
    tail.position.end = point(token.end);
  }
  function onexitlineending(token) {
    const context = this.stack[this.stack.length - 1];
    assert(context, 'expected `node`');
    if (getData('atHardBreak')) {
      assert('children' in context, 'expected `parent`');
      const tail = context.children[context.children.length - 1];
      assert(tail.position, 'expected tail to have a starting position');
      tail.position.end = point(token.end);
      setData('atHardBreak');
      return;
    }
    if (!getData('setextHeadingSlurpLineEnding') && config.canContainEols.includes(context.type)) {
      onenterdata.call(this, token);
      onexitdata.call(this, token);
    }
  }
  function onexithardbreak() {
    setData('atHardBreak', true);
  }
  function onexithtmlflow() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2;
  }
  function onexithtmltext() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2;
  }
  function onexitcodetext() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2;
  }
  function onexitlink() {
    const context = this.stack[this.stack.length - 1];
    if (getData('inReference')) {
      context.type += 'Reference';
      context.referenceType = getData('referenceType') || 'shortcut';
      delete context.url;
      delete context.title;
    } else {
      delete context.identifier;
      delete context.label;
    }
    setData('referenceType');
  }
  function onexitimage() {
    const context = this.stack[this.stack.length - 1];
    if (getData('inReference')) {
      context.type += 'Reference';
      context.referenceType = getData('referenceType') || 'shortcut';
      delete context.url;
      delete context.title;
    } else {
      delete context.identifier;
      delete context.label;
    }
    setData('referenceType');
  }
  function onexitlabeltext(token) {
    const ancestor = this.stack[this.stack.length - 2];
    const string = this.sliceSerialize(token);
    ancestor.label = decodeString(string);
    ancestor.identifier = normalizeIdentifier(string).toLowerCase();
  }
  function onexitlabel() {
    const fragment = this.stack[this.stack.length - 1];
    const value = this.resume();
    const node = this.stack[this.stack.length - 1];
    setData('inReference', true);
    if (node.type === 'link') {
      node.children = fragment.children;
    } else {
      node.alt = value;
    }
  }
  function onexitresourcedestinationstring() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.url = data2;
  }
  function onexitresourcetitlestring() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.title = data2;
  }
  function onexitresource() {
    setData('inReference');
  }
  function onenterreference() {
    setData('referenceType', 'collapsed');
  }
  function onexitreferencestring(token) {
    const label = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.label = label;
    node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
    setData('referenceType', 'full');
  }
  function onexitcharacterreferencemarker(token) {
    setData('characterReferenceType', token.type);
  }
  function onexitcharacterreferencevalue(token) {
    const data2 = this.sliceSerialize(token);
    const type = getData('characterReferenceType');
    let value;
    if (type) {
      value = decodeNumericCharacterReference(
        data2,
        type === types.characterReferenceMarkerNumeric ? constants.numericBaseDecimal : constants.numericBaseHexadecimal
      );
      setData('characterReferenceType');
    } else {
      value = decodeNamedCharacterReference(data2);
    }
    const tail = this.stack.pop();
    assert(tail, 'expected `node`');
    assert(tail.position, 'expected `node.position`');
    assert('value' in tail, 'expected `node.value`');
    tail.value += value;
    tail.position.end = point(token.end);
  }
  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token);
    const node = this.stack[this.stack.length - 1];
    node.url = this.sliceSerialize(token);
  }
  function onexitautolinkemail(token) {
    onexitdata.call(this, token);
    const node = this.stack[this.stack.length - 1];
    node.url = 'mailto:' + this.sliceSerialize(token);
  }
  function blockQuote() {
    return {
      type: 'blockquote',
      children: []
    };
  }
  function codeFlow() {
    return {
      type: 'code',
      lang: null,
      meta: null,
      value: ''
    };
  }
  function codeText() {
    return {
      type: 'inlineCode',
      value: ''
    };
  }
  function definition() {
    return {
      type: 'definition',
      identifier: '',
      label: null,
      title: null,
      url: ''
    };
  }
  function emphasis() {
    return {
      type: 'emphasis',
      children: []
    };
  }
  function heading() {
    return {
      type: 'heading',
      depth: void 0,
      children: []
    };
  }
  function hardBreak() {
    return {
      type: 'break'
    };
  }
  function html() {
    return {
      type: 'html',
      value: ''
    };
  }
  function image() {
    return {
      type: 'image',
      title: null,
      url: '',
      alt: null
    };
  }
  function link() {
    return {
      type: 'link',
      title: null,
      url: '',
      children: []
    };
  }
  function list(token) {
    return {
      type: 'list',
      ordered: token.type === 'listOrdered',
      start: null,
      spread: token._spread,
      children: []
    };
  }
  function listItem(token) {
    return {
      type: 'listItem',
      spread: token._spread,
      checked: null,
      children: []
    };
  }
  function paragraph() {
    return {
      type: 'paragraph',
      children: []
    };
  }
  function strong() {
    return {
      type: 'strong',
      children: []
    };
  }
  function text() {
    return {
      type: 'text',
      value: ''
    };
  }
  function thematicBreak() {
    return {
      type: 'thematicBreak'
    };
  }
}
function configure(combined, extensions) {
  let index = -1;
  while (++index < extensions.length) {
    const value = extensions[index];
    if (Array.isArray(value)) {
      configure(combined, value);
    } else {
      extension(combined, value);
    }
  }
  return combined;
}
function extension(combined, extension2) {
  let key;
  for (key in extension2) {
    if (own.call(extension2, key)) {
      const list = key === 'canContainEols' || key === 'transforms';
      const maybe = own.call(combined, key) ? combined[key] : void 0;
      const left = maybe || (combined[key] = list ? [] : {});
      const right = extension2[key];
      if (right) {
        if (list) {
          combined[key] = [...left, ...right];
        } else {
          Object.assign(left, right);
        }
      }
    }
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error(
      'Cannot close `' +
        left.type +
        '` (' +
        stringifyPosition({
          start: left.start,
          end: left.end
        }) +
        '): a different token (`' +
        right.type +
        '`, ' +
        stringifyPosition({
          start: right.start,
          end: right.end
        }) +
        ') is open'
    );
  } else {
    throw new Error(
      'Cannot close document, a token (`' +
        right.type +
        '`, ' +
        stringifyPosition({
          start: right.start,
          end: right.end
        }) +
        ') is still open'
    );
  }
}
export { fromMarkdown };
