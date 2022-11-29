/* esm.sh - esbuild bundle(micromark-util-events-to-acorn@1.2.0) es2022 development */
// esm-build-761ec8949815d1f00239d3cf5815cda9460c74cb-b2e639c7/node_modules/micromark-util-events-to-acorn/dev/index.js
import { ok as assert } from '/cdn/v99/uvu@0.5.6/es2022/assert.development.js';
import { visit } from '/cdn/v99/estree-util-visit@1.2.0/es2022/estree-util-visit.development.js';
import { VFileMessage } from '/cdn/v99/vfile-message@3.1.3/es2022/vfile-message.development.js';
import { location } from '/cdn/v99/vfile-location@4.0.1/es2022/vfile-location.development.js';
function eventsToAcorn(events, options) {
  const { prefix = '', suffix = '' } = options;
  const acornOptions = Object.assign({}, options.acornOptions);
  const comments = [];
  const tokens = [];
  const onComment = acornOptions.onComment;
  const onToken = acornOptions.onToken;
  const acornConfig = Object.assign({}, acornOptions, {
    onComment: comments,
    onToken: onToken ? tokens : void 0,
    preserveParens: true
  });
  const chunks = [];
  const lines = {};
  let index = -1;
  let swallow = false;
  let estree;
  let exception;
  let startLine;
  if (options.start) {
    startLine = options.start.line;
    lines[startLine] = options.start;
  }
  while (++index < events.length) {
    const [kind, token, context] = events[index];
    if (kind === 'exit') {
      chunks.push(context.sliceSerialize(token));
      setPoint(token.start);
      setPoint(token.end);
    }
  }
  const source = chunks.join('');
  const value = prefix + source + suffix;
  const isEmptyExpression = options.expression && empty(source);
  const place = location(source);
  if (isEmptyExpression && !options.allowEmpty) {
    throw new VFileMessage(
      'Unexpected empty expression',
      parseOffsetToUnistPoint(0),
      'micromark-extension-mdx-expression:unexpected-empty-expression'
    );
  }
  try {
    estree =
      options.expression && !isEmptyExpression
        ? options.acorn.parseExpressionAt(value, 0, acornConfig)
        : options.acorn.parse(value, acornConfig);
  } catch (error_) {
    const error = error_;
    const point = parseOffsetToUnistPoint(error.pos);
    error.message = String(error.message).replace(/ \(\d+:\d+\)$/, '');
    error.pos = point.offset;
    error.loc = {
      line: point.line,
      column: point.column - 1
    };
    exception = error;
    swallow = error.raisedAt >= prefix.length + source.length || error.message === 'Unterminated comment';
  }
  if (estree && options.expression && !isEmptyExpression) {
    if (empty(value.slice(estree.end, value.length - suffix.length))) {
      estree = {
        type: 'Program',
        start: 0,
        end: prefix.length + source.length,
        body: [
          {
            type: 'ExpressionStatement',
            expression: estree,
            start: 0,
            end: prefix.length + source.length
          }
        ],
        sourceType: 'module',
        comments: []
      };
    } else {
      const point = parseOffsetToUnistPoint(estree.end);
      exception = new Error('Unexpected content after expression');
      exception.pos = point.offset;
      exception.loc = {
        line: point.line,
        column: point.column - 1
      };
      estree = void 0;
    }
  }
  if (estree) {
    estree.comments = comments;
    visit(estree, (esnode, field, index2, parents) => {
      let context = parents[parents.length - 1];
      let prop = field;
      if (esnode.type === 'ParenthesizedExpression' && context && prop) {
        if (typeof index2 === 'number') {
          context = context[prop];
          prop = index2;
        }
        context[prop] = esnode.expression;
      }
      fixPosition(esnode);
    });
    if (Array.isArray(onComment)) {
      onComment.push(...comments);
    } else if (typeof onComment === 'function') {
      for (const comment of comments) {
        assert(comment.loc, 'expected `loc` on comment');
        onComment(
          comment.type === 'Block',
          comment.value,
          comment.start,
          comment.end,
          comment.loc.start,
          comment.loc.end
        );
      }
    }
    for (const token of tokens) {
      fixPosition(token);
      if (Array.isArray(onToken)) {
        onToken.push(token);
      } else {
        assert(typeof onToken === 'function', 'expected function');
        onToken(token);
      }
    }
  }
  return {
    estree,
    error: exception,
    swallow
  };
  function fixPosition(nodeOrToken) {
    assert('start' in nodeOrToken, 'expected `start` in node or token from acorn');
    assert('end' in nodeOrToken, 'expected `end` in node or token from acorn');
    const pointStart = parseOffsetToUnistPoint(nodeOrToken.start);
    const pointEnd = parseOffsetToUnistPoint(nodeOrToken.end);
    nodeOrToken.start = pointStart.offset;
    nodeOrToken.end = pointEnd.offset;
    nodeOrToken.loc = {
      start: {
        line: pointStart.line,
        column: pointStart.column - 1,
        offset: pointStart.offset
      },
      end: {
        line: pointEnd.line,
        column: pointEnd.column - 1,
        offset: pointEnd.offset
      }
    };
    nodeOrToken.range = [nodeOrToken.start, nodeOrToken.end];
  }
  function parseOffsetToUnistPoint(acornOffset) {
    let sourceOffset = acornOffset - prefix.length;
    if (sourceOffset < 0) {
      sourceOffset = 0;
    } else if (sourceOffset > source.length) {
      sourceOffset = source.length;
    }
    const pointInSource = place.toPoint(sourceOffset);
    assert(typeof startLine === 'number', 'expected `startLine` to be found or given ');
    const line = startLine + (pointInSource.line - 1);
    assert(line in lines, 'expected line to be defined');
    const column = lines[line].column + (pointInSource.column - 1);
    const offset = lines[line].offset + (pointInSource.column - 1);
    return {
      line,
      column,
      offset
    };
  }
  function setPoint(point) {
    if (!startLine || point.line < startLine) {
      startLine = point.line;
    }
    if (!(point.line in lines) || lines[point.line].offset > point.offset) {
      lines[point.line] = point;
    }
  }
}
function empty(value) {
  return /^\s*$/.test(value.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\r\n]*(\r\n|\n|\r)/g, ''));
}
export { eventsToAcorn };
