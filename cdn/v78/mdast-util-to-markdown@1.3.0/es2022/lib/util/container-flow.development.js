/* esm.sh - esbuild bundle(mdast-util-to-markdown@1.3.0/lib/util/container-flow.js) es2022 development */
// esm-build-d95d641981b3502078a95269aa2b0d20df5fc858-bcb8eb7d/node_modules/mdast-util-to-markdown/lib/util/track.js
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

// esm-build-d95d641981b3502078a95269aa2b0d20df5fc858-bcb8eb7d/node_modules/mdast-util-to-markdown/lib/util/container-flow.js
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
export { containerFlow };
