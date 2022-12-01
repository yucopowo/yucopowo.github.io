/* esm.sh - esbuild bundle(mdast-util-gfm-strikethrough@1.0.1) es2022 development */
// esm-build-ae41fbb581a1af927c4854b7b19b46e84d8419bc-cb8a0a6d/node_modules/mdast-util-gfm-strikethrough/index.js
import { containerPhrasing } from '/cdn/v78/mdast-util-to-markdown@1.3.0/es2022/lib/util/container-phrasing.development.js';
import { track } from '/cdn/v78/mdast-util-to-markdown@1.3.0/es2022/lib/util/track.development.js';
var gfmStrikethroughFromMarkdown = {
  canContainEols: ['delete'],
  enter: {
    strikethrough: enterStrikethrough
  },
  exit: {
    strikethrough: exitStrikethrough
  }
};
var gfmStrikethroughToMarkdown = {
  unsafe: [
    {
      character: '~',
      inConstruct: 'phrasing'
    }
  ],
  handlers: {
    delete: handleDelete
  }
};
handleDelete.peek = peekDelete;
function enterStrikethrough(token) {
  this.enter(
    {
      type: 'delete',
      children: []
    },
    token
  );
}
function exitStrikethrough(token) {
  this.exit(token);
}
function handleDelete(node, _, context, safeOptions) {
  const tracker = track(safeOptions);
  const exit = context.enter('emphasis');
  let value = tracker.move('~~');
  value += containerPhrasing(node, context, {
    ...tracker.current(),
    before: value,
    after: '~'
  });
  value += tracker.move('~~');
  exit();
  return value;
}
function peekDelete() {
  return '~';
}
export { gfmStrikethroughFromMarkdown, gfmStrikethroughToMarkdown };
