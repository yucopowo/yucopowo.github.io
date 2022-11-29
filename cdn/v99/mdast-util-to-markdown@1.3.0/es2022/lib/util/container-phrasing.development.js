/* esm.sh - esbuild bundle(mdast-util-to-markdown@1.3.0/lib/util/container-phrasing.js) es2022 development */
// esm-build-5eeaac8132a360648c140de4236f8c05b11acfaf-d5fd2f18/node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js
import { track } from '/cdn/v99/mdast-util-to-markdown@1.3.0/es2022/lib/util/track.development.js';
function containerPhrasing(parent, context, safeOptions) {
  const indexStack = context.indexStack;
  const children = parent.children || [];
  const results = [];
  let index = -1;
  let before = safeOptions.before;
  indexStack.push(-1);
  let tracker = track(safeOptions);
  while (++index < children.length) {
    const child = children[index];
    let after;
    indexStack[indexStack.length - 1] = index;
    if (index + 1 < children.length) {
      let handle = context.handle.handlers[children[index + 1].type];
      if (handle && handle.peek) handle = handle.peek;
      after = handle
        ? handle(children[index + 1], parent, context, {
            before: '',
            after: '',
            ...tracker.current()
          }).charAt(0)
        : '';
    } else {
      after = safeOptions.after;
    }
    if (results.length > 0 && (before === '\r' || before === '\n') && child.type === 'html') {
      results[results.length - 1] = results[results.length - 1].replace(/(\r?\n|\r)$/, ' ');
      before = ' ';
      tracker = track(safeOptions);
      tracker.move(results.join(''));
    }
    results.push(
      tracker.move(
        context.handle(child, parent, context, {
          ...tracker.current(),
          before,
          after
        })
      )
    );
    before = results[results.length - 1].slice(-1);
  }
  indexStack.pop();
  return results.join('');
}
export { containerPhrasing };