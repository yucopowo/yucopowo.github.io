/* esm.sh - esbuild bundle(micromark-extension-gfm@2.0.1) es2022 development */
// esm-build-acac5b7e3c9d01786023e01111ced0aef95e19d3-35861720/node_modules/micromark-extension-gfm/index.js
import {
  combineExtensions,
  combineHtmlExtensions
} from '/cdn/v78/micromark-util-combine-extensions@1.0.0/es2022/micromark-util-combine-extensions.development.js';
import {
  gfmAutolinkLiteral,
  gfmAutolinkLiteralHtml
} from '/cdn/v78/micromark-extension-gfm-autolink-literal@1.0.3/es2022/micromark-extension-gfm-autolink-literal.development.js';
import {
  gfmFootnote,
  gfmFootnoteHtml
} from '/cdn/v78/micromark-extension-gfm-footnote@1.0.4/es2022/micromark-extension-gfm-footnote.development.js';
import {
  gfmStrikethrough,
  gfmStrikethroughHtml
} from '/cdn/v78/micromark-extension-gfm-strikethrough@1.0.4/es2022/micromark-extension-gfm-strikethrough.development.js';
import {
  gfmTable,
  gfmTableHtml
} from '/cdn/v78/micromark-extension-gfm-table@1.0.5/es2022/micromark-extension-gfm-table.development.js';
import { gfmTagfilterHtml } from '/cdn/v78/micromark-extension-gfm-tagfilter@1.0.1/es2022/micromark-extension-gfm-tagfilter.development.js';
import {
  gfmTaskListItem,
  gfmTaskListItemHtml
} from '/cdn/v78/micromark-extension-gfm-task-list-item@1.0.3/es2022/micromark-extension-gfm-task-list-item.development.js';
function gfm(options) {
  return combineExtensions([gfmAutolinkLiteral, gfmFootnote(), gfmStrikethrough(options), gfmTable, gfmTaskListItem]);
}
function gfmHtml(options) {
  return combineHtmlExtensions([
    gfmAutolinkLiteralHtml,
    gfmFootnoteHtml(options),
    gfmStrikethroughHtml,
    gfmTableHtml,
    gfmTagfilterHtml,
    gfmTaskListItemHtml
  ]);
}
export { gfm, gfmHtml };
