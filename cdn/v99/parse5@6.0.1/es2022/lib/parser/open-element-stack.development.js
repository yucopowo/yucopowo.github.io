/* esm.sh - esbuild bundle(parse5@6.0.1/lib/parser/open-element-stack) es2022 development */
import __parse5_lib_common_html$ from '/cdn/v99/parse5@6.0.1/es2022/lib/common/html.development.js';
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ (x =>
  typeof require !== 'undefined'
    ? require
    : typeof Proxy !== 'undefined'
    ? new Proxy(x, {
        get: (a, b) => (typeof require !== 'undefined' ? require : a)[b]
      })
    : x)(function(x) {
  if (typeof require !== 'undefined') return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) =>
  function __require2() {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])(
          (mod = {
            exports: {}
          }).exports,
          mod
        ),
      mod.exports
    );
  };
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, 'default', {
          value: mod,
          enumerable: true
        })
      : target,
    mod
  )
);

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/parser/open-element-stack.js
var require_open_element_stack = __commonJS({
  'esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/parser/open-element-stack.js'(
    exports,
    module
  ) {
    'use strict';

    var HTML = __parse5_lib_common_html$;
    var $ = HTML.TAG_NAMES;
    var NS = HTML.NAMESPACES;
    function isImpliedEndTagRequired(tn) {
      switch (tn.length) {
        case 1:
          return tn === $.P;
        case 2:
          return tn === $.RB || tn === $.RP || tn === $.RT || tn === $.DD || tn === $.DT || tn === $.LI;
        case 3:
          return tn === $.RTC;
        case 6:
          return tn === $.OPTION;
        case 8:
          return tn === $.OPTGROUP;
      }
      return false;
    }
    function isImpliedEndTagRequiredThoroughly(tn) {
      switch (tn.length) {
        case 1:
          return tn === $.P;
        case 2:
          return (
            tn === $.RB ||
            tn === $.RP ||
            tn === $.RT ||
            tn === $.DD ||
            tn === $.DT ||
            tn === $.LI ||
            tn === $.TD ||
            tn === $.TH ||
            tn === $.TR
          );
        case 3:
          return tn === $.RTC;
        case 5:
          return tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD;
        case 6:
          return tn === $.OPTION;
        case 7:
          return tn === $.CAPTION;
        case 8:
          return tn === $.OPTGROUP || tn === $.COLGROUP;
      }
      return false;
    }
    function isScopingElement(tn, ns) {
      switch (tn.length) {
        case 2:
          if (tn === $.TD || tn === $.TH) {
            return ns === NS.HTML;
          } else if (tn === $.MI || tn === $.MO || tn === $.MN || tn === $.MS) {
            return ns === NS.MATHML;
          }
          break;
        case 4:
          if (tn === $.HTML) {
            return ns === NS.HTML;
          } else if (tn === $.DESC) {
            return ns === NS.SVG;
          }
          break;
        case 5:
          if (tn === $.TABLE) {
            return ns === NS.HTML;
          } else if (tn === $.MTEXT) {
            return ns === NS.MATHML;
          } else if (tn === $.TITLE) {
            return ns === NS.SVG;
          }
          break;
        case 6:
          return (tn === $.APPLET || tn === $.OBJECT) && ns === NS.HTML;
        case 7:
          return (tn === $.CAPTION || tn === $.MARQUEE) && ns === NS.HTML;
        case 8:
          return tn === $.TEMPLATE && ns === NS.HTML;
        case 13:
          return tn === $.FOREIGN_OBJECT && ns === NS.SVG;
        case 14:
          return tn === $.ANNOTATION_XML && ns === NS.MATHML;
      }
      return false;
    }
    var OpenElementStack = class {
      constructor(document, treeAdapter) {
        this.stackTop = -1;
        this.items = [];
        this.current = document;
        this.currentTagName = null;
        this.currentTmplContent = null;
        this.tmplCount = 0;
        this.treeAdapter = treeAdapter;
      }
      _indexOf(element) {
        let idx = -1;
        for (let i = this.stackTop; i >= 0; i--) {
          if (this.items[i] === element) {
            idx = i;
            break;
          }
        }
        return idx;
      }
      _isInTemplate() {
        return this.currentTagName === $.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === NS.HTML;
      }
      _updateCurrentElement() {
        this.current = this.items[this.stackTop];
        this.currentTagName = this.current && this.treeAdapter.getTagName(this.current);
        this.currentTmplContent = this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : null;
      }
      push(element) {
        this.items[++this.stackTop] = element;
        this._updateCurrentElement();
        if (this._isInTemplate()) {
          this.tmplCount++;
        }
      }
      pop() {
        this.stackTop--;
        if (this.tmplCount > 0 && this._isInTemplate()) {
          this.tmplCount--;
        }
        this._updateCurrentElement();
      }
      replace(oldElement, newElement) {
        const idx = this._indexOf(oldElement);
        this.items[idx] = newElement;
        if (idx === this.stackTop) {
          this._updateCurrentElement();
        }
      }
      insertAfter(referenceElement, newElement) {
        const insertionIdx = this._indexOf(referenceElement) + 1;
        this.items.splice(insertionIdx, 0, newElement);
        if (insertionIdx === ++this.stackTop) {
          this._updateCurrentElement();
        }
      }
      popUntilTagNamePopped(tagName) {
        while (this.stackTop > -1) {
          const tn = this.currentTagName;
          const ns = this.treeAdapter.getNamespaceURI(this.current);
          this.pop();
          if (tn === tagName && ns === NS.HTML) {
            break;
          }
        }
      }
      popUntilElementPopped(element) {
        while (this.stackTop > -1) {
          const poppedElement = this.current;
          this.pop();
          if (poppedElement === element) {
            break;
          }
        }
      }
      popUntilNumberedHeaderPopped() {
        while (this.stackTop > -1) {
          const tn = this.currentTagName;
          const ns = this.treeAdapter.getNamespaceURI(this.current);
          this.pop();
          if (
            tn === $.H1 ||
            tn === $.H2 ||
            tn === $.H3 ||
            tn === $.H4 ||
            tn === $.H5 ||
            (tn === $.H6 && ns === NS.HTML)
          ) {
            break;
          }
        }
      }
      popUntilTableCellPopped() {
        while (this.stackTop > -1) {
          const tn = this.currentTagName;
          const ns = this.treeAdapter.getNamespaceURI(this.current);
          this.pop();
          if (tn === $.TD || (tn === $.TH && ns === NS.HTML)) {
            break;
          }
        }
      }
      popAllUpToHtmlElement() {
        this.stackTop = 0;
        this._updateCurrentElement();
      }
      clearBackToTableContext() {
        while (
          (this.currentTagName !== $.TABLE && this.currentTagName !== $.TEMPLATE && this.currentTagName !== $.HTML) ||
          this.treeAdapter.getNamespaceURI(this.current) !== NS.HTML
        ) {
          this.pop();
        }
      }
      clearBackToTableBodyContext() {
        while (
          (this.currentTagName !== $.TBODY &&
            this.currentTagName !== $.TFOOT &&
            this.currentTagName !== $.THEAD &&
            this.currentTagName !== $.TEMPLATE &&
            this.currentTagName !== $.HTML) ||
          this.treeAdapter.getNamespaceURI(this.current) !== NS.HTML
        ) {
          this.pop();
        }
      }
      clearBackToTableRowContext() {
        while (
          (this.currentTagName !== $.TR && this.currentTagName !== $.TEMPLATE && this.currentTagName !== $.HTML) ||
          this.treeAdapter.getNamespaceURI(this.current) !== NS.HTML
        ) {
          this.pop();
        }
      }
      remove(element) {
        for (let i = this.stackTop; i >= 0; i--) {
          if (this.items[i] === element) {
            this.items.splice(i, 1);
            this.stackTop--;
            this._updateCurrentElement();
            break;
          }
        }
      }
      tryPeekProperlyNestedBodyElement() {
        const element = this.items[1];
        return element && this.treeAdapter.getTagName(element) === $.BODY ? element : null;
      }
      contains(element) {
        return this._indexOf(element) > -1;
      }
      getCommonAncestor(element) {
        let elementIdx = this._indexOf(element);
        return --elementIdx >= 0 ? this.items[elementIdx] : null;
      }
      isRootHtmlElementCurrent() {
        return this.stackTop === 0 && this.currentTagName === $.HTML;
      }
      hasInScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.treeAdapter.getTagName(this.items[i]);
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (tn === tagName && ns === NS.HTML) {
            return true;
          }
          if (isScopingElement(tn, ns)) {
            return false;
          }
        }
        return true;
      }
      hasNumberedHeaderInScope() {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.treeAdapter.getTagName(this.items[i]);
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (
            (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6) &&
            ns === NS.HTML
          ) {
            return true;
          }
          if (isScopingElement(tn, ns)) {
            return false;
          }
        }
        return true;
      }
      hasInListItemScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.treeAdapter.getTagName(this.items[i]);
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (tn === tagName && ns === NS.HTML) {
            return true;
          }
          if (((tn === $.UL || tn === $.OL) && ns === NS.HTML) || isScopingElement(tn, ns)) {
            return false;
          }
        }
        return true;
      }
      hasInButtonScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.treeAdapter.getTagName(this.items[i]);
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (tn === tagName && ns === NS.HTML) {
            return true;
          }
          if ((tn === $.BUTTON && ns === NS.HTML) || isScopingElement(tn, ns)) {
            return false;
          }
        }
        return true;
      }
      hasInTableScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.treeAdapter.getTagName(this.items[i]);
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (ns !== NS.HTML) {
            continue;
          }
          if (tn === tagName) {
            return true;
          }
          if (tn === $.TABLE || tn === $.TEMPLATE || tn === $.HTML) {
            return false;
          }
        }
        return true;
      }
      hasTableBodyContextInTableScope() {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.treeAdapter.getTagName(this.items[i]);
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (ns !== NS.HTML) {
            continue;
          }
          if (tn === $.TBODY || tn === $.THEAD || tn === $.TFOOT) {
            return true;
          }
          if (tn === $.TABLE || tn === $.HTML) {
            return false;
          }
        }
        return true;
      }
      hasInSelectScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.treeAdapter.getTagName(this.items[i]);
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (ns !== NS.HTML) {
            continue;
          }
          if (tn === tagName) {
            return true;
          }
          if (tn !== $.OPTION && tn !== $.OPTGROUP) {
            return false;
          }
        }
        return true;
      }
      generateImpliedEndTags() {
        while (isImpliedEndTagRequired(this.currentTagName)) {
          this.pop();
        }
      }
      generateImpliedEndTagsThoroughly() {
        while (isImpliedEndTagRequiredThoroughly(this.currentTagName)) {
          this.pop();
        }
      }
      generateImpliedEndTagsWithExclusion(exclusionTagName) {
        while (isImpliedEndTagRequired(this.currentTagName) && this.currentTagName !== exclusionTagName) {
          this.pop();
        }
      }
    };
    module.exports = OpenElementStack;
  }
});

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/mod.js
var __module = __toESM(require_open_element_stack());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
