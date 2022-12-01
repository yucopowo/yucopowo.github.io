/* esm.sh - esbuild bundle(mdast-util-gfm-task-list-item@1.0.1) es2022 development */
// esm-build-8780d61c1372bf9336fc76f4a9c19fb36e6e2014-f6bf113f/node_modules/mdast-util-gfm-task-list-item/index.js
import { listItem } from '/cdn/v78/mdast-util-to-markdown@1.3.0/es2022/lib/handle/list-item.development.js';
import { track } from '/cdn/v78/mdast-util-to-markdown@1.3.0/es2022/lib/util/track.development.js';
var gfmTaskListItemFromMarkdown = {
  exit: {
    taskListCheckValueChecked: exitCheck,
    taskListCheckValueUnchecked: exitCheck,
    paragraph: exitParagraphWithTaskListItem
  }
};
var gfmTaskListItemToMarkdown = {
  unsafe: [
    {
      atBreak: true,
      character: '-',
      after: '[:|-]'
    }
  ],
  handlers: {
    listItem: listItemWithTaskListItem
  }
};
function exitCheck(token) {
  const node = this.stack[this.stack.length - 2];
  node.checked = token.type === 'taskListCheckValueChecked';
}
function exitParagraphWithTaskListItem(token) {
  const parent = this.stack[this.stack.length - 2];
  const node = this.stack[this.stack.length - 1];
  const siblings = parent.children;
  const head = node.children[0];
  let index = -1;
  let firstParaghraph;
  if (parent && parent.type === 'listItem' && typeof parent.checked === 'boolean' && head && head.type === 'text') {
    while (++index < siblings.length) {
      const sibling = siblings[index];
      if (sibling.type === 'paragraph') {
        firstParaghraph = sibling;
        break;
      }
    }
    if (firstParaghraph === node) {
      head.value = head.value.slice(1);
      if (head.value.length === 0) {
        node.children.shift();
      } else if (node.position && head.position && typeof head.position.start.offset === 'number') {
        head.position.start.column++;
        head.position.start.offset++;
        node.position.start = Object.assign({}, head.position.start);
      }
    }
  }
  this.exit(token);
}
function listItemWithTaskListItem(node, parent, context, safeOptions) {
  const head = node.children[0];
  const checkable = typeof node.checked === 'boolean' && head && head.type === 'paragraph';
  const checkbox = '[' + (node.checked ? 'x' : ' ') + '] ';
  const tracker = track(safeOptions);
  if (checkable) {
    tracker.move(checkbox);
  }
  let value = listItem(node, parent, context, {
    ...safeOptions,
    ...tracker.current()
  });
  if (checkable) {
    value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check);
  }
  return value;
  function check($0) {
    return $0 + checkbox;
  }
}
export { gfmTaskListItemFromMarkdown, gfmTaskListItemToMarkdown };
