/* esm.sh - esbuild bundle(mdast-util-to-markdown@1.3.0/lib/util/container-flow.js) es2022 development */
// esm-build-533c05cc7b983d3f70d5ba5b6a9eb0dfebed657d-0b0f295c/node_modules/mdast-util-to-markdown/lib/util/container-flow.js
import { track } from '/cdn/v99/mdast-util-to-markdown@1.3.0/es2022/lib/util/track.development.js';
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