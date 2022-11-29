/* esm.sh - esbuild bundle(mdast-util-mdx@2.0.0) es2022 development */
// esm-build-5fb762d43650a3e5e910171ba1ad9e3621ba3411-b0536380/node_modules/mdast-util-mdx/index.js
import {
  mdxExpressionFromMarkdown,
  mdxExpressionToMarkdown
} from '/cdn/v99/mdast-util-mdx-expression@1.3.1/es2022/mdast-util-mdx-expression.development.js';
import {
  mdxJsxFromMarkdown,
  mdxJsxToMarkdown
} from '/cdn/v99/mdast-util-mdx-jsx@2.1.0/es2022/mdast-util-mdx-jsx.development.js';
import {
  mdxjsEsmFromMarkdown,
  mdxjsEsmToMarkdown
} from '/cdn/v99/mdast-util-mdxjs-esm@1.3.0/es2022/mdast-util-mdxjs-esm.development.js';
function mdxFromMarkdown() {
  return [mdxExpressionFromMarkdown, mdxJsxFromMarkdown(), mdxjsEsmFromMarkdown];
}
function mdxToMarkdown(options) {
  return {
    extensions: [mdxExpressionToMarkdown, mdxJsxToMarkdown(options), mdxjsEsmToMarkdown]
  };
}
export { mdxFromMarkdown, mdxToMarkdown };
