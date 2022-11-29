/* esm.sh - esbuild bundle(remark-mdx@2.1.5) es2022 development */
// esm-build-78b4a53efb7760042a093a5c28e89ebdabbade60-8fe0a069/node_modules/remark-mdx/index.js
import { mdxjs } from '/cdn/v99/micromark-extension-mdxjs@1.0.0/es2022/micromark-extension-mdxjs.development.js';
import { mdxFromMarkdown, mdxToMarkdown } from '/cdn/v99/mdast-util-mdx@2.0.0/es2022/mdast-util-mdx.development.js';
function remarkMdx(options = {}) {
  const data = this.data();
  add('micromarkExtensions', mdxjs(options));
  add('fromMarkdownExtensions', mdxFromMarkdown());
  add('toMarkdownExtensions', mdxToMarkdown(options));
  function add(field, value) {
    const list = data[field] ? data[field] : (data[field] = []);
    list.push(value);
  }
}
export { remarkMdx as default };
