/* esm.sh - esbuild bundle(hast-util-to-parse5@6.0.0) es2022 development */
import __property_information_find$ from '/cdn/v99/property-information@5.6.0/es2022/find.development.js';
import __property_information_svg$ from '/cdn/v99/property-information@5.6.0/es2022/svg.development.js';
import __property_information_html$ from '/cdn/v99/property-information@5.6.0/es2022/html.development.js';
import __xtend$ from '/cdn/v99/xtend@4.0.2/es2022/xtend.development.js';
import __zwitch$ from '/cdn/v99/zwitch@1.0.5/es2022/zwitch.development.js';
import __web_namespaces$ from '/cdn/v99/web-namespaces@1.1.4/es2022/web-namespaces.development.js';
import __hast_to_hyperscript$ from '/cdn/v99/hast-to-hyperscript@9.0.1/es2022/hast-to-hyperscript.development.js';
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

// esm-build-3376300d84ec675c9ab2b98c203ef32d39290302-258df341/node_modules/hast-util-to-parse5/index.js
var require_hast_util_to_parse5 = __commonJS({
  'esm-build-3376300d84ec675c9ab2b98c203ef32d39290302-258df341/node_modules/hast-util-to-parse5/index.js'(
    exports,
    module
  ) {
    'use strict';

    var xtend = __xtend$;
    var html = __property_information_html$;
    var svg = __property_information_svg$;
    var find = __property_information_find$;
    var toH = __hast_to_hyperscript$;
    var ns = __web_namespaces$;
    var zwitch = __zwitch$;
    module.exports = transform;
    var ignoredSpaces = ['svg', 'html'];
    var one = zwitch('type');
    one.handlers.root = root;
    one.handlers.element = element;
    one.handlers.text = text;
    one.handlers.comment = comment;
    one.handlers.doctype = doctype;
    function transform(tree, space) {
      return one(tree, space === 'svg' ? svg : html);
    }
    function root(node, schema) {
      var data = node.data || {};
      var mode = data.quirksMode ? 'quirks' : 'no-quirks';
      return patch(
        node,
        {
          nodeName: '#document',
          mode
        },
        schema
      );
    }
    function fragment(node, schema) {
      return patch(
        node,
        {
          nodeName: '#document-fragment'
        },
        schema
      );
    }
    function doctype(node, schema) {
      return patch(
        node,
        {
          nodeName: '#documentType',
          name: node.name,
          publicId: node.public || '',
          systemId: node.system || ''
        },
        schema
      );
    }
    function text(node, schema) {
      return patch(
        node,
        {
          nodeName: '#text',
          value: node.value
        },
        schema
      );
    }
    function comment(node, schema) {
      return patch(
        node,
        {
          nodeName: '#comment',
          data: node.value
        },
        schema
      );
    }
    function element(node, schema) {
      var space = schema.space;
      var shallow = xtend(node, {
        children: []
      });
      return toH(h, shallow, {
        space
      });
      function h(name, attrs) {
        var values = [];
        var p5;
        var attr;
        var value;
        var key;
        var info;
        var pos;
        for (key in attrs) {
          info = find(schema, key);
          attr = attrs[key];
          if (attr === false || (info.boolean && !attr)) {
            continue;
          }
          value = {
            name: key,
            value: attr === true ? '' : String(attr)
          };
          if (info.space && ignoredSpaces.indexOf(info.space) === -1) {
            pos = key.indexOf(':');
            if (pos === -1) {
              value.prefix = '';
            } else {
              value.name = key.slice(pos + 1);
              value.prefix = key.slice(0, pos);
            }
            value.namespace = ns[info.space];
          }
          values.push(value);
        }
        p5 = patch(
          node,
          {
            nodeName: name,
            tagName: name,
            attrs: values
          },
          schema
        );
        if (name === 'template') {
          p5.content = fragment(shallow.content, schema);
        }
        return p5;
      }
    }
    function patch(node, p5, parentSchema) {
      var schema = parentSchema;
      var position = node.position;
      var children = node.children;
      var childNodes = [];
      var length = children ? children.length : 0;
      var index = -1;
      var child;
      if (node.type === 'element') {
        if (schema.space === 'html' && node.tagName === 'svg') {
          schema = svg;
        }
        p5.namespaceURI = ns[schema.space];
      }
      while (++index < length) {
        child = one(children[index], schema);
        child.parentNode = p5;
        childNodes[index] = child;
      }
      if (node.type === 'element' || node.type === 'root') {
        p5.childNodes = childNodes;
      }
      if (position && position.start && position.end) {
        p5.sourceCodeLocation = {
          startLine: position.start.line,
          startCol: position.start.column,
          startOffset: position.start.offset,
          endLine: position.end.line,
          endCol: position.end.column,
          endOffset: position.end.offset
        };
      }
      return p5;
    }
  }
});

// esm-build-3376300d84ec675c9ab2b98c203ef32d39290302-258df341/mod.js
var __module = __toESM(require_hast_util_to_parse5());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
