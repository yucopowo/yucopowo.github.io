/* esm.sh - esbuild bundle(micromark-extension-gfm-tagfilter@1.0.1) es2022 development */
// esm-build-fa83ace8b42dfb8cb7ea310e25f8f3d85f1bc96a-b4763508/node_modules/micromark-extension-gfm-tagfilter/index.js
var reFlow = /<(\/?)(iframe|noembed|noframes|plaintext|script|style|title|textarea|xmp)(?=[\t\n\f\r />])/gi;
var reText = new RegExp('^' + reFlow.source, 'i');
var gfmTagfilterHtml = {
  exit: {
    htmlFlowData(token) {
      exitHtmlData.call(this, token, reFlow);
    },
    htmlTextData(token) {
      exitHtmlData.call(this, token, reText);
    }
  }
};
function exitHtmlData(token, filter) {
  let value = this.sliceSerialize(token);
  if (this.options.allowDangerousHtml) {
    value = value.replace(filter, '&lt;$1$2');
  }
  this.raw(this.encode(value));
}
export { gfmTagfilterHtml };
