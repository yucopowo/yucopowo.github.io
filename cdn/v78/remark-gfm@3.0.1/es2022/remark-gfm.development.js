/* esm.sh - esbuild bundle(remark-gfm@3.0.1) es2022 development */
// esm-build-95ef663f884d04e2ee3947fc9f27a486a4255d2c-c75492a3/node_modules/remark-gfm/index.js
import { gfm } from '/cdn/v78/micromark-extension-gfm@2.0.1/es2022/micromark-extension-gfm.development.js';
import { gfmFromMarkdown, gfmToMarkdown } from '/cdn/v78/mdast-util-gfm@2.0.1/es2022/mdast-util-gfm.development.js';
function remarkGfm(options = {}) {
  const data = this.data();
  add('micromarkExtensions', gfm(options));
  add('fromMarkdownExtensions', gfmFromMarkdown());
  add('toMarkdownExtensions', gfmToMarkdown(options));
  function add(field, value) {
    const list = data[field] ? data[field] : (data[field] = []);
    list.push(value);
  }
}
export { remarkGfm as default };
