/* esm.sh - esbuild bundle(micromark-extension-mdx-expression@1.0.3) es2022 development */
// esm-build-ec6d6df69aab494a8fb5cf79cb54e33beb900ef8-166659d5/node_modules/micromark-extension-mdx-expression/dev/lib/syntax.js
import { ok as assert } from '/cdn/v99/uvu@0.5.6/es2022/assert.development.js';
import { factoryMdxExpression } from '/cdn/v99/micromark-factory-mdx-expression@1.0.6/es2022/micromark-factory-mdx-expression.development.js';
import { factorySpace } from '/cdn/v99/micromark-factory-space@1.0.0/es2022/micromark-factory-space.development.js';
import { markdownLineEnding } from '/cdn/v99/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { types } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/types.development.js';
function mdxExpression(options = {}) {
  const addResult = options.addResult;
  const acorn = options.acorn;
  const spread = options.spread;
  let allowEmpty = options.allowEmpty;
  let acornOptions;
  if (allowEmpty === null || allowEmpty === void 0) {
    allowEmpty = true;
  }
  if (acorn) {
    if (!acorn.parseExpressionAt) {
      throw new Error('Expected a proper `acorn` instance passed in as `options.acorn`');
    }
    acornOptions = Object.assign(
      {
        ecmaVersion: 2020,
        sourceType: 'module'
      },
      options.acornOptions
    );
  } else if (options.acornOptions || options.addResult) {
    throw new Error('Expected an `acorn` instance passed in as `options.acorn`');
  }
  return {
    flow: {
      [codes.leftCurlyBrace]: {
        tokenize: tokenizeFlowExpression,
        concrete: true
      }
    },
    text: {
      [codes.leftCurlyBrace]: {
        tokenize: tokenizeTextExpression
      }
    }
  };
  function tokenizeFlowExpression(effects, ok, nok) {
    const self = this;
    return start;
    function start(code) {
      assert(code === codes.leftCurlyBrace, 'expected `{`');
      return factoryMdxExpression.call(
        self,
        effects,
        factorySpace(effects, after, types.whitespace),
        'mdxFlowExpression',
        'mdxFlowExpressionMarker',
        'mdxFlowExpressionChunk',
        acorn,
        acornOptions,
        addResult,
        spread,
        allowEmpty
      )(code);
    }
    function after(code) {
      return code === codes.eof || markdownLineEnding(code) ? ok(code) : nok(code);
    }
  }
  function tokenizeTextExpression(effects, ok) {
    const self = this;
    return start;
    function start(code) {
      assert(code === codes.leftCurlyBrace, 'expected `{`');
      return factoryMdxExpression.call(
        self,
        effects,
        ok,
        'mdxTextExpression',
        'mdxTextExpressionMarker',
        'mdxTextExpressionChunk',
        acorn,
        acornOptions,
        addResult,
        spread,
        allowEmpty,
        true
      )(code);
    }
  }
}
export { mdxExpression };