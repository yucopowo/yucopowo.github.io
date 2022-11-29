/* esm.sh - esbuild bundle(mdast-util-mdxjs-esm@1.3.0) es2022 development */
// esm-build-ce13becf3084d52283b2f928818b6243772239c4-5501cb28/node_modules/mdast-util-mdxjs-esm/index.js
var mdxjsEsmFromMarkdown = {
  enter: {
    mdxjsEsm: enterMdxjsEsm
  },
  exit: {
    mdxjsEsm: exitMdxjsEsm,
    mdxjsEsmData: exitMdxjsEsmData
  }
};
var mdxjsEsmToMarkdown = {
  handlers: {
    mdxjsEsm: handleMdxjsEsm
  }
};
function enterMdxjsEsm(token) {
  this.enter(
    {
      type: 'mdxjsEsm',
      value: ''
    },
    token
  );
  this.buffer();
}
function exitMdxjsEsm(token) {
  const value = this.resume();
  const node = this.exit(token);
  const estree = token.estree;
  node.value = value;
  if (estree) {
    node.data = {
      estree
    };
  }
}
function exitMdxjsEsmData(token) {
  this.config.enter.data.call(this, token);
  this.config.exit.data.call(this, token);
}
function handleMdxjsEsm(node) {
  return node.value || '';
}
export { mdxjsEsmFromMarkdown, mdxjsEsmToMarkdown };
