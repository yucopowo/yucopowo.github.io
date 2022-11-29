/* esm.sh - esbuild bundle(mdast-util-mdx-expression@1.3.1) es2022 development */
// esm-build-7e99e56179ce9d778a687f71f2796d4891f30424-9a8cacd3/node_modules/mdast-util-mdx-expression/index.js
var mdxExpressionFromMarkdown = {
  enter: {
    mdxFlowExpression: enterMdxFlowExpression,
    mdxTextExpression: enterMdxTextExpression
  },
  exit: {
    mdxFlowExpression: exitMdxExpression,
    mdxFlowExpressionChunk: exitMdxExpressionData,
    mdxTextExpression: exitMdxExpression,
    mdxTextExpressionChunk: exitMdxExpressionData
  }
};
var mdxExpressionToMarkdown = {
  handlers: {
    mdxFlowExpression: handleMdxExpression,
    mdxTextExpression: handleMdxExpression
  },
  unsafe: [
    {
      character: '{',
      inConstruct: ['phrasing']
    },
    {
      atBreak: true,
      character: '{'
    }
  ]
};
function enterMdxFlowExpression(token) {
  this.enter(
    {
      type: 'mdxFlowExpression',
      value: ''
    },
    token
  );
  this.buffer();
}
function enterMdxTextExpression(token) {
  this.enter(
    {
      type: 'mdxTextExpression',
      value: ''
    },
    token
  );
  this.buffer();
}
function exitMdxExpression(token) {
  const value = this.resume();
  const estree = token.estree;
  const node = this.exit(token);
  node.value = value;
  if (estree) {
    node.data = {
      estree
    };
  }
}
function exitMdxExpressionData(token) {
  this.config.enter.data.call(this, token);
  this.config.exit.data.call(this, token);
}
function handleMdxExpression(node) {
  const value = node.value || '';
  return '{' + value + '}';
}
export { mdxExpressionFromMarkdown, mdxExpressionToMarkdown };