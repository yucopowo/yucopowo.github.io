/* esm.sh - esbuild bundle(parse5@6.0.1/lib/tree-adapters/default) es2022 development */
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

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/tree-adapters/default.js
var require_default = __commonJS({
  'esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/tree-adapters/default.js'(
    exports
  ) {
    'use strict';

    var { DOCUMENT_MODE } = __parse5_lib_common_html$;
    exports.createDocument = function() {
      return {
        nodeName: '#document',
        mode: DOCUMENT_MODE.NO_QUIRKS,
        childNodes: []
      };
    };
    exports.createDocumentFragment = function() {
      return {
        nodeName: '#document-fragment',
        childNodes: []
      };
    };
    exports.createElement = function(tagName, namespaceURI, attrs) {
      return {
        nodeName: tagName,
        tagName,
        attrs,
        namespaceURI,
        childNodes: [],
        parentNode: null
      };
    };
    exports.createCommentNode = function(data) {
      return {
        nodeName: '#comment',
        data,
        parentNode: null
      };
    };
    var createTextNode = function(value) {
      return {
        nodeName: '#text',
        value,
        parentNode: null
      };
    };
    var appendChild = (exports.appendChild = function(parentNode, newNode) {
      parentNode.childNodes.push(newNode);
      newNode.parentNode = parentNode;
    });
    var insertBefore = (exports.insertBefore = function(parentNode, newNode, referenceNode) {
      const insertionIdx = parentNode.childNodes.indexOf(referenceNode);
      parentNode.childNodes.splice(insertionIdx, 0, newNode);
      newNode.parentNode = parentNode;
    });
    exports.setTemplateContent = function(templateElement, contentElement) {
      templateElement.content = contentElement;
    };
    exports.getTemplateContent = function(templateElement) {
      return templateElement.content;
    };
    exports.setDocumentType = function(document, name, publicId, systemId) {
      let doctypeNode = null;
      for (let i = 0; i < document.childNodes.length; i++) {
        if (document.childNodes[i].nodeName === '#documentType') {
          doctypeNode = document.childNodes[i];
          break;
        }
      }
      if (doctypeNode) {
        doctypeNode.name = name;
        doctypeNode.publicId = publicId;
        doctypeNode.systemId = systemId;
      } else {
        appendChild(document, {
          nodeName: '#documentType',
          name,
          publicId,
          systemId
        });
      }
    };
    exports.setDocumentMode = function(document, mode) {
      document.mode = mode;
    };
    exports.getDocumentMode = function(document) {
      return document.mode;
    };
    exports.detachNode = function(node) {
      if (node.parentNode) {
        const idx = node.parentNode.childNodes.indexOf(node);
        node.parentNode.childNodes.splice(idx, 1);
        node.parentNode = null;
      }
    };
    exports.insertText = function(parentNode, text) {
      if (parentNode.childNodes.length) {
        const prevNode = parentNode.childNodes[parentNode.childNodes.length - 1];
        if (prevNode.nodeName === '#text') {
          prevNode.value += text;
          return;
        }
      }
      appendChild(parentNode, createTextNode(text));
    };
    exports.insertTextBefore = function(parentNode, text, referenceNode) {
      const prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode) - 1];
      if (prevNode && prevNode.nodeName === '#text') {
        prevNode.value += text;
      } else {
        insertBefore(parentNode, createTextNode(text), referenceNode);
      }
    };
    exports.adoptAttributes = function(recipient, attrs) {
      const recipientAttrsMap = [];
      for (let i = 0; i < recipient.attrs.length; i++) {
        recipientAttrsMap.push(recipient.attrs[i].name);
      }
      for (let j = 0; j < attrs.length; j++) {
        if (recipientAttrsMap.indexOf(attrs[j].name) === -1) {
          recipient.attrs.push(attrs[j]);
        }
      }
    };
    exports.getFirstChild = function(node) {
      return node.childNodes[0];
    };
    exports.getChildNodes = function(node) {
      return node.childNodes;
    };
    exports.getParentNode = function(node) {
      return node.parentNode;
    };
    exports.getAttrList = function(element) {
      return element.attrs;
    };
    exports.getTagName = function(element) {
      return element.tagName;
    };
    exports.getNamespaceURI = function(element) {
      return element.namespaceURI;
    };
    exports.getTextNodeContent = function(textNode) {
      return textNode.value;
    };
    exports.getCommentNodeContent = function(commentNode) {
      return commentNode.data;
    };
    exports.getDocumentTypeNodeName = function(doctypeNode) {
      return doctypeNode.name;
    };
    exports.getDocumentTypeNodePublicId = function(doctypeNode) {
      return doctypeNode.publicId;
    };
    exports.getDocumentTypeNodeSystemId = function(doctypeNode) {
      return doctypeNode.systemId;
    };
    exports.isTextNode = function(node) {
      return node.nodeName === '#text';
    };
    exports.isCommentNode = function(node) {
      return node.nodeName === '#comment';
    };
    exports.isDocumentTypeNode = function(node) {
      return node.nodeName === '#documentType';
    };
    exports.isElementNode = function(node) {
      return !!node.tagName;
    };
    exports.setNodeSourceCodeLocation = function(node, location) {
      node.sourceCodeLocation = location;
    };
    exports.getNodeSourceCodeLocation = function(node) {
      return node.sourceCodeLocation;
    };
    exports.updateNodeSourceCodeLocation = function(node, endLocation) {
      node.sourceCodeLocation = Object.assign(node.sourceCodeLocation, endLocation);
    };
  }
});

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/mod.js
var __module = __toESM(require_default());
var {
  createDocument,
  createDocumentFragment,
  createElement,
  createCommentNode,
  setTemplateContent,
  getTemplateContent,
  setDocumentType,
  setDocumentMode,
  getDocumentMode,
  detachNode,
  insertText,
  insertTextBefore,
  adoptAttributes,
  getFirstChild,
  getChildNodes,
  getParentNode,
  getAttrList,
  getTagName,
  getNamespaceURI,
  getTextNodeContent,
  getCommentNodeContent,
  getDocumentTypeNodeName,
  getDocumentTypeNodePublicId,
  getDocumentTypeNodeSystemId,
  isTextNode,
  isCommentNode,
  isDocumentTypeNode,
  isElementNode,
  setNodeSourceCodeLocation,
  getNodeSourceCodeLocation,
  updateNodeSourceCodeLocation
} = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export {
  adoptAttributes,
  createCommentNode,
  createDocument,
  createDocumentFragment,
  createElement,
  mod_default as default,
  detachNode,
  getAttrList,
  getChildNodes,
  getCommentNodeContent,
  getDocumentMode,
  getDocumentTypeNodeName,
  getDocumentTypeNodePublicId,
  getDocumentTypeNodeSystemId,
  getFirstChild,
  getNamespaceURI,
  getNodeSourceCodeLocation,
  getParentNode,
  getTagName,
  getTemplateContent,
  getTextNodeContent,
  insertText,
  insertTextBefore,
  isCommentNode,
  isDocumentTypeNode,
  isElementNode,
  isTextNode,
  setDocumentMode,
  setDocumentType,
  setNodeSourceCodeLocation,
  setTemplateContent,
  updateNodeSourceCodeLocation
};
