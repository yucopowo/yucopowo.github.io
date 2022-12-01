/* esm.sh - esbuild bundle(mdast-util-gfm@2.0.1) es2022 development */
// esm-build-30d871459b5fdaaf6b32cf11196b7b24e359e1b7-4790ce31/node_modules/mdast-util-gfm/lib/index.js
import {
  gfmAutolinkLiteralFromMarkdown,
  gfmAutolinkLiteralToMarkdown
} from '/cdn/v78/mdast-util-gfm-autolink-literal@1.0.2/es2022/mdast-util-gfm-autolink-literal.development.js';
import {
  gfmFootnoteFromMarkdown,
  gfmFootnoteToMarkdown
} from '/cdn/v78/mdast-util-gfm-footnote@1.0.1/es2022/mdast-util-gfm-footnote.development.js';
import {
  gfmStrikethroughFromMarkdown,
  gfmStrikethroughToMarkdown
} from '/cdn/v78/mdast-util-gfm-strikethrough@1.0.1/es2022/mdast-util-gfm-strikethrough.development.js';
import {
  gfmTableFromMarkdown,
  gfmTableToMarkdown
} from '/cdn/v78/mdast-util-gfm-table@1.0.4/es2022/mdast-util-gfm-table.development.js';
import {
  gfmTaskListItemFromMarkdown,
  gfmTaskListItemToMarkdown
} from '/cdn/v78/mdast-util-gfm-task-list-item@1.0.1/es2022/mdast-util-gfm-task-list-item.development.js';
function gfmFromMarkdown() {
  return [
    gfmAutolinkLiteralFromMarkdown,
    gfmFootnoteFromMarkdown(),
    gfmStrikethroughFromMarkdown,
    gfmTableFromMarkdown,
    gfmTaskListItemFromMarkdown
  ];
}
function gfmToMarkdown(options) {
  return {
    extensions: [
      gfmAutolinkLiteralToMarkdown,
      gfmFootnoteToMarkdown(),
      gfmStrikethroughToMarkdown,
      gfmTableToMarkdown(options),
      gfmTaskListItemToMarkdown
    ]
  };
}
export { gfmFromMarkdown, gfmToMarkdown };
