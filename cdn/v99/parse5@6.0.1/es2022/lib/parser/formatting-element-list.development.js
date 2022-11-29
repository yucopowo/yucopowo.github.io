/* esm.sh - esbuild bundle(parse5@6.0.1/lib/parser/formatting-element-list) es2022 development */
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) =>
  function __require() {
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

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/parser/formatting-element-list.js
var require_formatting_element_list = __commonJS({
  'esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/parser/formatting-element-list.js'(
    exports,
    module
  ) {
    'use strict';

    var NOAH_ARK_CAPACITY = 3;
    var FormattingElementList = class {
      constructor(treeAdapter) {
        this.length = 0;
        this.entries = [];
        this.treeAdapter = treeAdapter;
        this.bookmark = null;
      }
      _getNoahArkConditionCandidates(newElement) {
        const candidates = [];
        if (this.length >= NOAH_ARK_CAPACITY) {
          const neAttrsLength = this.treeAdapter.getAttrList(newElement).length;
          const neTagName = this.treeAdapter.getTagName(newElement);
          const neNamespaceURI = this.treeAdapter.getNamespaceURI(newElement);
          for (let i = this.length - 1; i >= 0; i--) {
            const entry = this.entries[i];
            if (entry.type === FormattingElementList.MARKER_ENTRY) {
              break;
            }
            const element = entry.element;
            const elementAttrs = this.treeAdapter.getAttrList(element);
            const isCandidate =
              this.treeAdapter.getTagName(element) === neTagName &&
              this.treeAdapter.getNamespaceURI(element) === neNamespaceURI &&
              elementAttrs.length === neAttrsLength;
            if (isCandidate) {
              candidates.push({
                idx: i,
                attrs: elementAttrs
              });
            }
          }
        }
        return candidates.length < NOAH_ARK_CAPACITY ? [] : candidates;
      }
      _ensureNoahArkCondition(newElement) {
        const candidates = this._getNoahArkConditionCandidates(newElement);
        let cLength = candidates.length;
        if (cLength) {
          const neAttrs = this.treeAdapter.getAttrList(newElement);
          const neAttrsLength = neAttrs.length;
          const neAttrsMap = /* @__PURE__ */ Object.create(null);
          for (let i = 0; i < neAttrsLength; i++) {
            const neAttr = neAttrs[i];
            neAttrsMap[neAttr.name] = neAttr.value;
          }
          for (let i = 0; i < neAttrsLength; i++) {
            for (let j = 0; j < cLength; j++) {
              const cAttr = candidates[j].attrs[i];
              if (neAttrsMap[cAttr.name] !== cAttr.value) {
                candidates.splice(j, 1);
                cLength--;
              }
              if (candidates.length < NOAH_ARK_CAPACITY) {
                return;
              }
            }
          }
          for (let i = cLength - 1; i >= NOAH_ARK_CAPACITY - 1; i--) {
            this.entries.splice(candidates[i].idx, 1);
            this.length--;
          }
        }
      }
      insertMarker() {
        this.entries.push({
          type: FormattingElementList.MARKER_ENTRY
        });
        this.length++;
      }
      pushElement(element, token) {
        this._ensureNoahArkCondition(element);
        this.entries.push({
          type: FormattingElementList.ELEMENT_ENTRY,
          element,
          token
        });
        this.length++;
      }
      insertElementAfterBookmark(element, token) {
        let bookmarkIdx = this.length - 1;
        for (; bookmarkIdx >= 0; bookmarkIdx--) {
          if (this.entries[bookmarkIdx] === this.bookmark) {
            break;
          }
        }
        this.entries.splice(bookmarkIdx + 1, 0, {
          type: FormattingElementList.ELEMENT_ENTRY,
          element,
          token
        });
        this.length++;
      }
      removeEntry(entry) {
        for (let i = this.length - 1; i >= 0; i--) {
          if (this.entries[i] === entry) {
            this.entries.splice(i, 1);
            this.length--;
            break;
          }
        }
      }
      clearToLastMarker() {
        while (this.length) {
          const entry = this.entries.pop();
          this.length--;
          if (entry.type === FormattingElementList.MARKER_ENTRY) {
            break;
          }
        }
      }
      getElementEntryInScopeWithTagName(tagName) {
        for (let i = this.length - 1; i >= 0; i--) {
          const entry = this.entries[i];
          if (entry.type === FormattingElementList.MARKER_ENTRY) {
            return null;
          }
          if (this.treeAdapter.getTagName(entry.element) === tagName) {
            return entry;
          }
        }
        return null;
      }
      getElementEntry(element) {
        for (let i = this.length - 1; i >= 0; i--) {
          const entry = this.entries[i];
          if (entry.type === FormattingElementList.ELEMENT_ENTRY && entry.element === element) {
            return entry;
          }
        }
        return null;
      }
    };
    FormattingElementList.MARKER_ENTRY = 'MARKER_ENTRY';
    FormattingElementList.ELEMENT_ENTRY = 'ELEMENT_ENTRY';
    module.exports = FormattingElementList;
  }
});

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/mod.js
var __module = __toESM(require_formatting_element_list());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
