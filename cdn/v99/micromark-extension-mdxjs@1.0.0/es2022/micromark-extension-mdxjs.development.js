/* esm.sh - esbuild bundle(micromark-extension-mdxjs@1.0.0) es2022 development */
// esm-build-5954e2a5fdac17d6ef987a8358ded2a97c668c83-c9f297fa/node_modules/micromark-extension-mdxjs/index.js
import { Parser } from '/cdn/v99/acorn@8.8.1/es2022/acorn.development.js';
import acornJsx from '/cdn/v99/acorn-jsx@5.3.2/es2022/acorn-jsx.development.js';
import { combineExtensions } from '/cdn/v99/micromark-util-combine-extensions@1.0.0/es2022/micromark-util-combine-extensions.development.js';
import { mdxExpression } from '/cdn/v99/micromark-extension-mdx-expression@1.0.3/es2022/micromark-extension-mdx-expression.development.js';
import { mdxJsx } from '/cdn/v99/micromark-extension-mdx-jsx@1.0.3/es2022/micromark-extension-mdx-jsx.development.js';
import { mdxMd } from '/cdn/v99/micromark-extension-mdx-md@1.0.0/es2022/micromark-extension-mdx-md.development.js';
import { mdxjsEsm } from '/cdn/v99/micromark-extension-mdxjs-esm@1.0.3/es2022/micromark-extension-mdxjs-esm.development.js';
function mdxjs(options) {
  const settings = Object.assign(
    {
      acorn: Parser.extend(acornJsx()),
      acornOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
      },
      addResult: true
    },
    options
  );
  return combineExtensions([mdxjsEsm(settings), mdxExpression(settings), mdxJsx(settings), mdxMd]);
}
export { mdxjs };
