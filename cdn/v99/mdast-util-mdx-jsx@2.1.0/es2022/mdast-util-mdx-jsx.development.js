/* esm.sh - esbuild bundle(mdast-util-mdx-jsx@2.1.0) es2022 development */
// esm-build-497b7985271bceb357f2656d0a5249d4316c4d34-6f77d286/node_modules/mdast-util-mdx-jsx/lib/index.js
import { ccount } from '/cdn/v99/ccount@2.0.1/es2022/ccount.development.js';
import { parseEntities } from '/cdn/v99/parse-entities@4.0.0/es2022/parse-entities.development.js';
import { stringifyPosition } from '/cdn/v99/unist-util-stringify-position@3.0.2/es2022/unist-util-stringify-position.development.js';
import { VFileMessage } from '/cdn/v99/vfile-message@3.1.3/es2022/vfile-message.development.js';
import { stringifyEntitiesLight } from '/cdn/v99/stringify-entities@4.0.3/es2022/stringify-entities.development.js';
import { containerFlow } from '/cdn/v99/mdast-util-to-markdown@1.3.0/es2022/lib/util/container-flow.development.js';
import { containerPhrasing } from '/cdn/v99/mdast-util-to-markdown@1.3.0/es2022/lib/util/container-phrasing.development.js';
import { indentLines } from '/cdn/v99/mdast-util-to-markdown@1.3.0/es2022/lib/util/indent-lines.development.js';
import { track } from '/cdn/v99/mdast-util-to-markdown@1.3.0/es2022/lib/util/track.development.js';
function mdxJsxFromMarkdown() {
  return {
    canContainEols: ['mdxJsxTextElement'],
    enter: {
      mdxJsxFlowTag: enterMdxJsxTag,
      mdxJsxFlowTagClosingMarker: enterMdxJsxTagClosingMarker,
      mdxJsxFlowTagAttribute: enterMdxJsxTagAttribute,
      mdxJsxFlowTagExpressionAttribute: enterMdxJsxTagExpressionAttribute,
      mdxJsxFlowTagAttributeValueLiteral: buffer,
      mdxJsxFlowTagAttributeValueExpression: buffer,
      mdxJsxFlowTagSelfClosingMarker: enterMdxJsxTagSelfClosingMarker,
      mdxJsxTextTag: enterMdxJsxTag,
      mdxJsxTextTagClosingMarker: enterMdxJsxTagClosingMarker,
      mdxJsxTextTagAttribute: enterMdxJsxTagAttribute,
      mdxJsxTextTagExpressionAttribute: enterMdxJsxTagExpressionAttribute,
      mdxJsxTextTagAttributeValueLiteral: buffer,
      mdxJsxTextTagAttributeValueExpression: buffer,
      mdxJsxTextTagSelfClosingMarker: enterMdxJsxTagSelfClosingMarker
    },
    exit: {
      mdxJsxFlowTagClosingMarker: exitMdxJsxTagClosingMarker,
      mdxJsxFlowTagNamePrimary: exitMdxJsxTagNamePrimary,
      mdxJsxFlowTagNameMember: exitMdxJsxTagNameMember,
      mdxJsxFlowTagNameLocal: exitMdxJsxTagNameLocal,
      mdxJsxFlowTagExpressionAttribute: exitMdxJsxTagExpressionAttribute,
      mdxJsxFlowTagExpressionAttributeValue: data,
      mdxJsxFlowTagAttributeNamePrimary: exitMdxJsxTagAttributeNamePrimary,
      mdxJsxFlowTagAttributeNameLocal: exitMdxJsxTagAttributeNameLocal,
      mdxJsxFlowTagAttributeValueLiteral: exitMdxJsxTagAttributeValueLiteral,
      mdxJsxFlowTagAttributeValueLiteralValue: data,
      mdxJsxFlowTagAttributeValueExpression: exitMdxJsxTagAttributeValueExpression,
      mdxJsxFlowTagAttributeValueExpressionValue: data,
      mdxJsxFlowTagSelfClosingMarker: exitMdxJsxTagSelfClosingMarker,
      mdxJsxFlowTag: exitMdxJsxTag,
      mdxJsxTextTagClosingMarker: exitMdxJsxTagClosingMarker,
      mdxJsxTextTagNamePrimary: exitMdxJsxTagNamePrimary,
      mdxJsxTextTagNameMember: exitMdxJsxTagNameMember,
      mdxJsxTextTagNameLocal: exitMdxJsxTagNameLocal,
      mdxJsxTextTagExpressionAttribute: exitMdxJsxTagExpressionAttribute,
      mdxJsxTextTagExpressionAttributeValue: data,
      mdxJsxTextTagAttributeNamePrimary: exitMdxJsxTagAttributeNamePrimary,
      mdxJsxTextTagAttributeNameLocal: exitMdxJsxTagAttributeNameLocal,
      mdxJsxTextTagAttributeValueLiteral: exitMdxJsxTagAttributeValueLiteral,
      mdxJsxTextTagAttributeValueLiteralValue: data,
      mdxJsxTextTagAttributeValueExpression: exitMdxJsxTagAttributeValueExpression,
      mdxJsxTextTagAttributeValueExpressionValue: data,
      mdxJsxTextTagSelfClosingMarker: exitMdxJsxTagSelfClosingMarker,
      mdxJsxTextTag: exitMdxJsxTag
    }
  };
  function buffer() {
    this.buffer();
  }
  function data(token) {
    this.config.enter.data.call(this, token);
    this.config.exit.data.call(this, token);
  }
  function enterMdxJsxTag(token) {
    const tag = {
      name: null,
      attributes: [],
      start: token.start,
      end: token.end
    };
    if (!this.getData('mdxJsxTagStack')) this.setData('mdxJsxTagStack', []);
    this.setData('mdxJsxTag', tag);
    this.buffer();
  }
  function enterMdxJsxTagClosingMarker(token) {
    const stack = this.getData('mdxJsxTagStack');
    if (stack.length === 0) {
      throw new VFileMessage(
        'Unexpected closing slash `/` in tag, expected an open tag first',
        {
          start: token.start,
          end: token.end
        },
        'mdast-util-mdx-jsx:unexpected-closing-slash'
      );
    }
  }
  function enterMdxJsxTagAnyAttribute(token) {
    const tag = this.getData('mdxJsxTag');
    if (tag.close) {
      throw new VFileMessage(
        'Unexpected attribute in closing tag, expected the end of the tag',
        {
          start: token.start,
          end: token.end
        },
        'mdast-util-mdx-jsx:unexpected-attribute'
      );
    }
  }
  function enterMdxJsxTagSelfClosingMarker(token) {
    const tag = this.getData('mdxJsxTag');
    if (tag.close) {
      throw new VFileMessage(
        'Unexpected self-closing slash `/` in closing tag, expected the end of the tag',
        {
          start: token.start,
          end: token.end
        },
        'mdast-util-mdx-jsx:unexpected-self-closing-slash'
      );
    }
  }
  function exitMdxJsxTagClosingMarker() {
    const tag = this.getData('mdxJsxTag');
    tag.close = true;
  }
  function exitMdxJsxTagNamePrimary(token) {
    const tag = this.getData('mdxJsxTag');
    tag.name = this.sliceSerialize(token);
  }
  function exitMdxJsxTagNameMember(token) {
    const tag = this.getData('mdxJsxTag');
    tag.name += '.' + this.sliceSerialize(token);
  }
  function exitMdxJsxTagNameLocal(token) {
    const tag = this.getData('mdxJsxTag');
    tag.name += ':' + this.sliceSerialize(token);
  }
  function enterMdxJsxTagAttribute(token) {
    const tag = this.getData('mdxJsxTag');
    enterMdxJsxTagAnyAttribute.call(this, token);
    tag.attributes.push({
      type: 'mdxJsxAttribute',
      name: '',
      value: null
    });
  }
  function enterMdxJsxTagExpressionAttribute(token) {
    const tag = this.getData('mdxJsxTag');
    enterMdxJsxTagAnyAttribute.call(this, token);
    tag.attributes.push({
      type: 'mdxJsxExpressionAttribute',
      value: ''
    });
    this.buffer();
  }
  function exitMdxJsxTagExpressionAttribute(token) {
    const tag = this.getData('mdxJsxTag');
    const tail = tag.attributes[tag.attributes.length - 1];
    const estree = token.estree;
    tail.value = this.resume();
    if (estree) {
      tail.data = {
        estree
      };
    }
  }
  function exitMdxJsxTagAttributeNamePrimary(token) {
    const tag = this.getData('mdxJsxTag');
    const node = tag.attributes[tag.attributes.length - 1];
    node.name = this.sliceSerialize(token);
  }
  function exitMdxJsxTagAttributeNameLocal(token) {
    const tag = this.getData('mdxJsxTag');
    const node = tag.attributes[tag.attributes.length - 1];
    node.name += ':' + this.sliceSerialize(token);
  }
  function exitMdxJsxTagAttributeValueLiteral() {
    const tag = this.getData('mdxJsxTag');
    tag.attributes[tag.attributes.length - 1].value = parseEntities(this.resume(), {
      nonTerminated: false
    });
  }
  function exitMdxJsxTagAttributeValueExpression(token) {
    const tag = this.getData('mdxJsxTag');
    const tail = tag.attributes[tag.attributes.length - 1];
    const node = {
      type: 'mdxJsxAttributeValueExpression',
      value: this.resume()
    };
    const estree = token.estree;
    if (estree) {
      node.data = {
        estree
      };
    }
    tail.value = node;
  }
  function exitMdxJsxTagSelfClosingMarker() {
    const tag = this.getData('mdxJsxTag');
    tag.selfClosing = true;
  }
  function exitMdxJsxTag(token) {
    const tag = this.getData('mdxJsxTag');
    const stack = this.getData('mdxJsxTagStack');
    const tail = stack[stack.length - 1];
    if (tag.close && tail.name !== tag.name) {
      throw new VFileMessage(
        'Unexpected closing tag `' +
          serializeAbbreviatedTag(tag) +
          '`, expected corresponding closing tag for `' +
          serializeAbbreviatedTag(tail) +
          '` (' +
          stringifyPosition(tail) +
          ')',
        {
          start: token.start,
          end: token.end
        },
        'mdast-util-mdx-jsx:end-tag-mismatch'
      );
    }
    this.resume();
    if (tag.close) {
      stack.pop();
    } else {
      this.enter(
        {
          type: token.type === 'mdxJsxTextTag' ? 'mdxJsxTextElement' : 'mdxJsxFlowElement',
          name: tag.name,
          attributes: tag.attributes,
          children: []
        },
        token,
        onErrorRightIsTag
      );
    }
    if (tag.selfClosing || tag.close) {
      this.exit(token, onErrorLeftIsTag);
    } else {
      stack.push(tag);
    }
  }
  function onErrorRightIsTag(closing, open) {
    const tag = this.getData('mdxJsxTag');
    const place = closing ? ' before the end of `' + closing.type + '`' : '';
    const position = closing
      ? {
          start: closing.start,
          end: closing.end
        }
      : void 0;
    throw new VFileMessage(
      'Expected a closing tag for `' +
        serializeAbbreviatedTag(tag) +
        '` (' +
        stringifyPosition({
          start: open.start,
          end: open.end
        }) +
        ')' +
        place,
      position,
      'mdast-util-mdx-jsx:end-tag-mismatch'
    );
  }
  function onErrorLeftIsTag(a, b) {
    const tag = this.getData('mdxJsxTag');
    throw new VFileMessage(
      'Expected the closing tag `' +
        serializeAbbreviatedTag(tag) +
        '` either after the end of `' +
        b.type +
        '` (' +
        stringifyPosition(b.end) +
        ') or another opening tag after the start of `' +
        b.type +
        '` (' +
        stringifyPosition(b.start) +
        ')',
      {
        start: a.start,
        end: a.end
      },
      'mdast-util-mdx-jsx:end-tag-mismatch'
    );
  }
  function serializeAbbreviatedTag(tag) {
    return '<' + (tag.close ? '/' : '') + (tag.name || '') + '>';
  }
}
function mdxJsxToMarkdown(options = {}) {
  const { quote = '"', quoteSmart, tightSelfClosing, printWidth = Number.POSITIVE_INFINITY } = options;
  const alternative = quote === '"' ? "'" : '"';
  if (quote !== '"' && quote !== "'") {
    throw new Error(
      'Cannot serialize attribute values with `' + quote + '` for `options.quote`, expected `"`, or `\'`'
    );
  }
  mdxElement.peek = peekElement;
  return {
    handlers: {
      mdxJsxFlowElement: mdxElement,
      mdxJsxTextElement: mdxElement
    },
    unsafe: [
      {
        character: '<',
        inConstruct: ['phrasing']
      },
      {
        atBreak: true,
        character: '<'
      }
    ],
    fences: true,
    resourceLink: true
  };
  function mdxElement(node, _, context, safeOptions) {
    const tracker = track(safeOptions);
    const selfClosing = node.name && (!node.children || node.children.length === 0);
    const exit = context.enter(node.type);
    let index = -1;
    const serializedAttributes = [];
    let value = tracker.move('<' + (node.name || ''));
    if (node.attributes && node.attributes.length > 0) {
      if (!node.name) {
        throw new Error('Cannot serialize fragment w/ attributes');
      }
      while (++index < node.attributes.length) {
        const attribute = node.attributes[index];
        let result;
        if (attribute.type === 'mdxJsxExpressionAttribute') {
          result = '{' + (attribute.value || '') + '}';
        } else {
          if (!attribute.name) {
            throw new Error('Cannot serialize attribute w/o name');
          }
          const value2 = attribute.value;
          const left = attribute.name;
          let right = '';
          if (value2 === void 0 || value2 === null) {
          } else if (typeof value2 === 'object') {
            right = '{' + (value2.value || '') + '}';
          } else {
            const appliedQuote =
              quoteSmart && ccount(value2, quote) > ccount(value2, alternative) ? alternative : quote;
            right =
              appliedQuote +
              stringifyEntitiesLight(value2, {
                subset: [appliedQuote]
              }) +
              appliedQuote;
          }
          result = left + (right ? '=' : '') + right;
        }
        serializedAttributes.push(result);
      }
    }
    let attributesOnTheirOwnLine = false;
    const attributesOnOneLine = serializedAttributes.join(' ');
    if (
      node.type === 'mdxJsxFlowElement' &&
      (/\r?\n|\r/.test(attributesOnOneLine) ||
        tracker.current().now.column + attributesOnOneLine.length + (selfClosing ? (tightSelfClosing ? 2 : 3) : 1) >
          printWidth)
    ) {
      attributesOnTheirOwnLine = true;
    }
    if (attributesOnTheirOwnLine) {
      value += tracker.move('\n' + indentLines(serializedAttributes.join('\n'), map));
    } else if (attributesOnOneLine) {
      value += tracker.move(' ' + attributesOnOneLine);
    }
    if (attributesOnTheirOwnLine) {
      value += tracker.move('\n');
    }
    if (selfClosing) {
      value += tracker.move((tightSelfClosing || attributesOnTheirOwnLine ? '' : ' ') + '/');
    }
    value += tracker.move('>');
    if (node.children && node.children.length > 0) {
      if (node.type === 'mdxJsxFlowElement') {
        tracker.shift(2);
        value += tracker.move('\n');
        value += tracker.move(indentLines(containerFlow(node, context, tracker.current()), map));
        value += tracker.move('\n');
      } else {
        value += tracker.move(
          containerPhrasing(node, context, {
            ...tracker.current(),
            before: '<',
            after: '>'
          })
        );
      }
    }
    if (!selfClosing) {
      value += tracker.move('</' + (node.name || '') + '>');
    }
    exit();
    return value;
  }
  function map(line, _, blank) {
    return (blank ? '' : '  ') + line;
  }
  function peekElement() {
    return '<';
  }
}
export { mdxJsxFromMarkdown, mdxJsxToMarkdown };
