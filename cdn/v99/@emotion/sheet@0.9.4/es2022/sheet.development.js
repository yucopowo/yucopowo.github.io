/* esm.sh - esbuild bundle(@emotion/sheet@0.9.4) es2022 development */
// esm-build-04c4c66e59f7cbaf265a1f62a56e3aad5ce51743-484eb9b1/node_modules/@emotion/sheet/dist/sheet.esm.js
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}
function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);
  if (options.nonce !== void 0) {
    tag.setAttribute('nonce', options.nonce);
  }
  tag.appendChild(document.createTextNode(''));
  return tag;
}
var StyleSheet = /* @__PURE__ */ (function() {
  function StyleSheet2(options) {
    this.isSpeedy = options.speedy === void 0 ? false : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      var _tag = createStyleElement(this);
      var before;
      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }
      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64;
        sheet.insertRule(rule, isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (true) {
          console.warn('There was a problem inserting the following rule: "' + rule + '"', e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet2;
})();
export { StyleSheet };
