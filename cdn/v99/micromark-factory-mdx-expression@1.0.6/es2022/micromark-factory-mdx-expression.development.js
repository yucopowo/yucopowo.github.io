/* esm.sh - esbuild bundle(micromark-factory-mdx-expression@1.0.6) es2022 development */
// esm-build-d21ba21d484be49461bbbca3c03ed827dc7d5e7c-78934291/node_modules/micromark-factory-mdx-expression/dev/index.js
import { ok as assert } from '/cdn/v99/uvu@0.5.6/es2022/assert.development.js';
import { markdownLineEnding } from '/cdn/v99/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { types } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/types.development.js';
import { constants } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/constants.development.js';
import { factorySpace } from '/cdn/v99/micromark-factory-space@1.0.0/es2022/micromark-factory-space.development.js';
import { positionFromEstree } from '/cdn/v99/unist-util-position-from-estree@1.1.1/es2022/unist-util-position-from-estree.development.js';
import { VFileMessage } from '/cdn/v99/vfile-message@3.1.3/es2022/vfile-message.development.js';
import { eventsToAcorn } from '/cdn/v99/micromark-util-events-to-acorn@1.2.0/es2022/micromark-util-events-to-acorn.development.js';
function factoryMdxExpression(
  effects,
  ok,
  type,
  markerType,
  chunkType,
  acorn,
  acornOptions,
  addResult,
  spread,
  allowEmpty,
  allowLazy,
  startColumn
) {
  const self = this;
  const eventStart = this.events.length + 3;
  const tail = this.events[this.events.length - 1];
  const initialPrefix = tail && tail[1].type === types.linePrefix ? tail[2].sliceSerialize(tail[1], true).length : 0;
  const prefixExpressionIndent = initialPrefix ? initialPrefix + 1 : 0;
  let balance = 1;
  let startPosition;
  let lastCrash;
  return start;
  function start(code) {
    assert(code === codes.leftCurlyBrace, 'expected `{`');
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    startPosition = self.now();
    return atBreak;
  }
  function atBreak(code) {
    if (code === codes.eof) {
      throw lastCrash ||
        new VFileMessage(
          'Unexpected end of file in expression, expected a corresponding closing brace for `{`',
          self.now(),
          'micromark-extension-mdx-expression:unexpected-eof'
        );
    }
    if (code === codes.rightCurlyBrace) {
      return atClosingBrace(code);
    }
    if (markdownLineEnding(code)) {
      effects.enter(types.lineEnding);
      effects.consume(code);
      effects.exit(types.lineEnding);
      const prefixTagIndent = startColumn ? startColumn + constants.tabSize - self.now().column : 0;
      const indent = Math.max(prefixExpressionIndent, prefixTagIndent);
      return indent ? factorySpace(effects, atBreak, types.linePrefix, indent) : atBreak;
    }
    const now = self.now();
    if (now.line !== startPosition.line && !allowLazy && self.parser.lazy[now.line]) {
      throw new VFileMessage(
        'Unexpected end of file in expression, expected a corresponding closing brace for `{`',
        self.now(),
        'micromark-extension-mdx-expression:unexpected-eof'
      );
    }
    effects.enter(chunkType);
    return inside(code);
  }
  function inside(code) {
    if (code === codes.eof || code === codes.rightCurlyBrace || markdownLineEnding(code)) {
      effects.exit(chunkType);
      return atBreak(code);
    }
    if (code === codes.leftCurlyBrace && !acorn) {
      effects.consume(code);
      balance++;
      return inside;
    }
    effects.consume(code);
    return inside;
  }
  function atClosingBrace(code) {
    balance--;
    if (!acorn) {
      if (balance) {
        effects.enter(chunkType);
        effects.consume(code);
        return inside;
      }
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok;
    }
    const result = eventsToAcorn(self.events.slice(eventStart), {
      acorn,
      acornOptions,
      start: startPosition,
      expression: true,
      allowEmpty,
      prefix: spread ? '({' : '',
      suffix: spread ? '})' : ''
    });
    const estree = result.estree;
    if (spread && estree) {
      assert(estree.type === 'Program', 'expected program');
      const head = estree.body[0];
      assert(head, 'expected body');
      if (head.type !== 'ExpressionStatement' || head.expression.type !== 'ObjectExpression') {
        throw new VFileMessage(
          'Unexpected `' + head.type + '` in code: expected an object spread (`{...spread}`)',
          positionFromEstree(head).start,
          'micromark-extension-mdx-expression:non-spread'
        );
      } else if (head.expression.properties[1]) {
        throw new VFileMessage(
          'Unexpected extra content in spread: only a single spread is supported',
          positionFromEstree(head.expression.properties[1]).start,
          'micromark-extension-mdx-expression:spread-extra'
        );
      } else if (head.expression.properties[0] && head.expression.properties[0].type !== 'SpreadElement') {
        throw new VFileMessage(
          'Unexpected `' + head.expression.properties[0].type + '` in code: only spread elements are supported',
          positionFromEstree(head.expression.properties[0]).start,
          'micromark-extension-mdx-expression:non-spread'
        );
      }
    }
    if (result.error) {
      lastCrash = new VFileMessage(
        'Could not parse expression with acorn: ' + result.error.message,
        {
          line: result.error.loc.line,
          column: result.error.loc.column + 1,
          offset: result.error.pos
        },
        'micromark-extension-mdx-expression:acorn'
      );
      if (code !== codes.eof && result.swallow) {
        effects.enter(chunkType);
        effects.consume(code);
        return inside;
      }
      throw lastCrash;
    }
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    Object.assign(
      effects.exit(type),
      addResult
        ? {
            estree
          }
        : void 0
    );
    return ok;
  }
}
export { factoryMdxExpression };