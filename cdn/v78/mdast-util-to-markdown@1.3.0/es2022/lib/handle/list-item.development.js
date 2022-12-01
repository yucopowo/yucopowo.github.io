/* esm.sh - esbuild bundle(mdast-util-to-markdown@1.3.0/lib/handle/list-item.js) es2022 development */
// esm-build-a0ffcf5ed398cc8f77d2021389934fa1c889ed0c-1d1579b0/node_modules/mdast-util-to-markdown/lib/util/check-bullet.js
function checkBullet(context) {
  const marker = context.options.bullet || '*';
  if (marker !== '*' && marker !== '+' && marker !== '-') {
    throw new Error('Cannot serialize items with `' + marker + '` for `options.bullet`, expected `*`, `+`, or `-`');
  }
  return marker;
}

// esm-build-a0ffcf5ed398cc8f77d2021389934fa1c889ed0c-1d1579b0/node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js
function checkListItemIndent(context) {
  const style = context.options.listItemIndent || 'tab';
  if (style === 1 || style === '1') {
    return 'one';
  }
  if (style !== 'tab' && style !== 'one' && style !== 'mixed') {
    throw new Error(
      'Cannot serialize items with `' + style + '` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`'
    );
  }
  return style;
}

// esm-build-a0ffcf5ed398cc8f77d2021389934fa1c889ed0c-1d1579b0/node_modules/mdast-util-to-markdown/lib/util/track.js
function track(options_) {
  const options = options_ || {};
  const now = options.now || {};
  let lineShift = options.lineShift || 0;
  let line = now.line || 1;
  let column = now.column || 1;
  return {
    move,
    current,
    shift
  };
  function current() {
    return {
      now: {
        line,
        column
      },
      lineShift
    };
  }
  function shift(value) {
    lineShift += value;
  }
  function move(value = '') {
    const chunks = value.split(/\r?\n|\r/g);
    const tail = chunks[chunks.length - 1];
    line += chunks.length - 1;
    column = chunks.length === 1 ? column + tail.length : 1 + tail.length + lineShift;
    return value;
  }
}

// esm-build-a0ffcf5ed398cc8f77d2021389934fa1c889ed0c-1d1579b0/node_modules/mdast-util-to-markdown/lib/util/container-flow.js
function containerFlow(parent, context, safeOptions) {
  const indexStack = context.indexStack;
  const children = parent.children || [];
  const tracker = track(safeOptions);
  const results = [];
  let index = -1;
  indexStack.push(-1);
  while (++index < children.length) {
    const child = children[index];
    indexStack[indexStack.length - 1] = index;
    results.push(
      tracker.move(
        context.handle(child, parent, context, {
          before: '\n',
          after: '\n',
          ...tracker.current()
        })
      )
    );
    if (child.type !== 'list') {
      context.bulletLastUsed = void 0;
    }
    if (index < children.length - 1) {
      results.push(tracker.move(between(child, children[index + 1])));
    }
  }
  indexStack.pop();
  return results.join('');
  function between(left, right) {
    let index2 = context.join.length;
    while (index2--) {
      const result = context.join[index2](left, right, parent, context);
      if (result === true || result === 1) {
        break;
      }
      if (typeof result === 'number') {
        return '\n'.repeat(1 + result);
      }
      if (result === false) {
        return '\n\n<!---->\n\n';
      }
    }
    return '\n\n';
  }
}

// esm-build-a0ffcf5ed398cc8f77d2021389934fa1c889ed0c-1d1579b0/node_modules/mdast-util-to-markdown/lib/util/indent-lines.js
var eol = /\r?\n|\r/g;
function indentLines(value, map) {
  const result = [];
  let start = 0;
  let line = 0;
  let match;
  while ((match = eol.exec(value))) {
    one(value.slice(start, match.index));
    result.push(match[0]);
    start = match.index + match[0].length;
    line++;
  }
  one(value.slice(start));
  return result.join('');
  function one(value2) {
    result.push(map(value2, line, !value2));
  }
}

// esm-build-a0ffcf5ed398cc8f77d2021389934fa1c889ed0c-1d1579b0/node_modules/mdast-util-to-markdown/lib/handle/list-item.js
function listItem(node, parent, context, safeOptions) {
  const listItemIndent = checkListItemIndent(context);
  let bullet = context.bulletCurrent || checkBullet(context);
  if (parent && parent.type === 'list' && parent.ordered) {
    bullet =
      (typeof parent.start === 'number' && parent.start > -1 ? parent.start : 1) +
      (context.options.incrementListMarker === false ? 0 : parent.children.indexOf(node)) +
      bullet;
  }
  let size = bullet.length + 1;
  if (
    listItemIndent === 'tab' ||
    (listItemIndent === 'mixed' && ((parent && parent.type === 'list' && parent.spread) || node.spread))
  ) {
    size = Math.ceil(size / 4) * 4;
  }
  const tracker = track(safeOptions);
  tracker.move(bullet + ' '.repeat(size - bullet.length));
  tracker.shift(size);
  const exit = context.enter('listItem');
  const value = indentLines(containerFlow(node, context, tracker.current()), map);
  exit();
  return value;
  function map(line, index, blank) {
    if (index) {
      return (blank ? '' : ' '.repeat(size)) + line;
    }
    return (blank ? bullet : bullet + ' '.repeat(size - bullet.length)) + line;
  }
}
export { listItem };
